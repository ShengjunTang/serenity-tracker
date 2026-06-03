import { readFile } from "node:fs/promises";

const filePath = new URL("../data/ideas.json", import.meta.url);
const requiredIdeaFields = [
  "id",
  "ticker",
  "name",
  "tier",
  "theme",
  "thesis",
  "whyItMatters",
  "stance",
  "lastUpdated",
  "evidence",
];

const data = JSON.parse(await readFile(filePath, "utf8"));

if (!data.generatedAt) {
  throw new Error("data.generatedAt is required");
}

if (!Array.isArray(data.ideas)) {
  throw new Error("data.ideas must be an array");
}

for (const idea of data.ideas) {
  for (const field of requiredIdeaFields) {
    if (!(field in idea)) {
      throw new Error(`idea ${idea.id ?? "(missing id)"} is missing ${field}`);
    }
  }

  if (!["focus", "watch", "speculative", "archive"].includes(idea.tier)) {
    throw new Error(`idea ${idea.id} has invalid tier ${idea.tier}`);
  }

  if (!Array.isArray(idea.evidence)) {
    throw new Error(`idea ${idea.id} evidence must be an array`);
  }
}

console.log(`Validated ${data.ideas.length} ideas from ${data.generatedAt}`);

