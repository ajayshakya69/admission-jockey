"use client";
import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import { Loader } from "lucide-react";

interface pageProps {
  setOtp: React.Dispatch<React.SetStateAction<string | null>>;
  onSubmit: () => void;
  ispending: boolean;
}
export default function OTPPage({ setOtp, onSubmit, ispending }: pageProps) {
  return (
    <>
      <div className="py-5 md:px-15 px-0 flex flex-col gap-10 md:gap-20">
        <div className=" mx-auto">
          <img src="/logo.jpg" width={200} height={40} alt="" />
        </div>
        <div className="flex flex-col justify-center place-items-center gap-10">
          <h1 className="text-3xl dark:text-white text-black font-bold">Verify your Account</h1>
          <div className="flex flex-col gap-2 mt-5">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-3"
            >
              <span className="font-bold">OTP</span>
              <InputOTP
                maxLength={6}
                pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
                onChange={(value) => setOtp(value)}
              >
                <InputOTPGroup>
                  {[0, 1, 2, 3, 4, 5].map((index) => {
                    return <InputOTPSlot key={index} index={index} />;
                  })}
                </InputOTPGroup>
              </InputOTP>

              <Button
                onClick={onSubmit}
                className="w-full py-3 mt-7 dark:text-white text-black font-semibold rounded-md 
                          bg-[linear-gradient(90deg,#A07DF1,#F69DBA)] hover:brightness-110 hover:text-shadow active:scale-95 transition-all duration-200"
              >
                {ispending ? (
                  <>
                    <Loader className="animate-spin" size={20} />
                    {"Verifying"}
                  </>
                ) : (
                  "Verify Otp"
                )}
              </Button>
            </form>

            <p className="text-center mt-10 dark:text-white text-black text-sm">
              Didn’t get the code?{" "}
              <span className="text-pink-400 font-semibold cursor-pointer hover:underline">
                Resend OTP
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
