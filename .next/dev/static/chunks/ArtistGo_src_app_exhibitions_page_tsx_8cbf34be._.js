(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/ArtistGo/src/app/exhibitions/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ExhibitionsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ArtistGo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ArtistGo/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ArtistGo$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ArtistGo/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
'use client';
;
;
const exhibitions = [
    {
        id: 1,
        year: 2025,
        title: 'Future Landscapes',
        role: 'Solo Exhibition',
        location: 'Gallery Artifact, Seoul',
        date: 'Mar 10 - Apr 20, 2025'
    },
    {
        id: 2,
        year: 2024,
        title: 'Digital Frontiers',
        role: 'Group Exhibition',
        location: 'MoMA PS1, New York',
        date: 'Nov 05 - Dec 15, 2024'
    },
    {
        id: 3,
        year: 2024,
        title: 'Biennale of Light',
        role: 'Participant',
        location: 'Venice, Italy',
        date: 'Jun 01 - Sep 30, 2024'
    },
    {
        id: 4,
        year: 2023,
        title: 'Echoes of Silence',
        role: 'Solo Exhibition',
        location: 'Space K, Seoul',
        date: 'Sep 10 - Oct 25, 2023'
    },
    {
        id: 5,
        year: 2022,
        title: 'Emerging Voices',
        role: 'Group Exhibition',
        location: 'Saatchi Gallery, London',
        date: 'Jan 15 - Feb 28, 2022'
    }
];
function ExhibitionsPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ArtistGo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-screen-md mx-auto px-4 py-16",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ArtistGo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-4xl font-bold mb-12 dark:text-white",
                children: "Exhibitions"
            }, void 0, false, {
                fileName: "[project]/ArtistGo/src/app/exhibitions/page.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ArtistGo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-l border-neutral-200 dark:border-neutral-800 ml-4",
                children: exhibitions.map((exhibition, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ArtistGo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ArtistGo$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            x: -20
                        },
                        whileInView: {
                            opacity: 1,
                            x: 0
                        },
                        transition: {
                            delay: index * 0.1
                        },
                        viewport: {
                            once: true
                        },
                        className: "relative pl-8 pb-12 last:pb-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ArtistGo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-neutral-900 dark:bg-white border-2 border-white dark:border-neutral-950"
                            }, void 0, false, {
                                fileName: "[project]/ArtistGo/src/app/exhibitions/page.tsx",
                                lineNumber: 64,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ArtistGo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ArtistGo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xl font-bold text-neutral-900 dark:text-white",
                                        children: exhibition.year
                                    }, void 0, false, {
                                        fileName: "[project]/ArtistGo/src/app/exhibitions/page.tsx",
                                        lineNumber: 67,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ArtistGo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-medium text-neutral-800 dark:text-neutral-200",
                                        children: exhibition.title
                                    }, void 0, false, {
                                        fileName: "[project]/ArtistGo/src/app/exhibitions/page.tsx",
                                        lineNumber: 68,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/ArtistGo/src/app/exhibitions/page.tsx",
                                lineNumber: 66,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ArtistGo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-2 text-neutral-600 dark:text-neutral-400 text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ArtistGo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold",
                                        children: exhibition.role
                                    }, void 0, false, {
                                        fileName: "[project]/ArtistGo/src/app/exhibitions/page.tsx",
                                        lineNumber: 72,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ArtistGo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "mx-2",
                                        children: "•"
                                    }, void 0, false, {
                                        fileName: "[project]/ArtistGo/src/app/exhibitions/page.tsx",
                                        lineNumber: 73,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ArtistGo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: exhibition.location
                                    }, void 0, false, {
                                        fileName: "[project]/ArtistGo/src/app/exhibitions/page.tsx",
                                        lineNumber: 74,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/ArtistGo/src/app/exhibitions/page.tsx",
                                lineNumber: 71,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ArtistGo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-1 text-neutral-500 dark:text-neutral-500 text-xs uppercase tracking-wide",
                                children: exhibition.date
                            }, void 0, false, {
                                fileName: "[project]/ArtistGo/src/app/exhibitions/page.tsx",
                                lineNumber: 76,
                                columnNumber: 13
                            }, this)
                        ]
                    }, exhibition.id, true, {
                        fileName: "[project]/ArtistGo/src/app/exhibitions/page.tsx",
                        lineNumber: 55,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/ArtistGo/src/app/exhibitions/page.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/ArtistGo/src/app/exhibitions/page.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
_c = ExhibitionsPage;
var _c;
__turbopack_context__.k.register(_c, "ExhibitionsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=ArtistGo_src_app_exhibitions_page_tsx_8cbf34be._.js.map