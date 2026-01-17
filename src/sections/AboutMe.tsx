"use client";

import Image from "next/image";

const experiences = [
  {
    role: "Senior IT Analyst | Front-End Developer",
    company: "AZZAS 2154",
    url: "https://www.azzas2154.com.br",
    period: "Jun 2025 — Present",
    description: (
      <>
        Working on <strong>international e-commerce platforms</strong> for brands
        such as <strong>Arezzo, Schutz, and Alexandre Birman</strong>, focusing on{" "}
        <strong>Shopify Plus development</strong>,{" "}
        <strong>React-based components</strong>, and{" "}
        <strong>performance optimization</strong>. Responsible for{" "}
        <strong>GA4</strong> and <strong>Google Tag Manager</strong> (client-side
        and server-side), <strong>custom DataLayer architecture</strong>, and{" "}
        <strong>Core Web Vitals optimization</strong>, directly impacting{" "}
        <strong>conversion rate</strong>, <strong>AOV</strong>, and{" "}
        <strong>user experience (UX)</strong>.
      </>
    ),
    logo: "/assets/logos/AZZAS.PNG",
  },
  {
    role: "Mid-Level IT Analyst | Front-End Developer",
    company: "Arezzo&Co",
    url: "https://www.linkedin.com/company/arezzoco/",
    period: "Apr 2023 — Jul 2025",
    description: (
      <>
        Front-end development and technical operations for{" "}
        <strong>large-scale international e-commerce projects</strong>, working
        with <strong>Shopify (Liquid)</strong>,{" "}
        <strong>JavaScript</strong>, and <strong>React</strong>. Actively involved
        in <strong>bug fixing</strong>, <strong>deploys</strong>,{" "}
        <strong>platform maintenance</strong>, and{" "}
        <strong>analytics tracking</strong> using <strong>GA4</strong> and{" "}
        <strong>GTM</strong>. Close collaboration with{" "}
        <strong>Marketing</strong>, <strong>CRM</strong>,{" "}
        <strong>Logistics</strong>, and <strong>Finance teams</strong>.
      </>
    ),
    logo: "/assets/logos/ArezzoCO.png",
  },
  {
    role: "Junior Front-End Developer",
    company: "Curadoria Digital",
    url: "https://www.linkedin.com/company/curadoria-digital/",
    period: "Apr 2021 — Mar 2023",
    description: (
      <>
        Developed <strong>responsive websites</strong> and{" "}
        <strong>digital experiences</strong> focused on{" "}
        <strong>UI/UX</strong>, <strong>performance</strong>, and{" "}
        <strong>conversion</strong>. Built interfaces using{" "}
        <strong>HTML</strong>, <strong>CSS</strong>,{" "}
        <strong>JavaScript</strong>, and{" "}
        <strong>WordPress (Elementor)</strong>, including{" "}
        <strong>theme and plugin customization</strong> and{" "}
        <strong>MySQL integration</strong>. Translated{" "}
        <strong>Figma</strong> and <strong>Photoshop</strong> designs into{" "}
        <strong>production-ready</strong> websites.
      </>
    ),
    logo: "/assets/logos/curadoria.png",
  },
  {
    role: "Apprentice",
    company: "The HEINEKEN Company",
    url: "https://www.theheinekencompany.com/age-gate/1",
    period: "Sep 2018 — Nov 2019",
    description: (
      <>
        Supported <strong>IT and administrative processes</strong>, including{" "}
        <strong>supplier management</strong>,{" "}
        <strong>data organization using Excel</strong>, and{" "}
        <strong>process optimization</strong> through the{" "}
        <strong>5S methodology</strong>. Developed strong{" "}
        <strong>communication</strong>, <strong>organization</strong>, and{" "}
        <strong>problem-solving skills</strong> in a corporate environment.
      </>
    ),
    logo: "/assets/logos/heineken.png",
  },
];

export function AboutMe() {
  return (
    <section className="w-full bg-neutral-950 text-white py-24">
      <div className="max-w-[1920px] mx-auto px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">

        {/* LEFT — ABOUT ME */}
        <div className="flex flex-col gap-6 max-w-2xl h-full">
          <h2 className="text-4xl font-bold leading-tight">
            About Me
          </h2>

          <p className="text-neutral-400 leading-relaxed">
            I am a <strong>Senior Systems Analyst</strong> and{" "}
            <strong>Front-End Developer</strong> with over{" "}
            <strong>5 years of experience</strong> building{" "}
            <strong>high-performance</strong>,{" "}
            <strong>scalable</strong>, and{" "}
            <strong>conversion-focused e-commerce solutions</strong> for{" "}
            <strong>international brands</strong>.
          </p>

          <p className="text-neutral-400 leading-relaxed">
            Specialized in <strong>React</strong>,{" "}
            <strong>Next.js</strong>,{" "}
            <strong>Shopify (Liquid)</strong>,{" "}
            <strong>JavaScript</strong>, and{" "}
            <strong>Web Analytics</strong>, I work at the intersection of{" "}
            <strong>technology and business</strong>, collaborating with{" "}
            <strong>multidisciplinary teams</strong> to deliver{" "}
            <strong>data-driven</strong>,{" "}
            <strong>user-centric digital experiences</strong>.
          </p>

          {/* IMAGE */}
          <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 mt-8">
            <Image
              src="/assets/images/1000478769.jpg"
              alt="Front-end developer workspace"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* RIGHT — WORK EXPERIENCE */}
        <div>
          <h3 className="text-4xl font-bold leading-tight mb-6">
            Work Experience
          </h3>

          <div className="flex flex-col gap-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="flex gap-5 p-6 rounded-2xl bg-neutral-900/60 border border-white/10 hover:border-white/20 transition"
              >
                {/* LOGO */}
                <a
                  href={exp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-20 h-20 rounded-xl overflow-hidden bg-white shrink-0"
                >
                  <Image
                    src={exp.logo}
                    alt={`${exp.company} company logo`}
                    fill
                    className="object-contain p-2"
                  />
                </a>

                {/* CONTENT */}
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <h4 className="text-lg font-semibold">
                      {exp.role}
                    </h4>

                    <span className="text-sm text-neutral-500">
                      {exp.period}
                    </span>
                  </div>

                  {exp.url ? (
                    <a
                      href={exp.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-neutral-300 hover:text-white transition"
                    >
                      {exp.company}
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-neutral-400">
                      {exp.company}
                    </p>
                  )}

                  <p className="text-sm text-neutral-300 mt-3 leading-relaxed max-w-2xl">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
