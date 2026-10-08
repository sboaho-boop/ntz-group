import type { Metadata } from "next";
import Image from "next/image";
import { db } from "@/lib/db";

export const metadata: Metadata = {
  title: "Kasai Sud Diamant (KSD)",
  description:
    "Kasai Sud Diamant SARL — diamond exploration and mining in the Kasai province of the DRC, holder of exploitation permits PEPM 9709 and PE 571. An NTZ Group company.",
};

const identification = [
  { label: "Legal form", value: "SARL, incorporated April 2006" },
  { label: "Corporate object", value: "Research, exploitation and commercialisation of mineral substances (diamond)" },
  { label: "Share capital", value: "USD 2,000 — 100 social shares" },
  { label: "Shareholders", value: "New Terra-Z SARL and Ets II & M fils" },
  { label: "Registered office", value: "Avenue Katanga N° 2, App. A1, Kinshasa/Gombe" },
  { label: "Manager (Gérant)", value: "Franck Nyimilongo Pieme" },
];

const titles = [
  { title: "PEPM 9709", holder: "KSD SARL", squares: "34", area: "28.90 km²", granted: "23/12/2019", validity: "10 years", renewal: "22/12/2019" },
  { title: "PE 571", holder: "KSD SPRL", squares: "26", area: "22.10 km²", granted: "13/09/2006", validity: "15 years", renewal: "12/09/2021" },
];

const collaboration = [
  { title: "Equity participation", detail: "Opening of the share capital to a financial partner." },
  { title: "Joint venture", detail: "A joint venture to develop the exploitation of the permits." },
  { title: "Acquisition", detail: "Possibility to acquire the mining title or the company outright." },
  { title: "Exploration spend", detail: "Exploration expenditure estimated at USD 11 million, recoverable before tax and profit sharing." },
];

