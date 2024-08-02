// import { Metadata } from "next";
import dynamic from "next/dynamic";

import AboutMeHeroSection from "../_components/AboutMeHeroSection";
import { ConnectionSkeletons } from "../_components/ConnectionItemSkeleton";
import WorkExperienceSection from "../_components/WorkExperienceSection";
import JsonLd from "@/components/seo/JsonLd";

const DynamicConnectionSection = dynamic(
  () => import("../_components/ConnectionListSection"),
  {
    ssr: false,
    loading: () => <ConnectionSkeletons />,
  },
);

// export const metadata: Metadata = {
//   title: "About | Abolfazl Jamshidi",
//   description:
//     "Hey, I'm Abolfazl Jamshidi! I currently live in Iran and work as a full-time front-end developer. I love excitement and experience different fun activities.",
//   authors: { name: "Abolfazl Jamshidi", url: "http://iabolfazl.dev" },
//   keywords: ["php", "software engineering", "backend"],
//   alternates: {
//     canonical: "https://iabolfazl.dev/about-me",
//   },
//   openGraph: {
//     title: "About | Abolfazl Jamshidi",
//     description:
//       "Hey, I'm Abolfazl Jamshidi! I currently live in Iran and work as a full-time front-end developer. I love excitement and experience different fun activities.",
//     images: ["https://iabolfazl.dev/images/me-1.jpg"],
//     url: "http://iabolfazl.dev/about-me",
//     type: "website",
//   },
//   twitter: {
//     card: "summary_large_image",
//     creator: "Abolfazl Jamshidi",
//     title: "About | Abolfazl Jamshidi",
//     description:
//       "Hey, I'm Abolfazl Jamshidi! I currently live in Iran and work as a full-time front-end developer. I love excitement and experience different fun activities.",
//     images: ["https://iabolfazl.dev/images/me-1.jpg"],
//     site: "http://iabolfazl.dev/about-me",
//   },
// };

const Page = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      name: "Arman Ahmadi",
      image: "https://armancodes.com/images/hero-img.webp",
      description:
        "Hi, I'm Arman! I'm based in the Netherlands and work as a backend engineer at Onefit/Urban Sports Club.",
      url: "https://armancodes.com",
      jobTitle: "Backend Engineer",
    },
  };

  return (
    <main className="min-h-svh">
      <AboutMeHeroSection />
      <DynamicConnectionSection />
      <WorkExperienceSection />

      {/* JSON+LD data */}
      <JsonLd data={jsonLd} />
    </main>
  );
};

export default Page;
