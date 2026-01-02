"use client";

import { Container, Title, SimpleGrid } from "@mantine/core";
import { ProjectCard } from "@/components/ProjectCard/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <Container size="xl">
        <Title order={2} mb="xl">
          My Portfolio
        </Title>

        <SimpleGrid cols={{base: 1, sm: 2, md: 3, lg: 4, xl: 4  }} spacing="sm">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </SimpleGrid>
      </Container>
    </section>
  );
}