export default async function KSDPage() {
  let activities: Awaited<ReturnType<typeof db.activity.findMany>> = [];
  let projects: Awaited<ReturnType<typeof db.project.findMany>> = [];
  try {
    const company = await db.company.findUnique({ where: { slug: "ksd-sarl" } });
    activities = await db.activity.findMany({ where: { companyId: company?.id } });
    projects = await db.project.findMany({ where: { companyId: company?.id } });
  } catch {}

  return (
    <>
      <section className="py-24 lg:py-32 bg-earth-dark">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="relative w-24 h-24 md:w-28 md:h-28 bg-warm-white shadow-xl mb-8">
            <Image src="/logos/ksd.png" alt="Kasai Sud Diamant logo" fill sizes="112px" className="object-contain" />
          </div>
          <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-gold mb-6">NTZ Group — Company 01</p>
          <h1 className="heading-display text-5xl md:text-6xl lg:text-7xl text-warm-white mb-2">KASAI SUD DIAMANT</h1>
          <p className="font-serif text-2xl md:text-3xl text-warm-white/60 mb-6">KSD SARL — Diamond Mining</p>
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
                  Kasai Sud Diamant (KSD) is a Congolese limited liability company incorporated in April 2006, dedicated to the
                  research, exploitation and commercialisation of diamonds in the Kasai province of the Democratic Republic of Congo.
                </p>
                <p>
                  Led by its Gérant, Franck Nyimilongo Pieme, KSD holds two exploitation permits covering 60 carrés — a combined
                  area of about 51 km² — and is owned by New Terra-Z SARL and Ets II &amp; M fils. The company leverages the DRC&apos;s
                  significant mineral wealth and the strategic importance of the Kasai diamond fields.
                </p>
              </div>

              <div className="relative aspect-[16/9] overflow-hidden mt-12 mb-16">
                <Image
                  src="/images/ksd-diamonds-cover.png"
                  alt="Kasai Sud Diamant — rough diamonds"
                  fill
                  sizes="(min-width: 1024px) 850px, 100vw"
                  className="object-cover"
                />
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
                <div className="overflow-x-auto border border-border">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-warm-cream text-left">
                        <th className="p-4 font-medium tracking-wide text-charcoal">Title</th>
                        <th className="p-4 font-medium tracking-wide text-charcoal">Holder</th>
                        <th className="p-4 font-medium tracking-wide text-charcoal">Carrés</th>
                        <th className="p-4 font-medium tracking-wide text-charcoal">Area</th>
                        <th className="p-4 font-medium tracking-wide text-charcoal">Granted</th>
                        <th className="p-4 font-medium tracking-wide text-charcoal">Validity</th>
                      </tr>
                    </thead>
                    <tbody>
                      {titles.map((t) => (
                        <tr key={t.title} className="border-t border-border">
                          <td className="p-4 text-charcoal font-medium">{t.title}</td>
                          <td className="p-4 text-stone-dark">{t.holder}</td>
                          <td className="p-4 text-stone-dark">{t.squares}</td>
                          <td className="p-4 text-stone-dark">{t.area}</td>
                          <td className="p-4 text-stone-dark">{t.granted}</td>
                          <td className="p-4 text-stone-dark">{t.validity}</td>
                        </tr>
                      ))}
                      <tr className="border-t border-border bg-warm-cream/50">
                        <td className="p-4 text-charcoal font-medium">Total</td>
                        <td className="p-4" />
                        <td className="p-4 text-charcoal font-medium">60</td>
                        <td className="p-4 text-charcoal font-medium">51 km²</td>
                        <td className="p-4" />
                        <td className="p-4" />
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-stone mt-4 leading-relaxed">
                  Legal status of the titles: renewal pending, placed under force majeure, with the possibility of obtaining an
                  additional three-year period.
                </p>
              </div>

              {/* Location & exploitation gallery */}
              <div className="mt-4 mb-16">
                <h3 className="heading-editorial text-2xl text-charcoal mb-4">Location & Exploitation</h3>
                <div className="line-separator mb-8" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image src="/images/ksd-location-map.jpeg" alt="KSD permit location map" fill sizes="(min-width: 1024px) 400px, 100vw" className="object-cover" />
                  </div>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image src="/images/ksd-concession-map.jpg" alt="KSD concession map" fill sizes="(min-width: 1024px) 400px, 100vw" className="object-cover" />
                  </div>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image src="/images/ksd-pe571-artisanal-1.jpeg" alt="Artisanal exploitation on PE 571" fill sizes="(min-width: 1024px) 400px, 100vw" className="object-cover" />
                  </div>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image src="/images/ksd-pe571-artisanal-2.jpeg" alt="Artisanal exploitation on PE 571" fill sizes="(min-width: 1024px) 400px, 100vw" className="object-cover" />
                  </div>
                </div>
              </div>

              {/* Production & certification */}
              <div className="mt-4 mb-16">
                <h3 className="heading-editorial text-2xl text-charcoal mb-4">Production & Certification</h3>
                <div className="line-separator mb-8" />
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                  {["ksd-diamond-parcel", "ksd-diamond-parcels", "ksd-diamonds-tray", "ksd-production-stats", "ksd-resource-statement", "ksd-kimberley-certificate"].map((img) => (
                    <div key={img} className="relative aspect-[4/3] overflow-hidden">
                      <Image src={`/images/${img}.jpg`} alt="Kasai Sud Diamant production and certification" fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" />
                    </div>
                  ))}
                </div>
                <p className="text-sm text-stone mt-4 leading-relaxed">
                  Parcels are exported in line with the Kimberley Process certification scheme, with production assessed by the
                  CEEC (Centre d&apos;Expertise, d&apos;Évaluation et de Certification des substances minérales précieuses et semi-précieuses).
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
                <p className="text-charcoal font-medium">Franck Nyimilongo Pieme</p>
                <p className="text-sm text-stone mt-1">Gérant</p>
              </div>
              <div className="p-8 border border-border">
                <p className="text-[11px] font-medium tracking-[0.25em] uppercase text-gold mb-4">Key Facts</p>
                <dl className="space-y-3 text-sm">
                  <div>
                    <dt className="text-stone">Incorporated</dt>
                    <dd className="text-charcoal">April 2006</dd>
                  </div>
                  <div>
                    <dt className="text-stone">Permits</dt>
                    <dd className="text-charcoal">PEPM 9709 &amp; PE 571</dd>
                  </div>
                  <div>
                    <dt className="text-stone">Combined area</dt>
                    <dd className="text-charcoal">~51 km² (60 carrés)</dd>
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
                  Avenue Katanga N° 2, App. A1<br />Kinshasa-Gombe<br />Democratic Republic of Congo
                </p>
              </div>
              <div className="p-8 border border-border">
                <p className="text-[11px] font-medium tracking-[0.25em] uppercase text-gold mb-4">Contact</p>
                <p className="text-sm text-stone-dark">
                  <a href="mailto:ksd@ntz-group.com" className="hover:text-gold transition-colors">ksd@ntz-group.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
