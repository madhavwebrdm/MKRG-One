import { PLACEHOLDER_IMAGES } from "@/lib/placeholderImages";
import PageHero from "./PageHero";
import ProcessesFlow, { type ProcessFlowStepInput } from "./ProcessesFlow";
import AnimatedHeading from "./AnimatedHeading";
import WasteToZincFlow, { type WasteToZincData } from "./WasteToZincFlow";

const str = (v: string | null | undefined, fallback: string): string =>
  v && v.trim() ? v : fallback;

const paragraphs = (v: string | null | undefined, fallback: string[]): string[] => {
  if (!v || !v.trim()) return fallback;
  return v.split("\n").map((p) => p.trim()).filter(Boolean);
};

export type ProcessesPageData = {
  hero?:
    | {
        eyebrow?: string | null;
        heading?: string | null;
        intro?: string | null;
        imageUrl?: string | null;
        imageAlt?: string | null;
        videoUrl?: string | null;
      }
    | null;
  processFlow?:
    | {
        eyebrow?: string | null;
        heading?: string | null;
        body?: string | null;
        flowNumber?: string | null;
        flowTitle?: string | null;
        flowCaption?: string | null;
        steps?: ProcessFlowStepInput[] | null;
        calloutText?: string | null;
      }
    | null;
  technology?: { heading?: string | null; body?: string | null } | null;
  wasteToZinc?: WasteToZincData;
} | null;

const TECHNOLOGY_PARAGRAPHS = [
  "At Madhav KRG Environmental Solution Limited, innovation drives the way we recover valuable resources from industrial waste. Our zinc recovery process is built on our own patented hydrometallurgical process, an advanced technology designed to extract zinc from Air Pollution Control Device (APCD) dust generated during steel manufacturing.",
  "The process enables the efficient recovery of zinc while minimizing waste and supporting responsible resource utilization. By transforming hazardous industrial by-products into high-value zinc products, our process helps reduce environmental impact and promotes a circular approach to manufacturing.",
];

export default function ProcessesPageContent({
  data,
}: {
  data?: ProcessesPageData;
}) {
  const hero = data?.hero;
  const flow = data?.processFlow;
  const tech = data?.technology;
  const heroImage = hero?.imageUrl || PLACEHOLDER_IMAGES.processesHero;

  return (
    <main className="bg-mint">
      <PageHero
        eyebrow={str(hero?.eyebrow, "Processes")}
        heading={str(hero?.heading, "The Recycle2X Process.")}
        intro={str(
          hero?.intro,
          "One closed loop. The hazardous waste that steel-making would otherwise send to landfill becomes commercial zinc. Air Pollution Control Devices keep the airborne stream well within International Standards.",
        )}
        imageUrl={heroImage}
        imageAlt={str(hero?.imageAlt, "Recycle2X plant")}
        videoUrl={hero?.videoUrl || "/videos/processes-hero.mp4"}
        videoPoster={heroImage}
      />

      <ProcessesFlow
        eyebrow={str(flow?.eyebrow, "Recycle2X")}
        heading={str(flow?.heading, "The full Recycle2X flow, step by step.")}
        body={str(
          flow?.body,
          "Recycle 2X means one waste, two wins. We clean up hazardous waste, and we get useful zinc back from it.",
        )}
        index={str(flow?.flowNumber, "01")}
        title={str(flow?.flowTitle, "Waste to Zinc")}
        caption={str(
          flow?.flowCaption,
          "Steel plants produce a hazardous dust. We turn it into 99.9% pure zinc.",
        )}
        callout={str(
          flow?.calloutText,
          "This entire process turns hazardous waste into high-quality zinc reusable, traceable and in high demand across industry.",
        )}
        steps={flow?.steps}
      />

      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <AnimatedHeading className="font-serif text-3xl leading-tight text-ink sm:text-4xl lg:text-5xl">
              {str(tech?.heading, "The Technology Behind Our Zinc Recovery")}
            </AnimatedHeading>
            {paragraphs(tech?.body, TECHNOLOGY_PARAGRAPHS).map((p, i) => (
              <p
                key={i}
                className={`${i === 0 ? "mt-6" : "mt-4"} text-base leading-relaxed text-body sm:text-lg`}
              >
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      <WasteToZincFlow data={data?.wasteToZinc} />
    </main>
  );
}
