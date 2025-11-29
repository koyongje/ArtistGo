module.exports = [
"[turbopack-node]/transforms/postcss.ts { CONFIG => \"[project]/ArtistGo/postcss.config.mjs [postcss] (ecmascript)\" } [postcss] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "chunks/2e0cd_22f87b2d._.js",
  "chunks/[root-of-the-server]__a57664f0._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[turbopack-node]/transforms/postcss.ts { CONFIG => \"[project]/ArtistGo/postcss.config.mjs [postcss] (ecmascript)\" } [postcss] (ecmascript)");
    });
});
}),
];