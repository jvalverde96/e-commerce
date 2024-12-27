import React, { useState } from 'react';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from './ui/sidebar';
import { X } from 'lucide-react';

const MobileMenu = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((previousState) => !previousState);
  };

  return (
    <SidebarProvider open={isSidebarOpen} className="min-h-0">
      <SidebarTrigger onClick={toggleSidebar} />

      <Sidebar collapsible="icon">
        <SidebarHeader className="flex items-end p-4">
          <X
            className="cursor-pointer"
            strokeWidth="1.5"
            onClick={toggleSidebar}
          />
        </SidebarHeader>
        <SidebarContent></SidebarContent>
        <SidebarFooter></SidebarFooter>
        <SidebarRail />
      </Sidebar>
    </SidebarProvider>
  );
};

export default MobileMenu;
