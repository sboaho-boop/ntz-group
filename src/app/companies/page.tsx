import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { COMPANIES, companyHref } from "@/lib/companies";

export const metadata: Metadata = {
  title: "Our Companies",
  description:
    "NTZ Group — five companies building meaningful business opportunities across mining, energy, forestry and agriculture in the Democratic Republic of Congo.",
};

export default function CompaniesPage() {
  return (
    <>
      <section className="py-24 lg:py-32 bg-charcoal-dark">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-gold mb-6">NTZ Group</p>
          <h1 className="heading-display text-5xl md:text-6xl lg:text-7xl text-warm-white mb-6">Our Companies</h1>
          <div className="line-separator mb-8" />
          <p className="text-xl text-warm-white/60 max-w-2xl">
            Five companies. One commitment to building meaningful business opportunities across the Democratic Republic of Congo.
          </p>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-warm-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {COMPANIES.map((company) => (
              <div key={company.slug} className="group">
                <div className="relative aspect-[16/10] overflow-hidden flex flex-col justify-end p-10 lg:p-14 mb-8 transition-transform duration-700 group-hover:scale-[1.01]">
                  <Image
                    src={company.image}
                    alt={company.name}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${company.gradient}`} />
                  <div className="absolute top-6 right-6 z-10 w-20 h-20 md:w-24 md:h-24 bg-warm-white shadow-lg">
                    <Image
                      src={company.logo}
                      alt={`${company.name} logo`}
                      fill
                      sizes="96px"
                      className="object-contain"
                    />
                  </div>
                  <div className="relative z-10">
                    <p className="text-[11px] font-medium tracking-[0.25em] uppercase text-gold mb-3">{company.order}</p>
                    <h2 className="heading-display text-3xl lg:text-4xl text-warm-white mb-1">{company.name}</h2>
                    <p className="font-serif text-xl text-warm-white/60">{company.sector}</p>
                  </div>
                </div>
                <div className="space-y-4 mb-8">
                  <p className="text-stone-dark leading-relaxed">{company.blurb}</p>
                  <p className="text-sm text-stone">
                    <strong className="text-charcoal">Acronym:</strong> {company.acronym}
                  </p>
                </div>
                <Link
                  href={companyHref(company.slug)}
                  className={`inline-flex items-center gap-2 px-8 py-3 ${company.button} text-warm-white text-[13px] font-semibold tracking-widest uppercase transition-colors duration-300`}
                >
                  Explore {company.acronym} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
