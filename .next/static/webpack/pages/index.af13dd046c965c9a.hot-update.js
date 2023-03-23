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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst Landing = ()=>{\n    _s();\n    const [isClient, setIsClient] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [mousePosition, setMousePosition] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        x: 0,\n        y: 0\n    });\n    const blobRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setIsClient(true);\n    }, []);\n    const handleMouseMove = (event)=>{\n        const { clientX , clientY  } = event;\n        setMousePosition({\n            x: clientX,\n            y: clientY\n        });\n    };\n    const animateBlob = ()=>{\n        const blob = blobRef.current;\n        if (blob) {\n            setTimeout(()=>{\n                blob.style.left = \"\".concat(mousePosition.x, \"px\");\n                blob.style.top = \"\".concat(mousePosition.y, \"px\");\n            }, 100);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        animateBlob();\n    }, [\n        mousePosition\n    ]);\n    const changeText = (event)=>{\n        const letters = \"ABCDEFGHIJKLMNOPQRSTUVWXYZ\";\n        let iteration = 0;\n        const target = event.currentTarget;\n        const interval = setInterval(()=>{\n            target.innerText = target.dataset.value.split(\"\").map((letter, index)=>{\n                if (index < iteration) {\n                    return target.dataset.value[index];\n                }\n                return letters[Math.floor(Math.random() * 26)];\n            }).join(\"\");\n            if (iteration >= target.dataset.value.length) {\n                clearInterval(interval);\n            }\n            iteration += 1 / 3;\n        }, 30);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"root\",\n        onMouseMove: handleMouseMove,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-screen w-screen grid items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-screen h-screen absolute z-0\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                            width: \"1707\",\n                            height: \"969\",\n                            src: \"https://www.youtube.com/embed/FhoZb8T8_WQ\",\n                            title: \"KATIA\",\n                            frameborder: \"0\",\n                            allow: \"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\",\n                            allowfullscreen: true\n                        }, void 0, false, {\n                            fileName: \"/Users/rmzlb/Documents/GitHub/Labs/nicera/pages/landing/index.js\",\n                            lineNumber: 63,\n                            columnNumber: 17\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/rmzlb/Documents/GitHub/Labs/nicera/pages/landing/index.js\",\n                        lineNumber: 62,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-screen h-screen backdrop-blur-2xl absolute z-2\"\n                    }, void 0, false, {\n                        fileName: \"/Users/rmzlb/Documents/GitHub/Labs/nicera/pages/landing/index.js\",\n                        lineNumber: 77,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"h-full grid items-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"h-90 font-extralight text-9xl grid grid-rows-3 items-center justify-items-center \",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"text-white\",\n                                    \"data-value\": \"HISTOIRE\",\n                                    onMouseOver: changeText,\n                                    children: \"HISTOIRE\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/rmzlb/Documents/GitHub/Labs/nicera/pages/landing/index.js\",\n                                    lineNumber: 82,\n                                    columnNumber: 21\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"text-white\",\n                                    \"data-value\": \"CORPS\",\n                                    onMouseOver: changeText,\n                                    children: \"CORPS\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/rmzlb/Documents/GitHub/Labs/nicera/pages/landing/index.js\",\n                                    lineNumber: 85,\n                                    columnNumber: 21\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"text-white\",\n                                    \"data-value\": \"MEMOIRE\",\n                                    onMouseOver: changeText,\n                                    children: \"MEMOIRE\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/rmzlb/Documents/GitHub/Labs/nicera/pages/landing/index.js\",\n                                    lineNumber: 88,\n                                    columnNumber: 21\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/rmzlb/Documents/GitHub/Labs/nicera/pages/landing/index.js\",\n                            lineNumber: 80,\n                            columnNumber: 17\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/rmzlb/Documents/GitHub/Labs/nicera/pages/landing/index.js\",\n                        lineNumber: 79,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/rmzlb/Documents/GitHub/Labs/nicera/pages/landing/index.js\",\n                lineNumber: 60,\n                columnNumber: 13\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/rmzlb/Documents/GitHub/Labs/nicera/pages/landing/index.js\",\n            lineNumber: 59,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/rmzlb/Documents/GitHub/Labs/nicera/pages/landing/index.js\",\n        lineNumber: 57,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Landing, \"VqfTPWIheEwPMKpH19CoBscSfaU=\");\n_c = Landing;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Landing);\nvar _c;\n$RefreshReg$(_c, \"Landing\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y2s6Ly9fTl9FLy4vcGFnZXMvbGFuZGluZy9pbmRleC5qcz9kNDdiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgTGFuZGluZyA9ICgpID0+IHtcbiAgY29uc3QgW2lzQ2xpZW50LCBzZXRJc0NsaWVudF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFttb3VzZVBvc2l0aW9uLCBzZXRNb3VzZVBvc2l0aW9uXSA9IHVzZVN0YXRlKHsgeDogMCwgeTogMCB9KTtcbiAgY29uc3QgYmxvYlJlZiA9IHVzZVJlZihudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldElzQ2xpZW50KHRydWUpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgaGFuZGxlTW91c2VNb3ZlID0gZXZlbnQgPT4ge1xuICAgIGNvbnN0IHsgY2xpZW50WCwgY2xpZW50WSB9ID0gZXZlbnQ7XG4gICAgc2V0TW91c2VQb3NpdGlvbih7IHg6IGNsaWVudFgsIHk6IGNsaWVudFkgfSk7XG4gIH07XG5cbiAgY29uc3QgYW5pbWF0ZUJsb2IgPSAoKSA9PiB7XG4gICAgY29uc3QgYmxvYiA9IGJsb2JSZWYuY3VycmVudDtcbiAgICBpZiAoYmxvYikge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGJsb2Iuc3R5bGUubGVmdCA9IGAke21vdXNlUG9zaXRpb24ueH1weGA7XG4gICAgICAgIGJsb2Iuc3R5bGUudG9wID0gYCR7bW91c2VQb3NpdGlvbi55fXB4YDtcbiAgICAgIH0sIDEwMCk7XG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYW5pbWF0ZUJsb2IoKTtcbiAgfSwgW21vdXNlUG9zaXRpb25dKTtcblxuICBjb25zdCBjaGFuZ2VUZXh0ID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgbGV0dGVycyA9IFwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVpcIjtcbiAgICBsZXQgaXRlcmF0aW9uID0gMDtcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuXG4gICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICB0YXJnZXQuaW5uZXJUZXh0ID0gdGFyZ2V0LmRhdGFzZXQudmFsdWVcbiAgICAgICAgLnNwbGl0KFwiXCIpXG4gICAgICAgIC5tYXAoKGxldHRlciwgaW5kZXgpID0+IHtcbiAgICAgICAgICBpZihpbmRleCA8IGl0ZXJhdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIHRhcmdldC5kYXRhc2V0LnZhbHVlW2luZGV4XTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gbGV0dGVyc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyNildXG4gICAgICAgIH0pXG4gICAgICAgIC5qb2luKFwiXCIpO1xuICAgIFxuICAgICAgaWYoaXRlcmF0aW9uID49IHRhcmdldC5kYXRhc2V0LnZhbHVlLmxlbmd0aCl7IFxuICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgIH1cbiAgICBcbiAgICAgIGl0ZXJhdGlvbiArPSAxIC8gMztcbiAgICB9LCAzMCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb3RcIiBvbk1vdXNlTW92ZT17aGFuZGxlTW91c2VNb3ZlfT5cblxuICAgICAgICA8ZGl2ID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoLXNjcmVlbiB3LXNjcmVlbiBncmlkIGl0ZW1zLWNlbnRlcic+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctc2NyZWVuIGgtc2NyZWVuIGFic29sdXRlIHotMCc+XG4gICAgICAgICAgICAgICAgPGlmcmFtZSB3aWR0aD1cIjE3MDdcIiBoZWlnaHQ9XCI5NjlcIiBzcmM9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9GaG9aYjhUOF9XUVwiIHRpdGxlPVwiS0FUSUFcIiBmcmFtZWJvcmRlcj1cIjBcIiBhbGxvdz1cImFjY2VsZXJvbWV0ZXI7IGF1dG9wbGF5OyBjbGlwYm9hcmQtd3JpdGU7IGVuY3J5cHRlZC1tZWRpYTsgZ3lyb3Njb3BlOyBwaWN0dXJlLWluLXBpY3R1cmU7IHdlYi1zaGFyZVwiIGFsbG93ZnVsbHNjcmVlbj48L2lmcmFtZT5cblxuICAgICAgICAgICAgICAgICAgICB7LyogPHZpZGVvXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvYXNzZXRzL2ltYWdlL25pY2VyYS12LTAubXA0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxMDAlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvb3BcbiAgICAgICAgICAgICAgICAgICAgICAgIG11dGVkXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvUGxheVxuICAgICAgICAgICAgICAgICAgICAgICAgcGxheXNJbmxpbmVcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9iamVjdC1jb3ZlclwiXG4gICAgICAgICAgICAgICAgICAgID48L3ZpZGVvPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IHJlZj17YmxvYlJlZn0gaWQ9XCJibG9iXCI+PC9kaXY+ICovfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3LXNjcmVlbiBoLXNjcmVlbiBiYWNrZHJvcC1ibHVyLTJ4bCBhYnNvbHV0ZSB6LTInID48L2Rpdj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naC1mdWxsIGdyaWQgaXRlbXMtY2VudGVyJz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naC05MCBmb250LWV4dHJhbGlnaHQgdGV4dC05eGwgZ3JpZCBncmlkLXJvd3MtMyBpdGVtcy1jZW50ZXIganVzdGlmeS1pdGVtcy1jZW50ZXIgJz5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQtd2hpdGUnIGRhdGEtdmFsdWU9XCJISVNUT0lSRVwiIG9uTW91c2VPdmVyPXtjaGFuZ2VUZXh0fT5cbiAgICAgICAgICAgICAgICAgICAgSElTVE9JUkVcbiAgICAgICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0ndGV4dC13aGl0ZScgZGF0YS12YWx1ZT1cIkNPUlBTXCIgb25Nb3VzZU92ZXI9e2NoYW5nZVRleHR9PlxuICAgICAgICAgICAgICAgICAgICBDT1JQU1xuICAgICAgICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSd0ZXh0LXdoaXRlJyBkYXRhLXZhbHVlPVwiTUVNT0lSRVwiIG9uTW91c2VPdmVyPXtjaGFuZ2VUZXh0fT5cbiAgICAgICAgICAgICAgICAgICAgTUVNT0lSRVxuICAgICAgICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT0naC1zY3JlZW4gdy1zY3JlZW4gZ3JpZCBpdGVtcy1jZW50ZXInPlxuICAgICAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICA8L2Rpdj5cblxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTGFuZGluZztcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsIkxhbmRpbmciLCJpc0NsaWVudCIsInNldElzQ2xpZW50IiwibW91c2VQb3NpdGlvbiIsInNldE1vdXNlUG9zaXRpb24iLCJ4IiwieSIsImJsb2JSZWYiLCJoYW5kbGVNb3VzZU1vdmUiLCJldmVudCIsImNsaWVudFgiLCJjbGllbnRZIiwiYW5pbWF0ZUJsb2IiLCJibG9iIiwiY3VycmVudCIsInNldFRpbWVvdXQiLCJzdHlsZSIsImxlZnQiLCJ0b3AiLCJjaGFuZ2VUZXh0IiwibGV0dGVycyIsIml0ZXJhdGlvbiIsInRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiaW5uZXJUZXh0IiwiZGF0YXNldCIsInZhbHVlIiwic3BsaXQiLCJtYXAiLCJsZXR0ZXIiLCJpbmRleCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImpvaW4iLCJsZW5ndGgiLCJjbGVhckludGVydmFsIiwiZGl2IiwiY2xhc3NOYW1lIiwib25Nb3VzZU1vdmUiLCJpZnJhbWUiLCJ3aWR0aCIsImhlaWdodCIsInNyYyIsInRpdGxlIiwiZnJhbWVib3JkZXIiLCJhbGxvdyIsImFsbG93ZnVsbHNjcmVlbiIsImgxIiwiZGF0YS12YWx1ZSIsIm9uTW91c2VPdmVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/landing/index.js\n"));

/***/ })

});