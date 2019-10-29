(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/components/authtabs/authtabs.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/components/authtabs/authtabs.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class='card-panel blue bodyDiv'>\n\n    <div class='container bodyContainer'>\n        <div class=\"row\">\n            <div class=\"col s12\">\n                <div class='card'>\n                    <div class=\"card-tabs\">\n                        <ul class=\"tabs tabs-fixed-width\">\n                            <li class=\"tab \"><a class=\"active\" href=\"#login\">Login</a></li>\n                            <li class=\"tab\"><a href=\"#singup\"> Sign up </a></li>\n                        </ul>\n                    </div>\n\n                    <div class=\"card-content\">\n                        <p style='text-align: center;font-size: 20px'>\n                            Welcom to Quiz App</p>\n                    </div>\n\n                    <div class=\"card-content auth-content\">\n                        <div id=\"login\">\n                            <app-login></app-login>\n                        </div>\n                        <div id=\"singup\">\n                            <app-signup></app-signup>\n                        </div>\n                    </div>\n\n                </div>\n            </div>\n\n\n        </div>\n    </div>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/components/login/login.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/components/login/login.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col s10 offset-s1\" id=\"panel\">\n            <div class=\"progress\" *ngIf=\"showSpinner\">\n                <div class=\"indeterminate\"></div>\n            </div>\n            <h3 id=\"title\">Login</h3>\n            <div id=\"errorMsg\" *ngIf=\"errorMessage\">\n                <span>{{errorMessage}}</span>\n            </div>\n            <form class=\"col s12\" [formGroup]=\"loginForm\" novalidate (ngSubmit)=\"loginUser()\">\n                <div class=\"row\">\n                    <div class=\"input-field col s12\">\n                        <input id=\"username\" type=\"text\" formControlName=\"username\">\n                        <label for=\"username\">User Name</label>\n                        <span class=\"error\"\n                            *ngIf=\"!loginForm.controls['username'].valid && loginForm.controls['username'].touched\">\n                            User Name is Required\n                        </span>\n                    </div>\n\n                </div>\n\n                <div class=\"row\">\n                    <div class=\"input-field col s12\">\n                        <input id=\"password\" type=\"password\" formControlName=\"password\">\n                        <label for=\"password\">Password</label>\n                        <span class=\"error\"\n                            *ngIf=\"!loginForm.controls['password'].valid && loginForm.controls['password'].touched\">\n                            Password is Required\n                        </span>\n                    </div>\n                </div>\n                <button class=\" btn waves-effect\" id=\"loginbtn\" [disabled]='!loginForm.valid'>\n                    login\n                </button>\n            </form>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/components/signup/signup.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/components/signup/signup.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col s10 offset-s1\" id=\"panel\">\n            <div class=\"progress\" *ngIf=\"showSpinner\">\n                <div class=\"indeterminate\"></div>\n            </div>\n\n            <h3 id=\"title\">Sign Up</h3>\n            <div id=\"errorMsg\" *ngIf=\"errorMessage\">\n                <span>{{errorMessage}}</span>\n            </div>\n            <form class=\"col s12\" [formGroup]=\"signupForm\" novalidate (ngSubmit)=\"signupUser()\">\n                <div class=\"row\">\n                    <div class=\"input-field col s12\">\n                        <input id=\"username\" type=\"text\" formControlName=\"username\">\n                        <label for=\"username\">User Name</label>\n                        <span class=\"error\"\n                            *ngIf=\"!signupForm.controls['username'].valid && signupForm.controls['username'].touched\">\n                            User Name is Required\n\n                        </span>\n                    </div>\n\n                </div>\n                <div class=\"row\">\n                    <div class=\"input-field col s12\">\n                        <input id=\"pass-word\" type=\"password\" formControlName=\"password\">\n                        <label for=\"pass-word\">Password</label>\n                        <span class=\"error\"\n                            *ngIf=\"!signupForm.controls['password'].valid && signupForm.controls['password'].touched\">\n                            Password is Required\n                        </span>\n                    </div>\n                </div>\n                <button class=\" btn waves-effect\" id=\"signupbtn\" [disabled]='!signupForm.valid'>\n                    Sign Up\n                </button>\n            </form>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/teacher/components/all-quize/all-quize.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/teacher/components/all-quize/all-quize.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"dataSource\" class=\"table-container mat-elevation-z8\">\n    <mat-table #table [dataSource]=\"dataSource\">\n        <ng-container matColumnDef=\"id\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header> id </mat-header-cell>\n            <mat-cell *matCellDef=\"let quiz\"> {{quiz._id}} </mat-cell>\n        </ng-container>\n        <ng-container matColumnDef=\"action\">\n            <mat-header-cell *matHeaderCellDef> Action </mat-header-cell>\n\n            <mat-cell *matCellDef=\"let quiz\">\n                <a (click)=\"addAnthor(quiz._id)\" class=\" btn-small blue waves-effect waves-light btn \">Add Question</a>\n                <a (click)=\"editBtn(quiz._id)\" class=\" btn-small blue waves-effect waves-light btn \">Edit</a>\n                <a (click)=\"deleteBtn(quiz._id)\" class=\" btn-small red waves-effect waves-light btn\">Delete</a>\n                <a (click)=\"publish(quiz._id)\" class=\" btn-small teal  waves-effect waves-light btn\">Publish</a>\n            </mat-cell>\n        </ng-container>\n\n        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n    </mat-table>\n</div>\n\n<div id=\"wrapper\" class=\"row\" *ngIf=\"!dataSource\">\n    <h3>No Quiz Found</h3>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/teacher/components/edit-form/edit-form.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/teacher/components/edit-form/edit-form.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar color=\"primary\">\n    <mat-toolbar-row>\n        <span>Quiz App</span>\n        <div class=\"example-button-row\" (click)='backBtn()'>\n            <button mat-raised-button class=\"mat-elevation-z20\" color=\"primary\">Back</button>\n        </div>\n    </mat-toolbar-row>\n</mat-toolbar>\n\n<mat-card *ngFor=\"let question of quizData\">\n    <div class=\"row\">\n        <form [formGroup]=\"quizForm\" novalidate class=\"col s12\">\n            <div class=\"row\">\n                <div class=\"input-field col s12\">\n                    <input formControlName=\"question\" [(ngModel)]=\"question.question\" />\n                    <mat-error *ngIf=\"quizForm.controls.question.invalid && quizForm.controls.question.touched \">\n                        Question\n                        is required\n                    </mat-error>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"input-field col s3\">\n                    <input formControlName=\"possibleAnswer1\" [(ngModel)]=\"question.possibleAnswer1\" />\n                    <mat-error\n                        *ngIf=\"quizForm.controls.possibleAnswer1.invalid && quizForm.controls.possibleAnswer1.touched \">\n                        possibleAnswer\n                        is required\n                    </mat-error>\n                </div>\n                <div class=\"input-field col s3\">\n                    <input formControlName=\"possibleAnswer2\" [(ngModel)]=\"question.possibleAnswer2\" />\n                    <mat-error\n                        *ngIf=\"quizForm.controls.possibleAnswer2.invalid && quizForm.controls.possibleAnswer2.touched \">\n                        possibleAnswer\n                        is required\n                    </mat-error>\n                </div>\n                <div class=\"input-field col s3\">\n                    <input formControlName=\"possibleAnswer3\" [(ngModel)]=\"question.possibleAnswer3\" />\n                    <mat-error\n                        *ngIf=\"quizForm.controls.possibleAnswer3.invalid && quizForm.controls.possibleAnswer3.touched \">\n                        possibleAnswer\n                        is required\n                    </mat-error>\n                </div>\n                <div class=\"input-field col s3\">\n                    <input formControlName=\"possibleAnswer4\" [(ngModel)]=\"question.possibleAnswer4\" />\n                    <mat-error\n                        *ngIf=\"quizForm.controls.possibleAnswer3.invalid && quizForm.controls.possibleAnswer3.touched \">\n                        possibleAnswer\n                        is required\n                    </mat-error>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"input-field col s12\">\n                    <input formControlName=\"correctAnswer\" [(ngModel)]=\"question.correctAnswer\" />\n                    <mat-error\n                        *ngIf=\"quizForm.controls.correctAnswer.invalid && quizForm.controls.correctAnswer.touched \">\n                        correctAnswer\n                        is required\n                    </mat-error>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"input-field col s12\">\n                    <input formControlName=\"explanation\" [(ngModel)]=\"question.explanation\" />\n                    <mat-error *ngIf=\"quizForm.controls.explanation.invalid && quizForm.controls.explanation.touched \">\n                        explanation\n                        is required\n                    </mat-error>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col s3\">\n                    <button (click)=\"editQuestion(question)\" [disabled]=\"!quizForm.valid\" mat-raised-button\n                        type=\"submit\" color=\"accent\">\n                        update\n                    </button>\n                </div>\n                <div class=\"col s3\">\n                    <button (click)=\"deleteQuestion(question._id)\" color='primary' [disabled]=\"!quizForm.valid\"\n                        mat-raised-button type=\"submit\">\n                        Delete\n                    </button>\n                </div>\n            </div>\n        </form>\n    </div>\n</mat-card>\n<div id='wrapper' class=\"row\">\n    <div class=\"col s3\">\n        <button (click)=\"backBtn()\" color='primary' mat-raised-button type=\"submit\">\n            Save Change\n        </button>\n    </div>\n    <!-- [disabled]=\"!quizForm.valid\" -->\n    <div class=\"col s8\">\n        <mat-paginator pageIndex=\"0\" #paginator [disabled]=\"!quizForm.valid\" [length]=\"resultLength\"\n            [showFirstLastButtons]=\"true\" [pageSize]=\"1\">\n        </mat-paginator>\n    </div>\n</div>\n\n<div id=\"wrapper\" class=\"row\" *ngIf=\"!quizData\">\n    <h3>No Question For this quiz </h3>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/teacher/components/hometeacher/hometeacher.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/teacher/components/hometeacher/hometeacher.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-toolbar></app-toolbar>\n\n<div class=\"container\" style='margin-top: 30px'>\n    <!-- <div class=\"row\">\n      <div class=\"col s12 m4 l3\">\n        <app-side></app-side>\n      </div> -->\n    <div class=\"col s12 m8 l9\">\n        <div class=\"row\">\n            <div class=\"col s12 m12 l10\">\n                <ul class=\"tabs\">\n                    <li class=\"tab col s6\" (click)=\"changeTabs('all-quiz')\">\n                        <a class=\"active\" href='#all-quiz'>\n                            All Quiz\n                        </a>\n                    </li>\n                    <li class=\"tab col s6\" (click)=\"changeTabs('publish')\">\n                        <a href='#publish'>\n                            Published Quiz\n                        </a>\n                    </li>\n                </ul>\n            </div>\n            <div id='all-quiz' class=\"col s12\" *ngIf=\"allQuiz\">\n                <app-all-quize></app-all-quize>\n            </div>\n            <div id='publish' class=\"col s12\" *ngIf=\"publishedQuize\">\n                <app-published-quize></app-published-quize>\n            </div>\n        </div>\n\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/teacher/components/published-quize/published-quize.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/teacher/components/published-quize/published-quize.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"dataSource\" class=\"table-container mat-elevation-z8\">\n    <mat-table #table [dataSource]=\"dataSource\">\n        <ng-container matColumnDef=\"id\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header> id </mat-header-cell>\n            <mat-cell *matCellDef=\"let quiz\"> {{quiz._id}} </mat-cell>\n        </ng-container>\n        <ng-container matColumnDef=\"action\">\n            <mat-header-cell *matHeaderCellDef> Action </mat-header-cell>\n\n            <mat-cell *matCellDef=\"let quiz\">\n                <a (click)=\"deleteBtn(quiz._id)\" class=\" btn-small red waves-effect waves-light btn\">Delete</a>\n            </mat-cell>\n        </ng-container>\n\n        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n    </mat-table>\n</div>\n\n<div id=\"wrapper\" class=\"row\" *ngIf=\"!dataSource\">\n    <h3>No Published Quiz Found</h3>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/teacher/components/quiz-form/quiz-form.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/teacher/components/quiz-form/quiz-form.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar color=\"primary\">\n    <mat-toolbar-row>\n        <span>Quiz App</span>\n        <div class=\"example-button-row\" (click)='backBtn()'>\n            <button mat-raised-button class=\"mat-elevation-z20\" color=\"primary\">Back</button>\n        </div>\n    </mat-toolbar-row>\n</mat-toolbar>\n\n<mat-card>\n    <div class=\"row\">\n        <form [formGroup]=\"quizForm\" novalidate class=\"col s12\" (ngSubmit)=\"saveForm()\">\n            <div class=\"row\">\n                <div class=\"input-field col s12\">\n                    <input placeholder=\"question\" formControlName=\"question\" />\n                    <mat-error *ngIf=\"quizForm.controls.question.invalid && quizForm.controls.question.touched \">\n                        Question\n                        is required\n                    </mat-error>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"input-field col s3\">\n                    <input matInput placeholder=\"possibleAnswer\" formControlName=\"possibleAnswer1\" />\n                    <mat-error\n                        *ngIf=\"quizForm.controls.possibleAnswer1.invalid && quizForm.controls.possibleAnswer1.touched \">\n                        possibleAnswer\n                        is required\n                    </mat-error>\n                </div>\n                <div class=\"input-field col s3\">\n                    <input matInput placeholder=\"possibleAnswer\" formControlName=\"possibleAnswer2\" />\n                    <mat-error\n                        *ngIf=\"quizForm.controls.possibleAnswer2.invalid && quizForm.controls.possibleAnswer2.touched \">\n                        possibleAnswer\n                        is required\n                    </mat-error>\n                </div>\n                <div class=\"input-field col s3\">\n                    <input matInput placeholder=\"possibleAnswer\" formControlName=\"possibleAnswer3\" />\n                    <mat-error\n                        *ngIf=\"quizForm.controls.possibleAnswer3.invalid && quizForm.controls.possibleAnswer3.touched \">\n                        possibleAnswer\n                        is required\n                    </mat-error>\n                </div>\n                <div class=\"input-field col s3\">\n                    <input matInput placeholder=\"possibleAnswer\" formControlName=\"possibleAnswer4\" />\n                    <mat-error\n                        *ngIf=\"quizForm.controls.possibleAnswer4.invalid && quizForm.controls.possibleAnswer4.touched \">\n                        possibleAnswer\n                        is required\n                    </mat-error>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"input-field col s12\">\n                    <input matInput placeholder=\"correctAnswer\" formControlName=\"correctAnswer\" />\n                    <mat-error\n                        *ngIf=\"quizForm.controls.correctAnswer.invalid && quizForm.controls.correctAnswer.touched \">\n                        correctAnswer\n                        is required\n                    </mat-error>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"input-field col s12\">\n                    <input matInput placeholder=\"explanation\" formControlName=\"explanation\" />\n                    <mat-error *ngIf=\"quizForm.controls.explanation.invalid && quizForm.controls.explanation.touched \">\n                        explanation\n                        is required\n                    </mat-error>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col s3\">\n                    <button mat-raised-button type=\"submit\" color=\"accent\" [disabled]=\"!quizForm.valid\">\n                        Save\n                    </button>\n                </div>\n                <div class=\"col s3\">\n                    <button (click)=\"anthorQuestion()\" color='primary' [disabled]=\"!quizForm.valid\" mat-raised-button\n                        type=\"submit\">\n                        Anthor Question\n                    </button>\n                </div>\n                <div class=\"col s3\">\n                    <button *ngIf=\"quizData\" color='primary' disabled mat-raised-button>\n                        {{totalQuestion}}\n                    </button>\n                </div>\n                <div class=\"col s3\">\n                    <button (click)=\"backBtn()\" mat-raised-button type=\"button\">\n                        Cancel\n                    </button>\n                </div>\n            </div>\n        </form>\n    </div>\n</mat-card>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/teacher/components/toolbar/toolbar.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/teacher/components/toolbar/toolbar.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar color=\"primary\">\n    <mat-toolbar-row>\n        <span>Quiz App</span>\n        <div class=\"example-button-row\" (click)='saveBtn()'>\n            <button mat-raised-button class=\"mat-elevation-z20\" color=\"primary\">New Quiz</button>\n        </div>\n        <div class=\"logout\" (click)='logout()'>\n            <button mat-raised-button class=\"mat-elevation-z20\" color=\"warn\">LogOut</button>\n        </div>\n    </mat-toolbar-row>\n</mat-toolbar>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [
    {
        path: '',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./auth/auth.module */ "./src/app/auth/auth.module.ts")).then(m => m.AuthModule)
    },
    {
        path: 'teacher',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./teacher/teacher.module */ "./src/app/teacher/teacher.module.ts")).then(m => m.TeacherModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_services_tokenservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/services/tokenservice.service */ "./src/app/auth/services/tokenservice.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");




