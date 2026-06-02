export const metadata = {
  title: "Product",
  description: "Product page coming soon. Check back once client details are available.",
};

export default function ProductPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-24 sm:px-10">
      <section className="rounded-3xl border border-deep-green/10 bg-white p-10 shadow-xl sm:p-16">
        <p className="text-sm uppercase tracking-[0.24em] text-deep-green">Product</p>
        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Product details coming soon
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-body">
          We’re preparing a dedicated product page for the new client content. Until the details arrive, this page will serve as a placeholder for the Product section.
        </p>
      </section>
    </main>
  );
}
