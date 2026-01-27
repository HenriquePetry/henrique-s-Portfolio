
"use client";

import { useMediaQuery } from "@mantine/hooks";
import { Carousel } from "@mantine/carousel";
import { motion } from "framer-motion";

import { CommentHtml } from "@/components/comment/CommentHtml";
//import { reviews } from "@/data/reviews"; // se estiver separado

export const reviews = [
  {
    name: "Nathan Finger",
    role: "Technical Product Manager",
    featured: true,
    company: "Arezzo&Co",
    date: "September 2025",
    text: "I worked with Henrique for two years in the international e-commerce operations team at Arezzo&Co and witnessed firsthand his strong collaboration skills. He consistently took on key tactical roles in large-scale projects, especially those requiring alignment between multiple teams and external partners. Henrique stands out for his strong execution mindset, proactive communication, and ability to connect business and technology to deliver effective solutions.",
  },

  {
    name: "Marcelo Sangiogo",
    role: "Business Development Manager",
    company: "Curadoria Digital - Agency",
    date: "August 2022",
    text: "Henrique learns new skills very quickly and becomes essential to project development, especially when working on international websites at Curadoria Digital. His adaptability, technical curiosity, and commitment make him a valuable professional in complex environments.",
  },

  {
    name: "Nicholas Tadeu Santos da Silva",
    role: "Senior Data Analyst",
    company: "Arezzo&Co",
    date: "July 2024",
    text: "Henrique is a highly well-rounded professional with above-average technical skills, outstanding organization, and clear communication. Working with him on international operations projects at Arezzo&Co was extremely productive. His presence makes teamwork more efficient and structured.",
  },

  {
    name: "Bruno Hippler",
    role: "Logistics & Operations Specialist",
    company: "Arezzo&Co",
    date: "July 2024",
    text: "Henrique consistently brought innovative solutions to the challenges we faced in international e-commerce operations at Arezzo&Co. His dedication, problem-solving mindset, and passion for excellence positively influenced the entire team.",
  },

  {
    name: "Eduarda Saft",
    role: "Event Production Supervisor",
    company: "Curadoria Digital - Agency",
    date: "June 2022",
    text: "Henrique was an excellent professional at Curadoria Digital, always focused on his personal growth and on strengthening the team. He demonstrates strong responsibility, commitment, and a continuous improvement mindset.",
  },

  {
    name: "Carlos Eduardo S. Voltan",
    role: "Senior Quality Assurance Analyst",
    company: "Heineken",
    date: "April 2021",
    text: "Henrique is a calm, respectful, and highly competent professional. While working together at Heineken, he consistently demonstrated strong work ethic, technical discipline, and dedication to delivering high-quality results.",
  },

  {
    name: "Anna Paula Bangel Pereira",
    role: "Digital Marketing Analyst",
    company: "BIBI Shoes",
    date: "August 2022",
    text: "Henrique is highly committed to his deliveries at Arezzo&Co and consistently dynamic in solving challenges. He actively seeks professional development and contributes significantly to team performance through his technical expertise and collaborative approach.",
  },

  {
    name: "Carolina Deckmann",
    role: "Senior HR Business Partner",
    featured: true,
    company: "Heineken",
    date: "August 2020",
    text: "Henrique is a strong team player with solid technical qualifications and a strong sense of ownership. During his time at Heineken, he consistently delivered high-quality work with responsibility and professionalism.",
  },

  {
    name: "Edimar Silva",
    role: "Production Coordinator",
    company: "Heineken",
    date: "August 2020",
    text: "Henrique is proactive, responsible, and highly reliable. At Heineken, he consistently demonstrated commitment and professionalism in his daily work.",
  },
];





export default function CommentSection() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isTablet = useMediaQuery("(max-width: 1024px)");

  return (
    <section
      id="recommendations"
      className="max-w-[1920px] mx-auto px-6 lg:px-12 py-24"
    >
      {/* Title */}
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Testimonials
        </h2>

        <p className="text-gray-400">
          What people say about my work
        </p>
      </div>

      {/* SLIDER (ALL DEVICES) */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Carousel
          slideSize={
            isMobile
              ? "90%"
              : isTablet
              ? "50%"
              : "33.333333%"
          }
          slideGap="lg"
          align="start"
          loop
          dragFree
          withIndicators
          className="overflow-visible"
        >
          {reviews.map((review, index) => (
            <Carousel.Slide key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                }}
                className="h-full"
              >
                <CommentHtml {...review} />
              </motion.div>
            </Carousel.Slide>
          ))}
        </Carousel>
      </motion.div>
    </section>
  );
}