let AppComponent = class AppComponent {
    constructor(tokenService, router) {
        this.tokenService = tokenService;
        this.router = router;
        this.title = 'quiz-app-client';
    }
    ngOnInit() {
        const token = this.tokenService.GetToken();
        if (token) {
            this.router.navigate(['/teacher']);
        }
        else {
            this.router.navigate(['']);
        }
    }
};
AppComponent.ctorParameters = () => [
    { type: _auth_services_tokenservice_service__WEBPACK_IMPORTED_MODULE_2__["TokenserviceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _auth_services_token_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/services/token-interceptor */ "./src/app/auth/services/token-interceptor.ts");
/* harmony import */ var _shared_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/material.module */ "./src/app/shared/material.module.ts");
/* harmony import */ var _teacher_teacher_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./teacher/teacher.module */ "./src/app/teacher/teacher.module.ts");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/auth.module */ "./src/app/auth/auth.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");












let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            _auth_auth_module__WEBPACK_IMPORTED_MODULE_4__["AuthModule"],
            _shared_material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"],
            _teacher_teacher_module__WEBPACK_IMPORTED_MODULE_3__["TeacherModule"]
        ],
        providers: [{
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HTTP_INTERCEPTORS"],
                useClass: _auth_services_token_interceptor__WEBPACK_IMPORTED_MODULE_1__["TokenInterceptor"],
                multi: true
            }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/auth/auth-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/auth/auth-routing.module.ts ***!
  \*********************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_authtabs_authtabs_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/authtabs/authtabs.component */ "./src/app/auth/components/authtabs/authtabs.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




const routes = [
    {
        path: '',
        component: _components_authtabs_authtabs_component__WEBPACK_IMPORTED_MODULE_1__["AuthtabsComponent"]
    }
];
let AuthRoutingModule = class AuthRoutingModule {
};
AuthRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], AuthRoutingModule);



