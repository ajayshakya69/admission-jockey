import React from 'react'

export default function Welcome() {
  return (
    <div className="text-center flex flex-col gap-4 max-w-md mx-auto ">
            <h1 className="text-5xl font-bold">
              Hey there{" "}
              <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#F69DBA,#A07DF1)]">
                Aarav
              </span>
              !{" "}
            </h1>
            <span className="text-center text-[#ffffffba] text-[24px]">
              I’m here to make things easier for you. <br />
              How can I help you?
            </span>
          </div>
  )
}
