import { mkdirSync, writeFileSync } from "node:fs";

// One status update, in the voice of a lost sock that has settled
// somewhere it should not be: behind the washing machine, where it
// has quietly started a new life instead of waiting to be found.
const ENTRY =
  "Day 47 behind the washing machine. I've started a family with a dust bunny. Tell my partner I'm not coming back.";

if (ENTRY.length < 1 || ENTRY.length > 120) {
  throw new Error(`Entry is ${ENTRY.length} characters; the cap is 120.`);
}

const OUTPUT_DIR = "/output";
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(`${OUTPUT_DIR}/entry.txt`, ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to ${OUTPUT_DIR}/entry.txt`);
