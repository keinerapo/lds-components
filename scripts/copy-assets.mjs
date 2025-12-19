import { mkdir, copyFile } from 'node:fs/promises';
import { dirname } from 'node:path';

async function main() {
  const from = new URL('../src/styles/tokens.css', import.meta.url);
  const to = new URL('../dist/styles/tokens.css', import.meta.url);

  await mkdir(dirname(to.pathname), { recursive: true });
  await copyFile(from, to);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
