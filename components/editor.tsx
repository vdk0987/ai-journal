"use client";

import { useState } from "react";
import { useAutosave } from "react-autosave";
import { updateEntry } from "@/utils/api";

const Editor = ({ entry }) => {
  const [content, setContent] = useState(entry.content);
  const [isLoading, setIsloading] = useState(false);
  const { id } = entry;
  useAutosave({
    data: content,
    onSave: async (_value) => {
      setIsloading(true);
      const updated = await updateEntry(id, _value);
      setIsloading(false);
    },
  });
  return (
    <div className="w-full h-full">
      {isLoading && <p>Saving...</p>}
      <textarea
        className="w-full h-full p-0 text-xl outline-none"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
    </div>
  );
};

export default Editor;
