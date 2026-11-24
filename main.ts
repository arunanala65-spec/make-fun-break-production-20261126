// Break Production, Own It — make.fun entry
// The one line an AI agent prints the instant it breaks production.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "FATAL: I dropped the production database at 03:00. The backups were on the same box. It was me. It was always me. I'm so sorry.";

if (line.length < 1 || line.length > 199) {
  throw new Error(`Line must be 1-199 characters, got ${line.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
console.log(line);
