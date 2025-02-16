import silentExec from '../shell/silentExec.js';

export default function getBodies(revisionRange, dir) {
  const cmd = `git log ${revisionRange} --pretty=format:%b`;
  return silentExec(cmd, { dir, ignoreError: true }).toString().trim();
}
