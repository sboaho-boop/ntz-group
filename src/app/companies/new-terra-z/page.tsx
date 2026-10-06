import type { Metadata } from "next";
import Image from "next/image";
import { db } from "@/lib/db";

export const metadata: Metadata = {
  title: "New Terra-Z (NTZ)",
  description:
    "New Terra-Z SARL — forestry and agricultural concessions in Mweka, Kasai province, DRC, with 13,000 hectares secured and 30,000 hectares under acquisition. An NTZ Group company.",
};

const identification = [
  { label: "Legal form", value: "SARL — RCCM CD/KIN/RCCM/14-B-3604 of 12/09/2014" },
  { label: "Corporate object", value: "Research, exploitation and commercialisation of forestry and agricultural products" },
  { label: "Share capital", value: "USD 10,000" },
  { label: "Shareholders", value: "Franck Nyimilongo Pieme and Pieme Ndibue Célestin" },
  { label: "Registered office", value: "02 Avenue Tabou Ley (ex-Tombalbaye), App. A1, Kinshasa/Gombe" },
  { label: "Manager (Gérant)", value: "Franck Nyimilongo Pieme" },
];

const concessions = [
  { area: "2,000 ha", type: "Perpetual emphyteotic concession", status: "Held", note: "Mweka territory, Kasai province" },
  { area: "11,000 ha", type: "Concession contract — 25 years, renewable", status: "Acquired", note: "Mweka territory, Kasai province" },
  { area: "30,000 ha", type: "Additional concession", status: "Under acquisition", note: "Mweka territory, Kasai province" },
];

const collaboration = [
  { title: "Joint venture", detail: "Creation of a joint venture for forestry and agricultural exploitation." },
  { title: "Equity participation", detail: "Entry into the capital through the transfer of shares." },
];

export default async function NewTerraZPage() {
  let activities: Awaited<ReturnType<typeof db.activity.findMany>> = [];
  let projects: Awaited<ReturnType<typeof db.project.findMany>> = [];
  try {
    const company = await db.company.findUnique({ where: { slug: "new-terra-z" } });
    activities = await db.activity.findMany({ where: { companyId: company?.id } });
    projects = await db.project.findMany({ where: { companyId: company?.id } });
  } catch {}

  return (
    <>
      <section className="py-24 lg:py-32 bg-forest">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-gold mb-6">NTZ Group — Company 04</p>
          <h1 className="heading-display text-5xl md:text-6xl lg:text-7xl text-warm-white mb-2">NEW TERRA-Z</h1>
          <p className="font-serif text-2xl md:text-3xl text-warm-white/60 mb-6">Forestry &amp; Agriculture</p>
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
                  New Terra-Z is a Congolese company incorporated in 2014, dedicated to the research, exploitation and
                  commercialisation of forestry and agricultural products. All of its concessions are situated in the territory of
                  Mweka, in the Kasai province.
                </p>
                <p>
                  The concessions carry extremely diverse forest species — the same wealth that in its time gave rise to the Kasai
                  forestry exploitation company — including Entandrophragma angolensis (Tiama) and Autranella congolensis (Mukulungu),
                  alongside significant agricultural potential.
                </p>
              </div>

              <div className="relative aspect-[16/9] overflow-hidden mt-12 mb-16">
                <Image src="/images/newterra-forest-1.jpeg" alt="New Terra-Z forest concession in Mweka" fill sizes="(min-width: 1024px) 850px, 100vw" className="object-cover" />
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

              {/* Concessions */}
              <div className="mt-4 mb-16">
                <h3 className="heading-editorial text-2xl text-charcoal mb-4">Rights &amp; Titles</h3>
                <div className="line-separator mb-8" />
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                  {concessions.map((c) => (
                    <div key={c.area} className="p-6 border border-border">
                      <p className="heading-display text-3xl text-gold-dark mb-2">{c.area}</p>
                      <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-stone-dark mb-3">{c.status}</p>
                      <p className="text-stone-dark text-sm leading-relaxed">{c.type}</p>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-stone leading-relaxed">
                  A total of 13,000 hectares is held (2,000 ha perpetual emphyteotic concession plus 11,000 ha under a renewable
                  25-year contract), with a further 30,000 hectares under acquisition.
                </p>
              </div>

              {/* Location */}
              <div className="mt-4 mb-16">
                <h3 className="heading-editorial text-2xl text-charcoal mb-4">Location</h3>
                <div className="line-separator mb-8" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image src="/images/newterra-forest-2.png" alt="Forest species and concession view" fill sizes="(min-width: 1024px) 400px, 100vw" className="object-cover" />
                  </div>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image src="/images/kasai-map.jpeg" alt="Kasai province map" fill sizes="(min-width: 1024px) 400px, 100vw" className="object-cover" />
                  </div>
                </div>
                <p className="text-sm text-stone mt-4 leading-relaxed">
                  All concessions are located in the territory of Mweka, Kasai province — the same district that hosts the group&apos;s
                  Terrakili agricultural project.
                </p>
              </div>

              {/* Collaboration */}
              <div className="mt-4 mb-16 p-10 bg-forest text-warm-white">
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
                <p className="text-charcoal font-medium">Franck Nyimilongo Pieme</p>
                <p className="text-sm text-stone mt-1">Gérant</p>
              </div>
              <div className="p-8 border border-border">
                <p className="text-[11px] font-medium tracking-[0.25em] uppercase text-gold mb-4">Key Facts</p>
                <dl className="space-y-3 text-sm">
                  <div>
                    <dt className="text-stone">Incorporated</dt>
                    <dd className="text-charcoal">2014 (RCCM 14-B-3604)</dd>
                  </div>
                  <div>
                    <dt className="text-stone">Concessions held</dt>
                    <dd className="text-charcoal">13,000 ha</dd>
                  </div>
                  <div>
                    <dt className="text-stone">Under acquisition</dt>
                    <dd className="text-charcoal">30,000 ha</dd>
                  </div>
                  <div>
                    <dt className="text-stone">Sector</dt>
                    <dd className="text-charcoal">Forestry &amp; agriculture</dd>
                  </div>
                </dl>
              </div>
              <div className="p-8 border border-border">
                <p className="text-[11px] font-medium tracking-[0.25em] uppercase text-gold mb-4">Location</p>
                <p className="text-sm text-stone-dark leading-relaxed">
                  02 Avenue Tabou Ley (ex-Tombalbaye), App. A1<br />Kinshasa-Gombe<br />Democratic Republic of Congo
                </p>
              </div>
              <div className="p-8 border border-border">
                <p className="text-[11px] font-medium tracking-[0.25em] uppercase text-gold mb-4">Contact</p>
                <p className="text-sm text-stone-dark">
                  <a href="mailto:ntz@ntz-group.com" className="hover:text-gold transition-colors">ntz@ntz-group.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
