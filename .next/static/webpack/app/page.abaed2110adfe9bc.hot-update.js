/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/page.tsx":
/*!**********************!*\
  !*** ./app/page.tsx ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _store_useStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/store/useStore */ \"(app-pages-browser)/./store/useStore.ts\");\n/* harmony import */ var _components_views_BarebonesView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/views/BarebonesView */ \"(app-pages-browser)/./components/views/BarebonesView.tsx\");\n/* harmony import */ var _components_views_View3D__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/views/View3D */ \"(app-pages-browser)/./components/views/View3D.tsx\");\n/* harmony import */ var _components_UI_WimbledonToggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/UI/WimbledonToggle */ \"(app-pages-browser)/./components/UI/WimbledonToggle.tsx\");\n/* harmony import */ var _components_UI_WimbledonToggle__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_UI_WimbledonToggle__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Home() {\n    _s();\n    const { viewMode } = (0,_store_useStore__WEBPACK_IMPORTED_MODULE_1__.useStore)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative w-full h-screen\",\n        children: [\n            viewMode === \"3d\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_views_View3D__WEBPACK_IMPORTED_MODULE_3__.View3D, {}, void 0, false, {\n                fileName: \"/Users/davieet/Desktop/PersonalWebsite/app/page.tsx\",\n                lineNumber: 13,\n                columnNumber: 28\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_views_BarebonesView__WEBPACK_IMPORTED_MODULE_2__.BarebonesView, {}, void 0, false, {\n                fileName: \"/Users/davieet/Desktop/PersonalWebsite/app/page.tsx\",\n                lineNumber: 13,\n                columnNumber: 41\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"fixed top-[21px] right-8 z-50\",\n                onPointerDown: (e)=>e.stopPropagation(),\n                onPointerUp: (e)=>e.stopPropagation(),\n                onPointerMove: (e)=>e.stopPropagation(),\n                onClick: (e)=>e.stopPropagation(),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_WimbledonToggle__WEBPACK_IMPORTED_MODULE_4__.WimbledonToggle, {}, void 0, false, {\n                    fileName: \"/Users/davieet/Desktop/PersonalWebsite/app/page.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/davieet/Desktop/PersonalWebsite/app/page.tsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/davieet/Desktop/PersonalWebsite/app/page.tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"SXo2u1LmJG49uhsdBrhDJjXQZtE=\", false, function() {\n    return [\n        _store_useStore__WEBPACK_IMPORTED_MODULE_1__.useStore\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFNEM7QUFDcUI7QUFDZDtBQUNlO0FBRW5ELFNBQVNJOztJQUN0QixNQUFNLEVBQUVDLFFBQVEsRUFBRSxHQUFHTCx5REFBUUE7SUFFN0IscUJBQ0UsOERBQUNNO1FBQUlDLFdBQVU7O1lBQ1pGLGFBQWEscUJBQU8sOERBQUNILDREQUFNQTs7OztxQ0FBTSw4REFBQ0QsMEVBQWFBOzs7OzswQkFHaEQsOERBQUNLO2dCQUNDQyxXQUFVO2dCQUNWQyxlQUFlQyxDQUFBQSxJQUFLQSxFQUFFQyxlQUFlO2dCQUNyQ0MsYUFBYUYsQ0FBQUEsSUFBS0EsRUFBRUMsZUFBZTtnQkFDbkNFLGVBQWVILENBQUFBLElBQUtBLEVBQUVDLGVBQWU7Z0JBQ3JDRyxTQUFTSixDQUFBQSxJQUFLQSxFQUFFQyxlQUFlOzBCQUUvQiw0RUFBQ1AsMkVBQWVBOzs7Ozs7Ozs7Ozs7Ozs7O0FBSXhCO0dBbkJ3QkM7O1FBQ0RKLHFEQUFRQTs7O0tBRFBJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wYWdlLnRzeD83NjAzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyB1c2VTdG9yZSB9IGZyb20gXCJAL3N0b3JlL3VzZVN0b3JlXCI7XG5pbXBvcnQgeyBCYXJlYm9uZXNWaWV3IH0gZnJvbSBcIkAvY29tcG9uZW50cy92aWV3cy9CYXJlYm9uZXNWaWV3XCI7XG5pbXBvcnQgeyBWaWV3M0QgfSBmcm9tIFwiQC9jb21wb25lbnRzL3ZpZXdzL1ZpZXczRFwiO1xuaW1wb3J0IHsgV2ltYmxlZG9uVG9nZ2xlIH0gZnJvbSBcIkAvY29tcG9uZW50cy9VSS9XaW1ibGVkb25Ub2dnbGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgeyB2aWV3TW9kZSB9ID0gdXNlU3RvcmUoKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy1mdWxsIGgtc2NyZWVuXCI+XG4gICAgICB7dmlld01vZGUgPT09IFwiM2RcIiA/IDxWaWV3M0QgLz4gOiA8QmFyZWJvbmVzVmlldyAvPn1cbiAgICAgIHsvKiBUb2dnbGUgc3RheXMgbW91bnRlZCBhY3Jvc3MgdmlldyBzd2l0Y2hlcyBzbyBhbmltYXRpb25zIGFsd2F5cyBwbGF5LlxuICAgICAgICAgIHN0b3BQcm9wYWdhdGlvbiBwcmV2ZW50cyBjbGlja3MgZnJvbSBsZWFraW5nIGludG8gdGhlIDNEIGNhbnZhcy4gKi99XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cImZpeGVkIHRvcC1bMjFweF0gcmlnaHQtOCB6LTUwXCJcbiAgICAgICAgb25Qb2ludGVyRG93bj17ZSA9PiBlLnN0b3BQcm9wYWdhdGlvbigpfVxuICAgICAgICBvblBvaW50ZXJVcD17ZSA9PiBlLnN0b3BQcm9wYWdhdGlvbigpfVxuICAgICAgICBvblBvaW50ZXJNb3ZlPXtlID0+IGUuc3RvcFByb3BhZ2F0aW9uKCl9XG4gICAgICAgIG9uQ2xpY2s9e2UgPT4gZS5zdG9wUHJvcGFnYXRpb24oKX1cbiAgICAgID5cbiAgICAgICAgPFdpbWJsZWRvblRvZ2dsZSAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RvcmUiLCJCYXJlYm9uZXNWaWV3IiwiVmlldzNEIiwiV2ltYmxlZG9uVG9nZ2xlIiwiSG9tZSIsInZpZXdNb2RlIiwiZGl2IiwiY2xhc3NOYW1lIiwib25Qb2ludGVyRG93biIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJvblBvaW50ZXJVcCIsIm9uUG9pbnRlck1vdmUiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ }),

/***/ "(app-pages-browser)/./components/UI/WimbledonToggle.tsx":
/*!*******************************************!*\
  !*** ./components/UI/WimbledonToggle.tsx ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports signature on update so we can compare the boundary
                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)
                module.hot.dispose(function (data) {
                    data.prevSignature =
                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevSignature !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevSignature !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ })

});