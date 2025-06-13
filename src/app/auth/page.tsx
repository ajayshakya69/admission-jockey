"use client";
import { Card, CardContent } from "@/components/ui/card";
// import StyledGrid from "../(components)/grid";
// import ImageGrid from "../(components)/grid";
import SlicedImageGrid from "../(components)/grid";
import { useEffect, useState, useTransition } from "react";
import OTPPage from "./register/partials/otp";
import { Button } from "@/components/ui/button";
import { Loader, Refrigerator } from "lucide-react";
import { useSupabase } from "@/services/supabase/supabase.hook";
import { useRouter, useSearchParams } from "next/navigation";

export default function LoginPage() {
  const [isOptSent, setIsOptSent] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [otp, setOtp] = useState<string | null>("");
  const [ispending, startTransition] = useTransition();
  // const [ispending, startSubmitTransition] = useTransition();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const { supabase, refreshSession } = useSupabase();

  const router = useRouter();

  const searchParams = useSearchParams();

  const redirectTo = searchParams.get("redirectTo");
  const initMessage = searchParams.get("initMessage");

  function SignUPHandler() {
    startTransition(async () => {
      try {
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              display_name: name,
            },
          },
        });

        if (error) {
          console.error(error.message);
        } else {
          setIsOptSent(true);
          console.log({ data });
        }
      } catch (error) {
        console.error(error);
      }
    });
  }
  function LoginHandler() {
    startTransition(async () => {
      try {
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) {
          console.error(error.message);
        } else {
          refreshSession();
          if (initMessage) router.push("/dashboard?initMessage=" + initMessage);
          else router.push("/dashboard");
        }
      } catch (error) {
        console.error(error);
      }
    });
  }

  async function googleLogin() {
    try {
      let callBackUrl = `${process.env.NEXT_PUBLIC_URL}/auth/callback?next=/dashboard`;
      if (initMessage && redirectTo) {
        callBackUrl = `${process.env.NEXT_PUBLIC_URL}/auth/callback?next=/dashboard&initMessage=${initMessage}`;
      }
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: callBackUrl,
        },
      });
    } catch (error) {
      console.log(error);
    } finally {
      refreshSession();
    }
  }

  function submitOtp() {
    startTransition(async () => {
      if (!otp || otp?.length < 5) return;
      try {
        const { data, error } = await supabase.auth.verifyOtp({
          email,
          token: otp,
          type: "email",
        });
        if (data) {
          refreshSession();
          // toast.success("Loggged In successfully");
          if (initMessage && redirectTo)
            router.push(
              "/dashboard?redirectTo=" +
                redirectTo +
                "&initMessage=" +
                initMessage,
            );
          else router.push("/dashboard");
          setIsOptSent(false);
          console.log("email verification done ");
        }
      } catch (error) {
        console.error(error);
        if (initMessage && redirectTo)
          router.push(
            "/auth?redirectTo=" + redirectTo + "&initMessage=" + initMessage,
          );
        else router.push("/auth");
      }
    });
  }

  return (
    <div className="md:px-10 py-8 px-2 grid md:grid-cols-2 grid-cols-1 min-h-screen overflow-y-auto gap-10 custom-scroll">
      {/* Left Side */}
      {isOptSent ? (
        <OTPPage ispending={ispending} setOtp={setOtp} onSubmit={submitOtp} />
      ) : (
        <div className="py-5 md:px-15 px-0 flex flex-col gap-10 md-gap:20">
          <div className=" mx-auto">
            <img src="/logo.jpg" width={200} height={40} alt="" />
          </div>
          <div className="flex flex-col justify-center place-items-center gap-3 md:gap-10">
            <h1 className="text-3xl font-bold">
              {isLogin ? "Welcome Back!" : "Join Alumna.ai"}
            </h1>
            <Card className="border border-transparent w-3/4  text-center bg-opacity-30 rounded-lg">
              <div className="p-[1px]  bg-[linear-gradient(90deg,#A07DF1,#F69DBA)] rounded-lg">
                <CardContent className="bg-black rounded-[10px] p-2 space-y-2">
                  <Button
                    onClick={googleLogin}
                    className="text-sm text-transparent bg-clip-text bg-[linear-gradient(90deg,#A07DF1,#F69DBA)]"
                  >
                    {isLogin ? "Login with Google" : "Signup with Google"}
                  </Button>
                </CardContent>
              </div>
            </Card>
            <div className="flex flex-row gap-2 w-3/4 justify-center items-center">
              <div className="h-[1px] w-1/2 bg-[radial-gradient(closest-side,#FFFFFF_20%,#FFFFFF_70%,transparent_100%)]" />
              <h1>or</h1>
              <div className="h-[1px] w-1/2 bg-[radial-gradient(closest-side,#FFFFFF_20%,#FFFFFF_70%,transparent_100%)]" />
            </div>
            <div className="flex flex-col gap-10 w-3/4">
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="flex flex-col gap-3">
                  {!isLogin && (
                    <>
                      {" "}
                      <label
                        htmlFor="name"
                        className="text-white text-sm font-medium"
                      >
                        Name
                      </label>
                      {/* Email Input */}
                      <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your Name"
                        className="w-full px-4 py-3 bg-gradient-to-b from-[#ffffff0d] border-t border-[#ffffff14] to-[#ffffff04] rounded-lg"
                      />
                    </>
                  )}
                  <label
                    htmlFor="email"
                    className="text-white text-sm font-medium"
                  >
                    Email ID
                  </label>

                  {/* Email Input */}
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 bg-gradient-to-b from-[#ffffff0d] border-t border-[#ffffff14] to-[#ffffff04] rounded-lg"
                  />

                  <label
                    htmlFor="password"
                    className="text-white text-sm font-medium"
                  >
                    Password
                  </label>

                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your Password"
                    className="w-full px-4 py-3 bg-gradient-to-b from-[#ffffff0d] border-t border-[#ffffff14] to-[#ffffff04] rounded-lg"
                  />
                </div>

                {/* Continue Button */}

                <Button
                  type="submit"
                  className="w-full py-3 mt-7 text-white font-semibold rounded-md
                      bg-[linear-gradient(90deg,#A07DF1,#F69DBA)] hover:brightness-110 hover:text-shadow active:scale-95 transition-all duration-200"
                  disabled={ispending}
                  onClick={isLogin ? LoginHandler : SignUPHandler}
                >
                  {ispending ? (
                    <>
                      <Loader className="animate-spin" size={20} />
                      {isLogin ? "Login" : "Create Account"}
                    </>
                  ) : isLogin ? (
                    "Login"
                  ) : (
                    "Create Account"
                  )}
                </Button>
              </form>

              {/* Already have an account line */}
              <p className="text-center text-white text-sm">
                {isLogin
                  ? "Don't have an account?"
                  : "Already have an account?"}{" "}
                <span
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-pink-400 font-semibold cursor-pointer hover:underline"
                >
                  {isLogin ? "Register" : "Log in"}
                </span>
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Right Side */}
      <div className="hidden md:flex ">
        <SlicedImageGrid />
      </div>
    </div>
  );
}
