import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import MobileNav from "@/components/mobile-nav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />

      <SidebarTrigger className="max-sm:hidden mt-2" />
      <main className="p-2 w-full">
        <MobileNav />
        {children}
      </main>
    </SidebarProvider>
  );
}
