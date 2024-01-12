import { StaticImageData } from "next/image";

export interface projectCardProps {
  card: IProjectCard[];
}

export interface IProjectCard {
  img: StaticImageData;
  title: string;
  tecnologies: string[];
  link: string;
}
