import { ReactNode } from "react";

type CustomLinkProps = {
  href: string;
  title: string;
  className?: string;
  onClick?: any;
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

type DetailsProps = {
  position: string;
  company: string;
  companyLink: string;
  time: string;
  address: string;
  work: string;
  workTwo?: string;
  className?: string;
};

type EduProps = {
  type: string;
  time: string;
  place: string;
  info: string;
  className?: string;
};

type ProjectProps = {
  type: string;
  title: string;
  summary?: string;
  img: any;
  link: string;
  github: string;
  className?: string;
};
