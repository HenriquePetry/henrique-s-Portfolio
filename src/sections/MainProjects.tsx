"use client";

import { Container, Title, SimpleGrid } from "@mantine/core";
import { ProjectCard } from "@/components/ProjectCard/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <Container size="lg">
        <Title order={2} mb="xl">
          Projetos
        </Title>

        <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing="lg">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </SimpleGrid>
      </Container>
    </section>
  );
}
