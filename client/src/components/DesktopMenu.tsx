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
import { menuItems } from '@/constants';

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
  const aboutItem = menuItems.find((item) => item.title === 'Acerca de');
  const storeItem = menuItems.find((item) => item.title === 'Tienda');
  const contactItem = menuItems.find((item) => item.title === 'Contacto');

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>{aboutItem?.title}</NavigationMenuTrigger>
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
              {aboutItem?.subMenus?.map((item) => (
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
              {storeItem?.subMenus?.map((item) => (
                <ListItem key={item.title} title={item.title} href={item.href}>
                  {item.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href={contactItem?.href || 'contact'} legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              {contactItem?.title}
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default DesktopMenu;
