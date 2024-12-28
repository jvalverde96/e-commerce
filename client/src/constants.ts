import { CarouselItem, MenuItem } from './models/models';

export const menuItems: MenuItem[] = [
  {
    title: 'Acerca de',
    subMenus: [
      {
        title: 'Nosotros',
        href: '/about-us',
        description: 'Conoce quiénes somos.',
      },
      {
        title: 'SubMenu2',
        href: '/submenu2',
        description: 'Lorem ipsum dolor outer.',
      },
      {
        title: 'SubMenu3',
        href: '/submenu3',
        description: 'Lorem ipsum dolor outer.',
      },
    ],
  },
  {
    title: 'Tienda',
    subMenus: [
      {
        title: 'Perfumes',
        href: '/perfumes',
        description:
          'Explora nuestra selección de fragancias únicas para cada ocasión.',
      },
      {
        title: 'Testers',
        href: '/testers',
        description:
          'Fragancias originales en presentación de prueba a un precio más accesible.',
      },
      {
        title: 'Decants',
        href: '/decants',
        description:
          'Fragancias en presentaciones pequeñas, ideales para llevar contigo.',
      },
      {
        title: 'Sets de regalo',
        href: '/gift-sets',
        description:
          'Regalos perfectos: combina fragancias con elegancia y estilo.',
      },
      {
        title: 'Lo más vendido',
        href: '/best-sellers',
        description: 'Descubre los perfumes favoritos de nuestros clientes.',
      },
      {
        title: 'Ofertas',
        href: '/sale',
        description: 'Descubre nuestros productos en precio de oferta.',
      },
      {
        title: 'Nuevos ingresos',
        href: '/new-arrivals',
        description:
          'Descubre las últimas novedades en el mundo de la perfumería.',
      },
    ],
  },
  {
    title: 'Contacto',
    href: 'contact',
  },
];

export const carouselItems: CarouselItem[] = [
  {
    id: 1,
    title: 'Envíos gratis dentro del GAM.',
    description:
      'Recibe el envío de tu orden completamente gratis en compras mayores a 60 000.',
  },
  {
    id: 2,
    title: '10% de descuento en tu próxima compra.',
    description:
      'Sube una historia en Instagram de tu compra en nuestra tienda, etiqueta la página y te haremos llegar un código de descuento para tu siguiente compra.',
  },
  {
    id: 3,
    title: 'Decants de 5ml como regalía por tu compra.',
    description:
      'En compras mayores a 40 000 te daremos una regalía de un decant de 5ml en perfumes seleccionados.',
  },
  {
    id: 4,
    title: 'Los mejores precios de Costa Rica en perfumería.',
    description: 'Disfruta de un precio mayorista para tus perfumes favoritos',
  },
];
