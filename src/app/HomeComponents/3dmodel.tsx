import Spline from "@splinetool/react-spline/next";

export default function Model() {
  return (
    <main className="flex flex-col items-center justify-center">
      <div className="w-full  h-[500px] lg:h-[500] md:mr-0 mr-52  lg:aspect-square ">
        <Spline
          scene="https://prod.spline.design/GJ6cSezNyXe5qF-D/scene.splinecode"
          className=" h-full w-full"

        />
      </div>
    </main>
  );
}
