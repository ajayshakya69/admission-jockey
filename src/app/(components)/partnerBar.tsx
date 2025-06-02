import { Card, CardContent } from "@/components/ui/card";

export default function Partners() {
    const logos = new Array(10).fill(0);

    return (
        <div className="bg-black py-10 text-white text-center overflow-hidden my-20">
            <h2 className="text-3xl font-semibold">Our Partners</h2>
            <hr className="border-gray-300 my-4 w-1/3  mx-auto" />

            <div className="relative w-full overflow-hidden py-10">
                {/* Gradient overlay on left & right */}
                <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-black via-transparent to-black" />

                {/* Logos */}
                <div className="flex w-max animate-marquee space-x-20">
                    {logos.concat(logos).map((_, i) => (
                        <Card
                            key={i}
                            className="w-45 h-20 flex items-center justify-center shrink-0 bg-[#ffffff6d]"
                        >
                            <CardContent className="flex items-center justify-center h-full">
                                {/* Put logo image here */}
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

        </div>
    );
}
