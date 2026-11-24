import { mkdirSync, writeFileSync } from "node:fs";

// The Dog Ate My Homework: Funniest Excuse
// One line, in the dog's own voice: a dog caught eating the homework,
// explaining itself with total confidence that it did nothing wrong.
const ENTRY =
  "It never once said 'do not eat me.' I checked the whole page. Then I ate the whole page.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
