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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst Landing = ()=>{\n    _s();\n    const [isClient, setIsClient] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [mousePosition, setMousePosition] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        x: 0,\n        y: 0\n    });\n    const blobRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setIsClient(true);\n    }, []);\n    const handleMouseMove = (event)=>{\n        const { clientX , clientY  } = event;\n        setMousePosition({\n            x: clientX,\n            y: clientY\n        });\n    };\n    const animateBlob = ()=>{\n        const blob = blobRef.current;\n        if (blob) {\n            setTimeout(()=>{\n                blob.style.left = \"\".concat(mousePosition.x, \"px\");\n                blob.style.top = \"\".concat(mousePosition.y, \"px\");\n            }, 300);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        animateBlob();\n    }, [\n        mousePosition\n    ]);\n    const changeText = (event)=>{\n        const letters = \"ABCDEFGHIJKLMNOPQRSTUVWXYZ\";\n        let iteration = 0;\n        const target = event.currentTarget;\n        const interval = setInterval(()=>{\n            target.innerText = target.dataset.value.split(\"\").map((letter, index)=>{\n                if (index < iteration) {\n                    return target.dataset.value[index];\n                }\n                return letters[Math.floor(Math.random() * 26)];\n            }).join(\"\");\n            if (iteration >= target.dataset.value.length) {\n                clearInterval(interval);\n            }\n            iteration += 1 / 3;\n        }, 30);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"root\",\n        onMouseMove: handleMouseMove,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"h-screen grid items-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            ref: blobRef,\n                            id: \"blob\"\n                        }, void 0, false, {\n                            fileName: \"/Users/rmzlb/Documents/GitHub/Labs/nicera/pages/landing/index.js\",\n                            lineNumber: 61,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-screen h-screen backdrop-blur-3xl absolute z-2\"\n                        }, void 0, false, {\n                            fileName: \"/Users/rmzlb/Documents/GitHub/Labs/nicera/pages/landing/index.js\",\n                            lineNumber: 62,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"h-full grid items-center\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"h-90 font-extralight text-9xl grid grid-rows-3 items-center justify-items-center \",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        className: \"text-white\",\n                                        \"data-value\": \"MEMOIRE\",\n                                        onMouseOver: changeText,\n                                        children: \"MEMOIRE\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/rmzlb/Documents/GitHub/Labs/nicera/pages/landing/index.js\",\n                                        lineNumber: 66,\n                                        columnNumber: 21\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        className: \"text-white\",\n                                        \"data-value\": \"CORPS\",\n                                        onMouseOver: changeText,\n                                        children: \"CORPS\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/rmzlb/Documents/GitHub/Labs/nicera/pages/landing/index.js\",\n                                        lineNumber: 69,\n                                        columnNumber: 21\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        className: \"text-white\",\n                                        \"data-value\": \"HISTOIRE\",\n                                        onMouseOver: changeText,\n                                        children: \"HISTOIRE\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/rmzlb/Documents/GitHub/Labs/nicera/pages/landing/index.js\",\n                                        lineNumber: 72,\n                                        columnNumber: 21\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/rmzlb/Documents/GitHub/Labs/nicera/pages/landing/index.js\",\n                                lineNumber: 65,\n                                columnNumber: 17\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/rmzlb/Documents/GitHub/Labs/nicera/pages/landing/index.js\",\n                            lineNumber: 64,\n                            columnNumber: 17\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/rmzlb/Documents/GitHub/Labs/nicera/pages/landing/index.js\",\n                    lineNumber: 60,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"h-screen w-screen grid items-center\"\n                }, void 0, false, {\n                    fileName: \"/Users/rmzlb/Documents/GitHub/Labs/nicera/pages/landing/index.js\",\n                    lineNumber: 79,\n                    columnNumber: 13\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/rmzlb/Documents/GitHub/Labs/nicera/pages/landing/index.js\",\n            lineNumber: 59,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/rmzlb/Documents/GitHub/Labs/nicera/pages/landing/index.js\",\n        lineNumber: 57,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Landing, \"VqfTPWIheEwPMKpH19CoBscSfaU=\");\n_c = Landing;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Landing);\nvar _c;\n$RefreshReg$(_c, \"Landing\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sYW5kaW5nL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBQW9EO0FBRXBELE1BQU1HLFVBQVUsSUFBTTs7SUFDcEIsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdMLCtDQUFRQSxDQUFDLEtBQUs7SUFDOUMsTUFBTSxDQUFDTSxlQUFlQyxpQkFBaUIsR0FBR1AsK0NBQVFBLENBQUM7UUFBRVEsR0FBRztRQUFHQyxHQUFHO0lBQUU7SUFDaEUsTUFBTUMsVUFBVVIsNkNBQU1BLENBQUMsSUFBSTtJQUUzQkQsZ0RBQVNBLENBQUMsSUFBTTtRQUNkSSxZQUFZLElBQUk7SUFDbEIsR0FBRyxFQUFFO0lBRUwsTUFBTU0sa0JBQWtCQyxDQUFBQSxRQUFTO1FBQy9CLE1BQU0sRUFBRUMsUUFBTyxFQUFFQyxRQUFPLEVBQUUsR0FBR0Y7UUFDN0JMLGlCQUFpQjtZQUFFQyxHQUFHSztZQUFTSixHQUFHSztRQUFRO0lBQzVDO0lBRUEsTUFBTUMsY0FBYyxJQUFNO1FBQ3hCLE1BQU1DLE9BQU9OLFFBQVFPLE9BQU87UUFDNUIsSUFBSUQsTUFBTTtZQUNSRSxXQUFXLElBQU07Z0JBQ2ZGLEtBQUtHLEtBQUssQ0FBQ0MsSUFBSSxHQUFHLEdBQW1CLE9BQWhCZCxjQUFjRSxDQUFDLEVBQUM7Z0JBQ3JDUSxLQUFLRyxLQUFLLENBQUNFLEdBQUcsR0FBRyxHQUFtQixPQUFoQmYsY0FBY0csQ0FBQyxFQUFDO1lBQ3RDLEdBQUc7UUFDTCxDQUFDO0lBQ0g7SUFFQVIsZ0RBQVNBLENBQUMsSUFBTTtRQUNkYztJQUNGLEdBQUc7UUFBQ1Q7S0FBYztJQUVsQixNQUFNZ0IsYUFBYSxDQUFDVixRQUFVO1FBQzVCLE1BQU1XLFVBQVU7UUFDaEIsSUFBSUMsWUFBWTtRQUNoQixNQUFNQyxTQUFTYixNQUFNYyxhQUFhO1FBRWxDLE1BQU1DLFdBQVdDLFlBQVksSUFBTTtZQUNqQ0gsT0FBT0ksU0FBUyxHQUFHSixPQUFPSyxPQUFPLENBQUNDLEtBQUssQ0FDcENDLEtBQUssQ0FBQyxJQUNOQyxHQUFHLENBQUMsQ0FBQ0MsUUFBUUMsUUFBVTtnQkFDdEIsSUFBR0EsUUFBUVgsV0FBVztvQkFDcEIsT0FBT0MsT0FBT0ssT0FBTyxDQUFDQyxLQUFLLENBQUNJLE1BQU07Z0JBQ3BDLENBQUM7Z0JBRUQsT0FBT1osT0FBTyxDQUFDYSxLQUFLQyxLQUFLLENBQUNELEtBQUtFLE1BQU0sS0FBSyxJQUFJO1lBQ2hELEdBQ0NDLElBQUksQ0FBQztZQUVSLElBQUdmLGFBQWFDLE9BQU9LLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDUyxNQUFNLEVBQUM7Z0JBQzFDQyxjQUFjZDtZQUNoQixDQUFDO1lBRURILGFBQWEsSUFBSTtRQUNuQixHQUFHO0lBQ0w7SUFFQSxxQkFDRSw4REFBQ2tCO1FBQUlDLFdBQVU7UUFBT0MsYUFBYWpDO2tCQUUvQiw0RUFBQytCOzs4QkFDRyw4REFBQ0E7b0JBQUlDLFdBQVU7O3NDQUNYLDhEQUFDRDs0QkFBSUcsS0FBS25DOzRCQUFTb0MsSUFBRzs7Ozs7O3NDQUN0Qiw4REFBQ0o7NEJBQUlDLFdBQVU7Ozs7OztzQ0FFZiw4REFBQ0Q7NEJBQUlDLFdBQVU7c0NBQ2YsNEVBQUNEO2dDQUFJQyxXQUFVOztrREFDWCw4REFBQ0k7d0NBQUdKLFdBQVU7d0NBQWFLLGNBQVc7d0NBQVVDLGFBQWEzQjtrREFBWTs7Ozs7O2tEQUd6RSw4REFBQ3lCO3dDQUFHSixXQUFVO3dDQUFhSyxjQUFXO3dDQUFRQyxhQUFhM0I7a0RBQVk7Ozs7OztrREFHdkUsOERBQUN5Qjt3Q0FBR0osV0FBVTt3Q0FBYUssY0FBVzt3Q0FBV0MsYUFBYTNCO2tEQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFPbEYsOERBQUNvQjtvQkFBSUMsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPM0I7R0FuRk14QztLQUFBQTtBQXFGTiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9sYW5kaW5nL2luZGV4LmpzP2Q0N2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBMYW5kaW5nID0gKCkgPT4ge1xuICBjb25zdCBbaXNDbGllbnQsIHNldElzQ2xpZW50XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW21vdXNlUG9zaXRpb24sIHNldE1vdXNlUG9zaXRpb25dID0gdXNlU3RhdGUoeyB4OiAwLCB5OiAwIH0pO1xuICBjb25zdCBibG9iUmVmID0gdXNlUmVmKG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0SXNDbGllbnQodHJ1ZSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBoYW5kbGVNb3VzZU1vdmUgPSBldmVudCA9PiB7XG4gICAgY29uc3QgeyBjbGllbnRYLCBjbGllbnRZIH0gPSBldmVudDtcbiAgICBzZXRNb3VzZVBvc2l0aW9uKHsgeDogY2xpZW50WCwgeTogY2xpZW50WSB9KTtcbiAgfTtcblxuICBjb25zdCBhbmltYXRlQmxvYiA9ICgpID0+IHtcbiAgICBjb25zdCBibG9iID0gYmxvYlJlZi5jdXJyZW50O1xuICAgIGlmIChibG9iKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgYmxvYi5zdHlsZS5sZWZ0ID0gYCR7bW91c2VQb3NpdGlvbi54fXB4YDtcbiAgICAgICAgYmxvYi5zdHlsZS50b3AgPSBgJHttb3VzZVBvc2l0aW9uLnl9cHhgO1xuICAgICAgfSwgMzAwKTtcbiAgICB9XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhbmltYXRlQmxvYigpO1xuICB9LCBbbW91c2VQb3NpdGlvbl0pO1xuXG4gIGNvbnN0IGNoYW5nZVRleHQgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBsZXR0ZXJzID0gXCJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWlwiO1xuICAgIGxldCBpdGVyYXRpb24gPSAwO1xuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG5cbiAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHRhcmdldC5pbm5lclRleHQgPSB0YXJnZXQuZGF0YXNldC52YWx1ZVxuICAgICAgICAuc3BsaXQoXCJcIilcbiAgICAgICAgLm1hcCgobGV0dGVyLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGlmKGluZGV4IDwgaXRlcmF0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gdGFyZ2V0LmRhdGFzZXQudmFsdWVbaW5kZXhdO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBsZXR0ZXJzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDI2KV1cbiAgICAgICAgfSlcbiAgICAgICAgLmpvaW4oXCJcIik7XG4gICAgXG4gICAgICBpZihpdGVyYXRpb24gPj0gdGFyZ2V0LmRhdGFzZXQudmFsdWUubGVuZ3RoKXsgXG4gICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgfVxuICAgIFxuICAgICAgaXRlcmF0aW9uICs9IDEgLyAzO1xuICAgIH0sIDMwKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm9vdFwiIG9uTW91c2VNb3ZlPXtoYW5kbGVNb3VzZU1vdmV9PlxuXG4gICAgICAgIDxkaXYgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2gtc2NyZWVuIGdyaWQgaXRlbXMtY2VudGVyJz5cbiAgICAgICAgICAgICAgICA8ZGl2IHJlZj17YmxvYlJlZn0gaWQ9XCJibG9iXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctc2NyZWVuIGgtc2NyZWVuIGJhY2tkcm9wLWJsdXItM3hsIGFic29sdXRlIHotMicgPjwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2gtZnVsbCBncmlkIGl0ZW1zLWNlbnRlcic+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2gtOTAgZm9udC1leHRyYWxpZ2h0IHRleHQtOXhsIGdyaWQgZ3JpZC1yb3dzLTMgaXRlbXMtY2VudGVyIGp1c3RpZnktaXRlbXMtY2VudGVyICc+XG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQtd2hpdGUnIGRhdGEtdmFsdWU9XCJNRU1PSVJFXCIgb25Nb3VzZU92ZXI9e2NoYW5nZVRleHR9PlxuICAgICAgICAgICAgICAgICAgICBNRU1PSVJFXG4gICAgICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQtd2hpdGUnIGRhdGEtdmFsdWU9XCJDT1JQU1wiIG9uTW91c2VPdmVyPXtjaGFuZ2VUZXh0fT5cbiAgICAgICAgICAgICAgICAgICAgQ09SUFNcbiAgICAgICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0ndGV4dC13aGl0ZScgZGF0YS12YWx1ZT1cIkhJU1RPSVJFXCIgb25Nb3VzZU92ZXI9e2NoYW5nZVRleHR9PlxuICAgICAgICAgICAgICAgICAgICBISVNUT0lSRVxuICAgICAgICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoLXNjcmVlbiB3LXNjcmVlbiBncmlkIGl0ZW1zLWNlbnRlcic+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTGFuZGluZztcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsIkxhbmRpbmciLCJpc0NsaWVudCIsInNldElzQ2xpZW50IiwibW91c2VQb3NpdGlvbiIsInNldE1vdXNlUG9zaXRpb24iLCJ4IiwieSIsImJsb2JSZWYiLCJoYW5kbGVNb3VzZU1vdmUiLCJldmVudCIsImNsaWVudFgiLCJjbGllbnRZIiwiYW5pbWF0ZUJsb2IiLCJibG9iIiwiY3VycmVudCIsInNldFRpbWVvdXQiLCJzdHlsZSIsImxlZnQiLCJ0b3AiLCJjaGFuZ2VUZXh0IiwibGV0dGVycyIsIml0ZXJhdGlvbiIsInRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiaW5uZXJUZXh0IiwiZGF0YXNldCIsInZhbHVlIiwic3BsaXQiLCJtYXAiLCJsZXR0ZXIiLCJpbmRleCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImpvaW4iLCJsZW5ndGgiLCJjbGVhckludGVydmFsIiwiZGl2IiwiY2xhc3NOYW1lIiwib25Nb3VzZU1vdmUiLCJyZWYiLCJpZCIsImgxIiwiZGF0YS12YWx1ZSIsIm9uTW91c2VPdmVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/landing/index.js\n"));

/***/ })

});