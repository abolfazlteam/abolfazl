import dynamic from "next/dynamic";
import AboutMeHeroSection from "../_components/AboutMeHeroSection";
import { ConnectionSkeletons } from "../_components/ConnectionItemSkeleton";

const DynamicConnectionSection = dynamic(
  () => import("../_components/ConnectionListSection"),
  {
    ssr: false,
    loading: () => <ConnectionSkeletons />,
  },
);

const DynamicWorkExperienceSection = dynamic(
  () => import("../_components/WorkExperienceSection"),
  {
    ssr: false,
  },
);

const Page = () => {
  return (
    <main className="min-h-svh">
      <AboutMeHeroSection />
      <DynamicConnectionSection />
      <DynamicWorkExperienceSection />
    </main>
  );
};

export default Page;
