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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-scroll */ \"./node_modules/react-scroll/modules/index.js\");\n/* harmony import */ var _landing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./landing */ \"./pages/landing/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst Index = ()=>{\n    _s();\n    const [isClient, setIsClient] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [showNavbar, setShowNavbar] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setIsClient(true);\n        const handleScroll = ()=>{\n            if (window.scrollY > 50) {\n                setShowNavbar(false);\n            } else {\n                setShowNavbar(true);\n            }\n        };\n        window.addEventListener(\"scroll\", handleScroll);\n        return ()=>{\n            window.removeEventListener(\"scroll\", handleScroll);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"root\",\n        children: isClient && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                showNavbar && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                    className: \"fixed top-0 left-0 w-full bg-white p-4\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"flex justify-center space-x-4\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_2__.Link, {\n                                activeClass: \"text-blue-500\",\n                                to: \"home\",\n                                spy: true,\n                                smooth: true,\n                                offset: -70,\n                                duration: 500,\n                                children: \"Accueil\"\n                            }, void 0, false, {\n                                fileName: \"/Users/rmzlb/Documents/GitHub/Labs/nicera/pages/index.js\",\n                                lineNumber: 35,\n                                columnNumber: 19\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/rmzlb/Documents/GitHub/Labs/nicera/pages/index.js\",\n                            lineNumber: 34,\n                            columnNumber: 17\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/rmzlb/Documents/GitHub/Labs/nicera/pages/index.js\",\n                        lineNumber: 33,\n                        columnNumber: 15\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/rmzlb/Documents/GitHub/Labs/nicera/pages/index.js\",\n                    lineNumber: 32,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Plan, {}, void 0, false, {\n                    fileName: \"/Users/rmzlb/Documents/GitHub/Labs/nicera/pages/index.js\",\n                    lineNumber: 50,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true)\n    }, void 0, false, {\n        fileName: \"/Users/rmzlb/Documents/GitHub/Labs/nicera/pages/index.js\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Index, \"p8M0c/8/pRVFVf6WWpyb+YqgXc8=\");\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQTRDO0FBQ2lCO0FBQzdCO0FBRWhDLE1BQU1NLFFBQVEsSUFBTTs7SUFDbEIsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdSLCtDQUFRQSxDQUFDLEtBQUs7SUFDOUMsTUFBTSxDQUFDUyxZQUFZQyxjQUFjLEdBQUdWLCtDQUFRQSxDQUFDLElBQUk7SUFFakRDLGdEQUFTQSxDQUFDLElBQU07UUFDZE8sWUFBWSxJQUFJO1FBRWhCLE1BQU1HLGVBQWUsSUFBTTtZQUN6QixJQUFJQyxPQUFPQyxPQUFPLEdBQUcsSUFBSTtnQkFDdkJILGNBQWMsS0FBSztZQUNyQixPQUFPO2dCQUNMQSxjQUFjLElBQUk7WUFDcEIsQ0FBQztRQUNIO1FBRUFFLE9BQU9FLGdCQUFnQixDQUFDLFVBQVVIO1FBRWxDLE9BQU8sSUFBTTtZQUNYQyxPQUFPRyxtQkFBbUIsQ0FBQyxVQUFVSjtRQUN2QztJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDSztRQUFJQyxXQUFVO2tCQUNaViwwQkFDQzs7Z0JBQ0dFLDRCQUNDLDhEQUFDUztvQkFBSUQsV0FBVTs4QkFDYiw0RUFBQ0U7d0JBQUdGLFdBQVU7a0NBQ1osNEVBQUNHO3NDQUNDLDRFQUFDbEIsOENBQUlBO2dDQUNIbUIsYUFBWTtnQ0FDWkMsSUFBRztnQ0FDSEMsS0FBSyxJQUFJO2dDQUNUQyxRQUFRLElBQUk7Z0NBQ1pDLFFBQVEsQ0FBQztnQ0FDVEMsVUFBVTswQ0FDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQVFULDhEQUFDQzs7Ozs7Ozs7Ozs7O0FBS1g7R0FsRE1yQjtLQUFBQTtBQW9ETiwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rLCBhbmltYXRlU2Nyb2xsIGFzIHNjcm9sbCB9IGZyb20gJ3JlYWN0LXNjcm9sbCc7XG5pbXBvcnQgTGFuZGluZyBmcm9tICcuL2xhbmRpbmcnO1xuXG5jb25zdCBJbmRleCA9ICgpID0+IHtcbiAgY29uc3QgW2lzQ2xpZW50LCBzZXRJc0NsaWVudF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzaG93TmF2YmFyLCBzZXRTaG93TmF2YmFyXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0SXNDbGllbnQodHJ1ZSk7XG5cbiAgICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XG4gICAgICBpZiAod2luZG93LnNjcm9sbFkgPiA1MCkge1xuICAgICAgICBzZXRTaG93TmF2YmFyKGZhbHNlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldFNob3dOYXZiYXIodHJ1ZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm9vdFwiPlxuICAgICAge2lzQ2xpZW50ICYmIChcbiAgICAgICAgPD5cbiAgICAgICAgICB7c2hvd05hdmJhciAmJiAoXG4gICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImZpeGVkIHRvcC0wIGxlZnQtMCB3LWZ1bGwgYmctd2hpdGUgcC00XCI+XG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIHNwYWNlLXgtNFwiPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZUNsYXNzPVwidGV4dC1ibHVlLTUwMFwiXG4gICAgICAgICAgICAgICAgICAgIHRvPVwiaG9tZVwiXG4gICAgICAgICAgICAgICAgICAgIHNweT17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgc21vb3RoPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICBvZmZzZXQ9ey03MH1cbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb249ezUwMH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgQWNjdWVpbFxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgey8qIEFqb3V0ZXogZCdhdXRyZXMgbGllbnMgaWNpIHNpIG7DqWNlc3NhaXJlICovfVxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8UGxhbiAvPlxuICAgICAgICA8Lz5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkxpbmsiLCJhbmltYXRlU2Nyb2xsIiwic2Nyb2xsIiwiTGFuZGluZyIsIkluZGV4IiwiaXNDbGllbnQiLCJzZXRJc0NsaWVudCIsInNob3dOYXZiYXIiLCJzZXRTaG93TmF2YmFyIiwiaGFuZGxlU2Nyb2xsIiwid2luZG93Iiwic2Nyb2xsWSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZGl2IiwiY2xhc3NOYW1lIiwibmF2IiwidWwiLCJsaSIsImFjdGl2ZUNsYXNzIiwidG8iLCJzcHkiLCJzbW9vdGgiLCJvZmZzZXQiLCJkdXJhdGlvbiIsIlBsYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});