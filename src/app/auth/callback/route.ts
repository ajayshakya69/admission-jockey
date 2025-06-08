import { NextRequest, NextResponse } from "next/server";

import { SupabaseAuthClient } from "@/services/supabase/supabaseClient";
import { supabaseConfig } from "@/services/supabase/config";

export async function GET(request: NextRequest) {
  console.log("Auth Callback Route Hit");
  const { searchParams, origin } = new URL(request.url);

  const supabaseClient = new SupabaseAuthClient(supabaseConfig, { request });

  const code = searchParams.get("code");
  const url = new URL(request.url);
  // if "next" is in param, use it as the redirect URL
  let next = searchParams.get("next") ?? "/";
  if (!next.startsWith("/")) {
    // if "next" is not a relative URL, use the default
    next = "/";
  }
  try {
    if (code) {
      const supabase = await supabaseClient.createServer();
      const { data, error } = await supabase.auth.exchangeCodeForSession(code);
      console.log("Exchange Code for Session Data:", data);
      if (!error) {
        const forwardedHost = request.headers.get("x-forwarded-host"); // original origin before load balancer
        const isLocalEnv = process.env.NODE_ENV === "development";
        if (isLocalEnv) {
          // we can be sure that there is no load balancer in between, so no need to watch for X-Forwarded-Host
          return NextResponse.redirect(`${origin}${next}`);
        } else if (forwardedHost) {
          return NextResponse.redirect(`https://${forwardedHost}${next}`);
        } else {
          return NextResponse.redirect(`${origin}${next}`);
        }
      }
    }

    return NextResponse.redirect(`${url.origin}${next}`);
  } catch (error) {
    console.log(error);
    return NextResponse.redirect(`${origin}/auth/auth-code-error`);
  }

  // return the user to an error page with instructions
}
