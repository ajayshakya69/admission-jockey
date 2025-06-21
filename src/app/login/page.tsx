"use client";
import { Card, CardContent } from "@/components/ui/card";
// import StyledGrid from "../(components)/grid";
// import ImageGrid from "../(components)/grid";
import SlicedImageGrid from "../(components)/grid";
import { useEffect, useState, useTransition } from "react";
import OTPPage from "./partials/otp";
import { Button } from "@/components/ui/button";
import { Loader } from "lucide-react";
import { useSupabase } from "@/services/supabase/supabase.hook";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [isOptSent, setIsOptSent] = useState(false);
  const [otp, setOtp] = useState<string | null>("");
  const [ispending, startTransition] = useTransition();
  // const [ispending, startSubmitTransition] = useTransition();
  const [email, setEmail] = useState("");

  const { supabase, refreshSession } = useSupabase();

  const router = useRouter();

  function sendOtp() {
    startTransition(async () => {
      try {
        const { data, error } = await supabase.auth.signInWithOtp({
          email,
          options: {
            shouldCreateUser: false,
          },
        });
        if (error) {
          console.error(error.message);
        } else {
          setIsOptSent(true);
        }
      } catch (error) {
        console.error(error);
      }
    });
  }

  async function googleLogin() {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `$(process.env.SITE_URL)/auth/callback?next=/dashboard`,
        },
      });
    } catch (error) {
      console.log(error);
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
          await refreshSession();
          // toast.success("Loggged In successfully");
          router.push("/dashboard");
          console.log("email verification done ");
        }
      } catch (error) {
        console.error(error);
      }
    });
  }

  return (
    <div className="md:px-10 py-8 px-2 grid md:grid-cols-2 grid-cols-1 max-h-screen overflow-y-hidden gap-10">
      {/* Left Side */}
      {isOptSent ? (
        <OTPPage ispending={ispending} setOtp={setOtp} onSubmit={submitOtp} />
      ) : (
        <div className="py-5 md:px-15 px-0 flex flex-col gap-10 md-gap:20">
          <div className=" mx-auto">
            <img src="/logo.jpg" width={200} height={40} alt="" />
          </div>
          <div className="flex flex-col justify-center place-items-center gap-3 md:gap-10">
            <h1 className="text-3xl font-bold">Join Alumna.ai</h1>
            <Card className="border border-transparent w-3/4  text-center bg-opacity-30 rounded-lg">
              <div className="p-[1px]  bg-[linear-gradient(90deg,#A07DF1,#F69DBA)] rounded-lg">
                <CardContent className="dark:bg-black bg-[#F6F6F6] rounded-[10px] p-2 space-y-2">
                  <Button
                    onClick={googleLogin}
                    className="text-sm text-transparent bg-clip-text bg-[linear-gradient(90deg,#A07DF1,#F69DBA)]"
                  >
                    Sign Up with Google
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
                  <label
                    htmlFor="email"
                    className="dark:text-white text-sm font-medium"
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
                </div>

                {/* Continue Button */}

                <Button
                  type="submit"
                  className="w-full py-3 mt-7 text-white font-semibold rounded-md
                      bg-[linear-gradient(90deg,#A07DF1,#F69DBA)] hover:brightness-110 hover:text-shadow active:scale-95 transition-all duration-200"
                  disabled={ispending}
                  onClick={sendOtp}
                >
                  {ispending ? (
                    <>
                      <Loader className="animate-spin" size={20} />
                      {"Sending Otp"}
                    </>
                  ) : (
                    "Send Otp"
                  )}
                </Button>
              </form>

              {/* Already have an account line */}
              <p className="text-center dark:text-white text-sm">
                Already have an account?{" "}
                <span className="text-pink-400 font-semibold cursor-pointer hover:underline">
                  Log in
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
  )
}
