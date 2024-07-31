import dynamic from "next/dynamic";

import AboutMeHeroSection from "../_components/AboutMeHeroSection";
import { ConnectionSkeletons } from "../_components/ConnectionItemSkeleton";
import WorkExperienceSection from "../_components/WorkExperienceSection";

const DynamicConnectionSection = dynamic(
  () => import("../_components/ConnectionListSection"),
  {
    ssr: false,
    loading: () => <ConnectionSkeletons />,
  },
);

const Page = () => {
  return (
    <main className="min-h-svh">
      <AboutMeHeroSection />
      <DynamicConnectionSection />
      <WorkExperienceSection />
    </main>
  );
};

export default Page;
