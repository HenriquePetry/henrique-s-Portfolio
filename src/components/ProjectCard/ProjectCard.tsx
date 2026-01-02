"use client";

import { Card, Image, Text, Badge, Group, Stack, Button } from "@mantine/core";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  stack: string[];
  url?: string;
}

export function ProjectCard({
  title,
  description,
  image,
  stack,
  url,
}: ProjectCardProps) {
  return (
    <Card withBorder radius="md" p="md">
      <Card.Section>
        <Image src={image} alt={title} height={160} />
      </Card.Section>

      <Stack mt="md" gap="xs">
        <Text fw={600}>{title}</Text>
        <Text size="sm" c="dimmed">
          {description}
        </Text>

        <Group gap={6} mt="xs">
          {stack.map((tech) => (
            <Badge key={tech} variant="light">
              {tech}
            </Badge>
          ))}
        </Group>

        {url && (
          <Button
            component="a"
            href={url}
            target="_blank"
            mt="sm"
            variant="light"
          >
            Ver projeto
          </Button>
        )}
      </Stack>
    </Card>
  );
}
