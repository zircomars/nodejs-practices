/* ohjeet & tutoriaalit;;

https://www.youtube.com/watch?v=elBNFO8nsaw
https://github.com/satansdeer/get-started-with-node

*/

const path = require("path");
const util = require("util");
const fs = require("fs");

const readdir = util.promisify(fs.readdir);

const config = {
  typeDirs: [
    { type: ".pdf", directory: "documents" },
    { type: ".png", directory: "images" },
    { type: ".pdf", directory: "photos"},
    { type: ".mp3", directory: "music" }
  ]
};

const directory = process.argv[2];

if (!directory) {
  console.log("Specify target directory");
  return;
}

// Create categories directories
[...config.typeDirs, { directory: "other" }].map(d => {
  const dirname = `${directory}/${d.directory}`;
  if (!fs.existsSync(dirname)) {
    fs.mkdirSync(dirname);
  }
});

// Move files
(async () => {
  const files = await readdir(directory);

  files.forEach(file => {
    const extname = path.extname(file);
    if (!extname) {
      return;
    }

    // Destructuring `undefined`, rename + fallback
    const { directory: targetDir = "other" } = config.typeDirs.find(
      dir => dir.type == extname
    ) || {};

    const oldPath = path.join(__dirname, directory, file);
    const newPath = path.join(__dirname, directory, targetDir, file);

    // Moving files using rename
    fs.rename(oldPath, newPath, function(err) {
      if (err) {
        throw err;
      }
    });
    
  });
})();
