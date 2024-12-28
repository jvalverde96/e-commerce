export interface MenuItem {
  title: string;
  href?: string;
  subMenus?: {
    title: string;
    href: string;
    description: string;
  }[];
}

export interface CarouselItem {
  id: number;
  title: string;
  description: string;
}