/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_authservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/authservice.service */ "./src/app/auth/services/authservice.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth-routing.module */ "./src/app/auth/auth-routing.module.ts");
/* harmony import */ var _components_authtabs_authtabs_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/authtabs/authtabs.component */ "./src/app/auth/components/authtabs/authtabs.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/auth/components/login/login.component.ts");
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/signup/signup.component */ "./src/app/auth/components/signup/signup.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");










let AuthModule = class AuthModule {
};
AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_components_authtabs_authtabs_component__WEBPACK_IMPORTED_MODULE_6__["AuthtabsComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"], _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_8__["SignupComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _auth_routing_module__WEBPACK_IMPORTED_MODULE_5__["AuthRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"]
        ],
        exports: [_components_authtabs_authtabs_component__WEBPACK_IMPORTED_MODULE_6__["AuthtabsComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"], _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_8__["SignupComponent"]],
        providers: [_services_authservice_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]]
    })
], AuthModule);



/***/ }),

/***/ "./src/app/auth/components/authtabs/authtabs.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/auth/components/authtabs/authtabs.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bodyDiv {\n  height: 100vh;\n}\n\ndiv.bodyContainer {\n  margin-top: 50px !important;\n}\n\n.tabs a {\n  color: #64b5f6;\n  font-weight: bold;\n  font-size: 18px;\n}\n\n.tabs .active {\n  background: inherit !important;\n}\n\n.auth-content {\n  height: 520px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9jb21wb25lbnRzL2F1dGh0YWJzL0U6XFx0ZXN0Rm9yTWVcXHRhc2tzXFxRdWl6QXBwXFxxdWl6LWFwcC1jbGllbnQvc3JjXFxhcHBcXGF1dGhcXGNvbXBvbmVudHNcXGF1dGh0YWJzXFxhdXRodGFicy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXV0aC9jb21wb25lbnRzL2F1dGh0YWJzL2F1dGh0YWJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQ0NGOztBREVBO0VBQ0UsMkJBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLDhCQUFBO0FDQ0Y7O0FERUE7RUFDRSx3QkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9jb21wb25lbnRzL2F1dGh0YWJzL2F1dGh0YWJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvZHlEaXYge1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbmRpdi5ib2R5Q29udGFpbmVyIHtcclxuICBtYXJnaW4tdG9wOiA1MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50YWJzIGEge1xyXG4gIGNvbG9yOiAjNjRiNWY2O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLnRhYnMgLmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZDogaW5oZXJpdCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYXV0aC1jb250ZW50IHtcclxuICBoZWlnaHQ6IDUyMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuIiwiLmJvZHlEaXYge1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG5kaXYuYm9keUNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDUwcHggIWltcG9ydGFudDtcbn1cblxuLnRhYnMgYSB7XG4gIGNvbG9yOiAjNjRiNWY2O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4udGFicyAuYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogaW5oZXJpdCAhaW1wb3J0YW50O1xufVxuXG4uYXV0aC1jb250ZW50IHtcbiAgaGVpZ2h0OiA1MjBweCAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/auth/components/authtabs/authtabs.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/auth/components/authtabs/authtabs.component.ts ***!
  \****************************************************************/
/*! exports provided: AuthtabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthtabsComponent", function() { return AuthtabsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var materialize_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! materialize-css */ "./node_modules/materialize-css/dist/js/materialize.js");
/* harmony import */ var materialize_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(materialize_css__WEBPACK_IMPORTED_MODULE_2__);



let AuthtabsComponent = class AuthtabsComponent {
    constructor() { }
    ngOnInit() {
        const tabs = document.querySelector('.tabs');
        materialize_css__WEBPACK_IMPORTED_MODULE_2__["Tabs"].init(tabs, {});
    }
};
AuthtabsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-authtabs',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./authtabs.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/components/authtabs/authtabs.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./authtabs.component.scss */ "./src/app/auth/components/authtabs/authtabs.component.scss")).default]
    })
], AuthtabsComponent);



/***/ }),

/***/ "./src/app/auth/components/login/login.component.scss":
/*!************************************************************!*\
  !*** ./src/app/auth/components/login/login.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#panel {\n  background-color: #ffffff;\n}\n\n#panel {\n  padding: 0px;\n}\n\n#loginbtn {\n  float: right;\n  margin-right: 10px;\n  background-color: #64b5f6;\n  font-weight: 500;\n}\n\n#title {\n  background-color: #64b5f6;\n  color: white;\n  padding: 10px;\n  margin-top: 0px;\n  font-weight: 700;\n  text-align: center;\n}\n\nform {\n  padding: 0px;\n  border-radius: 3px;\n  box-sizing: border-box;\n  margin: 0px 20px 0px 20px;\n}\n\n.error {\n  color: red;\n}\n\n.indeterminate {\n  background-color: #64b5f6 !important;\n}\n\n.input-field {\n  margin-bottom: 0px !important;\n  padding-bottom: 0px !important;\n}\n\n#errorMsg {\n  background-color: #f6b2b5;\n  widows: 100%;\n  height: 50px;\n  text-align: center;\n}\n\n#errorMsg span {\n  top: 50%;\n  transform: translate(-50%, -50%);\n  left: 50%;\n  position: relative;\n  float: left;\n  font-size: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9jb21wb25lbnRzL2xvZ2luL0U6XFx0ZXN0Rm9yTWVcXHRhc2tzXFxRdWl6QXBwXFxxdWl6LWFwcC1jbGllbnQvc3JjXFxhcHBcXGF1dGhcXGNvbXBvbmVudHNcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXV0aC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURDQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0VGOztBRENBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtBQ0VGOztBRENBO0VBQ0UsVUFBQTtBQ0VGOztBRENBO0VBQ0Usb0NBQUE7QUNFRjs7QURDQTtFQUNFLDZCQUFBO0VBQ0EsOEJBQUE7QUNFRjs7QURDQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0VGOztBREFBO0VBQ0UsUUFBQTtFQUNBLGdDQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNHRiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNwYW5lbCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuI3BhbmVsIHtcclxuICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbiNsb2dpbmJ0biB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjRiNWY2O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuI3RpdGxlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjRiNWY2O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuZm9ybSB7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIG1hcmdpbjogMHB4IDIwcHggMHB4IDIwcHg7XHJcbn1cclxuXHJcbi5lcnJvciB7XHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuLmluZGV0ZXJtaW5hdGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2NGI1ZjYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmlucHV0LWZpZWxkIHtcclxuICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcclxuICBwYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiNlcnJvck1zZyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2YjJiNTtcclxuICB3aWRvd3M6IDEwMCU7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4jZXJyb3JNc2cgc3BhbiB7XHJcbiAgdG9wOiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmbG9hdDogbGVmdDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuIiwiI3BhbmVsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cblxuI3BhbmVsIHtcbiAgcGFkZGluZzogMHB4O1xufVxuXG4jbG9naW5idG4ge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY0YjVmNjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuI3RpdGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY0YjVmNjtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuZm9ybSB7XG4gIHBhZGRpbmc6IDBweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW46IDBweCAyMHB4IDBweCAyMHB4O1xufVxuXG4uZXJyb3Ige1xuICBjb2xvcjogcmVkO1xufVxuXG4uaW5kZXRlcm1pbmF0ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2NGI1ZjYgIWltcG9ydGFudDtcbn1cblxuLmlucHV0LWZpZWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAwcHggIWltcG9ydGFudDtcbn1cblxuI2Vycm9yTXNnIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2YjJiNTtcbiAgd2lkb3dzOiAxMDAlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI2Vycm9yTXNnIHNwYW4ge1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGxlZnQ6IDUwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbG9hdDogbGVmdDtcbiAgZm9udC1zaXplOiAxNXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/auth/components/login/login.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/auth/components/login/login.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_tokenservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/tokenservice.service */ "./src/app/auth/services/tokenservice.service.ts");
