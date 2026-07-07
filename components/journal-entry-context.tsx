"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

export type EntryAnalysis = {
  mood: string;
  summary: string;
  colour: string;
  sentiment: number;
};

export type JournalEntryState = {
  id: string;
  content: string;
  analysis: EntryAnalysis | null;
};

type JournalEntryContextValue = {
  entry: JournalEntryState;
  setEntry: React.Dispatch<React.SetStateAction<JournalEntryState>>;
};

const JournalEntryContext = createContext<JournalEntryContextValue | undefined>(
  undefined,
);

type JournalEntryProviderProps = {
  children: ReactNode;
  initialEntry: JournalEntryState;
};

export const JournalEntryProvider = ({
  children,
  initialEntry,
}: JournalEntryProviderProps) => {
  const [entry, setEntry] = useState<JournalEntryState>(initialEntry);

  return (
    <JournalEntryContext.Provider value={{ entry, setEntry }}>
      {children}
    </JournalEntryContext.Provider>
  );
};

export const useJournalEntry = () => {
  const context = useContext(JournalEntryContext);

  if (!context) {
    throw new Error("useJournalEntry must be used within JournalEntryProvider");
  }

  return context;
};
