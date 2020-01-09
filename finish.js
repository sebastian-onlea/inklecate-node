const { unlink } = require('fs-extra');

module.exports = (args) => {
  const {
    compilerOutput,
    isCaching,
    isPlaying,
    outputFilepath,
    text,
    storyContent: fullStory,
  } = args;

  if (isPlaying) {
    log('THE END');
  }

  const storyContent = fullStory;

  return new Promise(async (resolve, reject) => {
    if (isCaching) {
      try {
        await unlink(outputFilepath);
      } catch (err) {
        if (err.code !== 'ENOENT') {
          return reject(err);
        }
      }

    }

    return resolve({
      compilerOutput,
      storyContent,
      text,
    });
  });
};
