import { notFound } from "next/navigation";
import { colleges } from "../partials/data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Star, Download, ChevronDown, Building2 } from "lucide-react";
import Image from "next/image";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function CollegeDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const college = colleges.find((c) => c.slug === slug);

  if (!college) return notFound();

  const campusHighlights = college.highlights || [];

  return (
    <div className="min-h-screen dark:bg-gradient-b dark:from-[#000000b0] dark:via-[#000000b0] dark:to-[#000000b0] bg-gradient-to-b from-[#F6F6F6] via-[#fef4f7] to-[#efeafe] dark:text-white text-black">
      <div className="p-6 my-10 max-w-7xl mx-auto">
        <div className="flex gap-10 mb-6 bg-gradient-to-b from-white to-white dark:bg-gradient-to-b dark:from-[#ffffff0d] border-t dark:border-[#ffffff14] dark:to-[#ffffff04] shadow-[0_0_10px_6px_rgba(142,142,142,0.05)] dark:shadow-none p-5 px-7 rounded-sm">
          <div className="w-32 h-32 dark:bg-white/10 bg-black/10 rounded-lg flex-shrink-0 overflow-hidden relative dark:shadow-none shadow-[0_0_10px_6px_rgba(142,142,142,0.05)]">
            <Image
              src={college.image || "/placeholder.svg"}
              alt={college.name}
              fill
              className="object-cover"
              sizes="128px"
            />
          </div>

          <div className="flex-1">
            <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-[linear-gradient(90deg,#A07DF1,#F69DBA)] mb-2">
              {college.name}
            </h1>
            <div className="flex items-center gap-4 text-gray-400 mb-4">
              <span>{college.location || "Dehradun, Uttarkhand"}</span>
              <span>|</span>
              <span>{college.type || "Private University"}</span>
              <span>|</span>
              <span>{college.approvals || "AICTE, BCI, UGC Approved"}</span>
            </div>

            <div className="flex gap-8">
              <Button className="dark:text-white text-black bg-transparent shadow-none hover:bg-transparent">
                <Star className="w-4 h-4 mr-1 text-[#A07DF1]" />
                No Reviews
              </Button>
              <Button
                asChild
                className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#A07DF1,#F69DBA)] hover:brightness-75 shadow-none"
              >
                <a
                  href={college.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apply Now
                </a>
              </Button>
              <Button variant="outline" className="bg-transparent ">
                <Download className="w-4 h-4 mr-2" />
                Download Brochure
              </Button>
            </div>
          </div>
        </div>

        <Tabs defaultValue="info" className="w-full">
          <TabsList className="bg-gradient-to-b from-white to-white dark:bg-gradient-to-b dark:from-[#ffffff0d] border-t dark:border-[#ffffff14] dark:to-[#ffffff04] shadow-[0_0_10px_6px_rgba(142,142,142,0.05)] dark:shadow-none rounded-sm  h-auto p-0 px-2 w-full justify-start gap-2">
            {[
              "info",
              "courses & Fees",
              "gallery",
              "hostel",
              "admission",
              "faqs",
              "scholarship",
              "announcement",
              "faculty",
              "reviews",
              "qna",
            ].map((tab) => (
              <TabsTrigger
                key={tab}
                value={tab}
                className="bg-transparent border-b-2 font-normal tracking-wide border-transparent data-[state=active]:border-[#A07DF1] dark:data-[state=active]:border-[#A07DF1] data-[state=active]:text-[#A07DF1] dark:data-[state=active]:text-[#A07DF1] rounded-none px-4 py-3 text-black dark:text-white"
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent
            value="info"
            className="mt-6 bg-gradient-to-b from-white to-white dark:bg-gradient-to-b dark:from-[#ffffff0d] border-t dark:border-[#ffffff14] dark:to-[#ffffff04] shadow-[0_0_10px_6px_rgba(142,142,142,0.05)] dark:shadow-none rounded-sm px-4 py-5 space-y-6 "
          >
            <Collapsible>
              <CollapsibleTrigger className="flex items-center justify-between w-full p-4 border-b-2 dark:border-white/30 border-black/30 transition-colors">
                <div className="flex items-center gap-3">
                  <Building2 className="w-5 h-5" />
                  <span className="font-semibold">About University</span>
                </div>
                <ChevronDown className="w-5 h-5" />
              </CollapsibleTrigger>
              <CollapsibleContent className="p-4">
                <p className="dark:text-white text-black">
                  {college.description}
                </p>
              </CollapsibleContent>
            </Collapsible>

            <div className="space-y-4">
              <div className="flex items-center gap-3 p-4 border-b-2 dark:border-white/30 border-black/30">
                <Building2 className="w-5 h-5" />
                <span className="font-semibold">Campus Highlights</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {campusHighlights.map((highlight, index) => (
                  <Card
                    key={index}
                    className=" bg-gradient-to-b from-white to-white dark:bg-gradient-to-b dark:from-[#ffffff0d] border-t dark:border-[#ffffff14] dark:to-[#ffffff04] shadow-[0_0_10px_6px_rgba(142,142,142,0.10)] dark:shadow-none rounded-sm"
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 flex items-center justify-center">
                          <Building2 className="w-5 h-5" />
                        </div>
                        <CardTitle className="text-black dark:text-white text-sm">
                          {highlight.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <CardDescription className="text-gray-400 text-sm">
                        {highlight.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 p-4 border-b-2 dark:border-white/30 border-black/30  ">
                <Building2 className="w-5 h-5" />
                <span className="font-semibold">Detailed Overview</span>
              </div>
            </div>
          </TabsContent>

          {[
            "courses & Fees",
            "gallery",
            "hostel",
            "admission",
            "faqs",
            "scholarship",
            "announcement",
            "faculty",
            "reviews",
            "qna",
          ].map((tab) => (
            <TabsContent key={tab} value={tab} className="mt-6">
              <div className="p-6 bg-gradient-to-b from-white to-white dark:bg-gradient-to-b dark:from-[#ffffff0d] border-t dark:border-[#ffffff14] dark:to-[#ffffff04] shadow-[0_0_10px_6px_rgba(142,142,142,0.05)] dark:shadow-none rounded-lg">
                <p className="text-black dark:text-white capitalize">
                  {tab} information will be displayed here.
                </p>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}
