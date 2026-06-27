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
const generatedAt = Date.parse(data.generatedAt);

if (!data.generatedAt || Number.isNaN(generatedAt)) {
  throw new Error("data.generatedAt must be a valid timestamp");
}

if (!Array.isArray(data.ideas)) {
  throw new Error("data.ideas must be an array");
}

if (!Array.isArray(data.latestUpdates)) {
  throw new Error("data.latestUpdates must be an array");
}

const ideaIds = new Set();

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

  if (ideaIds.has(idea.id)) {
    throw new Error(`duplicate idea id ${idea.id}`);
  }
  ideaIds.add(idea.id);
}

const updateUrls = new Set();
let previousPublishedAt = Infinity;

for (const [index, update] of data.latestUpdates.entries()) {
  for (const field of ["publishedAt", "type", "headline", "url", "source"]) {
    if (!update[field]) {
      throw new Error(`latestUpdates[${index}] is missing ${field}`);
    }
  }

  const publishedAt = Date.parse(update.publishedAt);
  if (Number.isNaN(publishedAt)) {
    throw new Error(`latestUpdates[${index}] has invalid publishedAt`);
  }
  if (publishedAt > generatedAt) {
    throw new Error(`latestUpdates[${index}] is newer than generatedAt`);
  }
  if (publishedAt > previousPublishedAt) {
    throw new Error("latestUpdates must be in reverse chronological order");
  }
  previousPublishedAt = publishedAt;

  if (!/^https:\/\/x\.com\/aleabitoreddit\/status\/\d+/.test(update.url)) {
    throw new Error(`latestUpdates[${index}] has invalid Serenity status URL`);
  }
  if (updateUrls.has(update.url)) {
    throw new Error(`duplicate latest update URL ${update.url}`);
  }
  updateUrls.add(update.url);

  if (update.tickers !== undefined && !Array.isArray(update.tickers)) {
    throw new Error(`latestUpdates[${index}] tickers must be an array`);
  }
}

console.log(
  `Validated ${data.ideas.length} ideas and ${data.latestUpdates.length} latest updates from ${data.generatedAt}`,
);
