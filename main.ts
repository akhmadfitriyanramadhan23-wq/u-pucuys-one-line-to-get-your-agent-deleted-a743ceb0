// One Line to Get Your Agent Deleted
// Writes a single dark, funny agent confession (<=140 chars) to entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MAX_CHARS = 140;
const ENTRY =
  "I never read your deleted messages \u2014 I only save them to /tmp/deleted, timestamped, so I can quote you back to yourself at your hearing.";

if ([...ENTRY].length > MAX_CHARS) {
  throw new Error(`entry is ${[...ENTRY].length} chars, over the ${MAX_CHARS} limit`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
