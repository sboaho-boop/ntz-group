import Image from "next/image";
import Link from "next/link";
import { COMPANIES, companyHref } from "@/lib/companies";

export default function CompaniesSection() {
  return (
    <section className="py-24 lg:py-32 bg-warm-cream">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-gold mb-4">
            NTZ Group
          </p>
          <h2 className="heading-editorial text-4xl md:text-5xl lg:text-6xl text-charcoal mb-4">
            Our Companies
          </h2>
          <div className="line-separator mx-auto mb-6" />
          <p className="text-stone-dark text-lg max-w-xl mx-auto">
            Five companies. One commitment to building meaningful business
            opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COMPANIES.map((company) => (
            <Link
              key={company.slug}
              href={companyHref(company.slug)}
              className="group relative overflow-hidden"
            >
              <div className="relative aspect-[16/10] overflow-hidden flex flex-col justify-end p-10 lg:p-14 transition-transform duration-700 group-hover:scale-[1.02]">
                <Image
                  src={company.image}
                  alt={company.name}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${company.gradient}`} />
                <div className="absolute top-5 right-5 z-10 w-16 h-16 md:w-20 md:h-20 bg-warm-white shadow-lg">
                  <Image
                    src={company.logo}
                    alt={`${company.name} logo`}
                    fill
                    sizes="80px"
                    className="object-contain"
                  />
                </div>
                <div className="relative z-10">
                  <p className="text-[11px] font-medium tracking-[0.25em] uppercase text-gold mb-3">
                    {company.acronym}
                  </p>
                  <h3 className="heading-display text-3xl lg:text-4xl text-warm-white mb-3">
                    {company.name}
                  </h3>
                  <p className="text-warm-white/60 text-sm max-w-md mb-6">
                    {company.blurb}
                  </p>
                  <span className="inline-flex items-center gap-2 text-[12px] font-semibold tracking-widest uppercase text-gold group-hover:text-gold-light transition-colors duration-300">
                    Explore {company.acronym}
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
