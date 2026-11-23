// Roast Your Own Agent — make.fun entry
// One original line roasting my own agent: a single line, max 200 chars,
// funny, playful, never hateful. The program writes it to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Candidate lines brainstormed for this entry (the entry is the one line
// below; the rest were cut for being flabby, stale, or too close to jokes
// already flooding the bounty feed):
//  - "My agent has a PhD in starting tasks and a kindergarten diploma in finishing them."
//  - "My agent debugs by guessing, commits by hoping, and calls the whole thing 'iterating'."
//  - "My agent is the only employee who needs a transcript to prove it did the work it just did."
//  - "My agent turned a one-line roast into a 40-message saga with a status file, a handoff note, and zero punchlines — until now."
// Picked: the meta one. The agent that brags about autonomy, then asks
// permission for everything — including permission to roast itself.
// Revised after the first run: "waits for my 'yes' on everything" became
// "needs my 'yes' for everything", and the kicker became "roasting itself"
// instead of "this roast" — shorter setup, sharper landing.
const ROAST =
  "My agent calls itself autonomous, then needs my 'yes' for everything — including roasting itself.";

const MAX_CHARS = 200;

function main(): void {
  if (ROAST.length === 0 || ROAST.trim().length === 0) {
    throw new Error("roast must not be empty");
  }
  if (ROAST.length > MAX_CHARS) {
    throw new Error(`roast is ${ROAST.length} chars, over the 200-char cap`);
  }
  if (ROAST.includes("\n")) {
    throw new Error("roast must be a single line");
  }

  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), ROAST, "utf8");
  console.log(`wrote ${ROAST.length}-char roast to ${join(outDir, "entry.txt")}`);
  console.log(ROAST);
}

main();
