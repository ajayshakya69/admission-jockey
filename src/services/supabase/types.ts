

import type React from "react";
import type { Session, SupabaseClient, User } from "@supabase/supabase-js";

export type SupabaseConfigType={
    supabaseurl:string,
    supabaseAnonKey:string
}

export type AuthConfig = {
	/**
	 * Supabase URL from your project settings
	 */
	supabaseUrl: string;

	/**
	 * Supabase anon key from your project settings
	 */
	supabaseAnonKey: string;

	/**
	 * Cookie configuration
	 */
	cookies?: {
		/**
		 * Name of the auth cookie
		 * @default 'auth-token'
		 */
		name?: string;

		/**
		 * Path for the cookie
		 * @default '/'
		 */
		path?: string;

		/**
		 * Domain for the cookie
		 */
		domain?: string;

		/**
		 * Max age for the cookie in seconds
		 */
		maxAge?: number;

		/**
		 * Whether the cookie should be secure
		 * @default process.env.NODE_ENV === 'production'
		 */
		secure?: boolean;
	};

	/**
	 * Authentication routes configuration
	 */
	routes?: {
		/**
		 * Login page path
		 * @default '/login'
		 */
		login?: string;

		/**
		 * Auth callback path
		 * @default '/auth/callback'
		 */
		authCallback?: string;

		/**
		 * Default redirect after login
		 * @default '/'
		 */
		defaultRedirect?: string;

		/**
		 * Onboarding path for new users
		 * @default '/onboarding'
		 */
		onboarding?: string;
	};

	/**
	 * Role-based access configuration
	 */
	roles: {
		/**
		 * Map of paths to required roles
		 * Example: { '/admin': ['admin'], '/dashboard': ['user', 'admin'] }
		 */
		pathRoles?: Record<string, string[]>;

		/**
		 * Default role for new users
		 * @default 'user'
		 */
		defaultRole?: string;
	};

	/**
	 * User profile configuration
	 */
	profile: {
		/**
		 * URL to fetch user profile data
		 */
		profileUrl?: string;

		/**
		 * Whether to fetch profile on auth state change
		 * @default true
		 */
		fetchOnAuth?: boolean;
	};
};

export type AuthSession = Session & {
	profile?: any;
	role?: string;
};

export type AuthUser = User & {
	role?: string;
	profile?: any;
	isDraft?: boolean;
};

export type AuthContextType = {
	session?: AuthSession;
	user?: AuthUser;
	supabase: SupabaseClient<any, "public", any>;
	refreshSession: () => Promise<string | void>;
	refetchProfile: () => Promise<any | void>;
	isLoadingSession: boolean;
	logout: () => Promise<void>;
	isAuthorized: (requiredRoles?: string | string[]) => boolean;
};

export type AuthProviderProps = {
	children: React.ReactNode;
	config: AuthConfig;
	profileFetcher?: (accessToken: string, url?: string) => Promise<any>;
	onSessionChange?: (session: AuthSession | undefined) => void;
};

export type UseAuthOptions = {
	/**
	 * Whether authentication is required for the current route
	 * @default false
	 */
	required?: boolean;

	/**
	 * Where to redirect if authentication fails
	 */
	redirect?: string;

	/**
	 * Required role(s) for the current route
	 */
	role?: string | string[];

	/**
	 * Whether to redirect automatically if auth fails
	 * @default true
	 */
	autoRedirect?: boolean;
};

export type AuthRuleFunction = (
	path: string,
	user: AuthUser | null,
	config: AuthConfig,
) => { allowed: boolean; redirectTo?: string };