/* harmony import */ var _services_authservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/authservice.service */ "./src/app/auth/services/authservice.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let LoginComponent = class LoginComponent {
    constructor(fb, authService, router, tokenService) {
        this.fb = fb;
        this.authService = authService;
        this.router = router;
        this.tokenService = tokenService;
        this.showSpinner = false;
    }
    ngOnInit() {
        this.init();
    }
    init() {
        this.loginForm = this.fb.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    }
    loginUser() {
        this.showSpinner = true;
        this.authService.loginUser(this.loginForm.value).subscribe(data => {
            // console.log(data)
            this.tokenService.SetToken(data['token']);
            this.loginForm.reset();
            setTimeout(() => {
                this.router.navigate(['teacher']);
            }, 2000);
        }, err => {
            this.showSpinner = false;
            // console.log(err)
            if (err.error.message) {
                this.errorMessage = err.error.message;
            }
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _services_authservice_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _services_tokenservice_service__WEBPACK_IMPORTED_MODULE_1__["TokenserviceService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/components/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/auth/components/login/login.component.scss")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/auth/components/signup/signup.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/auth/components/signup/signup.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#panel {\n  background-color: #ffffff;\n}\n\n#panel {\n  padding: 0px;\n}\n\n#signupbtn {\n  float: right;\n  margin-right: 10px;\n  background-color: #64b5f6;\n  font-weight: 500;\n}\n\n#title {\n  background-color: #64b5f6;\n  color: white;\n  padding: 10px;\n  margin-top: 0px;\n  font-weight: 700;\n  text-align: center;\n}\n\nform {\n  padding: 0px;\n  border-radius: 3px;\n  box-sizing: border-box;\n  margin: 0px 20px 0px 20px;\n}\n\n.error {\n  color: red;\n}\n\n.indeterminate {\n  background-color: #64b5f6 !important;\n}\n\n.input-field {\n  margin-bottom: 0px !important;\n  padding-bottom: 0px !important;\n}\n\n#errorMsg {\n  background-color: #f6b2b5;\n  widows: 100%;\n  height: 50px;\n  text-align: center;\n}\n\n#errorMsg span {\n  top: 50%;\n  transform: translate(-50%, -50%);\n  left: 50%;\n  position: relative;\n  float: left;\n  font-size: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9jb21wb25lbnRzL3NpZ251cC9FOlxcdGVzdEZvck1lXFx0YXNrc1xcUXVpekFwcFxccXVpei1hcHAtY2xpZW50L3NyY1xcYXBwXFxhdXRoXFxjb21wb25lbnRzXFxzaWdudXBcXHNpZ251cC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXV0aC9jb21wb25lbnRzL3NpZ251cC9zaWdudXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQ0NGOztBRENBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDRUY7O0FEQ0E7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0FDRUY7O0FEQ0E7RUFDRSxVQUFBO0FDRUY7O0FEQ0E7RUFDRSxvQ0FBQTtBQ0VGOztBRENBO0VBQ0UsNkJBQUE7RUFDQSw4QkFBQTtBQ0VGOztBRENBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDRUY7O0FEQUE7RUFDRSxRQUFBO0VBQ0EsZ0NBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0dGIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9jb21wb25lbnRzL3NpZ251cC9zaWdudXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcGFuZWwge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbiNwYW5lbCB7XHJcbiAgcGFkZGluZzogMHB4O1xyXG59XHJcblxyXG4jc2lnbnVwYnRuIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2NGI1ZjY7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG4jdGl0bGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2NGI1ZjY7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgbWFyZ2luLXRvcDogMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5mb3JtIHtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgbWFyZ2luOiAwcHggMjBweCAwcHggMjBweDtcclxufVxyXG5cclxuLmVycm9yIHtcclxuICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG4uaW5kZXRlcm1pbmF0ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY0YjVmNiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaW5wdXQtZmllbGQge1xyXG4gIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmctYm90dG9tOiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuI2Vycm9yTXNnIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZiMmI1O1xyXG4gIHdpZG93czogMTAwJTtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiNlcnJvck1zZyBzcGFuIHtcclxuICB0b3A6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG4iLCIjcGFuZWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuXG4jcGFuZWwge1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbiNzaWdudXBidG4ge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY0YjVmNjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuI3RpdGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY0YjVmNjtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuZm9ybSB7XG4gIHBhZGRpbmc6IDBweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW46IDBweCAyMHB4IDBweCAyMHB4O1xufVxuXG4uZXJyb3Ige1xuICBjb2xvcjogcmVkO1xufVxuXG4uaW5kZXRlcm1pbmF0ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2NGI1ZjYgIWltcG9ydGFudDtcbn1cblxuLmlucHV0LWZpZWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAwcHggIWltcG9ydGFudDtcbn1cblxuI2Vycm9yTXNnIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2YjJiNTtcbiAgd2lkb3dzOiAxMDAlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI2Vycm9yTXNnIHNwYW4ge1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGxlZnQ6IDUwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbG9hdDogbGVmdDtcbiAgZm9udC1zaXplOiAxNXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/auth/components/signup/signup.component.ts":
/*!************************************************************!*\
  !*** ./src/app/auth/components/signup/signup.component.ts ***!
  \************************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_tokenservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/tokenservice.service */ "./src/app/auth/services/tokenservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_authservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/authservice.service */ "./src/app/auth/services/authservice.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");






let SignupComponent = class SignupComponent {
    constructor(authoService, fb, router, tokenService) {
        this.authoService = authoService;
        this.fb = fb;
        this.router = router;
        this.tokenService = tokenService;
        this.showSpinner = false;
    }
    ngOnInit() {
        this.init();
    }
    init() {
        this.signupForm = this.fb.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    signupUser() {
        this.showSpinner = true;
        console.log(this.signupForm.value);
        this.authoService.registerUser(this.signupForm.value).subscribe(data => {
            // console.log(data);
            this.tokenService.SetToken(data['token']);
            // console.log(data)
            this.signupForm.reset();
            setTimeout(() => {
                this.router.navigate(['teacher']);
            }, 2000);
        }, err => {
            this.showSpinner = false;
            // console.log(err)
            if (err.error.msg) {
                this.errorMessage = err.error.msg[0].message;
            }
            if (err.error.message) {
                this.errorMessage = err.error.message;
            }
        });
    }
};
SignupComponent.ctorParameters = () => [
    { type: _services_authservice_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_tokenservice_service__WEBPACK_IMPORTED_MODULE_2__["TokenserviceService"] }
];
SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-signup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/components/signup/signup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signup.component.scss */ "./src/app/auth/components/signup/signup.component.scss")).default]
    })
], SignupComponent);



/***/ }),

/***/ "./src/app/auth/services/authservice.service.ts":
/*!******************************************************!*\
  !*** ./src/app/auth/services/authservice.service.ts ***!
  \******************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



// const BASEURL = `http://localhost:3000/quiz-app`
const BASEURL = `quiz-app`;
let AuthService = class AuthService {
    constructor(http) {
        this.http = http;
    }
    loginUser(body) {
        return this.http.post(`${BASEURL}/login`, body);
    }
    registerUser(body) {
        return this.http.post(`${BASEURL}/register`, body);
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/app/auth/services/token-interceptor.ts":
/*!****************************************************!*\
  !*** ./src/app/auth/services/token-interceptor.ts ***!
  \****************************************************/
