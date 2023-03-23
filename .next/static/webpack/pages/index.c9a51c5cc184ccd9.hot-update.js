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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-scroll */ \"./node_modules/react-scroll/modules/index.js\");\n/* harmony import */ var _landing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./landing */ \"./pages/landing/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst Index = ()=>{\n    _s();\n    const [isClient, setIsClient] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [showNavbar, setShowNavbar] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setIsClient(true);\n        const handleScroll = ()=>{\n            if (window.scrollY > 50) {\n                setShowNavbar(false);\n            } else {\n                setShowNavbar(true);\n            }\n        };\n        window.addEventListener(\"scroll\", handleScroll);\n        return ()=>{\n            window.removeEventListener(\"scroll\", handleScroll);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"root\",\n        children: isClient && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                showNavbar && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                    className: \"fixed top-0 w-full z-40 text-white grid grid-flow-col p-10 items-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: \"/assets/image/NICERA 4x.png\",\n                                    alt: \"logo\",\n                                    className: \"h-8\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/rmzlb/Documents/GitHub/Labs/nicera/pages/index.js\",\n                                    lineNumber: 35,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"ml-2 text-xl font-bold\",\n                                    children: \".\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/rmzlb/Documents/GitHub/Labs/nicera/pages/index.js\",\n                                    lineNumber: 36,\n                                    columnNumber: 17\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/rmzlb/Documents/GitHub/Labs/nicera/pages/index.js\",\n                            lineNumber: 34,\n                            columnNumber: 15\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"flex justify-center space-x-4\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_2__.Link, {\n                                    activeClass: \"text-blue-500\",\n                                    to: \"home\",\n                                    spy: true,\n                                    smooth: true,\n                                    offset: -70,\n                                    duration: 500,\n                                    children: \"Accueil\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/rmzlb/Documents/GitHub/Labs/nicera/pages/index.js\",\n                                    lineNumber: 41,\n                                    columnNumber: 19\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/rmzlb/Documents/GitHub/Labs/nicera/pages/index.js\",\n                                lineNumber: 40,\n                                columnNumber: 17\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/rmzlb/Documents/GitHub/Labs/nicera/pages/index.js\",\n                            lineNumber: 39,\n                            columnNumber: 15\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/rmzlb/Documents/GitHub/Labs/nicera/pages/index.js\",\n                    lineNumber: 32,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_landing__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/rmzlb/Documents/GitHub/Labs/nicera/pages/index.js\",\n                    lineNumber: 56,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true)\n    }, void 0, false, {\n        fileName: \"/Users/rmzlb/Documents/GitHub/Labs/nicera/pages/index.js\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Index, \"p8M0c/8/pRVFVf6WWpyb+YqgXc8=\");\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQTRDO0FBQ2lCO0FBQzdCO0FBRWhDLE1BQU1NLFFBQVEsSUFBTTs7SUFDbEIsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdSLCtDQUFRQSxDQUFDLEtBQUs7SUFDOUMsTUFBTSxDQUFDUyxZQUFZQyxjQUFjLEdBQUdWLCtDQUFRQSxDQUFDLElBQUk7SUFFakRDLGdEQUFTQSxDQUFDLElBQU07UUFDZE8sWUFBWSxJQUFJO1FBRWhCLE1BQU1HLGVBQWUsSUFBTTtZQUN6QixJQUFJQyxPQUFPQyxPQUFPLEdBQUcsSUFBSTtnQkFDdkJILGNBQWMsS0FBSztZQUNyQixPQUFPO2dCQUNMQSxjQUFjLElBQUk7WUFDcEIsQ0FBQztRQUNIO1FBRUFFLE9BQU9FLGdCQUFnQixDQUFDLFVBQVVIO1FBRWxDLE9BQU8sSUFBTTtZQUNYQyxPQUFPRyxtQkFBbUIsQ0FBQyxVQUFVSjtRQUN2QztJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDSztRQUFJQyxXQUFVO2tCQUNaViwwQkFDQzs7Z0JBQ0dFLDRCQUNDLDhEQUFDUztvQkFBSUQsV0FBVTs7c0NBRWIsOERBQUNEOzRCQUFJQyxXQUFVOzs4Q0FDYiw4REFBQ0U7b0NBQUlDLEtBQUk7b0NBQThCQyxLQUFJO29DQUFPSixXQUFVOzs7Ozs7OENBQzVELDhEQUFDSztvQ0FBR0wsV0FBVTs4Q0FBeUI7Ozs7Ozs7Ozs7OztzQ0FHekMsOERBQUNNOzRCQUFHTixXQUFVO3NDQUNaLDRFQUFDTzswQ0FDQyw0RUFBQ3RCLDhDQUFJQTtvQ0FDSHVCLGFBQVk7b0NBQ1pDLElBQUc7b0NBQ0hDLEtBQUssSUFBSTtvQ0FDVEMsUUFBUSxJQUFJO29DQUNaQyxRQUFRLENBQUM7b0NBQ1RDLFVBQVU7OENBQ1g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBUVQsOERBQUN6QixnREFBT0E7Ozs7Ozs7Ozs7OztBQUtsQjtHQXhETUM7S0FBQUE7QUEwRE4sK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluaywgYW5pbWF0ZVNjcm9sbCBhcyBzY3JvbGwgfSBmcm9tICdyZWFjdC1zY3JvbGwnO1xuaW1wb3J0IExhbmRpbmcgZnJvbSAnLi9sYW5kaW5nJztcblxuY29uc3QgSW5kZXggPSAoKSA9PiB7XG4gIGNvbnN0IFtpc0NsaWVudCwgc2V0SXNDbGllbnRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbc2hvd05hdmJhciwgc2V0U2hvd05hdmJhcl0gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldElzQ2xpZW50KHRydWUpO1xuXG4gICAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xuICAgICAgaWYgKHdpbmRvdy5zY3JvbGxZID4gNTApIHtcbiAgICAgICAgc2V0U2hvd05hdmJhcihmYWxzZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRTaG93TmF2YmFyKHRydWUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb3RcIj5cbiAgICAgIHtpc0NsaWVudCAmJiAoXG4gICAgICAgIDw+XG4gICAgICAgICAge3Nob3dOYXZiYXIgJiYgKFxuICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJmaXhlZCB0b3AtMCAgdy1mdWxsIHotNDAgdGV4dC13aGl0ZSBncmlkIGdyaWQtZmxvdy1jb2wgcC0xMCBpdGVtcy1jZW50ZXJcIiA+XG4gICAgICAgICAgICAgIHsvKiBwdXQgdGhlIGxvZ28gKi99XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9hc3NldHMvaW1hZ2UvTklDRVJBIDR4LnBuZ1wiIGFsdD1cImxvZ29cIiBjbGFzc05hbWU9J2gtOCcgLz5cbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibWwtMiB0ZXh0LXhsIGZvbnQtYm9sZFwiPi48L2gxPlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBzcGFjZS14LTRcIj5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICBhY3RpdmVDbGFzcz1cInRleHQtYmx1ZS01MDBcIlxuICAgICAgICAgICAgICAgICAgICB0bz1cImhvbWVcIlxuICAgICAgICAgICAgICAgICAgICBzcHk9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgIHNtb290aD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0PXstNzB9XG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uPXs1MDB9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIEFjY3VlaWxcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIHsvKiBBam91dGV6IGQnYXV0cmVzIGxpZW5zIGljaSBzaSBuw6ljZXNzYWlyZSAqL31cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgICl9XG4gICAgICAgICAgPExhbmRpbmcgLz5cbiAgICAgICAgPC8+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJMaW5rIiwiYW5pbWF0ZVNjcm9sbCIsInNjcm9sbCIsIkxhbmRpbmciLCJJbmRleCIsImlzQ2xpZW50Iiwic2V0SXNDbGllbnQiLCJzaG93TmF2YmFyIiwic2V0U2hvd05hdmJhciIsImhhbmRsZVNjcm9sbCIsIndpbmRvdyIsInNjcm9sbFkiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRpdiIsImNsYXNzTmFtZSIsIm5hdiIsImltZyIsInNyYyIsImFsdCIsImgxIiwidWwiLCJsaSIsImFjdGl2ZUNsYXNzIiwidG8iLCJzcHkiLCJzbW9vdGgiLCJvZmZzZXQiLCJkdXJhdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});