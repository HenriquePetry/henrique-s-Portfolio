"use client";

import Image from "next/image";

/* =======================
   DATA
======================= */

const experiences = [
  {
    company: "AZZAS 2154",
    role: "Senior IT Analyst | Front-End Developer",
    period: "Jun 2025 — Present",
    logo: "/assets/logos/AZZAS.PNG",
  },
  {
    company: "Arezzo&Co",
    role: "Mid-Level IT Analyst | Front-End Developer",
    period: "Apr 2023 — Jul 2025",
    logo: "/assets/logos/ArezzoCo.png",
  },
  {
    company: "Curadoria Digital",
    role: "Junior Front-End Developer",
    period: "Apr 2021 — Mar 2023",
    logo: "/assets/logos/curadoria.png",
  },
  {
    company: "The HEINEKEN Company",
    role: "Apprentice",
    period: "Sep 2018 — Nov 2019",
    logo: "/assets/logos/heineken.png",
  },
];

/* =======================
   CARD BASE
======================= */

function Card({
  title,
  children,
  className = "",
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`p-6 rounded-2xl bg-neutral-900/60 border border-white/10 h-full flex flex-col ${className}`}
    >
      <h4 className="text-2xl font-bold mb-6">{title}</h4>
      {children}
    </div>
  );
}


/* =======================
   COMPONENT
======================= */

export function AboutMe() {
  return (
    <section className="w-full bg-neutral-950 text-white py-24">
      <div className="max-w-[1920px] mx-auto px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">

        {/* =======================
            LEFT — ABOUT ME
        ======================= */}
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
            <strong>conversion-focused e-commerce solutions</strong>.
          </p>

          <p className="text-neutral-400 leading-relaxed">
            Specialized in <strong>React</strong>,{" "}
            <strong>Next.js</strong>,{" "}
            <strong>Shopify</strong>, and{" "}
            <strong>Web Analytics</strong>, working closely with{" "}
            <strong>multidisciplinary teams</strong> to deliver{" "}
            <strong>user-centric digital experiences</strong>.
          </p>

          {/* IMAGE */}
          <div className="relative w-full h-full min-h-[420px] rounded-2xl overflow-hidden border border-white/10 mt-8">
            <Image
              src="/assets/images/1000478769.jpg"
              alt="Front-end developer portrait"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* =======================
            RIGHT — GRID
        ======================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 auto-rows-fr items-stretch">

         <Card title="Experience" className="lg:row-span-2">
  <div className="flex flex-col gap-6 flex-1 justify-between">
    {experiences.map((exp, index) => (
      <div
        key={index}
        className="flex items-start gap-4"
      >
        {/* LOGO */}
        <div className="relative w-14 h-14 rounded-full overflow-hidden border border-white/10 flex-shrink-0">
          <Image
            src={exp.logo}
            alt={exp.company}
            fill
            className="object-cover"
          />
        </div>

        {/* TEXT */}
        <div className="flex flex-col">
          <p className="font-semibold text-white text-base">
            {exp.company}
          </p>
          <p className="text-neutral-400 text-sm leading-snug">
            {exp.role}
          </p>
          <p className="text-pink-400 text-xs mt-1">
            {exp.period}
          </p>
        </div>
      </div>
    ))}
  </div>
</Card>


          {/* EDUCATION */}
          <Card title="Education">
            <ul className="space-y-5 text-sm">
              <li>
                <p className="font-semibold text-white">
                  Systems Analysis & Development
                </p>
                <p className="text-neutral-400">
                  Universidade XYZ
                </p>
                <p className="text-pink-400 text-xs">
                  2018 — 2021
                </p>
              </li>

              <li>
                <p className="font-semibold text-white">
                  Front-End Specialization
                </p>
                <p className="text-neutral-400">
                  Online Courses & Certifications
                </p>
                <p className="text-pink-400 text-xs">
                  Ongoing
                </p>
              </li>
            </ul>
          </Card>

          {/* LANGUAGES */}
          <Card title="Languages">
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between">
                <span>Portuguese</span>
                <span className="text-pink-400">Native</span>
              </li>
              <li className="flex justify-between">
                <span>English</span>
                <span className="text-pink-400">Advanced</span>
              </li>
              <li className="flex justify-between">
                <span>Spanish</span>
                <span className="text-pink-400">Basic</span>
              </li>
            </ul>
          </Card>

          {/* SKILLS — FULL */}
          <Card title="Skills" className="lg:col-span-2">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
              {[
                "React",
                "Next.js",
                "JavaScript",
                "Shopify Plus",
                "GA4",
                "GTM",
                "Performance",
                "SEO",
                "UX/UI",
              ].map((skill) => (
                <div
                  key={skill}
                  className="flex items-center gap-2 text-neutral-300"
                >
                  <span className="text-pink-400">✦</span>
                  {skill}
                </div>
              ))}
            </div>
          </Card>

          {/* CONTACT — FULL */}
          <Card title="Contact" className="lg:col-span-2">
            <ul className="grid sm:grid-cols-2 gap-4 text-sm text-neutral-300">
              <li>📞 +55 11 99999-9999</li>
              <li>📧 your@email.com</li>
              <li>🔗 linkedin.com/in/yourprofile</li>
              <li>📷 instagram.com/yourprofile</li>
            </ul>
          </Card>

        </div>
      </div>
    </section>
  );
}