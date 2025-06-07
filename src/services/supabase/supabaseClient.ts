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

  createServer(): SupabaseClient {
    return createServerClient(
      this.config.supabaseUrl,
      this.config.supabaseAnonKey,
      {
        cookies: {
          getAll: () => {
            const cookieStore = this.request
              ? this.request.cookies.getAll()
              : Object.entries(
                  nookies.get(
                    this.ctx ?? {
                      req: this.request,
                      res: this.response,
                    }
                  )
                ).map(([name, value]) => ({
                  name,
                  value,
                }));
            return cookieStore;
          },
          setAll: (cookiesToSet: CookieData[]) => {
            try {
              if (this.ctx) {
                cookiesToSet.forEach(({ name, value, options }) =>
                  setCookie(this.ctx, name, value, options)
                );
                return;
              }

              cookiesToSet.forEach(({ name, value, options }) => {
                nookies.set(this.ctx, name, value, options);
              });

              if (this.request) {
                const newResponse = NextResponse.next({
                  request: this.request,
                });

                cookiesToSet.forEach(({ name, value, options }) =>
                  newResponse.cookies.set(name, value, options)
                );

                this.response = newResponse;
              }
            } catch {
              // Ignore errors in Server Components
            }
          },
        },
        cookieOptions: {
          path: this.config?.cookies?.path || "/",
          name: this.config?.cookies?.name || "auth-token",
          domain: this.config?.cookies?.domain,
          maxAge: this.config?.cookies?.maxAge,
          secure:
            this.config?.cookies?.secure ??
            process.env.NODE_ENV === "production",
        },
      }
    );
  }
  /**
   * Direct access to the Supabase client
   */
  get client(): SupabaseClient {
    return this.SupabaseClient;
  }
}
