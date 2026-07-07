import { getUserByClerkId } from "@/utils/auth";
import { prisma } from "@/utils/db";
import { NextResponse } from "next/server";
import { analyzeJournalEntry } from "@/utils/ai";

export const PATCH = async (request: Request, { params }) => {
  const { id } = await params;
  const { content } = await request.json();
  const user = await getUserByClerkId();
  const updatedEntry = await prisma.journalEntry.update({
    where: {
      userId_id: {
        userId: user.id,
        id: id,
      },
    },
    data: {
      content: content,
    },
  });

  const updatedAnalysis = await prisma.analysis.update({
    where: {
      entryId: updatedEntry.id,
    },
    data: {
      ...(await analyzeJournalEntry(updatedEntry.content)),
    },
  });

  return NextResponse.json({
    data: {
      ...updatedEntry,
      analysis: updatedAnalysis,
    },
  });
};
