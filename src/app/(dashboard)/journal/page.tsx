import NewEntryCard from "@/components/newEntry";
import EntryCard from "@/components/entryCard";
import getEntries from "@/utils/getEntries";
import Link from "next/link";

const journalPage = async () => {
  const entries = await getEntries();
  return (
    <div className="p-10 h-full w-full">
      <h2 className="text-3xl mb-8">Journal</h2>
      <div className="grid grid-cols-3 gap-4 ">
        <NewEntryCard />
        {entries.map((entry) => (
          <Link href={`/journal/${entry.id}`} key={entry.id}>
            <EntryCard entry={entry} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default journalPage;
