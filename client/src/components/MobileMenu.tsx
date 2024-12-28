import React, { useState } from 'react';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from './ui/sidebar';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { ChevronRight, X } from 'lucide-react';
import { menuItems } from '@/constants';

const MobileMenu = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((previousState) => !previousState);
  };

  return (
    <SidebarProvider open={isSidebarOpen} className="min-h-0">
      <SidebarTrigger onClick={toggleSidebar} />

      <Sidebar collapsible="icon">
        <SidebarHeader className="flex flex-row items-center justify-between p-4">
          <h1 className="text-md sm:text-xl ">The Parfum Society</h1>
          <X
            className="cursor-pointer"
            strokeWidth="1.5"
            onClick={toggleSidebar}
          />
        </SidebarHeader>

        <SidebarContent className="mt-6">
          <SidebarGroup>
            <SidebarMenu>
              {menuItems.map((item) => (
                <Collapsible
                  key={item.title}
                  asChild
                  className="group/collapsible"
                >
                  <SidebarMenuItem>
                    {item.subMenus ? (
                      <>
                        <CollapsibleTrigger asChild>
                          <SidebarMenuButton tooltip={item.title}>
                            <span>{item.title}</span>
                            <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                          </SidebarMenuButton>
                        </CollapsibleTrigger>

                        <CollapsibleContent>
                          <SidebarMenuSub>
                            {item.subMenus.map((subItem) => (
                              <SidebarMenuSubItem key={subItem.title}>
                                <SidebarMenuSubButton asChild>
                                  <a href={subItem.href}>
                                    <span>{subItem.title}</span>
                                  </a>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                            ))}
                          </SidebarMenuSub>
                        </CollapsibleContent>
                      </>
                    ) : (
                      <SidebarMenuButton tooltip={item.title}>
                        <span>{item.title}</span>
                      </SidebarMenuButton>
                    )}
                  </SidebarMenuItem>
                </Collapsible>
              ))}
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter></SidebarFooter>
        <SidebarRail />
      </Sidebar>
    </SidebarProvider>
  );
};

export default MobileMenu;
