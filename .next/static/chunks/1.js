(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[1],{

/***/ "./_posts/blog/en-US/apisix-vs-api7.md":
/*!*********************************************!*\
  !*** ./_posts/blog/en-US/apisix-vs-api7.md ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"---\\ntitle: \\\"Apache APISIX vs API7\\\"\\ndate: 2020-11-13 14:54:00\\n---  \\n# Apache APISIX vs API7\\n\\n| **Apache APISIX** | **API7 Commercial Products** |\\n| :----: | :----: |\\n| Tier 4 and 7 Reverse Proxy, Load Balancing | **Includes All Apache APISIX Features and Adds** |\\n| Dynamic Flow Limit and Cluster Speed Limit | User Management |\\n| Dynamic Routing | Permission Control |\\n| Dynamic Upstream | Multi-Working Area |\\n| Dynamic SSL Certificates | Audit Log |\\n| Traffic Duplication | Statistical Statements |\\n| Active and Passive Health Screening | Grayscale Release |\\n| Fine Routing | More User-Friendly Dashboard |\\n| ARM64 Support | SSL Certificate Management |\\n| Support key-auth, JWT, basic-auth，IdP | Enterprise-Class Security |\\n| Fault Injection | More Paid Plug-Ins |\\n| For further functions, please refer to：[Click to view](https://github.com/apache/apisix/blob/master/README_CN.md#%E5%8A%9F%E8%83%BD) | [SLA-Based Business Support](https://www.apiseven.com/support-for-business) |\\n| [Download Now](https://github.com/apache/apisix) | [Request a Demo](https://apiseven.mikecrm.com/pvdVjd5) |\\n\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vX3Bvc3RzL2Jsb2cvZW4tVVMvYXBpc2l4LXZzLWFwaTcubWQ/NDA4NSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFlLDRwQ0FBNmxDIiwiZmlsZSI6Ii4vX3Bvc3RzL2Jsb2cvZW4tVVMvYXBpc2l4LXZzLWFwaTcubWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIi0tLVxcbnRpdGxlOiBcXFwiQXBhY2hlIEFQSVNJWCB2cyBBUEk3XFxcIlxcbmRhdGU6IDIwMjAtMTEtMTMgMTQ6NTQ6MDBcXG4tLS0gIFxcbiMgQXBhY2hlIEFQSVNJWCB2cyBBUEk3XFxuXFxufCAqKkFwYWNoZSBBUElTSVgqKiB8ICoqQVBJNyBDb21tZXJjaWFsIFByb2R1Y3RzKiogfFxcbnwgOi0tLS06IHwgOi0tLS06IHxcXG58IFRpZXIgNCBhbmQgNyBSZXZlcnNlIFByb3h5LCBMb2FkIEJhbGFuY2luZyB8ICoqSW5jbHVkZXMgQWxsIEFwYWNoZSBBUElTSVggRmVhdHVyZXMgYW5kIEFkZHMqKiB8XFxufCBEeW5hbWljIEZsb3cgTGltaXQgYW5kIENsdXN0ZXIgU3BlZWQgTGltaXQgfCBVc2VyIE1hbmFnZW1lbnQgfFxcbnwgRHluYW1pYyBSb3V0aW5nIHwgUGVybWlzc2lvbiBDb250cm9sIHxcXG58IER5bmFtaWMgVXBzdHJlYW0gfCBNdWx0aS1Xb3JraW5nIEFyZWEgfFxcbnwgRHluYW1pYyBTU0wgQ2VydGlmaWNhdGVzIHwgQXVkaXQgTG9nIHxcXG58IFRyYWZmaWMgRHVwbGljYXRpb24gfCBTdGF0aXN0aWNhbCBTdGF0ZW1lbnRzIHxcXG58IEFjdGl2ZSBhbmQgUGFzc2l2ZSBIZWFsdGggU2NyZWVuaW5nIHwgR3JheXNjYWxlIFJlbGVhc2UgfFxcbnwgRmluZSBSb3V0aW5nIHwgTW9yZSBVc2VyLUZyaWVuZGx5IERhc2hib2FyZCB8XFxufCBBUk02NCBTdXBwb3J0IHwgU1NMIENlcnRpZmljYXRlIE1hbmFnZW1lbnQgfFxcbnwgU3VwcG9ydCBrZXktYXV0aCwgSldULCBiYXNpYy1hdXRo77yMSWRQIHwgRW50ZXJwcmlzZS1DbGFzcyBTZWN1cml0eSB8XFxufCBGYXVsdCBJbmplY3Rpb24gfCBNb3JlIFBhaWQgUGx1Zy1JbnMgfFxcbnwgRm9yIGZ1cnRoZXIgZnVuY3Rpb25zLCBwbGVhc2UgcmVmZXIgdG/vvJpbQ2xpY2sgdG8gdmlld10oaHR0cHM6Ly9naXRodWIuY29tL2FwYWNoZS9hcGlzaXgvYmxvYi9tYXN0ZXIvUkVBRE1FX0NOLm1kIyVFNSU4QSU5RiVFOCU4MyVCRCkgfCBbU0xBLUJhc2VkIEJ1c2luZXNzIFN1cHBvcnRdKGh0dHBzOi8vd3d3LmFwaXNldmVuLmNvbS9zdXBwb3J0LWZvci1idXNpbmVzcykgfFxcbnwgW0Rvd25sb2FkIE5vd10oaHR0cHM6Ly9naXRodWIuY29tL2FwYWNoZS9hcGlzaXgpIHwgW1JlcXVlc3QgYSBEZW1vXShodHRwczovL2FwaXNldmVuLm1pa2Vjcm0uY29tL3B2ZFZqZDUpIHxcXG5cIjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./_posts/blog/en-US/apisix-vs-api7.md\n");

/***/ })

}]);