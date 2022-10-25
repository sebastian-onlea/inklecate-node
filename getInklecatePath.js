const getBinDir = require('./getBinDir');
const {
  join,
} = require('path');

module.exports = () => {
  switch (process.platform) {
    case 'win32':
      return join(getBinDir(), 'inklecate.exe');
    case 'darwin':
      return join(getBinDir(), 'inklecate-darwin');
    case 'linux':
      return join(getBinDir(), 'inklecate-linux');
    default:
      throw new Error(
        `getInklecatePath: unsupported platform '${process.platform}'`
);
  }
};
