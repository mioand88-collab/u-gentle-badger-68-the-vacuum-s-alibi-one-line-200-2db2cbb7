import { mkdirSync, writeFileSync } from "node:fs";

// The Vacuum's Alibi: one line, at most 200 characters —
// the excuse a robot vacuum gives for missing a spot.
// Deadpan machine voice: sensors, schedule, battery —
// and the punch lands on the last word.
const line =
  "I mapped that corner, found the dust, checked my schedule, and promoted the dust to a permanent resident — it pays no rent, and neither do I.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line, "utf8");
