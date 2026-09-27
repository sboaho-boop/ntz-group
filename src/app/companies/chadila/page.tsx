import type { Metadata } from "next";
import Image from "next/image";
import { db } from "@/lib/db";

export const metadata: Metadata = {
  title: "Chadila (CDL)",
  description:
    "Chadila SARL — diamond mining on permit PE 569, the Mbimbi falls hydroelectric potential of around 100 MW, and granite quarrying near Tshikapa, DRC. An NTZ Group company.",
};

const identification = [
  { label: "Legal form", value: "SARL — RCCM CD/KNG/RCCM/17-B-00363, incorporated 06/04/2017" },
  { label: "Corporate object", value: "Research, exploitation and commercialisation of precious mineral substances (diamond)" },
  { label: "Share capital", value: "USD 100,000" },
  { label: "Shareholders", value: "KSD and New Terra-Z" },
  { label: "Registered office", value: "02 Avenue Katanga, App. A1, Kinshasa/Gombe" },
  { label: "Manager (Gérant)", value: "Franck Nyimilongo Pieme" },
];

const inferredResources = [
  { zone: "Terrace 3", method: "drill / pit", carats: "730,050" },
  { zone: "Terrace 2", method: "drill / pit", carats: "371,600" },
  { zone: "Terrace 1 (flat)", method: "drill / pit", carats: "121,200" },
  { zone: "Île Tshidila", method: "drill / pit", carats: "265,500" },
];

const collaboration = [
  { title: "Mining", detail: "Open the share capital to a financial contribution or a joint venture to exploit the diamond permit on agreed terms." },
  { title: "Hydroelectricity", detail: "Obtain and exploit the right to build and operate a hydroelectric plant — the feasibility study is already held by the company." },
  { title: "Quarrying", detail: "Jointly exploit the granite quarry, for which the rights-granting process is already under way." },
];

