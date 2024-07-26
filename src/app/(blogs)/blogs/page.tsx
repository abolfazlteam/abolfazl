import Header from "@/components/ui/Header";
import Section from "@/components/ui/Section";
import BlogItem from "../_components/BlogItem";

const Page = () => {
  return (
    <main className="min-h-svh">
      <Section className="lg:mt-[80px]">
        <Header title="my blogs" />
      </Section>

      <section className="mt-6 space-y-8 overflow-hidden lg:mt-8">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((blog, index) => (
          <BlogItem
            shouldHaveAnimation
            animationDirection={index % 2 === 0 ? "left" : "right"}
          />
        ))}
      </section>
    </main>
  );
};

export default Page;
