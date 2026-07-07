"use client";

import { useState } from "react";
import { useAutosave } from "react-autosave";
import { updateEntry } from "@/utils/api";
import { useJournalEntry } from "./journal-entry-context";

const Editor = () => {
  const { entry, setEntry } = useJournalEntry();
  const [isLoading, setIsloading] = useState(false);

  useAutosave({
    data: entry.content,
    onSave: async (_value) => {
      setIsloading(true);
      const updated = await updateEntry(entry.id, _value);
      if (updated) {
        setEntry(updated);
      }
      setIsloading(false);
    },
  });
  return (
    <div className="w-full h-full">
      {isLoading && <p>Saving...</p>}
      <textarea
        className="w-full h-full p-0 text-xl outline-none"
        value={entry.content}
        onChange={(e) =>
          setEntry((previousEntry) => ({
            ...previousEntry,
            content: e.target.value,
          }))
        }
      />
    </div>
  );
};

export default Editor;
