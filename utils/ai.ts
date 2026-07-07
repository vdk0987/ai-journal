import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { z } from "zod";

const model = new ChatGoogleGenerativeAI({
  model: "gemini-2.5-flash-lite",
});

const responseSchema = z.object({
  mood: z
    .string()
    .describe(
      "Describe the overall mood of the journal entry made by the user.",
    ),
  summary: z.string().describe("Provide a brief summary of the journal entry."),
  colour: z
    .string()
    .describe(
      "Give me a hexadecimal colour code depending on the mood of the journal entry, example red for negative mood and green for positive mood.",
    ),
  sentiment: z
    .number()
    .describe(
      "Provide a floating point sentiment score between 0(for overhelmingly negative) and 1(for overhelmingly positive).",
    ),
});

const modelStructured = model.withStructuredOutput(responseSchema);

const systemPrompt = `You are a helpful assistant that analyzes journal entries and
  provides insights about the mood, summary, colour, and sentiment of the entry.
  Never make up information and always adhere to the json structure. The output should be a valid JSON object with the following structure:
{
  "mood": "string",
  "summary": "string",
  "colour": "string",
  "sentiment": number
}. The fields mood, summary, colour and sentiment must also be enclosed with double quotes`;

export const analyzeJournalEntry = async (entryContent: string) => {
  const result = await modelStructured.invoke([
    ["system", systemPrompt],
    ["human", `Journal Entry: "${entryContent}"`],
  ]);
  return result;
};
