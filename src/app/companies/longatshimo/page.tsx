import type { Metadata } from "next";
import Image from "next/image";
import { db } from "@/lib/db";

export const metadata: Metadata = {
  title: "Longatshimo Mining Company (LMC)",
  description:
    "Longatshimo Mining Company — diamond exploration across permits PEPM 484 to 491 on the Longatshimo river, near the Angolan border, DRC. An NTZ Group company.",
};

const identification = [
  { label: "Legal form", value: "SARL, incorporated May 2005" },
  { label: "Corporate object", value: "Research, exploitation and commercialisation of mineral substances (diamond)" },
  { label: "Share capital", value: "USD 50,000 — 100 social shares" },
  { label: "Shareholders", value: "Marie-Chantale Kashama and Franck Nyimilongo" },
  { label: "Registered office", value: "6 Avenue du Lac, Kinshasa/Limete" },
  { label: "Manager (Gérant)", value: "Franck Nyimilongo" },
];

const collaboration = [
  { title: "Integration by share transfer", detail: "Entry into the capital through the transfer of shares." },
  { title: "Joint venture", detail: "Creation of a joint venture to develop the exploitation of the permits." },
];

export default async function LongatshimoPage() {
  let activities: Awaited<ReturnType<typeof db.activity.findMany>> = [];
  let projects: Awaited<ReturnType<typeof db.project.findMany>> = [];
  try {
    const company = await db.company.findUnique({ where: { slug: "longatshimo" } });
    activities = await db.activity.findMany({ where: { companyId: company?.id } });
    projects = await db.project.findMany({ where: { companyId: company?.id } });
  } catch {}

  return (
    <>
      <section className="py-24 lg:py-32 bg-charcoal">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-gold mb-6">NTZ Group — Company 03</p>
          <h1 className="heading-display text-5xl md:text-6xl lg:text-7xl text-warm-white mb-2">LONGATSHIMO</h1>
          <p className="font-serif text-2xl md:text-3xl text-warm-white/60 mb-6">Longatshimo Mining Company — Diamond Mining</p>
          <div className="line-separator" />
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-warm-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-16">
            <div>
              <p className="text-[11px] font-medium tracking-[0.25em] uppercase text-gold mb-6">Overview</p>
              <h2 className="heading-editorial text-3xl md:text-4xl text-charcoal mb-8">Company Overview</h2>
              <div className="line-separator mb-8" />
              <div className="space-y-5 text-stone-dark leading-relaxed">
                <p>
                  Longatshimo Mining Company is a Congolese limited liability company incorporated in May 2005, focused on the
                  research, exploitation and commercialisation of diamonds. It holds a cluster of exploitation permits straddling
                  the Longatshimo river.
                </p>
                <p>
                  The permits lie about 4 km from the Angolan border at the town of Dundu. Several drilling and probing campaigns
                  have already been carried out across the ground.
                </p>
              </div>

              <div className="relative aspect-[16/9] overflow-hidden mt-12 mb-16">
                <Image src="/images/longatshimo-drilling-1.jpg" alt="Longatshimo Mining Company — drilling campaign" fill sizes="(min-width: 1024px) 850px, 100vw" className="object-cover" />
              </div>

              {/* Identification */}
              <div className="mt-4 mb-16">
                <h3 className="heading-editorial text-2xl text-charcoal mb-4">Identification</h3>
                <div className="line-separator mb-8" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {identification.map((item) => (
                    <div key={item.label} className="p-6 border border-border">
                      <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-gold mb-2">{item.label}</p>
                      <p className="text-stone-dark text-sm leading-relaxed">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mining titles */}
              <div className="mt-4 mb-16">
                <h3 className="heading-editorial text-2xl text-charcoal mb-4">Mining Titles</h3>
                <div className="line-separator mb-8" />
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="p-6 border border-border">
                    <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-gold mb-2">Permits</p>
                    <p className="heading-display text-2xl text-charcoal">PEPM 484–491</p>
                  </div>
                  <div className="p-6 border border-border">
                    <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-gold mb-2">Location</p>
                    <p className="text-stone-dark text-sm leading-relaxed">4 km from the Angolan border, town of Dundu, on the Longatshimo river</p>
                  </div>
                  <div className="p-6 border border-border">
                    <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-gold mb-2">Legal status</p>
                    <p className="text-stone-dark text-sm leading-relaxed">Pending transformation into a PE (exploitation permit), placed under force majeure</p>
                  </div>
                </div>
              </div>

              {/* Location & drilling */}
              <div className="mt-4 mb-16">
                <h3 className="heading-editorial text-2xl text-charcoal mb-4">Location & Drilling</h3>
                <div className="line-separator mb-8" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image src="/images/longatshimo-location.png" alt="Longatshimo permits location map" fill sizes="(min-width: 1024px) 400px, 100vw" className="object-cover" />
                  </div>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image src="/images/longatshimo-drilling-2.jpg" alt="Drilling and probing works" fill sizes="(min-width: 1024px) 400px, 100vw" className="object-cover" />
                  </div>
                </div>
                <p className="text-sm text-stone mt-4 leading-relaxed">
                  Several probing and drilling campaigns have been completed across the permits, illustrating the diamond-bearing
                  gravels of the Longatshimo river system.
                </p>
              </div>

              {/* Collaboration */}
              <div className="mt-4 mb-16 p-10 bg-earth-dark text-warm-white">
                <h3 className="heading-editorial text-2xl mb-8">Collaboration Sought</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {collaboration.map((c) => (
                    <div key={c.title}>
                      <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-gold mb-2">{c.title}</p>
                      <p className="text-warm-white/70 text-sm leading-relaxed">{c.detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              {activities.length > 0 && (
                <div>
                  <h3 className="heading-editorial text-2xl text-charcoal mb-8">Activities</h3>
                  <div className="space-y-0">
                    {activities.map((activity, index) => (
                      <div key={activity.id} className="py-6 border-t border-border">
                        <div className="flex items-start gap-6">
                          <span className="font-serif text-3xl font-light text-gold/40">{String(index + 1).padStart(2, "0")}</span>
                          <div>
                            <h4 className="heading-editorial text-xl text-charcoal mb-2">{activity.title}</h4>
                            <p className="text-stone-dark text-sm leading-relaxed">{activity.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {projects.length > 0 && (
                <div className="mt-16">
                  <h3 className="heading-editorial text-2xl text-charcoal mb-8">Projects</h3>
                  <div className="space-y-6">
                    {projects.map((project) => (
                      <div key={project.id} className="p-6 border border-border">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-stone">{project.location}</span>
                          <span className="w-1 h-1 rounded-full bg-gold" />
                          <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-stone">{project.status}</span>
                        </div>
                        <h4 className="heading-editorial text-lg text-charcoal mb-2">{project.name}</h4>
                        <p className="text-stone-dark text-sm">{project.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div className="p-8 border border-border">
                <p className="text-[11px] font-medium tracking-[0.25em] uppercase text-gold mb-4">Leadership</p>
                <p className="text-charcoal font-medium">Franck Nyimilongo</p>
                <p className="text-sm text-stone mt-1">Gérant</p>
              </div>
              <div className="p-8 border border-border">
                <p className="text-[11px] font-medium tracking-[0.25em] uppercase text-gold mb-4">Key Facts</p>
                <dl className="space-y-3 text-sm">
                  <div>
                    <dt className="text-stone">Incorporated</dt>
                    <dd className="text-charcoal">May 2005</dd>
                  </div>
                  <div>
                    <dt className="text-stone">Permits</dt>
                    <dd className="text-charcoal">PEPM 484–491</dd>
                  </div>
                  <div>
                    <dt className="text-stone">Share capital</dt>
                    <dd className="text-charcoal">USD 50,000</dd>
                  </div>
                  <div>
                    <dt className="text-stone">Sector</dt>
                    <dd className="text-charcoal">Diamond mining</dd>
                  </div>
                </dl>
              </div>
              <div className="p-8 border border-border">
                <p className="text-[11px] font-medium tracking-[0.25em] uppercase text-gold mb-4">Location</p>
                <p className="text-sm text-stone-dark leading-relaxed">
                  6 Avenue du Lac<br />Kinshasa/Limete<br />Democratic Republic of Congo
                </p>
              </div>
              <div className="p-8 border border-border">
                <p className="text-[11px] font-medium tracking-[0.25em] uppercase text-gold mb-4">Contact</p>
                <p className="text-sm text-stone-dark">
                  <a href="mailto:lmc@ntz-group.com" className="hover:text-gold transition-colors">lmc@ntz-group.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
