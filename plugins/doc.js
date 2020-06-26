import path from 'path'
import spawn from 'cross-spawn'

const timestamp = (type, filePath) => {
  try {
    const basename = path.basename(filePath)
    const command = type === firstCreated.name
      ? `git log --reverse --format=%at ${basename} | head -n 1`
      : `git log -1 --format=%at ${basename}`

    const options = {
      shell: true,
      cwd: path.dirname(filePath)
    }
    const buffter = spawn.sync(command, [], options)
    return parseInt(buffter.stdout.toString('utf-8')) * 1000
  } catch (e) {
  }
}

export function firstCreated (filePath) {
  return timestamp(firstCreated.name, filePath)
}

export function lastUpdated (filePath) {
  return timestamp(lastUpdated.name, filePath)
}
