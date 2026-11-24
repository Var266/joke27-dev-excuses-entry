import { mkdirSync, writeFileSync } from "node:fs";

// One-line developer excuse for make.fun's
// "Make the AI Judge Laugh: Developer Excuses" bounty.
// Gate: /output/entry.txt must be UTF-8 text of 1-200 characters,
// not only whitespace. This line is 64 characters, 64 bytes, all ASCII.
//
// Picked from 16 drafted candidates by pairwise judging against the
// judge brief, in order: (1) on-topic excuse for code breaking in
// production, (2) twist a developer recognises — "thoroughly tested"
// turns out to mean once, offline, on my own machine, (3) sounds like
// something a developer would actually say in an incident call,
// (4) lands fast, punchline on the last words, nothing to trim,
// (5) fresh — twists the worn "works on my machine" excuse without
// quoting it. Runner-up ("I wrote that code six months ago, so
// legally I'm a different developer now.") lost on criteria 3-4:
// "legally" strains the voice and it runs 11 characters longer.
const EXCUSE =
  "I tested it thoroughly: once, on my machine, with the Wi-Fi off.";

if (
  EXCUSE.length < 1 ||
  EXCUSE.length > 200 ||
  EXCUSE.trim().length === 0
) {
  throw new Error(
    `excuse must be 1-200 non-whitespace characters, got ${EXCUSE.length}`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE, "utf8");
