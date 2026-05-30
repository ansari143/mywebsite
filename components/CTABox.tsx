import Link from "next/link";

type CtaLink = {
  href: string;
  label: string;
};

type CTABoxProps = {
  title: string;
  description: string;
  links: CtaLink[];
};

export default function CTABox({ title, description, links }: CTABoxProps) {
  return (
    <section className="rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 p-6 shadow-sm sm:p-8">
      <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
      <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-700 sm:text-base">{description}</p>
      <div className="mt-5 flex flex-wrap gap-3">
        {links.map((link, index) => (
          <Link
            key={link.href}
            href={link.href}
            className={
              index === 0
                ? "rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700"
                : "rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            }
          >
            {link.label}
          </Link>
        ))}
      </div>
    </section>
  );
}