/*! exports provided: TokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _tokenservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tokenservice.service */ "./src/app/auth/services/tokenservice.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let TokenInterceptor = class TokenInterceptor {
    constructor(tokenService) {
        this.tokenService = tokenService;
    }
    intercept(req, next) {
        const headersConfig = {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        };
        const token = this.tokenService.GetToken();
        if (token) {
            headersConfig['Authorization'] = `beader ${token}`;
        }
        const _req = req.clone({ setHeaders: headersConfig });
        return next.handle(_req);
    }
};
TokenInterceptor.ctorParameters = () => [
    { type: _tokenservice_service__WEBPACK_IMPORTED_MODULE_1__["TokenserviceService"] }
];
TokenInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], TokenInterceptor);



/***/ }),

/***/ "./src/app/auth/services/tokenservice.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/auth/services/tokenservice.service.ts ***!
  \*******************************************************/
/*! exports provided: TokenserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenserviceService", function() { return TokenserviceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let TokenserviceService = class TokenserviceService {
    constructor(router) {
        this.router = router;
    }
    SetToken(token) {
        localStorage.setItem('token', token);
    }
    GetToken() {
        return localStorage.getItem('token');
    }
    DeleteToken() {
        localStorage.removeItem('token');
        this.router.navigate(['']);
    }
    GetPayload() {
        const token = this.GetToken();
        let payload;
        if (token) {
            payload = token.split('.')[1];
            payload = JSON.parse(window.atob(payload));
        }
        // console.log(payload);
        return payload.user || payload.data;
    }
};
TokenserviceService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
TokenserviceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], TokenserviceService);



/***/ }),

/***/ "./src/app/auth/services/user.guard.ts":
/*!*********************************************!*\
  !*** ./src/app/auth/services/user.guard.ts ***!
  \*********************************************/
/*! exports provided: UserGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserGuard", function() { return UserGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _tokenservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tokenservice.service */ "./src/app/auth/services/tokenservice.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let UserGuard = class UserGuard {
    constructor(tokenService, router) {
        this.tokenService = tokenService;
        this.router = router;
    }
    canActivate(next, state) {
        const token = localStorage.getItem('token');
        if (token) {
            return true;
        }
        else {
            this.router.navigate(['']);
            return false;
        }
    }
};
UserGuard.ctorParameters = () => [
    { type: _tokenservice_service__WEBPACK_IMPORTED_MODULE_1__["TokenserviceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
UserGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], UserGuard);



/***/ }),

/***/ "./src/app/shared/material.module.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/material.module.ts ***!
  \*******************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");













const exportedMaterial = [
    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
    _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
    _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"],
    _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
    _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
    _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__["MatPaginatorModule"]
];
let MaterialModule = class MaterialModule {
};
MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            ...exportedMaterial
        ],
        exports: [...exportedMaterial]
    })
], MaterialModule);



/***/ }),

/***/ "./src/app/teacher/components/all-quize/all-quize.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/teacher/components/all-quize/all-quize.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".menu-bar {\n  position: absolute;\n  right: 60px;\n  color: white;\n}\n\n.table-container {\n  margin-top: 10px;\n  display: flex;\n  flex-direction: column;\n  widows: 100%;\n  min-width: 300px;\n  position: relative;\n}\n\n.loading-shade {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 56px;\n  right: 0;\n  background: rgba(0, 0, 0, 0.15);\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.mat-table {\n  overflow: auto;\n  max-height: 360px;\n}\n\nmat-form-field {\n  justify-content: center;\n  margin-right: auto;\n  margin-left: auto;\n}\n\nmat-toolbar {\n  margin-top: 30px;\n}\n\n#wrapper {\n  text-align: center;\n  margin-top: 7px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVhY2hlci9jb21wb25lbnRzL2FsbC1xdWl6ZS9FOlxcdGVzdEZvck1lXFx0YXNrc1xcUXVpekFwcFxccXVpei1hcHAtY2xpZW50L3NyY1xcYXBwXFx0ZWFjaGVyXFxjb21wb25lbnRzXFxhbGwtcXVpemVcXGFsbC1xdWl6ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdGVhY2hlci9jb21wb25lbnRzL2FsbC1xdWl6ZS9hbGwtcXVpemUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUVBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSwrQkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0VGOztBREFBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FDR0Y7O0FEQUE7RUFDRSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNHRjs7QURBQTtFQUNFLGdCQUFBO0FDR0Y7O0FEQUE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7QUNHRiIsImZpbGUiOiJzcmMvYXBwL3RlYWNoZXIvY29tcG9uZW50cy9hbGwtcXVpemUvYWxsLXF1aXplLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lbnUtYmFyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDYwcHg7XHJcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxufVxyXG4udGFibGUtY29udGFpbmVyIHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAvLyBtYXgtaGVpZ2h0OiA1MDBweDtcclxuICB3aWRvd3M6IDEwMCU7XHJcbiAgbWluLXdpZHRoOiAzMDBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmxvYWRpbmctc2hhZGUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDU2cHg7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICB6LWluZGV4OiAxO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4ubWF0LXRhYmxlIHtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICBtYXgtaGVpZ2h0OiAzNjBweDtcclxufVxyXG5cclxubWF0LWZvcm0tZmllbGQge1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxufVxyXG5cclxubWF0LXRvb2xiYXIge1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuXHJcbiN3cmFwcGVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogN3B4O1xyXG59XHJcbiIsIi5tZW51LWJhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDYwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnRhYmxlLWNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZG93czogMTAwJTtcbiAgbWluLXdpZHRoOiAzMDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubG9hZGluZy1zaGFkZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDU2cHg7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICB6LWluZGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLm1hdC10YWJsZSB7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBtYXgtaGVpZ2h0OiAzNjBweDtcbn1cblxubWF0LWZvcm0tZmllbGQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxubWF0LXRvb2xiYXIge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4jd3JhcHBlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogN3B4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/teacher/components/all-quize/all-quize.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/teacher/components/all-quize/all-quize.component.ts ***!
  \*********************************************************************/
/*! exports provided: AllQuizeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllQuizeComponent", function() { return AllQuizeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _auth_services_tokenservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../auth/services/tokenservice.service */ "./src/app/auth/services/tokenservice.service.ts");
/* harmony import */ var _services_teacher_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/teacher.service */ "./src/app/teacher/services/teacher.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");





let AllQuizeComponent = class AllQuizeComponent {
    constructor(router, route, teacherSer, tokenServ) {
        this.router = router;
        this.route = route;
        this.teacherSer = teacherSer;
        this.tokenServ = tokenServ;
        this.displayedColumns = ['id', 'action'];
        this.dataSource = [];
    }
    ngOnInit() {
        this.getAllQuiz();
    }
    getAllQuiz() {
        this.teacherSer.getQuiz().subscribe(data => {
            if (data.length > 0) {
                this.dataSource = data;
            }
            else {
                this.dataSource = null;
            }
        }, err => {
            this.teacherSer.errorHandler('can not get quizs');
            if (err.error.token === null) {
                this.tokenServ.DeleteToken();
            }
        });
    }
    editBtn(id) {
        this.router.navigate(['edit', id], { relativeTo: this.route });
    }
    addAnthor(id) {
        this.router.navigate(['new', id], { relativeTo: this.route });
    }
    deleteBtn(id) {
        this.teacherSer.deleteQuiz(id).subscribe(data => {
            this.getAllQuiz();
            this.teacherSer.successHandle('Quiz Deleted');
        }, err => {
            this.teacherSer.errorHandler('Failed TO Delete This Item');
        });
    }
    publish(id) {
        this.teacherSer.publishQuiz(id).subscribe(data => {
            this.getAllQuiz();
        }, err => {
            this.teacherSer.errorHandler('can not publish this item');
        });
    }
};
AllQuizeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _services_teacher_service__WEBPACK_IMPORTED_MODULE_2__["TeacherService"] },
    { type: _auth_services_tokenservice_service__WEBPACK_IMPORTED_MODULE_1__["TokenserviceService"] }
];
AllQuizeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-all-quize',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./all-quize.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/teacher/components/all-quize/all-quize.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./all-quize.component.scss */ "./src/app/teacher/components/all-quize/all-quize.component.scss")).default]
    })
], AllQuizeComponent);



/***/ }),

