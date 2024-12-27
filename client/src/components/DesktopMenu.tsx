'use client';
import * as React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

interface SubMenuItem {
  title: string;
  href: string;
  description: string;
}

const aboutItems: SubMenuItem[] = [
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
];

const storeItems: SubMenuItem[] = [
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
    description: 'Descubre las últimas novedades en el mundo de la perfumería.',
  },
];

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});

ListItem.displayName = 'ListItem';

const DesktopMenu = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Acerca de</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    {/* <Icons.logo className="h-6 w-6" /> */}
                    {/* logo here */}
                    <div className="mb-2 mt-4 text-lg font-medium">
                      The Parfum Society
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Perfumería 100% original
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              {aboutItems.map((item) => (
                <ListItem key={item.title} href={item.href} title={item.title}>
                  {item.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Tienda</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {storeItems.map((item) => (
                <ListItem key={item.title} title={item.title} href={item.href}>
                  {item.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/contact" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contacto
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default DesktopMenu;
