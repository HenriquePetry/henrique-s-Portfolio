// src/components/comment/CommentHtml.tsx

import {
  Avatar,
  Group,
  Paper,
  Text,
  TypographyStylesProvider,
} from "@mantine/core";

import classes from "./CommentHtml.module.css";

interface CommentProps {
  name: string;
  role: string;
  company: string;
  date: string;
  avatar?: string;
  text: string;
  featured?: boolean;
}

export function CommentHtml({
  name,
  role,
  company,
  date,
  avatar,
  text,
  featured = false,
}: CommentProps) {
  return (
    <Paper
      radius="md"
      className={`${classes.comment} ${
        featured ? classes.featured : ""
      }`}
    >
      {/* Quote */}
      <span className={classes.quote}>“</span>

      {/* Header */}
      <Group className={classes.header} align="flex-start">
        <Avatar src={avatar} alt={name} radius="xl" size="md" />

        <div>
          <Text fz="sm" fw={600}>
            {name}
          </Text>

          <Text fz="xs" c="dimmed">
            {role}
          </Text>

          <Text fz="xs" c="dimmed">
            {company}
          </Text>

          <Text fz="xs" c="dimmed">
            {date}
          </Text>
        </div>
      </Group>

      {/* Body */}
      <TypographyStylesProvider className={classes.body}>
        <div className={classes.content}>
          <p>{text}</p>
        </div>
      </TypographyStylesProvider>
    </Paper>
  );
}
