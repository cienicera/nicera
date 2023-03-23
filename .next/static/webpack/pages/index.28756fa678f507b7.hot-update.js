"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/landing/index.js":
/*!********************************!*\
  !*** ./pages/landing/index.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst Landing = ()=>{\n    _s();\n    const [isClient, setIsClient] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [mousePosition, setMousePosition] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        x: 0,\n        y: 0\n    });\n    const blobRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setIsClient(true);\n    }, []);\n    const handleMouseMove = (event)=>{\n        const { clientX , clientY  } = event;\n        setMousePosition({\n            x: clientX,\n            y: clientY\n        });\n    };\n    const animateBlob = ()=>{\n        const blob = blobRef.current;\n        if (blob) {\n            setTimeout(()=>{\n                blob.style.left = \"\".concat(mousePosition.x, \"px\");\n                blob.style.top = \"\".concat(mousePosition.y, \"px\");\n            }, 300);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        animateBlob();\n    }, [\n        mousePosition\n    ]);\n    const changeText = (event)=>{\n        const letters = \"ABCDEFGHIJKLMNOPQRSTUVWXYZ\";\n        let iteration = 0;\n        const target = event.currentTarget;\n        const interval = setInterval(()=>{\n            target.innerText = target.dataset.value.split(\"\").map((letter, index)=>{\n                if (index < iteration) {\n                    return target.dataset.value[index];\n                }\n                return letters[Math.floor(Math.random() * 26)];\n            }).join(\"\");\n            if (iteration >= target.dataset.value.length) {\n                clearInterval(interval);\n            }\n            iteration += 1 / 3;\n        }, 30);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"root\",\n        onMouseMove: handleMouseMove,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-screen grid items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-screen h-screen absolute z-0\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                            title: \"Background Video\",\n                            src: \"https://www.youtube.com/embed/k2soofcknW8?autoplay=1&mute=1&controls=0&loop=1&playlist=k2soofcknW8\",\n                            width: \"100%\",\n                            height: \"100%\",\n                            frameBorder: \"0\",\n                            allow: \"autoplay; fullscreen; encrypted-media\",\n                            allowFullScreen: true\n                        }, void 0, false, {\n                            fileName: \"/Users/rmzlb/Documents/GitHub/Labs/nicera/pages/landing/index.js\",\n                            lineNumber: 63,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/rmzlb/Documents/GitHub/Labs/nicera/pages/landing/index.js\",\n                        lineNumber: 62,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-screen h-screen backdrop-blur-3xl absolute z-2\"\n                    }, void 0, false, {\n                        fileName: \"/Users/rmzlb/Documents/GitHub/Labs/nicera/pages/landing/index.js\",\n                        lineNumber: 73,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"h-full grid items-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"h-90 font-extralight text-9xl grid grid-rows-3 items-center justify-items-center \",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"text-white\",\n                                    \"data-value\": \"HISTOIRE\",\n                                    onMouseOver: changeText,\n                                    children: \"HISTOIRE\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/rmzlb/Documents/GitHub/Labs/nicera/pages/landing/index.js\",\n                                    lineNumber: 78,\n                                    columnNumber: 21\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"text-white\",\n                                    \"data-value\": \"CORPS\",\n                                    onMouseOver: changeText,\n                                    children: \"CORPS\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/rmzlb/Documents/GitHub/Labs/nicera/pages/landing/index.js\",\n                                    lineNumber: 81,\n                                    columnNumber: 21\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"text-white\",\n                                    \"data-value\": \"MEMOIRE\",\n                                    onMouseOver: changeText,\n                                    children: \"MEMOIRE\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/rmzlb/Documents/GitHub/Labs/nicera/pages/landing/index.js\",\n                                    lineNumber: 84,\n                                    columnNumber: 21\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/rmzlb/Documents/GitHub/Labs/nicera/pages/landing/index.js\",\n                            lineNumber: 76,\n                            columnNumber: 17\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/rmzlb/Documents/GitHub/Labs/nicera/pages/landing/index.js\",\n                        lineNumber: 75,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/rmzlb/Documents/GitHub/Labs/nicera/pages/landing/index.js\",\n                lineNumber: 60,\n                columnNumber: 13\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/rmzlb/Documents/GitHub/Labs/nicera/pages/landing/index.js\",\n            lineNumber: 59,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/rmzlb/Documents/GitHub/Labs/nicera/pages/landing/index.js\",\n        lineNumber: 57,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Landing, \"VqfTPWIheEwPMKpH19CoBscSfaU=\");\n_c = Landing;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Landing);\nvar _c;\n$RefreshReg$(_c, \"Landing\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Oi8vX05fRS8uL3BhZ2VzL2xhbmRpbmcvaW5kZXguanM/ZDQ3YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IExhbmRpbmcgPSAoKSA9PiB7XG4gIGNvbnN0IFtpc0NsaWVudCwgc2V0SXNDbGllbnRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbW91c2VQb3NpdGlvbiwgc2V0TW91c2VQb3NpdGlvbl0gPSB1c2VTdGF0ZSh7IHg6IDAsIHk6IDAgfSk7XG4gIGNvbnN0IGJsb2JSZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRJc0NsaWVudCh0cnVlKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGhhbmRsZU1vdXNlTW92ZSA9IGV2ZW50ID0+IHtcbiAgICBjb25zdCB7IGNsaWVudFgsIGNsaWVudFkgfSA9IGV2ZW50O1xuICAgIHNldE1vdXNlUG9zaXRpb24oeyB4OiBjbGllbnRYLCB5OiBjbGllbnRZIH0pO1xuICB9O1xuXG4gIGNvbnN0IGFuaW1hdGVCbG9iID0gKCkgPT4ge1xuICAgIGNvbnN0IGJsb2IgPSBibG9iUmVmLmN1cnJlbnQ7XG4gICAgaWYgKGJsb2IpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBibG9iLnN0eWxlLmxlZnQgPSBgJHttb3VzZVBvc2l0aW9uLnh9cHhgO1xuICAgICAgICBibG9iLnN0eWxlLnRvcCA9IGAke21vdXNlUG9zaXRpb24ueX1weGA7XG4gICAgICB9LCAzMDApO1xuICAgIH1cbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFuaW1hdGVCbG9iKCk7XG4gIH0sIFttb3VzZVBvc2l0aW9uXSk7XG5cbiAgY29uc3QgY2hhbmdlVGV4dCA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IGxldHRlcnMgPSBcIkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaXCI7XG4gICAgbGV0IGl0ZXJhdGlvbiA9IDA7XG4gICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQuY3VycmVudFRhcmdldDtcblxuICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgdGFyZ2V0LmlubmVyVGV4dCA9IHRhcmdldC5kYXRhc2V0LnZhbHVlXG4gICAgICAgIC5zcGxpdChcIlwiKVxuICAgICAgICAubWFwKChsZXR0ZXIsIGluZGV4KSA9PiB7XG4gICAgICAgICAgaWYoaW5kZXggPCBpdGVyYXRpb24pIHtcbiAgICAgICAgICAgIHJldHVybiB0YXJnZXQuZGF0YXNldC52YWx1ZVtpbmRleF07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGxldHRlcnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjYpXVxuICAgICAgICB9KVxuICAgICAgICAuam9pbihcIlwiKTtcbiAgICBcbiAgICAgIGlmKGl0ZXJhdGlvbiA+PSB0YXJnZXQuZGF0YXNldC52YWx1ZS5sZW5ndGgpeyBcbiAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICB9XG4gICAgXG4gICAgICBpdGVyYXRpb24gKz0gMSAvIDM7XG4gICAgfSwgMzApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb290XCIgb25Nb3VzZU1vdmU9e2hhbmRsZU1vdXNlTW92ZX0+XG5cbiAgICAgICAgPGRpdiA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naC1zY3JlZW4gZ3JpZCBpdGVtcy1jZW50ZXInPlxuICAgICAgICAgICAgICAgIHsvKiA8ZGl2IHJlZj17YmxvYlJlZn0gaWQ9XCJibG9iXCI+PC9kaXY+ICovfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3LXNjcmVlbiBoLXNjcmVlbiBhYnNvbHV0ZSB6LTAnPlxuICAgICAgICAgICAgPGlmcmFtZVxuICAgICAgICAgICAgICB0aXRsZT1cIkJhY2tncm91bmQgVmlkZW9cIlxuICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9rMnNvb2Zja25XOD9hdXRvcGxheT0xJm11dGU9MSZjb250cm9scz0wJmxvb3A9MSZwbGF5bGlzdD1rMnNvb2Zja25XOFwiXG4gICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgICAgIGhlaWdodD1cIjEwMCVcIlxuICAgICAgICAgICAgICBmcmFtZUJvcmRlcj1cIjBcIlxuICAgICAgICAgICAgICBhbGxvdz1cImF1dG9wbGF5OyBmdWxsc2NyZWVuOyBlbmNyeXB0ZWQtbWVkaWFcIlxuICAgICAgICAgICAgICBhbGxvd0Z1bGxTY3JlZW5cbiAgICAgICAgICAgID48L2lmcmFtZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndy1zY3JlZW4gaC1zY3JlZW4gYmFja2Ryb3AtYmx1ci0zeGwgYWJzb2x1dGUgei0yJyA+PC9kaXY+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2gtZnVsbCBncmlkIGl0ZW1zLWNlbnRlcic+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2gtOTAgZm9udC1leHRyYWxpZ2h0IHRleHQtOXhsIGdyaWQgZ3JpZC1yb3dzLTMgaXRlbXMtY2VudGVyIGp1c3RpZnktaXRlbXMtY2VudGVyICc+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSd0ZXh0LXdoaXRlJyBkYXRhLXZhbHVlPVwiSElTVE9JUkVcIiBvbk1vdXNlT3Zlcj17Y2hhbmdlVGV4dH0+XG4gICAgICAgICAgICAgICAgICAgIEhJU1RPSVJFXG4gICAgICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQtd2hpdGUnIGRhdGEtdmFsdWU9XCJDT1JQU1wiIG9uTW91c2VPdmVyPXtjaGFuZ2VUZXh0fT5cbiAgICAgICAgICAgICAgICAgICAgQ09SUFNcbiAgICAgICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0ndGV4dC13aGl0ZScgZGF0YS12YWx1ZT1cIk1FTU9JUkVcIiBvbk1vdXNlT3Zlcj17Y2hhbmdlVGV4dH0+XG4gICAgICAgICAgICAgICAgICAgIE1FTU9JUkVcbiAgICAgICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9J2gtc2NyZWVuIHctc2NyZWVuIGdyaWQgaXRlbXMtY2VudGVyJz5cbiAgICAgICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgPC9kaXY+XG5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExhbmRpbmc7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJMYW5kaW5nIiwiaXNDbGllbnQiLCJzZXRJc0NsaWVudCIsIm1vdXNlUG9zaXRpb24iLCJzZXRNb3VzZVBvc2l0aW9uIiwieCIsInkiLCJibG9iUmVmIiwiaGFuZGxlTW91c2VNb3ZlIiwiZXZlbnQiLCJjbGllbnRYIiwiY2xpZW50WSIsImFuaW1hdGVCbG9iIiwiYmxvYiIsImN1cnJlbnQiLCJzZXRUaW1lb3V0Iiwic3R5bGUiLCJsZWZ0IiwidG9wIiwiY2hhbmdlVGV4dCIsImxldHRlcnMiLCJpdGVyYXRpb24iLCJ0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImlubmVyVGV4dCIsImRhdGFzZXQiLCJ2YWx1ZSIsInNwbGl0IiwibWFwIiwibGV0dGVyIiwiaW5kZXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJqb2luIiwibGVuZ3RoIiwiY2xlYXJJbnRlcnZhbCIsImRpdiIsImNsYXNzTmFtZSIsIm9uTW91c2VNb3ZlIiwiaWZyYW1lIiwidGl0bGUiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImZyYW1lQm9yZGVyIiwiYWxsb3ciLCJhbGxvd0Z1bGxTY3JlZW4iLCJoMSIsImRhdGEtdmFsdWUiLCJvbk1vdXNlT3ZlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/landing/index.js\n"));

/***/ })

});