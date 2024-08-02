import Header from "@/components/ui/Header";
import Section from "@/components/ui/Section";
import AllProjectsSection from "../_components/AllProjectsSection";
// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Projects | Abolfazl Jamshidi",
//   description: `You can find all my projects here as a front-end developer.`,
//   authors: { name: "Abolfazl Jamshidi", url: "http://iabolfazl.dev" },
//   keywords: [
//     "frontend",
//     "software engineering",
//     "react",
//     "portfolio",
//     "next.js",
//   ],
//   alternates: {
//     canonical: "https://iabolfazl.dev/projects",
//   },
//   openGraph: {
//     title: "Projects | Abolfazl Jamshidi",
//     description: `You can find all my projects here as a front-end developer.`,
//     images: ["https://iabolfazl.dev/images/me-1.jpg"],
//     url: "http://iabolfazl.dev/projects",
//     type: "website",
//   },
//   twitter: {
//     card: "summary_large_image",
//     creator: "Abolfazl Jamshidi",
//     title: "Projects | Abolfazl Jamshidi",
//     description: `You can find all my projects here as a front-end developer.`,
//     images: ["https://iabolfazl.dev/images/hero-img.jpg"],
//     site: "http://iabolfazl.dev/projects",
//   },
// };

const Page = () => {
  return (
    <div className="min-h-svh">
      <Section className="lg:mt-[80px]">
        <Header title="my projects" />
      </Section>

      <AllProjectsSection />
    </div>
  );
};

export default Page;
