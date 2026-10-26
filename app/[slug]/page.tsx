import type { Metadata } from "next";
import Link from "next/link";
import { companyConfig } from "@/config/company.config";

const copy: Record<string, { title: string; intro: string; body: string }> = {
  services: {
    title: "Services built around the handoff",
    intro: "Choose the lane, see the next checkpoint.",
    body: "Road, air, ocean, warehouse, cold chain and last-mile operations sit behind one control desk. Each service is designed around the moment cargo changes hands.",
  },
  network: {
    title: "Network / Bengaluru first",
    intro: "A local map with a national reach.",
    body: "Peenya, Whitefield, Electronic City and Nelamangala are the working lanes. Chennai ICD and Mangalore Port extend that network when the route needs a longer horizon.",
  },
  fleet: {
    title: "Fleet / right vehicle, right lane",
    intro: "Capacity is a routing decision.",
    body: "From a 3-wheeler in a tight city lane to a 32 ft container headed for the coast, the roster is chosen around cargo, access and timing.",
  },
  track: {
    title: "Track a shipment",
    intro: "One reference. One current readout.",
    body: "Use the Quick Track desk on the home page for the demo tracking experience. Production adapters can connect the same typed service to a carrier or TMS.",
  },
  quote: {
    title: "Build a quote",
    intro: "Tell us what is moving.",
    body: "The quote engine accounts for mode, distance, chargeable weight, fuel, handling, peak-hour surcharge and GST. The first version uses transparent mock rate cards.",
  },
  about: {
    title: "About Kaveri Freight",
    intro: "Local knowledge. Operational discipline.",
    body: "Kaveri Freight is a fictional rebrandable company concept for Bengaluru logistics teams that need a clearer line between pickup, hub, port and proof.",
  },
  contact: {
    title: "Talk to the control desk",
    intro: "Peenya / Bengaluru / India",
    body: companyConfig.contact.address,
  },
  careers: {
    title: "Careers",
    intro: "Work where movement meets detail.",
    body: "We are building a small team around dispatch, customer operations, warehouse control and technology. This demo route is intentionally simple.",
  },
  legal: {
    title: "Legal",
    intro: "Clear terms for a clear handoff.",
    body: "This demo site uses mock data and simulated service integrations. Production policies, terms and privacy documents should be reviewed before launch.",
  },
};
export function generateStaticParams() {
  return Object.keys(copy).map((slug) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = copy[slug] ?? copy.about;
  return { title: page.title, description: page.intro };
}
export default async function SlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = copy[slug] ?? copy.about;
  return (
    <section
      className="shell"
      style={{ paddingTop: "clamp(2.5rem,5vw,4.5rem)", paddingBottom: "8rem" }}
    >
      <p className="eyebrow">KAVERI / {slug.toUpperCase()}</p>
      <h1
        className="display"
        style={{
          fontSize: "clamp(4rem,10vw,9rem)",
          maxWidth: 1000,
          margin: ".75rem 0 1.5rem",
        }}
      >
        {page.title}
      </h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "3rem",
          borderTop: "1px solid var(--rule)",
          paddingTop: "2rem",
        }}
      >
        <p style={{ fontSize: "clamp(1.5rem,3vw,2.4rem)", lineHeight: 1.1 }}>
          {page.intro}
        </p>
        <div>
          <p style={{ color: "var(--ink-soft)", fontSize: "1.1rem" }}>
            {page.body}
          </p>
          <Link
            href="/quote"
            style={{
              display: "inline-block",
              marginTop: "2rem",
              background: "var(--signal)",
              padding: ".9rem 1.1rem",
              fontFamily: "JetBrains Mono",
              fontSize: ".72rem",
            }}
          >
            REQUEST A QUOTE ↗
          </Link>
        </div>
      </div>
    </section>
  );
}