/***/ "./src/app/teacher/components/edit-form/edit-form.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/teacher/components/edit-form/edit-form.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-button-row {\n  position: absolute;\n  right: 60px;\n}\n\n#wrapper {\n  text-align: center;\n  margin-top: 7px;\n}\n\nmat-card {\n  justify-content: center;\n  width: 90%;\n  margin-right: auto;\n  margin-left: auto;\n  margin-top: 7px;\n  max-height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVhY2hlci9jb21wb25lbnRzL2VkaXQtZm9ybS9FOlxcdGVzdEZvck1lXFx0YXNrc1xcUXVpekFwcFxccXVpei1hcHAtY2xpZW50L3NyY1xcYXBwXFx0ZWFjaGVyXFxjb21wb25lbnRzXFxlZGl0LWZvcm1cXGVkaXQtZm9ybS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdGVhY2hlci9jb21wb25lbnRzL2VkaXQtZm9ybS9lZGl0LWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUNDRjs7QURDQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBQ0VGOztBRENBO0VBQ0UsdUJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUVBLGVBQUE7RUFDQSxnQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvdGVhY2hlci9jb21wb25lbnRzL2VkaXQtZm9ybS9lZGl0LWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1idXR0b24tcm93IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDYwcHg7XHJcbn1cclxuI3dyYXBwZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiA3cHg7XHJcbn1cclxuXHJcbm1hdC1jYXJkIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB3aWR0aDogOTAlO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAvLyAgIG92ZXJmbG93LXg6IHNjcm9sbDtcclxuICBtYXJnaW4tdG9wOiA3cHg7XHJcbiAgbWF4LWhlaWdodDogYXV0bztcclxufVxyXG4iLCIuZXhhbXBsZS1idXR0b24tcm93IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogNjBweDtcbn1cblxuI3dyYXBwZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDdweDtcbn1cblxubWF0LWNhcmQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXRvcDogN3B4O1xuICBtYXgtaGVpZ2h0OiBhdXRvO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/teacher/components/edit-form/edit-form.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/teacher/components/edit-form/edit-form.component.ts ***!
  \*********************************************************************/
/*! exports provided: EditFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditFormComponent", function() { return EditFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _services_teacher_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/teacher.service */ "./src/app/teacher/services/teacher.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");






let EditFormComponent = class EditFormComponent {
    constructor(router, route, teacherServ, fb) {
        this.router = router;
        this.route = route;
        this.teacherServ = teacherServ;
        this.fb = fb;
    }
    ngOnInit() {
        this.init();
        this.setQuizToForm();
        this.pagination();
    }
    init() {
        this.quizForm = this.fb.group({
            question: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            possibleAnswer1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            possibleAnswer2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            possibleAnswer3: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            possibleAnswer4: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            correctAnswer: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            explanation: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    pagination() {
        this.paginator.page.subscribe(data => {
            this.teacherServ.getQuizById({ page: ++data.pageIndex, perPage: data.pageSize }, this.id)
                .subscribe(data => {
                this.quizData = data['docs'];
                this.resultLength = data['total'];
            });
        }, err => {
            this.teacherServ.errorHandler(err);
        });
    }
    setQuizToForm() {
        this.route.params.subscribe(params => {
            this.id = params['id'];
            if (!this.id) {
                return;
            }
            this.teacherServ.getQuizById({ page: 1, perPage: 1 }, this.id).subscribe(data => {
                if (data['docs'].length > 0) {
                    this.quizData = data['docs'];
                    this.resultLength = data['total'];
                }
                else {
                    this.quizData = null;
                }
            }, err => {
                this.teacherServ.errorHandler('Failed To Get Quiz');
            });
        });
    }
    editQuestion(questionData) {
        //check possibleAnswer
        let check = this.teacherServ.checkIfCorrectAnswerInPossible(questionData);
        if (check) {
            this.teacherServ.updateQuestionById(questionData).subscribe(data => {
                this.teacherServ.successHandle(data['message']);
            }, err => {
                this.teacherServ.errorHandler('can not update item');
            });
        }
        else {
            this.teacherServ.errorHandler('correct answer must one of possible answer');
        }
        //update
    }
    deleteQuestion(id) {
        this.teacherServ.deleteQuestion(id).subscribe(data => {
            this.teacherServ.successHandle('Question Deleted');
        }, err => {
            this.teacherServ.errorHandler('can not delete this question');
        });
    }
    backBtn() {
        this.router.navigate(['../../'], { relativeTo: this.route });
    }
};
EditFormComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _services_teacher_service__WEBPACK_IMPORTED_MODULE_3__["TeacherService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true })
], EditFormComponent.prototype, "paginator", void 0);
EditFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-edit-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/teacher/components/edit-form/edit-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-form.component.scss */ "./src/app/teacher/components/edit-form/edit-form.component.scss")).default]
    })
], EditFormComponent);



/***/ }),

/***/ "./src/app/teacher/components/hometeacher/hometeacher.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/teacher/components/hometeacher/hometeacher.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".tabs a {\n  color: #64b5f6;\n  font-weight: bold;\n  font-size: 18px;\n}\n\n.tabs .active {\n  background: inherit !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVhY2hlci9jb21wb25lbnRzL2hvbWV0ZWFjaGVyL0U6XFx0ZXN0Rm9yTWVcXHRhc2tzXFxRdWl6QXBwXFxxdWl6LWFwcC1jbGllbnQvc3JjXFxhcHBcXHRlYWNoZXJcXGNvbXBvbmVudHNcXGhvbWV0ZWFjaGVyXFxob21ldGVhY2hlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdGVhY2hlci9jb21wb25lbnRzL2hvbWV0ZWFjaGVyL2hvbWV0ZWFjaGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0UsOEJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3RlYWNoZXIvY29tcG9uZW50cy9ob21ldGVhY2hlci9ob21ldGVhY2hlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJzIGEge1xyXG4gIGNvbG9yOiAjNjRiNWY2O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLnRhYnMgLmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZDogaW5oZXJpdCAhaW1wb3J0YW50O1xyXG59XHJcbiIsIi50YWJzIGEge1xuICBjb2xvcjogIzY0YjVmNjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLnRhYnMgLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6IGluaGVyaXQgIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/teacher/components/hometeacher/hometeacher.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/teacher/components/hometeacher/hometeacher.component.ts ***!
  \*************************************************************************/
/*! exports provided: HometeacherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HometeacherComponent", function() { return HometeacherComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var materialize_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! materialize-css */ "./node_modules/materialize-css/dist/js/materialize.js");
/* harmony import */ var materialize_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(materialize_css__WEBPACK_IMPORTED_MODULE_3__);




let HometeacherComponent = class HometeacherComponent {
    constructor(router, route) {
        this.router = router;
        this.route = route;
        this.allQuiz = false;
        this.publishedQuize = false;
    }
    ngOnInit() {
        this.allQuiz = true;
        const tabs = document.querySelector('.tabs');
        materialize_css__WEBPACK_IMPORTED_MODULE_3__["Tabs"].init(tabs, {});
    }
    changeTabs(value) {
        if (value === 'all-quiz') {
            this.allQuiz = true;
            this.publishedQuize = false;
        }
        if (value === 'publish') {
            this.allQuiz = false;
            this.publishedQuize = true;
        }
    }
};
HometeacherComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }
];
HometeacherComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-hometeacher',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./hometeacher.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/teacher/components/hometeacher/hometeacher.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./hometeacher.component.scss */ "./src/app/teacher/components/hometeacher/hometeacher.component.scss")).default]
    })
], HometeacherComponent);



/***/ }),

