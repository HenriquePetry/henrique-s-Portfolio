"use client";

import { Card, Image, Text, Badge, Group, Stack, Button } from "@mantine/core";
import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  stack: string[];
  url?: string;
  githubUrl?: string;
  ctaLabel?: string;
}

export function ProjectCard({
  title,
  description,
  image,
  stack,
  url,
  githubUrl,
  ctaLabel,
}: ProjectCardProps) {
  return (
    <Card
      withBorder
      radius="md"
      p="md"
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <Card.Section>
        <Image src={image} alt={title} height={160} />
      </Card.Section>

      <Stack mt="md" gap="xs" style={{ flex: 1 }}>
        <Text fw={600}>{title}</Text>

        <Text
          size="sm"
          c="dimmed"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {description}
        </Text>

        <Group gap={6} mt="xs">
          {stack.map((tech) => (
            <Badge key={tech} variant="dark">
              {tech}
            </Badge>
          ))}
        </Group>
      </Stack>

      {(url || githubUrl) && (
        <Group mt="sm" grow>
          {url && (
            <Button
              component="a"
              href={url}
              target="_blank"
              leftSection={<IconExternalLink size={16} />}
            >
              {ctaLabel ?? "View Website"}
            </Button>
          )}

          {githubUrl && (
            <Button
              component="a"
              href={githubUrl}
              target="_blank"
              variant="outline"
              leftSection={<IconBrandGithub size={16} />}
            >
              GitHub
            </Button>
          )}
        </Group>
      )}
    </Card>
  );
}
