import AiAnalysis from "@/components/ai-analysis";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
} from "@/components/ui/sidebar";

export default async function JournalEntryLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="flex h-full gap-4">
      <div className="min-w-0 flex-1">{children}</div>

      <Sidebar side="right" collapsible="none" className="hidden md:flex border-l">
        <SidebarHeader className="h-16 border-b px-4">
          <h2 className="text-sm font-medium">AI Analysis</h2>
        </SidebarHeader>
        <SidebarContent className="p-4">
          <AiAnalysis entryId={id} />
        </SidebarContent>
      </Sidebar>
    </div>
  );
}
