import { PLACEHOLDER_IMAGES } from "@/lib/placeholderImages";
import PageHero from "./PageHero";
import ProcessesFlow from "./ProcessesFlow";

export default function ProcessesPageContent() {
  return (
    <main className="bg-beige">
      <PageHero
        eyebrow="Processes"
        heading="The Recycle2X Process."
        intro="Two output streams from one closed loop. Industrial scrap becomes structural steel; the hazardous waste that steel-making would otherwise send to landfill becomes commercial zinc. Air Pollution Control Devices keep the airborne stream well within International Standards."
        imageUrl={PLACEHOLDER_IMAGES.processesHero}
        imageAlt="Recycle2X plant"
        videoUrl="/videos/processes-hero.mp4"
        videoPoster={PLACEHOLDER_IMAGES.processesHero}
      />

      <ProcessesFlow
        eyebrow="Recycle2X"
        heading="The full Recycle2X flow, step by step."
        body="Each step is verified, instrumented and tied to an International Standard. Scroll through both streams below the image on the left tracks the step you're reading."
      />
    </main>
  );
}

