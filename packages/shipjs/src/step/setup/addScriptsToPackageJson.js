import runStep from '../runStep.js';
import fs from 'fs';
import path from 'path';
import { runPrettier } from '../../helper/index.js';
import { info } from '../../color.js';
import { print } from '../../util/index.js';

export default async ({ dir, dryRun }) =>
  await runStep({ title: 'Adding scripts to package.json' }, async () => {
    if (!dryRun) {
      const filePath = path.resolve(dir, 'package.json');
      const json = JSON.parse(fs.readFileSync(filePath).toString());
      json.scripts = json.scripts || {};
      json.scripts.release = 'shipjs prepare';
      fs.writeFileSync(filePath, `${JSON.stringify(json, null, 2)}\n`);
      await runPrettier({ filePath, dir });
    }
    return () =>
      print(
        `${info(
          '✔'
        )} Added \`release\` in \`scripts\` section of \`package.json\`.`
      );
  });
