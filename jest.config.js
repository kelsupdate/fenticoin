module.exports = {
  transformIgnorePatterns: [
    "/node_modules/(?!(d3-shape|@mui/x-charts)/)"
  ],
  transform: {
    "^.+\\.[jt]sx?$": "babel-jest"
  },
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node"],
};
