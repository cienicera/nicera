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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intersection-observer */ \"./node_modules/react-intersection-observer/react-intersection-observer.modern.mjs\");\n\nvar _s = $RefreshSig$();\n\n\nconst Plan = ()=>{\n    _s();\n    const [isClient, setIsClient] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [mousePosition, setMousePosition] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        x: 0,\n        y: 0\n    });\n    const [isIntersecting, setIsIntersecting] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const blobRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const h1Ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const h2Ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [h1Text, setH1Text] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"MEMOIRE\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setIsClient(true);\n    }, []);\n    const handleMouseMove = (event)=>{\n        const { clientX , clientY  } = event;\n        setMousePosition({\n            x: clientX,\n            y: clientY\n        });\n    };\n    const animateBlob = ()=>{\n        const blob = blobRef.current;\n        if (blob) {\n            blob.style.left = \"\".concat(mousePosition.x, \"px\");\n            blob.style.top = \"\".concat(mousePosition.y, \"px\");\n        }\n    };\n    const changeText = ()=>{\n        const letters = \"ABCDEFGHIJKLMNOPQRSTUVWXYZ\";\n        let iteration = 0;\n        const target = h1Ref.current;\n        const interval = setInterval(()=>{\n            setH1Text((h1Text)=>h1Text.split(\"\").map((letter, index)=>{\n                    if (index < iteration) {\n                        return target.dataset.value[index];\n                    }\n                    return letters[Math.floor(Math.random() * 26)];\n                }).join(\"\"));\n            if (iteration >= target.dataset.value.length) {\n                clearInterval(interval);\n            }\n            iteration += 1 / 3;\n        }, 30);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        animateBlob();\n    }, [\n        mousePosition\n    ]);\n    const { ref  } = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__.useInView)({\n        threshold: 0,\n        triggerOnce: true,\n        rootMargin: \"0px\",\n        onEnter: ()=>setIsIntersecting(true)\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"root\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-full h-screen\",\n                    id: \"\",\n                    onMouseMove: handleMouseMove,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            ref: blobRef,\n                            id: \"blob\"\n                        }, void 0, false, {\n                            fileName: \"/Users/rmzlb/Documents/GitHub/Labs/nicera/pages/landing/index.js\",\n                            lineNumber: 73,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-full absolute\",\n                            id: \"blur\"\n                        }, void 0, false, {\n                            fileName: \"/Users/rmzlb/Documents/GitHub/Labs/nicera/pages/landing/index.js\",\n                            lineNumber: 74,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            ref: ref,\n                            className: \"h-screen\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    ref: h1Ref,\n                                    className: \"text-white\",\n                                    \"data-value\": \"MEMOIRE\",\n                                    onMouseOver: changeText,\n                                    children: isIntersecting ? \"CORPS\" : h1Text\n                                }, void 0, false, {\n                                    fileName: \"/Users/rmzlb/Documents/GitHub/Labs/nicera/pages/landing/index.js\",\n                                    lineNumber: 76,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    ref: h2Ref,\n                                    className: \"text-white\",\n                                    \"data-value\": \"CORPS\",\n                                    onMouseOver: changeText,\n                                    children: \"CORPS\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/rmzlb/Documents/GitHub/Labs/nicera/pages/landing/index.js\",\n                                    lineNumber: 79,\n                                    columnNumber: 17\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/rmzlb/Documents/GitHub/Labs/nicera/pages/landing/index.js\",\n                            lineNumber: 75,\n                            columnNumber: 17\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/rmzlb/Documents/GitHub/Labs/nicera/pages/landing/index.js\",\n                    lineNumber: 72,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \" w-screen h-screen grid place-content-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-white\",\n                        children: \"ouech\"\n                    }, void 0, false, {\n                        fileName: \"/Users/rmzlb/Documents/GitHub/Labs/nicera/pages/landing/index.js\",\n                        lineNumber: 85,\n                        columnNumber: 17\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/rmzlb/Documents/GitHub/Labs/nicera/pages/landing/index.js\",\n                    lineNumber: 84,\n                    columnNumber: 13\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/rmzlb/Documents/GitHub/Labs/nicera/pages/landing/index.js\",\n            lineNumber: 71,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/rmzlb/Documents/GitHub/Labs/nicera/pages/landing/index.js\",\n        lineNumber: 68,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Plan, \"Aw0PCLVycE3JO4Xu92icwKnvfwE=\", false, function() {\n    return [\n        react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__.useInView\n    ];\n});\n_c = Plan;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Plan);\nvar _c;\n$RefreshReg$(_c, \"Plan\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs4Q0FFdEMsOERBQUN1QztvQ0FBR1QsS0FBSy9CO29DQUFPcUMsV0FBVTtvQ0FBYUksY0FBVztvQ0FBUUMsYUFBYTdCOzhDQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBS3ZGLDhEQUFDdUI7b0JBQUlDLFdBQVU7OEJBQ1gsNEVBQUNNO3dCQUFFTixXQUFVO2tDQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTFDO0dBdkZNaEQ7O1FBd0RZRCxrRUFBU0E7OztLQXhEckJDO0FBeUZOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2xhbmRpbmcvaW5kZXguanM/ZDQ3YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VJblZpZXcgfSBmcm9tICdyZWFjdC1pbnRlcnNlY3Rpb24tb2JzZXJ2ZXInO1xuXG5jb25zdCBQbGFuID0gKCkgPT4ge1xuICBjb25zdCBbaXNDbGllbnQsIHNldElzQ2xpZW50XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW21vdXNlUG9zaXRpb24sIHNldE1vdXNlUG9zaXRpb25dID0gdXNlU3RhdGUoeyB4OiAwLCB5OiAwIH0pO1xuICBjb25zdCBbaXNJbnRlcnNlY3RpbmcsIHNldElzSW50ZXJzZWN0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgYmxvYlJlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgaDFSZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IGgyUmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBbaDFUZXh0LCBzZXRIMVRleHRdID0gdXNlU3RhdGUoXCJNRU1PSVJFXCIpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0SXNDbGllbnQodHJ1ZSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBoYW5kbGVNb3VzZU1vdmUgPSBldmVudCA9PiB7XG4gICAgY29uc3QgeyBjbGllbnRYLCBjbGllbnRZIH0gPSBldmVudDtcbiAgICBzZXRNb3VzZVBvc2l0aW9uKHsgeDogY2xpZW50WCwgeTogY2xpZW50WSB9KTtcbiAgfTtcblxuICBjb25zdCBhbmltYXRlQmxvYiA9ICgpID0+IHtcbiAgICBjb25zdCBibG9iID0gYmxvYlJlZi5jdXJyZW50O1xuICAgIGlmIChibG9iKSB7XG4gICAgICBibG9iLnN0eWxlLmxlZnQgPSBgJHttb3VzZVBvc2l0aW9uLnh9cHhgO1xuICAgICAgYmxvYi5zdHlsZS50b3AgPSBgJHttb3VzZVBvc2l0aW9uLnl9cHhgO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBjaGFuZ2VUZXh0ID0gKCkgPT4ge1xuICAgIGNvbnN0IGxldHRlcnMgPSBcIkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaXCI7XG4gICAgbGV0IGl0ZXJhdGlvbiA9IDA7XG4gICAgY29uc3QgdGFyZ2V0ID0gaDFSZWYuY3VycmVudDtcblxuICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgc2V0SDFUZXh0KGgxVGV4dCA9PiBoMVRleHRcbiAgICAgICAgLnNwbGl0KFwiXCIpXG4gICAgICAgIC5tYXAoKGxldHRlciwgaW5kZXgpID0+IHtcbiAgICAgICAgICBpZihpbmRleCA8IGl0ZXJhdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIHRhcmdldC5kYXRhc2V0LnZhbHVlW2luZGV4XTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gbGV0dGVyc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyNildXG4gICAgICAgIH0pXG4gICAgICAgIC5qb2luKFwiXCIpXG4gICAgICApO1xuXG4gICAgICBpZihpdGVyYXRpb24gPj0gdGFyZ2V0LmRhdGFzZXQudmFsdWUubGVuZ3RoKXsgXG4gICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgfVxuXG4gICAgICBpdGVyYXRpb24gKz0gMSAvIDM7XG4gICAgfSwgMzApO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYW5pbWF0ZUJsb2IoKTtcbiAgfSwgW21vdXNlUG9zaXRpb25dKTtcblxuICBjb25zdCB7IHJlZiB9ID0gdXNlSW5WaWV3KHtcbiAgICB0aHJlc2hvbGQ6IDAsXG4gICAgdHJpZ2dlck9uY2U6IHRydWUsXG4gICAgcm9vdE1hcmdpbjogXCIwcHhcIixcbiAgICBvbkVudGVyOiAoKSA9PiBzZXRJc0ludGVyc2VjdGluZyh0cnVlKVxuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm9vdFwiID5cbiAgICBcbiAgICAgICAgXG4gICAgICAgIDxkaXYgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctZnVsbCBoLXNjcmVlbicgaWQ9XCJcIiBvbk1vdXNlTW92ZT17aGFuZGxlTW91c2VNb3ZlfT5cbiAgICAgICAgICAgICAgICA8ZGl2ICByZWY9e2Jsb2JSZWZ9IGlkPVwiYmxvYlwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3LWZ1bGwgYWJzb2x1dGUnIGlkPVwiYmx1clwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgcmVmPXtyZWZ9IGNsYXNzTmFtZT0naC1zY3JlZW4nPlxuICAgICAgICAgICAgICAgIDxoMSByZWY9e2gxUmVmfSBjbGFzc05hbWU9J3RleHQtd2hpdGUnIGRhdGEtdmFsdWU9XCJNRU1PSVJFXCIgb25Nb3VzZU92ZXI9e2NoYW5nZVRleHR9PlxuICAgICAgICAgICAgICAgICAgICB7aXNJbnRlcnNlY3RpbmcgPyBcIkNPUlBTXCIgOiBoMVRleHR9XG4gICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICA8aDEgcmVmPXtoMlJlZn0gY2xhc3NOYW1lPSd0ZXh0LXdoaXRlJyBkYXRhLXZhbHVlPVwiQ09SUFNcIiBvbk1vdXNlT3Zlcj17Y2hhbmdlVGV4dH0+XG4gICAgICAgICAgICAgICAgICAgIENPUlBTXG4gICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9JyB3LXNjcmVlbiBoLXNjcmVlbiBncmlkIHBsYWNlLWNvbnRlbnQtY2VudGVyJyA+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LXdoaXRlJz5vdWVjaDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGxhbjtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZUluVmlldyIsIlBsYW4iLCJpc0NsaWVudCIsInNldElzQ2xpZW50IiwibW91c2VQb3NpdGlvbiIsInNldE1vdXNlUG9zaXRpb24iLCJ4IiwieSIsImlzSW50ZXJzZWN0aW5nIiwic2V0SXNJbnRlcnNlY3RpbmciLCJibG9iUmVmIiwiaDFSZWYiLCJoMlJlZiIsImgxVGV4dCIsInNldEgxVGV4dCIsImhhbmRsZU1vdXNlTW92ZSIsImV2ZW50IiwiY2xpZW50WCIsImNsaWVudFkiLCJhbmltYXRlQmxvYiIsImJsb2IiLCJjdXJyZW50Iiwic3R5bGUiLCJsZWZ0IiwidG9wIiwiY2hhbmdlVGV4dCIsImxldHRlcnMiLCJpdGVyYXRpb24iLCJ0YXJnZXQiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwic3BsaXQiLCJtYXAiLCJsZXR0ZXIiLCJpbmRleCIsImRhdGFzZXQiLCJ2YWx1ZSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImpvaW4iLCJsZW5ndGgiLCJjbGVhckludGVydmFsIiwicmVmIiwidGhyZXNob2xkIiwidHJpZ2dlck9uY2UiLCJyb290TWFyZ2luIiwib25FbnRlciIsImRpdiIsImNsYXNzTmFtZSIsImlkIiwib25Nb3VzZU1vdmUiLCJoMSIsImRhdGEtdmFsdWUiLCJvbk1vdXNlT3ZlciIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/landing/index.js\n"));

/***/ })

});