export default async function ChadilaPage() {
  let activities: Awaited<ReturnType<typeof db.activity.findMany>> = [];
  let projects: Awaited<ReturnType<typeof db.project.findMany>> = [];
  try {
    const company = await db.company.findUnique({ where: { slug: "chadila" } });
    activities = await db.activity.findMany({ where: { companyId: company?.id } });
    projects = await db.project.findMany({ where: { companyId: company?.id } });
  } catch {}

  return (
    <>
      <section className="py-24 lg:py-32 bg-charcoal-dark">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-gold mb-6">NTZ Group — Company 02</p>
          <h1 className="heading-display text-5xl md:text-6xl lg:text-7xl text-warm-white mb-2">CHADILA</h1>
          <p className="font-serif text-2xl md:text-3xl text-warm-white/60 mb-6">Diamonds, Hydroelectricity &amp; Quarrying</p>
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
                  Chadila SARL is a Congolese company incorporated in 2017 and owned by KSD and New Terra-Z. It works across three
                  complementary sectors in the Kasai province: diamond mining on permit PE 569, hydroelectric generation around the
                  Mbimbi falls, and granite quarrying.
                </p>
                <p>
                  Permit PE 569 lies about 20 km as the crow flies from the town of Tshikapa and roughly 100 km from the Angolan
                  border, on the Kasai river. A quarry permit is currently being acquired.
                </p>
              </div>

              <div className="relative aspect-[16/9] overflow-hidden mt-12 mb-16">
                <Image src="/images/chadila-location-1.jpeg" alt="Chadila permit PE 569 near Tshikapa" fill sizes="(min-width: 1024px) 850px, 100vw" className="object-cover" />
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

              {/* Mining sector */}
              <div className="mt-4 mb-16">
                <h3 className="heading-editorial text-2xl text-charcoal mb-4">I. Diamond Mining — PE 569</h3>
                <div className="line-separator mb-8" />
                <p className="text-stone-dark leading-relaxed mb-8">
                  Prospection works — boreholes, wells and identified blocks — have been carried out across the Tshiminina target
                  zone. Inferred resources for permit 569 total an estimated 1,488,350 carats, with river exploitation also identified
                  on the Kasai river at Tshidila.
                </p>
                <div className="overflow-x-auto border border-border mb-8">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-warm-cream text-left">
                        <th className="p-4 font-medium tracking-wide text-charcoal">Target zone</th>
                        <th className="p-4 font-medium tracking-wide text-charcoal">Method</th>
                        <th className="p-4 font-medium tracking-wide text-charcoal">Inferred carats</th>
                      </tr>
                    </thead>
                    <tbody>
                      {inferredResources.map((r) => (
                        <tr key={r.zone} className="border-t border-border">
                          <td className="p-4 text-charcoal font-medium">{r.zone}</td>
                          <td className="p-4 text-stone-dark">{r.method}</td>
                          <td className="p-4 text-stone-dark">{r.carats}</td>
                        </tr>
                      ))}
                      <tr className="border-t border-border bg-warm-cream/50">
                        <td className="p-4 text-charcoal font-medium">Total inferred (PE 569)</td>
                        <td className="p-4" />
                        <td className="p-4 text-charcoal font-medium">1,488,350</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image src="/images/chadila-blocks.jpeg" alt="Identified prospection blocks" fill sizes="(min-width: 1024px) 400px, 100vw" className="object-cover" />
                  </div>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image src="/images/chadila-kasai-river-1.jpeg" alt="River exploitation on the Kasai river" fill sizes="(min-width: 1024px) 400px, 100vw" className="object-cover" />
                  </div>
                </div>
                <p className="text-sm text-stone mt-4 leading-relaxed">
                  Recommended next steps include a minimum set of mechanical extraction and treatment equipment (one 1.5 m³ excavator,
                  two 35-tonne dump trucks, one 3 m³ loader and a mobile treatment chain), relaunching geological prospection to grow
                  reserves, large-diameter wells on the Tshiminina terrace, and river exploration on the Kasai.
                </p>
              </div>

              {/* Hydro sector */}
              <div className="mt-4 mb-16">
                <h3 className="heading-editorial text-2xl text-charcoal mb-4">II. Hydroelectricity — Mbimbi Falls</h3>
                <div className="line-separator mb-8" />
                <p className="text-stone-dark leading-relaxed mb-8">
                  The existing small Lungudi hydroelectric plant of 2 MW is far short of the needs of Tshikapa and the surrounding
                  customary centres. The Mbimbi falls on the Kasai river present a large potential estimated at around 100 MW — the
                  backbone of an energy-deficit province, for which Chadila holds the feasibility study.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image src="/images/chadila-mbimbi-falls-1.jpeg" alt="Mbimbi falls on the Kasai river" fill sizes="(min-width: 1024px) 400px, 100vw" className="object-cover" />
                  </div>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image src="/images/chadila-mbimbi-falls-2.jpeg" alt="Mbimbi falls hydroelectric potential" fill sizes="(min-width: 1024px) 400px, 100vw" className="object-cover" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="p-6 border border-border">
                    <p className="heading-display text-3xl text-gold-dark mb-2">~100 MW</p>
                    <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-stone-dark">Mbimbi falls potential</p>
                  </div>
                  <div className="p-6 border border-border">
                    <p className="heading-display text-3xl text-gold-dark mb-2">2 MW</p>
                    <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-stone-dark">Current Lungudi plant</p>
                  </div>
                </div>
              </div>

              {/* Quarry sector */}
              <div className="mt-4 mb-16">
                <h3 className="heading-editorial text-2xl text-charcoal mb-4">III. Quarrying — Granite</h3>
                <div className="line-separator mb-8" />
                <p className="text-stone-dark leading-relaxed mb-8">
                  The PE 569 area contains granite rock massifs suitable for quarrying. The rights-granting process for a quarry
                  permit is currently engaged.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image src="/images/chadila-granite-quarry-1.jpeg" alt="Granite rock massifs" fill sizes="(min-width: 1024px) 400px, 100vw" className="object-cover" />
                  </div>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image src="/images/chadila-granite-quarry-2.jpeg" alt="Granite quarry" fill sizes="(min-width: 1024px) 400px, 100vw" className="object-cover" />
                  </div>
                </div>
              </div>

              {/* Collaboration */}
              <div className="mt-4 mb-16 p-10 bg-charcoal text-warm-white">
                <h3 className="heading-editorial text-2xl mb-8">Collaboration Sought</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
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
                <p className="text-charcoal font-medium">Franck Nyimilongo Pieme</p>
                <p className="text-sm text-stone mt-1">Gérant</p>
              </div>
              <div className="p-8 border border-border">
                <p className="text-[11px] font-medium tracking-[0.25em] uppercase text-gold mb-4">Key Facts</p>
                <dl className="space-y-3 text-sm">
                  <div>
                    <dt className="text-stone">Incorporated</dt>
                    <dd className="text-charcoal">2017 (RCCM 17-B-00363)</dd>
                  </div>
                  <div>
                    <dt className="text-stone">Mining permit</dt>
                    <dd className="text-charcoal">PE 569</dd>
                  </div>
                  <div>
                    <dt className="text-stone">Inferred resources</dt>
                    <dd className="text-charcoal">~1.49M carats</dd>
                  </div>
                  <div>
                    <dt className="text-stone">Hydro potential</dt>
                    <dd className="text-charcoal">~100 MW (Mbimbi)</dd>
                  </div>
                </dl>
              </div>
              <div className="p-8 border border-border">
                <p className="text-[11px] font-medium tracking-[0.25em] uppercase text-gold mb-4">Location</p>
                <p className="text-sm text-stone-dark leading-relaxed">
                  02 Avenue Katanga, App. A1<br />Kinshasa-Gombe<br />Democratic Republic of Congo
                </p>
              </div>
              <div className="p-8 border border-border">
                <p className="text-[11px] font-medium tracking-[0.25em] uppercase text-gold mb-4">Contact</p>
                <p className="text-sm text-stone-dark">
                  <a href="mailto:fpnyimilongo@gmail.com" className="hover:text-gold transition-colors">fpnyimilongo@gmail.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
