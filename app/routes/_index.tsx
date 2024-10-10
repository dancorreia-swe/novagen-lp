import type { MetaFunction } from "@remix-run/node";
import CardSection from "~/components/landing-page/card-section";
import CtaSection from "~/components/landing-page/cta-section";
import HeroSection from "~/components/landing-page/hero-section";
import Navbar from "~/components/landing-page/navbar";

export const meta: MetaFunction = () => {
  return [
    { title: "Novagen" },
    {
      name: "description",
      content: "Know your worst nightmares in this thriller action zombie game",
    },
  ];
};

export default function Index() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <CardSection />
      <CtaSection />
    </>
  );
}
