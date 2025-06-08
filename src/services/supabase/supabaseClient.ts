import { SupabaseClient } from "@supabase/supabase-js";
import { AuthConfig } from "./types";
import {
  CookieOptions,
  createBrowserClient,
  createServerClient,
} from "@supabase/ssr";
import nookies, { parseCookies, setCookie } from "nookies";
import { NextRequest, NextResponse } from "next/server";

interface CookieData {
  name: string;
  value: string;
  options?: CookieOptions;
}

export class SupabaseAuthClient {
  private SupabaseClient!: SupabaseClient;
  private config: AuthConfig;
  // private isServer: boolean;
  private request?: NextRequest;
  private response?: NextResponse;

  private ctx?: any;
  constructor(
    config: AuthConfig,
    options?: {
      // isServer?: boolean;
      request?: NextRequest;
      response?: NextResponse;
      existingClient?: SupabaseClient;
      ctx?: any; // For nookies context
    }
  ) {
    this.config = config;
  }

  async createServer() {
    const { cookies } = await import("next/headers");
    const cookieStore = await cookies();

    return createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll() {
            return cookieStore.getAll();
          },
          setAll(cookiesToSet) {
            try {
              cookiesToSet.forEach(({ name, value, options }) =>
                cookieStore.set(name, value, options)
              );
            } catch {
              // The `setAll` method was called from a Server Component.
              // This can be ignored if you have middleware refreshing
              // user sessions.
            }
          },
        },
      }
    );
  }

  getBrowserclient() {
    return (this.SupabaseClient = createBrowserClient(
      this.config.supabaseUrl,
      this.config.supabaseAnonKey,
      {
        cookies: {
          getAll() {
            const cookies = parseCookies();
            return Object.entries(cookies).map(([name, value]) => ({
              name,
              value,
            }));
          },
          setAll(cookiesToSet) {
            cookiesToSet.forEach(({ name, value, options }) => {
              setCookie(null, name, value, options); // for example, using 'nookies'
            });
          },
        },
      }
    ));
  }

  /**
   * Direct access to the Supabase client
   */
  get client(): SupabaseClient {
    return this.SupabaseClient;
  }
}
