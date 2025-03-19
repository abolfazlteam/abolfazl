import Header from "@/components/ui/Header";
import Section from "@/components/ui/Section";
import ConnectLinksList from "./ConnectList";

const ConnectionListSection = () => {
  return (
    <Section>
      <Header title="let's connect" />
      <ConnectLinksList />
    </Section>
  );
};

export default ConnectionListSection;
