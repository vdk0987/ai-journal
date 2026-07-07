import AiAnalysis from "@/components/ai-analysis";
import { JournalEntryProvider } from "@/components/journal-entry-context";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
} from "@/components/ui/sidebar";
import getEntry from "@/utils/getEntry";
import { notFound } from "next/navigation";

export default async function JournalEntryLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const entry = await getEntry(id);

  if (!entry) {
    notFound();
  }

  return (
    <JournalEntryProvider
      initialEntry={{
        id: entry.id,
        content: entry.content,
        analysis: entry.analysis,
      }}
    >
      <div className="flex h-full gap-4">
        <div className="min-w-0 flex-1">{children}</div>

        <Sidebar side="right" collapsible="none" className="hidden md:flex border-l">
          <SidebarHeader className="h-16 border-b px-4">
            <h2 className="text-sm font-medium">AI Analysis</h2>
          </SidebarHeader>
          <SidebarContent className="p-4">
            <AiAnalysis />
          </SidebarContent>
        </Sidebar>
      </div>
    </JournalEntryProvider>
  );
}
