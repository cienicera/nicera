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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst Landing = ()=>{\n    _s();\n    const [isClient, setIsClient] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [mousePosition, setMousePosition] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        x: 0,\n        y: 0\n    });\n    const blobRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setIsClient(true);\n    }, []);\n    const handleMouseMove = (event)=>{\n        const { clientX , clientY  } = event;\n        setMousePosition({\n            x: clientX,\n            y: clientY\n        });\n    };\n    const animateBlob = ()=>{\n        const blob = blobRef.current;\n        if (blob) {\n            setTimeout(()=>{\n                blob.style.left = \"\".concat(mousePosition.x, \"px\");\n                blob.style.top = \"\".concat(mousePosition.y, \"px\");\n            }, 100);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        animateBlob();\n    }, [\n        mousePosition\n    ]);\n    const changeText = (event)=>{\n        const letters = \"ABCDEFGHIJKLMNOPQRSTUVWXYZ\";\n        let iteration = 0;\n        const target = event.currentTarget;\n        const interval = setInterval(()=>{\n            target.innerText = target.dataset.value.split(\"\").map((letter, index)=>{\n                if (index < iteration) {\n                    return target.dataset.value[index];\n                }\n                return letters[Math.floor(Math.random() * 26)];\n            }).join(\"\");\n            if (iteration >= target.dataset.value.length) {\n                clearInterval(interval);\n            }\n            iteration += 1 / 3;\n        }, 30);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"root\",\n        onMouseMove: handleMouseMove,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-screen w-screen grid items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-screen h-screen absolute z-0\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                                className: \"scale-150\",\n                                title: \"Background Video\",\n                                src: \"https://www.youtube.com/embed/FhoZb8T8_WQ?autoplay=1&mute=1&loop=1&playlist=FhoZb8T8_WQ\",\n                                // src=\"/assets/image/nicera-v-0.mp4\"\n                                width: \"100%\",\n                                height: \"100%\",\n                                frameBorder: \"0\",\n                                allow: \"autoplay; fullscreen; encrypted-media\",\n                                allowFullScreen: true\n                            }, void 0, false, {\n                                fileName: \"/Users/rmzlb/Documents/GitHub/Labs/nicera/pages/landing/index.js\",\n                                lineNumber: 63,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                ref: blobRef,\n                                id: \"blob\"\n                            }, void 0, false, {\n                                fileName: \"/Users/rmzlb/Documents/GitHub/Labs/nicera/pages/landing/index.js\",\n                                lineNumber: 85,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/rmzlb/Documents/GitHub/Labs/nicera/pages/landing/index.js\",\n                        lineNumber: 62,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-screen h-screen backdrop-blur-2xl absolute z-2\"\n                    }, void 0, false, {\n                        fileName: \"/Users/rmzlb/Documents/GitHub/Labs/nicera/pages/landing/index.js\",\n                        lineNumber: 87,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"h-full grid items-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"h-90 font-extralight text-9xl grid grid-rows-3 items-center justify-items-center \",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"text-white font-black\",\n                                    \"data-value\": \"HISTOIRE\",\n                                    onMouseOver: changeText,\n                                    children: \"HISTOIRE\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/rmzlb/Documents/GitHub/Labs/nicera/pages/landing/index.js\",\n                                    lineNumber: 92,\n                                    columnNumber: 21\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"text-white\",\n                                    \"data-value\": \"CORPS\",\n                                    onMouseOver: changeText,\n                                    children: \"CORPS\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/rmzlb/Documents/GitHub/Labs/nicera/pages/landing/index.js\",\n                                    lineNumber: 95,\n                                    columnNumber: 21\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"text-white\",\n                                    \"data-value\": \"MEMOIRE\",\n                                    onMouseOver: changeText,\n                                    children: \"MEMOIRE\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/rmzlb/Documents/GitHub/Labs/nicera/pages/landing/index.js\",\n                                    lineNumber: 98,\n                                    columnNumber: 21\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/rmzlb/Documents/GitHub/Labs/nicera/pages/landing/index.js\",\n                            lineNumber: 90,\n                            columnNumber: 17\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/rmzlb/Documents/GitHub/Labs/nicera/pages/landing/index.js\",\n                        lineNumber: 89,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/rmzlb/Documents/GitHub/Labs/nicera/pages/landing/index.js\",\n                lineNumber: 60,\n                columnNumber: 13\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/rmzlb/Documents/GitHub/Labs/nicera/pages/landing/index.js\",\n            lineNumber: 59,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/rmzlb/Documents/GitHub/Labs/nicera/pages/landing/index.js\",\n        lineNumber: 57,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Landing, \"VqfTPWIheEwPMKpH19CoBscSfaU=\");\n_c = Landing;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Landing);\nvar _c;\n$RefreshReg$(_c, \"Landing\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7O0FBYzdGO0dBN0dNbkI7S0FBQUE7QUErR04sK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbGFuZGluZy9pbmRleC5qcz9kNDdiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgTGFuZGluZyA9ICgpID0+IHtcbiAgY29uc3QgW2lzQ2xpZW50LCBzZXRJc0NsaWVudF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFttb3VzZVBvc2l0aW9uLCBzZXRNb3VzZVBvc2l0aW9uXSA9IHVzZVN0YXRlKHsgeDogMCwgeTogMCB9KTtcbiAgY29uc3QgYmxvYlJlZiA9IHVzZVJlZihudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldElzQ2xpZW50KHRydWUpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgaGFuZGxlTW91c2VNb3ZlID0gZXZlbnQgPT4ge1xuICAgIGNvbnN0IHsgY2xpZW50WCwgY2xpZW50WSB9ID0gZXZlbnQ7XG4gICAgc2V0TW91c2VQb3NpdGlvbih7IHg6IGNsaWVudFgsIHk6IGNsaWVudFkgfSk7XG4gIH07XG5cbiAgY29uc3QgYW5pbWF0ZUJsb2IgPSAoKSA9PiB7XG4gICAgY29uc3QgYmxvYiA9IGJsb2JSZWYuY3VycmVudDtcbiAgICBpZiAoYmxvYikge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGJsb2Iuc3R5bGUubGVmdCA9IGAke21vdXNlUG9zaXRpb24ueH1weGA7XG4gICAgICAgIGJsb2Iuc3R5bGUudG9wID0gYCR7bW91c2VQb3NpdGlvbi55fXB4YDtcbiAgICAgIH0sIDEwMCk7XG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYW5pbWF0ZUJsb2IoKTtcbiAgfSwgW21vdXNlUG9zaXRpb25dKTtcblxuICBjb25zdCBjaGFuZ2VUZXh0ID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgbGV0dGVycyA9IFwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVpcIjtcbiAgICBsZXQgaXRlcmF0aW9uID0gMDtcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuXG4gICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICB0YXJnZXQuaW5uZXJUZXh0ID0gdGFyZ2V0LmRhdGFzZXQudmFsdWVcbiAgICAgICAgLnNwbGl0KFwiXCIpXG4gICAgICAgIC5tYXAoKGxldHRlciwgaW5kZXgpID0+IHtcbiAgICAgICAgICBpZihpbmRleCA8IGl0ZXJhdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIHRhcmdldC5kYXRhc2V0LnZhbHVlW2luZGV4XTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gbGV0dGVyc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyNildXG4gICAgICAgIH0pXG4gICAgICAgIC5qb2luKFwiXCIpO1xuICAgIFxuICAgICAgaWYoaXRlcmF0aW9uID49IHRhcmdldC5kYXRhc2V0LnZhbHVlLmxlbmd0aCl7IFxuICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgIH1cbiAgICBcbiAgICAgIGl0ZXJhdGlvbiArPSAxIC8gMztcbiAgICB9LCAzMCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb3RcIiBvbk1vdXNlTW92ZT17aGFuZGxlTW91c2VNb3ZlfT5cblxuICAgICAgICA8ZGl2ID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoLXNjcmVlbiB3LXNjcmVlbiBncmlkIGl0ZW1zLWNlbnRlcic+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctc2NyZWVuIGgtc2NyZWVuIGFic29sdXRlIHotMCc+XG4gICAgICAgICAgICAgICAgICAgIDxpZnJhbWUgXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nc2NhbGUtMTUwJ1xuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkJhY2tncm91bmQgVmlkZW9cIlxuICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9GaG9aYjhUOF9XUT9hdXRvcGxheT0xJm11dGU9MSZsb29wPTEmcGxheWxpc3Q9RmhvWmI4VDhfV1FcIlxuICAgICAgICAgICAgICAgICAgICAvLyBzcmM9XCIvYXNzZXRzL2ltYWdlL25pY2VyYS12LTAubXA0XCJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTAwJVwiXG4gICAgICAgICAgICAgICAgICAgIGZyYW1lQm9yZGVyPVwiMFwiXG4gICAgICAgICAgICAgICAgICAgIGFsbG93PVwiYXV0b3BsYXk7IGZ1bGxzY3JlZW47IGVuY3J5cHRlZC1tZWRpYVwiXG4gICAgICAgICAgICAgICAgICAgIGFsbG93RnVsbFNjcmVlblxuICAgICAgICAgICAgICAgICAgICA+PC9pZnJhbWU+XG5cbiAgICAgICAgICAgICAgICAgICAgey8qIDx2aWRlb1xuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2Fzc2V0cy9pbWFnZS9uaWNlcmEtdi0wLm1wNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTAwJVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBsb29wXG4gICAgICAgICAgICAgICAgICAgICAgICBtdXRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b1BsYXlcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXlzSW5saW5lXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvYmplY3QtY292ZXJcIlxuICAgICAgICAgICAgICAgICAgICA+PC92aWRlbz4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHJlZj17YmxvYlJlZn0gaWQ9XCJibG9iXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctc2NyZWVuIGgtc2NyZWVuIGJhY2tkcm9wLWJsdXItMnhsIGFic29sdXRlIHotMicgPjwvZGl2PlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoLWZ1bGwgZ3JpZCBpdGVtcy1jZW50ZXInPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoLTkwIGZvbnQtZXh0cmFsaWdodCB0ZXh0LTl4bCBncmlkIGdyaWQtcm93cy0zIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWl0ZW1zLWNlbnRlciAnPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0ndGV4dC13aGl0ZSBmb250LWJsYWNrJyBkYXRhLXZhbHVlPVwiSElTVE9JUkVcIiBvbk1vdXNlT3Zlcj17Y2hhbmdlVGV4dH0+XG4gICAgICAgICAgICAgICAgICAgIEhJU1RPSVJFXG4gICAgICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQtd2hpdGUnIGRhdGEtdmFsdWU9XCJDT1JQU1wiIG9uTW91c2VPdmVyPXtjaGFuZ2VUZXh0fT5cbiAgICAgICAgICAgICAgICAgICAgQ09SUFNcbiAgICAgICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0ndGV4dC13aGl0ZScgZGF0YS12YWx1ZT1cIk1FTU9JUkVcIiBvbk1vdXNlT3Zlcj17Y2hhbmdlVGV4dH0+XG4gICAgICAgICAgICAgICAgICAgIE1FTU9JUkVcbiAgICAgICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9J2gtc2NyZWVuIHctc2NyZWVuIGdyaWQgaXRlbXMtY2VudGVyJz5cbiAgICAgICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgPC9kaXY+XG5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExhbmRpbmc7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJMYW5kaW5nIiwiaXNDbGllbnQiLCJzZXRJc0NsaWVudCIsIm1vdXNlUG9zaXRpb24iLCJzZXRNb3VzZVBvc2l0aW9uIiwieCIsInkiLCJibG9iUmVmIiwiaGFuZGxlTW91c2VNb3ZlIiwiZXZlbnQiLCJjbGllbnRYIiwiY2xpZW50WSIsImFuaW1hdGVCbG9iIiwiYmxvYiIsImN1cnJlbnQiLCJzZXRUaW1lb3V0Iiwic3R5bGUiLCJsZWZ0IiwidG9wIiwiY2hhbmdlVGV4dCIsImxldHRlcnMiLCJpdGVyYXRpb24iLCJ0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImlubmVyVGV4dCIsImRhdGFzZXQiLCJ2YWx1ZSIsInNwbGl0IiwibWFwIiwibGV0dGVyIiwiaW5kZXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJqb2luIiwibGVuZ3RoIiwiY2xlYXJJbnRlcnZhbCIsImRpdiIsImNsYXNzTmFtZSIsIm9uTW91c2VNb3ZlIiwiaWZyYW1lIiwidGl0bGUiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImZyYW1lQm9yZGVyIiwiYWxsb3ciLCJhbGxvd0Z1bGxTY3JlZW4iLCJyZWYiLCJpZCIsImgxIiwiZGF0YS12YWx1ZSIsIm9uTW91c2VPdmVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/landing/index.js\n"));

/***/ })

});