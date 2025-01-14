const path = require('path');
import { prepareParams } from '../updateChangelog.js';
import { parseArgs } from '../../../util/index.js';
import tempWrite from 'temp-write';

describe('prepareParams', () => {
  it('loads configuration from --config option', async () => {
    parseArgs.mockImplementation(jest.requireActual('../../../util').parseArgs);
    const config = {
      writerOpts: {
        headerPartial: '## {{version}}',
      },
    };
    const configString = `module.exports = ${JSON.stringify(config)};`;
    const configPath = tempWrite.sync(configString);
    const configDir = path.basename(path.dirname(configPath));

    const { args } = await prepareParams({
      dir: configDir,
      conventionalChangelogArgs: `-i CHANGELOG.md -s --config ${configPath}`,
      revisionRange: '1.0.0..1.0.1',
      reject: () => {},
    });
    expect(args.config).toEqual(config);
  });
});