/***/ "./src/app/teacher/components/published-quize/published-quize.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/teacher/components/published-quize/published-quize.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".menu-bar {\n  position: absolute;\n  right: 60px;\n  color: white;\n}\n\n.table-container {\n  margin-top: 10px;\n  display: flex;\n  flex-direction: column;\n  widows: 100%;\n  min-width: 300px;\n  position: relative;\n}\n\n.loading-shade {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 56px;\n  right: 0;\n  background: rgba(0, 0, 0, 0.15);\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.mat-table {\n  overflow: auto;\n  max-height: 360px;\n}\n\nmat-form-field {\n  justify-content: center;\n  margin-right: auto;\n  margin-left: auto;\n}\n\nmat-toolbar {\n  margin-top: 30px;\n}\n\n#wrapper {\n  text-align: center;\n  margin-top: 7px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVhY2hlci9jb21wb25lbnRzL3B1Ymxpc2hlZC1xdWl6ZS9FOlxcdGVzdEZvck1lXFx0YXNrc1xcUXVpekFwcFxccXVpei1hcHAtY2xpZW50L3NyY1xcYXBwXFx0ZWFjaGVyXFxjb21wb25lbnRzXFxwdWJsaXNoZWQtcXVpemVcXHB1Ymxpc2hlZC1xdWl6ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdGVhY2hlci9jb21wb25lbnRzL3B1Ymxpc2hlZC1xdWl6ZS9wdWJsaXNoZWQtcXVpemUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUVBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSwrQkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0VGOztBREFBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FDR0Y7O0FEQUE7RUFDRSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNHRjs7QURBQTtFQUNFLGdCQUFBO0FDR0Y7O0FEQUE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7QUNHRiIsImZpbGUiOiJzcmMvYXBwL3RlYWNoZXIvY29tcG9uZW50cy9wdWJsaXNoZWQtcXVpemUvcHVibGlzaGVkLXF1aXplLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lbnUtYmFyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDYwcHg7XHJcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxufVxyXG4udGFibGUtY29udGFpbmVyIHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAvLyBtYXgtaGVpZ2h0OiA1MDBweDtcclxuICB3aWRvd3M6IDEwMCU7XHJcbiAgbWluLXdpZHRoOiAzMDBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmxvYWRpbmctc2hhZGUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDU2cHg7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICB6LWluZGV4OiAxO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4ubWF0LXRhYmxlIHtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICBtYXgtaGVpZ2h0OiAzNjBweDtcclxufVxyXG5cclxubWF0LWZvcm0tZmllbGQge1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxufVxyXG5cclxubWF0LXRvb2xiYXIge1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuXHJcbiN3cmFwcGVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogN3B4O1xyXG59XHJcbiIsIi5tZW51LWJhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDYwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnRhYmxlLWNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZG93czogMTAwJTtcbiAgbWluLXdpZHRoOiAzMDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubG9hZGluZy1zaGFkZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDU2cHg7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICB6LWluZGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLm1hdC10YWJsZSB7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBtYXgtaGVpZ2h0OiAzNjBweDtcbn1cblxubWF0LWZvcm0tZmllbGQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxubWF0LXRvb2xiYXIge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4jd3JhcHBlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogN3B4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/teacher/components/published-quize/published-quize.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/teacher/components/published-quize/published-quize.component.ts ***!
  \*********************************************************************************/
/*! exports provided: PublishedQuizeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublishedQuizeComponent", function() { return PublishedQuizeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_teacher_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/teacher.service */ "./src/app/teacher/services/teacher.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let PublishedQuizeComponent = class PublishedQuizeComponent {
    constructor(teacherServ) {
        this.teacherServ = teacherServ;
        this.displayedColumns = ['id', 'action'];
        this.dataSource = [];
    }
    ngOnInit() {
        this.getAllPublishedQuiz();
    }
    getAllPublishedQuiz() {
        this.teacherServ.getPublishQuiz().subscribe(data => {
            if (data.length > 0) {
                this.dataSource = data;
            }
            else {
                this.dataSource = null;
            }
        }, err => {
            this.teacherServ.errorHandler('can not get publish quizs');
        });
    }
    deleteBtn(id) {
        this.teacherServ.deleteQuiz(id).subscribe(data => {
            this.getAllPublishedQuiz();
            this.teacherServ.successHandle('Quiz Deleted');
        }, err => {
            this.teacherServ.errorHandler('Failed TO Delete This Item');
        });
    }
};
PublishedQuizeComponent.ctorParameters = () => [
    { type: _services_teacher_service__WEBPACK_IMPORTED_MODULE_1__["TeacherService"] }
];
PublishedQuizeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-published-quize',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./published-quize.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/teacher/components/published-quize/published-quize.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./published-quize.component.scss */ "./src/app/teacher/components/published-quize/published-quize.component.scss")).default]
    })
], PublishedQuizeComponent);



/***/ }),

/***/ "./src/app/teacher/components/quiz-form/quiz-form.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/teacher/components/quiz-form/quiz-form.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-button-row {\n  position: absolute;\n  right: 60px;\n}\n\nmat-card {\n  justify-content: center;\n  width: 90%;\n  margin-right: auto;\n  margin-left: auto;\n  margin-top: 7px;\n  max-height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVhY2hlci9jb21wb25lbnRzL3F1aXotZm9ybS9FOlxcdGVzdEZvck1lXFx0YXNrc1xcUXVpekFwcFxccXVpei1hcHAtY2xpZW50L3NyY1xcYXBwXFx0ZWFjaGVyXFxjb21wb25lbnRzXFxxdWl6LWZvcm1cXHF1aXotZm9ybS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdGVhY2hlci9jb21wb25lbnRzL3F1aXotZm9ybS9xdWl6LWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUNDRjs7QURFQTtFQUNFLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3RlYWNoZXIvY29tcG9uZW50cy9xdWl6LWZvcm0vcXVpei1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtYnV0dG9uLXJvdyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiA2MHB4O1xyXG59XHJcblxyXG5tYXQtY2FyZCB7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXRvcDogN3B4O1xyXG4gIG1heC1oZWlnaHQ6IGF1dG87XHJcbn1cclxuIiwiLmV4YW1wbGUtYnV0dG9uLXJvdyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDYwcHg7XG59XG5cbm1hdC1jYXJkIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi10b3A6IDdweDtcbiAgbWF4LWhlaWdodDogYXV0bztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/teacher/components/quiz-form/quiz-form.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/teacher/components/quiz-form/quiz-form.component.ts ***!
  \*********************************************************************/
/*! exports provided: QuizFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizFormComponent", function() { return QuizFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_teacher_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/teacher.service */ "./src/app/teacher/services/teacher.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");






let QuizFormComponent = class QuizFormComponent {
    constructor(fb, router, route, snackBar, teacherServ) {
        this.fb = fb;
        this.router = router;
        this.route = route;
        this.snackBar = snackBar;
        this.teacherServ = teacherServ;
        this.questions = new Array();
    }
    ngOnInit() {
        this.setQuizToForm();
        this.init();
    }
    init() {
        this.quizForm = this.fb.group({
            question: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            possibleAnswer1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            possibleAnswer2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            possibleAnswer3: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            possibleAnswer4: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            correctAnswer: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            explanation: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    }
    saveForm() {
        //add anthor question to quiz
        if (this.addAnthor) {
            let check = this.teacherServ.checkIfCorrectAnswerInPossible(this.quizForm.value);
            if (check) {
                this.questions = [...this.questions, this.quizForm.value];
                this.teacherServ.addAnthorQuestionToQuiz(this.questions, this.id).subscribe(data => {
                    this.router.navigate(['teacher']);
                    this.teacherServ.successHandle('Question Added');
                });
            }
            else {
                return this.errorHandler('Correct Answer must in Possible Answer');
            }
        }
        else {
            //create Quiz
            let check = this.teacherServ.checkIfCorrectAnswerInPossible(this.quizForm.value);
            if (check) {
                this.questions = [...this.questions, this.quizForm.value];
                this.teacherServ.createQuiz(this.questions).subscribe(data => {
                    this.router.navigate(['teacher']);
                    this.teacherServ.successHandle('Quiz Created');
                }, err => {
                    return this.errorHandler('can not save this quiz');
                });
            }
            else {
                return this.errorHandler('Correct Answer must in Possible Answer');
            }
        }
    }
    anthorQuestion() {
        let check = this.teacherServ.checkIfCorrectAnswerInPossible(this.quizForm.value);
        if (check) {
            this.questions = [...this.questions, this.quizForm.value];
            return this.quizForm.reset();
        }
        else {
            return this.errorHandler('Correct Answer must in Possible Answer');
        }
    }
    backBtn() {
        this.router.navigate(['../../'], { relativeTo: this.route });
    }
    errorHandler(message) {
        this.snackBar.open(message, 'Error', {
            duration: 2000
        });
    }
    setQuizToForm() {
        this.route.params.subscribe(params => {
            this.id = params['id'];
            if (!this.id) {
                return;
            }
            else {
                this.addAnthor = true;
            }
        });
    }
};
QuizFormComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] },
    { type: _services_teacher_service__WEBPACK_IMPORTED_MODULE_1__["TeacherService"] }
];
QuizFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-quiz-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./quiz-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/teacher/components/quiz-form/quiz-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./quiz-form.component.scss */ "./src/app/teacher/components/quiz-form/quiz-form.component.scss")).default]
    })
], QuizFormComponent);



/***/ }),

/***/ "./src/app/teacher/components/toolbar/toolbar.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/teacher/components/toolbar/toolbar.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-button-row {\n  position: absolute;\n  right: 150px;\n}\n\n.logout {\n  position: absolute;\n  right: 60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVhY2hlci9jb21wb25lbnRzL3Rvb2xiYXIvRTpcXHRlc3RGb3JNZVxcdGFza3NcXFF1aXpBcHBcXHF1aXotYXBwLWNsaWVudC9zcmNcXGFwcFxcdGVhY2hlclxcY29tcG9uZW50c1xcdG9vbGJhclxcdG9vbGJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdGVhY2hlci9jb21wb25lbnRzL3Rvb2xiYXIvdG9vbGJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC90ZWFjaGVyL2NvbXBvbmVudHMvdG9vbGJhci90b29sYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtYnV0dG9uLXJvdyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAxNTBweDtcclxufVxyXG5cclxuLmxvZ291dCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiA2MHB4O1xyXG59XHJcbiIsIi5leGFtcGxlLWJ1dHRvbi1yb3cge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxNTBweDtcbn1cblxuLmxvZ291dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDYwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/teacher/components/toolbar/toolbar.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/teacher/components/toolbar/toolbar.component.ts ***!
  \*****************************************************************/
