import Spline from '@splinetool/react-spline/next';

export default function Model() {
    return (
        <main className="flex flex-col items-center justify-center">
            <div className="w-full lg:h-[300px] h-[500px] mr-4  md:mr-0 lg:aspect-square ">
                <Spline
                    scene="https://prod.spline.design/GJ6cSezNyXe5qF-D/scene.splinecode"
                    className="w-[350px] h-[300px] md:h-full md:w-full"
                    // style="display: block; width: 350px; height: 300px;"
                />
            </div>
        </main>
    );
}
