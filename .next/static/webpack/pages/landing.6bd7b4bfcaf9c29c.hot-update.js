"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/landing",{

/***/ "./pages/landing/index.js":
/*!********************************!*\
  !*** ./pages/landing/index.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intersection-observer */ \"./node_modules/react-intersection-observer/react-intersection-observer.modern.mjs\");\n\nvar _s = $RefreshSig$();\n\n\nconst Plan = ()=>{\n    _s();\n    const [isClient, setIsClient] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [mousePosition, setMousePosition] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        x: 0,\n        y: 0\n    });\n    const [isIntersecting, setIsIntersecting] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const blobRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const h1Ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const h2Ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [h1Text, setH1Text] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"MEMOIRE\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setIsClient(true);\n    }, []);\n    const handleMouseMove = (event)=>{\n        const { clientX , clientY  } = event;\n        setMousePosition({\n            x: clientX,\n            y: clientY\n        });\n    };\n    const animateBlob = ()=>{\n        const blob = blobRef.current;\n        if (blob) {\n            blob.style.left = \"\".concat(mousePosition.x, \"px\");\n            blob.style.top = \"\".concat(mousePosition.y, \"px\");\n        }\n    };\n    const changeText = ()=>{\n        const letters = \"ABCDEFGHIJKLMNOPQRSTUVWXYZ\";\n        let iteration = 0;\n        const target = h1Ref.current;\n        const interval = setInterval(()=>{\n            setH1Text((h1Text)=>h1Text.split(\"\").map((letter, index)=>{\n                    if (index < iteration) {\n                        return target.dataset.value[index];\n                    }\n                    return letters[Math.floor(Math.random() * 26)];\n                }).join(\"\"));\n            if (iteration >= target.dataset.value.length) {\n                clearInterval(interval);\n            }\n            iteration += 1 / 3;\n        }, 30);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        animateBlob();\n    }, [\n        mousePosition\n    ]);\n    const { ref  } = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__.useInView)({\n        threshold: 0,\n        triggerOnce: true,\n        rootMargin: \"0px\",\n        onEnter: ()=>setIsIntersecting(true)\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"root\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-full h-screen\",\n                    id: \"\",\n                    onMouseMove: handleMouseMove,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            ref: blobRef,\n                            id: \"blob\"\n                        }, void 0, false, {\n                            fileName: \"/Users/rmzlb/Documents/GitHub/Labs/nicera/pages/landing/index.js\",\n                            lineNumber: 73,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-full absolute\",\n                            id: \"blur\"\n                        }, void 0, false, {\n                            fileName: \"/Users/rmzlb/Documents/GitHub/Labs/nicera/pages/landing/index.js\",\n                            lineNumber: 74,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            ref: ref,\n                            className: \"h-screen\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                ref: h1Ref,\n                                className: \"text-white\",\n                                \"data-value\": \"MEMOIRE\",\n                                onMouseOver: changeText,\n                                children: h1Text\n                            }, void 0, false, {\n                                fileName: \"/Users/rmzlb/Documents/GitHub/Labs/nicera/pages/landing/index.js\",\n                                lineNumber: 76,\n                                columnNumber: 17\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/rmzlb/Documents/GitHub/Labs/nicera/pages/landing/index.js\",\n                            lineNumber: 75,\n                            columnNumber: 17\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/rmzlb/Documents/GitHub/Labs/nicera/pages/landing/index.js\",\n                    lineNumber: 72,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \" w-screen h-screen grid place-content-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-white\",\n                        children: \"ouech\"\n                    }, void 0, false, {\n                        fileName: \"/Users/rmzlb/Documents/GitHub/Labs/nicera/pages/landing/index.js\",\n                        lineNumber: 85,\n                        columnNumber: 17\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/rmzlb/Documents/GitHub/Labs/nicera/pages/landing/index.js\",\n                    lineNumber: 84,\n                    columnNumber: 13\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/rmzlb/Documents/GitHub/Labs/nicera/pages/landing/index.js\",\n            lineNumber: 71,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/rmzlb/Documents/GitHub/Labs/nicera/pages/landing/index.js\",\n        lineNumber: 68,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Plan, \"Aw0PCLVycE3JO4Xu92icwKnvfwE=\", false, function() {\n    return [\n        react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__.useInView\n    ];\n});\n_c = Plan;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Plan);\nvar _c;\n$RefreshReg$(_c, \"Plan\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFBQ21DO29CQUFJQyxXQUFVOzhCQUNYLDRFQUFDTTt3QkFBRU4sV0FBVTtrQ0FBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU0xQztHQXZGTWhEOztRQXdEWUQsa0VBQVNBOzs7S0F4RHJCQztBQXlGTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9sYW5kaW5nL2luZGV4LmpzP2Q0N2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlSW5WaWV3IH0gZnJvbSAncmVhY3QtaW50ZXJzZWN0aW9uLW9ic2VydmVyJztcblxuY29uc3QgUGxhbiA9ICgpID0+IHtcbiAgY29uc3QgW2lzQ2xpZW50LCBzZXRJc0NsaWVudF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFttb3VzZVBvc2l0aW9uLCBzZXRNb3VzZVBvc2l0aW9uXSA9IHVzZVN0YXRlKHsgeDogMCwgeTogMCB9KTtcbiAgY29uc3QgW2lzSW50ZXJzZWN0aW5nLCBzZXRJc0ludGVyc2VjdGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGJsb2JSZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IGgxUmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBoMlJlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgW2gxVGV4dCwgc2V0SDFUZXh0XSA9IHVzZVN0YXRlKFwiTUVNT0lSRVwiKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldElzQ2xpZW50KHRydWUpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgaGFuZGxlTW91c2VNb3ZlID0gZXZlbnQgPT4ge1xuICAgIGNvbnN0IHsgY2xpZW50WCwgY2xpZW50WSB9ID0gZXZlbnQ7XG4gICAgc2V0TW91c2VQb3NpdGlvbih7IHg6IGNsaWVudFgsIHk6IGNsaWVudFkgfSk7XG4gIH07XG5cbiAgY29uc3QgYW5pbWF0ZUJsb2IgPSAoKSA9PiB7XG4gICAgY29uc3QgYmxvYiA9IGJsb2JSZWYuY3VycmVudDtcbiAgICBpZiAoYmxvYikge1xuICAgICAgYmxvYi5zdHlsZS5sZWZ0ID0gYCR7bW91c2VQb3NpdGlvbi54fXB4YDtcbiAgICAgIGJsb2Iuc3R5bGUudG9wID0gYCR7bW91c2VQb3NpdGlvbi55fXB4YDtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgY2hhbmdlVGV4dCA9ICgpID0+IHtcbiAgICBjb25zdCBsZXR0ZXJzID0gXCJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWlwiO1xuICAgIGxldCBpdGVyYXRpb24gPSAwO1xuICAgIGNvbnN0IHRhcmdldCA9IGgxUmVmLmN1cnJlbnQ7XG5cbiAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHNldEgxVGV4dChoMVRleHQgPT4gaDFUZXh0XG4gICAgICAgIC5zcGxpdChcIlwiKVxuICAgICAgICAubWFwKChsZXR0ZXIsIGluZGV4KSA9PiB7XG4gICAgICAgICAgaWYoaW5kZXggPCBpdGVyYXRpb24pIHtcbiAgICAgICAgICAgIHJldHVybiB0YXJnZXQuZGF0YXNldC52YWx1ZVtpbmRleF07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGxldHRlcnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjYpXVxuICAgICAgICB9KVxuICAgICAgICAuam9pbihcIlwiKVxuICAgICAgKTtcblxuICAgICAgaWYoaXRlcmF0aW9uID49IHRhcmdldC5kYXRhc2V0LnZhbHVlLmxlbmd0aCl7IFxuICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgIH1cblxuICAgICAgaXRlcmF0aW9uICs9IDEgLyAzO1xuICAgIH0sIDMwKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFuaW1hdGVCbG9iKCk7XG4gIH0sIFttb3VzZVBvc2l0aW9uXSk7XG5cbiAgY29uc3QgeyByZWYgfSA9IHVzZUluVmlldyh7XG4gICAgdGhyZXNob2xkOiAwLFxuICAgIHRyaWdnZXJPbmNlOiB0cnVlLFxuICAgIHJvb3RNYXJnaW46IFwiMHB4XCIsXG4gICAgb25FbnRlcjogKCkgPT4gc2V0SXNJbnRlcnNlY3RpbmcodHJ1ZSlcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb3RcIiA+XG4gICAgXG4gICAgICAgIFxuICAgICAgICA8ZGl2ID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3LWZ1bGwgaC1zY3JlZW4nIGlkPVwiXCIgb25Nb3VzZU1vdmU9e2hhbmRsZU1vdXNlTW92ZX0+XG4gICAgICAgICAgICAgICAgPGRpdiAgcmVmPXtibG9iUmVmfSBpZD1cImJsb2JcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndy1mdWxsIGFic29sdXRlJyBpZD1cImJsdXJcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IHJlZj17cmVmfSBjbGFzc05hbWU9J2gtc2NyZWVuJz5cbiAgICAgICAgICAgICAgICA8aDEgcmVmPXtoMVJlZn0gY2xhc3NOYW1lPSd0ZXh0LXdoaXRlJyBkYXRhLXZhbHVlPVwiTUVNT0lSRVwiIG9uTW91c2VPdmVyPXtjaGFuZ2VUZXh0fT5cbiAgICAgICAgICAgICAgICAgICAge2gxVGV4dH1cbiAgICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICAgIHsvKiA8aDEgcmVmPXtoMlJlZn0gY2xhc3NOYW1lPSd0ZXh0LXdoaXRlJyBkYXRhLXZhbHVlPVwiQ09SUFNcIiBvbk1vdXNlT3Zlcj17Y2hhbmdlVGV4dH0+XG4gICAgICAgICAgICAgICAgICAgIENPUlBTXG4gICAgICAgICAgICAgICAgPC9oMT4gKi99XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPScgdy1zY3JlZW4gaC1zY3JlZW4gZ3JpZCBwbGFjZS1jb250ZW50LWNlbnRlcicgPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC13aGl0ZSc+b3VlY2g8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBsYW47XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VJblZpZXciLCJQbGFuIiwiaXNDbGllbnQiLCJzZXRJc0NsaWVudCIsIm1vdXNlUG9zaXRpb24iLCJzZXRNb3VzZVBvc2l0aW9uIiwieCIsInkiLCJpc0ludGVyc2VjdGluZyIsInNldElzSW50ZXJzZWN0aW5nIiwiYmxvYlJlZiIsImgxUmVmIiwiaDJSZWYiLCJoMVRleHQiLCJzZXRIMVRleHQiLCJoYW5kbGVNb3VzZU1vdmUiLCJldmVudCIsImNsaWVudFgiLCJjbGllbnRZIiwiYW5pbWF0ZUJsb2IiLCJibG9iIiwiY3VycmVudCIsInN0eWxlIiwibGVmdCIsInRvcCIsImNoYW5nZVRleHQiLCJsZXR0ZXJzIiwiaXRlcmF0aW9uIiwidGFyZ2V0IiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsInNwbGl0IiwibWFwIiwibGV0dGVyIiwiaW5kZXgiLCJkYXRhc2V0IiwidmFsdWUiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJqb2luIiwibGVuZ3RoIiwiY2xlYXJJbnRlcnZhbCIsInJlZiIsInRocmVzaG9sZCIsInRyaWdnZXJPbmNlIiwicm9vdE1hcmdpbiIsIm9uRW50ZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJpZCIsIm9uTW91c2VNb3ZlIiwiaDEiLCJkYXRhLXZhbHVlIiwib25Nb3VzZU92ZXIiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/landing/index.js\n"));

/***/ })

});