/*! exports provided: ToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function() { return ToolbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_services_tokenservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../auth/services/tokenservice.service */ "./src/app/auth/services/tokenservice.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");




let ToolbarComponent = class ToolbarComponent {
    constructor(tokenService, router, route) {
        this.tokenService = tokenService;
        this.router = router;
        this.route = route;
    }
    ngOnInit() {
        const token = this.tokenService.GetToken();
        if (!token) {
            this.router.navigate(['/']);
        }
    }
    saveBtn() {
        this.router.navigate(['new', 'quiz'], { relativeTo: this.route });
    }
    logout() {
        this.tokenService.DeleteToken();
    }
};
ToolbarComponent.ctorParameters = () => [
    { type: _auth_services_tokenservice_service__WEBPACK_IMPORTED_MODULE_2__["TokenserviceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }
];
ToolbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-toolbar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./toolbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/teacher/components/toolbar/toolbar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./toolbar.component.scss */ "./src/app/teacher/components/toolbar/toolbar.component.scss")).default]
    })
], ToolbarComponent);



/***/ }),

/***/ "./src/app/teacher/services/teacher.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/teacher/services/teacher.service.ts ***!
  \*****************************************************/
/*! exports provided: TeacherService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherService", function() { return TeacherService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");





// const BASE_URL = `http://localhost:3000/quiz-app`
const BASE_URL = `quiz-app`;
let TeacherService = class TeacherService {
    constructor(http, router, route, snackBar) {
        this.http = http;
        this.router = router;
        this.route = route;
        this.snackBar = snackBar;
    }
    successHandle(message) {
        this.snackBar.open(message, 'Success', {
            duration: 2000
        });
    }
    errorHandler(message) {
        this.snackBar.open(message, 'Error', {
            duration: 2000
        });
    }
    checkIfCorrectAnswerInPossible(value) {
        //if create Quiz
        let arr = [value];
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < 4; j++) {
                if (arr[i]['correctAnswer'] === arr[i][`possibleAnswer${j + 1}`]) {
                    return true;
                }
            }
            return false;
        }
    }
    createQuiz(body) {
        return this.http.post(`${BASE_URL}/add-quiz`, body);
    }
    getQuiz() {
        return this.http.get(`${BASE_URL}/all-quiz`);
    }
    deleteQuiz(id) {
        return this.http.post(`${BASE_URL}/delete-quiz`, { id });
    }
    getQuizById({ page = 1, perPage = 1 }, id) {
        return this.http.post(`${BASE_URL}/get-quiz?page=${page}&perPage=${perPage}`, { id });
    }
    // getQuizById(id: string): Observable<Quiz> {
    //   return this.http.post<Quiz>(`${BASE_URL}/get-quiz`, { id })
    // }
    updateQuestionById(body) {
        return this.http.put(`${BASE_URL}/update-question`, body);
    }
    deleteQuestion(id) {
        return this.http.delete(`${BASE_URL}/delete-question/${id}`);
    }
    publishQuiz(id) {
        return this.http.put(`${BASE_URL}/publish-quiz`, { id });
    }
    getPublishQuiz() {
        return this.http.get(`${BASE_URL}/get-publish`);
    }
    addAnthorQuestionToQuiz(body, id) {
        return this.http.post(`${BASE_URL}/add-question/${id}`, body);
    }
};
TeacherService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"] }
];
TeacherService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])({
        providedIn: 'root'
    })
], TeacherService);



/***/ }),

/***/ "./src/app/teacher/teacher-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/teacher/teacher-routing.module.ts ***!
  \***************************************************/
/*! exports provided: TeacherRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherRoutingModule", function() { return TeacherRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_edit_form_edit_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/edit-form/edit-form.component */ "./src/app/teacher/components/edit-form/edit-form.component.ts");
/* harmony import */ var _auth_services_user_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../auth//services/user.guard */ "./src/app/auth/services/user.guard.ts");
/* harmony import */ var _components_quiz_form_quiz_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/quiz-form/quiz-form.component */ "./src/app/teacher/components/quiz-form/quiz-form.component.ts");
/* harmony import */ var _components_hometeacher_hometeacher_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/hometeacher/hometeacher.component */ "./src/app/teacher/components/hometeacher/hometeacher.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







const routes = [
    {
        path: '',
        component: _components_hometeacher_hometeacher_component__WEBPACK_IMPORTED_MODULE_4__["HometeacherComponent"],
        canActivate: [_auth_services_user_guard__WEBPACK_IMPORTED_MODULE_2__["UserGuard"]]
    },
    {
        path: 'new/quiz',
        component: _components_quiz_form_quiz_form_component__WEBPACK_IMPORTED_MODULE_3__["QuizFormComponent"],
        canActivate: [_auth_services_user_guard__WEBPACK_IMPORTED_MODULE_2__["UserGuard"]]
    },
    {
        path: 'edit/:id',
        component: _components_edit_form_edit_form_component__WEBPACK_IMPORTED_MODULE_1__["EditFormComponent"],
        canActivate: [_auth_services_user_guard__WEBPACK_IMPORTED_MODULE_2__["UserGuard"]]
    },
    {
        path: 'new/:id',
        component: _components_quiz_form_quiz_form_component__WEBPACK_IMPORTED_MODULE_3__["QuizFormComponent"],
        canActivate: [_auth_services_user_guard__WEBPACK_IMPORTED_MODULE_2__["UserGuard"]]
    }
];
let TeacherRoutingModule = class TeacherRoutingModule {
};
TeacherRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]]
    })
], TeacherRoutingModule);



/***/ }),

/***/ "./src/app/teacher/teacher.module.ts":
/*!*******************************************!*\
  !*** ./src/app/teacher/teacher.module.ts ***!
  \*******************************************/
/*! exports provided: TeacherModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherModule", function() { return TeacherModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_teacher_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/teacher.service */ "./src/app/teacher/services/teacher.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../shared/material.module */ "./src/app/shared/material.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _teacher_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./teacher-routing.module */ "./src/app/teacher/teacher-routing.module.ts");
/* harmony import */ var _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/toolbar/toolbar.component */ "./src/app/teacher/components/toolbar/toolbar.component.ts");
/* harmony import */ var _components_hometeacher_hometeacher_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/hometeacher/hometeacher.component */ "./src/app/teacher/components/hometeacher/hometeacher.component.ts");
/* harmony import */ var _components_all_quize_all_quize_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/all-quize/all-quize.component */ "./src/app/teacher/components/all-quize/all-quize.component.ts");
/* harmony import */ var _components_published_quize_published_quize_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/published-quize/published-quize.component */ "./src/app/teacher/components/published-quize/published-quize.component.ts");
/* harmony import */ var _components_quiz_form_quiz_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/quiz-form/quiz-form.component */ "./src/app/teacher/components/quiz-form/quiz-form.component.ts");
/* harmony import */ var _components_edit_form_edit_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/edit-form/edit-form.component */ "./src/app/teacher/components/edit-form/edit-form.component.ts");













let TeacherModule = class TeacherModule {
};
TeacherModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
        declarations: [_components_hometeacher_hometeacher_component__WEBPACK_IMPORTED_MODULE_8__["HometeacherComponent"], _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_7__["ToolbarComponent"], _components_all_quize_all_quize_component__WEBPACK_IMPORTED_MODULE_9__["AllQuizeComponent"], _components_published_quize_published_quize_component__WEBPACK_IMPORTED_MODULE_10__["PublishedQuizeComponent"], _components_quiz_form_quiz_form_component__WEBPACK_IMPORTED_MODULE_11__["QuizFormComponent"], _components_edit_form_edit_form_component__WEBPACK_IMPORTED_MODULE_12__["EditFormComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
            _teacher_routing_module__WEBPACK_IMPORTED_MODULE_6__["TeacherRoutingModule"],
            _shared_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
        ],
        exports: [_components_hometeacher_hometeacher_component__WEBPACK_IMPORTED_MODULE_8__["HometeacherComponent"], _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_7__["ToolbarComponent"]],
        providers: [_services_teacher_service__WEBPACK_IMPORTED_MODULE_1__["TeacherService"]]
    })
], TeacherModule);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\testForMe\tasks\QuizApp\quiz-app-client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map