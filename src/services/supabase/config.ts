export const supabaseConfig = {
  supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL ?? "",
  supabaseAnonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "",
  roles: {
    defaultRole: "user",
    pathRoles: {
      "/admin": ["admin"],
    },
  },
  routes: {
    login: "/auth",
    authCallback: "/auth/callback",
    onboarding: "/onboarding",
  },
  profile: {
    profileUrl: "/api/profile",
  },
};
