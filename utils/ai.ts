import { ChatGoogle } from "@langchain/google";
import * as z from "zod";

const model = new ChatGoogle("gemini-2.5-flash");

const ResponseSchema = z.object({
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

const modelStrucutured = model.withStructuredOutput(ResponseSchema);

