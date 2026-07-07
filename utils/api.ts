import type { JournalEntryState } from "@/components/journal-entry-context";

const getURL = (path: string) => {
  return window.location.origin + path;
};

export const updateEntry = async (
  id: string,
  content: string,
): Promise<JournalEntryState | undefined> => {
  const res = await fetch(
    new Request(getURL(`/api/journal/${id}`), {
      method: "PATCH",
      body: JSON.stringify({ content }),
    }),
  );
  if (res.ok) {
    const data = await res.json();
    return data.data;
  }
};

export const createEntry = async () => {
  const res = await fetch(
    new Request(getURL("/api/journal"), {
      method: "POST",
    }),
  );

  if (res.ok) {
    const data = await res.json();
    return data.data;
  }
};
