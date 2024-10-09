import type { MetaFunction } from "@remix-run/node";
import HeroSection from "~/components/landing-page/hero-section";
import Navbar from "~/components/landing-page/navbar";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <>
      <Navbar />
      <HeroSection />
    </>
  );
}
