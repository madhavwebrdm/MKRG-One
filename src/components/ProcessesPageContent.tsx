import { PLACEHOLDER_IMAGES } from "@/lib/placeholderImages";
import PageHero from "./PageHero";
import ProcessesFlow from "./ProcessesFlow";

const str = (v: string | null | undefined, fallback: string): string =>
  v && v.trim() ? v : fallback;

export type ProcessesPageData = {
  hero?:
    | { eyebrow?: string | null; heading?: string | null; intro?: string | null; imageUrl?: string | null; imageAlt?: string | null }
    | null;
} | null;

export default function ProcessesPageContent({
  data,
}: {
  data?: ProcessesPageData;
}) {
  const hero = data?.hero;

  return (
    <main className="bg-beige">
      <PageHero
        eyebrow={str(hero?.eyebrow, "Processes")}
        heading={str(hero?.heading, "The Recycle2X Process.")}
        intro={str(
          hero?.intro,
          "Two output streams from one closed loop. Industrial scrap becomes structural steel; the hazardous waste that steel-making would otherwise send to landfill becomes commercial zinc. Air Pollution Control Devices keep the airborne stream well within International Standards.",
        )}
        imageUrl={hero?.imageUrl || PLACEHOLDER_IMAGES.processesHero}
        imageAlt={str(hero?.imageAlt, "Recycle2X plant")}
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

