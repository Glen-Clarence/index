import { MotionProvider } from "@/components/motion/MotionProvider";
import { PageMotion } from "@/components/motion/PageMotion";
import { ResearchProvider } from "@/components/product/ResearchProvider";
import { Navigation } from "@/components/sections/Navigation";
import { Hero } from "@/components/sections/Hero";
import { Introduction } from "@/components/sections/Introduction";
import { Moments } from "@/components/sections/Moments";
import { ProductStory } from "@/components/sections/ProductStory";
import { Asks } from "@/components/sections/Asks";
import { Evidence } from "@/components/sections/Evidence";
import { Examples } from "@/components/sections/Examples";
import { Library } from "@/components/sections/Library";
import { Begin } from "@/components/sections/Begin";
import { Privacy } from "@/components/sections/Privacy";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { Closing } from "@/components/sections/Closing";
import { Footer } from "@/components/sections/Footer";
export default function Home() {
  return (
    <MotionProvider>
      <ResearchProvider>
        <PageMotion>
          <a className="skip-link" href="#main">
            Skip to content
          </a>
          <div id="top" />
          <Navigation />
          <main id="main">
            <Hero />
            <Introduction />
            <Moments />
            <ProductStory />
            <Asks />
            <Evidence />
            <Examples />
            <Library />
            <Begin />
            <Privacy />
            <Pricing />
            <FAQ />
            <Closing />
          </main>
          <Footer />
        </PageMotion>
      </ResearchProvider>
    </MotionProvider>
  );
}
