import { ReactNode } from "react";

type CustomLinkProps = {
  href: string;
  title: string;
  className?: string;
};

type LayoutProps = {
  children: ReactNode;
  className?: string;
};

type AnimatedTextProps = {
  text: string;
  className?: string;
};

type AnimateValueProps = {
  value: number;
};

type SkillsProps = {
  name: string;
  x: string;
  y: string;
};
