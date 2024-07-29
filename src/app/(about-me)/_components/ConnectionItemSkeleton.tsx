import Section from "@/components/ui/Section";

const ConnectionItemSkeleton = () => {
  return (
    <div className="group flex max-h-[150px] w-full min-w-[200px] animate-pulse items-center justify-between rounded-10 bg-[#14161A80] px-6 py-4 transition-all duration-200 ease-linear"></div>
  );
};

export default ConnectionItemSkeleton;

export const ConnectionSkeletons = () => {
  return (
    <Section className="grid h-[60px] gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-x-20 md:gap-y-6">
      <ConnectionItemSkeleton />
      <ConnectionItemSkeleton />
      <ConnectionItemSkeleton />
    </Section>
  );
};
