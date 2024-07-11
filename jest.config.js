module.exports = {
    transform: {
      "^.+\\.jsx?$": "babel-jest",
    },
    transformIgnorePatterns: [
      "/node_modules/(?!axios)/", // Ajoutez ici les modules que vous souhaitez transformer
    ],
  };
  