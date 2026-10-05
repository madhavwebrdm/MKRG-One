import { PLACEHOLDER_IMAGES } from "@/lib/placeholderImages";
import PageHero from "./PageHero";
import ProcessesFlow from "./ProcessesFlow";
import AnimatedHeading from "./AnimatedHeading";

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
    <main className="bg-mint">
      <PageHero
        eyebrow={str(hero?.eyebrow, "Processes")}
        heading={str(hero?.heading, "The Recycle2X Process.")}
        intro={str(
          hero?.intro,
          "One closed loop. The hazardous waste that steel-making would otherwise send to landfill becomes commercial zinc. Air Pollution Control Devices keep the airborne stream well within International Standards.",
        )}
        imageUrl={hero?.imageUrl || PLACEHOLDER_IMAGES.processesHero}
        imageAlt={str(hero?.imageAlt, "Recycle2X plant")}
        videoUrl="/videos/processes-hero.mp4"
        videoPoster={PLACEHOLDER_IMAGES.processesHero}
      />

      <ProcessesFlow
        eyebrow="Recycle2X"
        heading="The full Recycle2X flow, step by step."
        body="Recycle 2X means one waste, two wins. We clean up hazardous waste, and we get useful zinc back from it."
      />

      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <AnimatedHeading className="font-serif text-3xl leading-tight text-ink sm:text-4xl lg:text-5xl">
              The Technology Behind Our Zinc Recovery
            </AnimatedHeading>
            <p className="mt-6 text-base leading-relaxed text-body sm:text-lg">
              At MKRG Environmental Solutions, innovation drives the way we
              recover valuable resources from industrial waste. Our zinc
              recovery process is built on our own patented hydrometallurgical
              process, an advanced technology designed to extract zinc from
              Air Pollution Control Device (APCD) dust generated during steel
              manufacturing.
            </p>
            <p className="mt-4 text-base leading-relaxed text-body sm:text-lg">
              The process enables the efficient recovery of zinc while
              minimizing waste and supporting responsible resource
              utilization. By transforming hazardous industrial by-products
              into high-value zinc products, our process helps reduce
              environmental impact and promotes a circular approach to
              manufacturing.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

