import { getCurrentBranch } from 'shipjs-lib';
import { gitPush as gitPushInternal } from '../../../helper/index.js';
import gitPush from '../gitPush.js';

describe('gitPush', () => {
  it('works', () => {
    getCurrentBranch.mockImplementationOnce(() => 'master');
    gitPush({
      tagNames: ['v1.2.3'],
      config: {
        remote: 'origin',
      },
      dir: '.',
      dryRun: false,
    });
    expect(gitPushInternal).toHaveBeenCalledTimes(1);
    expect(gitPushInternal).toHaveBeenCalledWith({
      remote: 'origin',
      refs: ['master', 'v1.2.3'],
      dir: '.',
      dryRun: false,
    });
  });
});
