(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add-question/addquestion.component.css":
/*!********************************************************!*\
  !*** ./src/app/add-question/addquestion.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n"

/***/ }),

/***/ "./src/app/add-question/addquestion.component.html":
/*!*********************************************************!*\
  !*** ./src/app/add-question/addquestion.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Add Question</h1>\n<mat-dialog-content>\n\t<div style=\"min-height:400px; \">\n\n\t\t<select class=\"offset-3\" id=\"ls\" (change)=\"hide()\">\n\t\t\t<option value=\"M\">Multiple Choice Question</option>\n\t\t\t<option value=\"D\">Descriptive Question</option>\n\n\t\t</select>\n\t\t<br>\n\t\t<div >\n\n\t\t\t<textarea id=\"qs\" class=\"offset-1\" placeholder=\"Enter the question here\"  style=\"margin-top: 2%;margin-bottom:2%;height: 90px;width:350px;\"></textarea>\n\t\t\t<br>\n\t\t\t<label class=\"hd\"><h5>Option A</h5></label>\n\t\t\t<input class=\"offset-1 hd\" type=\"text\" id=\"A\">\n\t\t\t<br>\n\t\t\t<label class=\"hd\" ><h5>Option B</h5></label>\n\t\t\t<input class=\"offset-1 hd\" type=\"text\" id=\"B\">\n\t\t\t<br>\n\t\t\t<label class=\"hd\"><h5>Option C</h5></label>\n\t\t\t<input class=\"offset-1 hd\" type=\"text\" id=\"C\">\n\t\t\t<br>\n\t\t\t<label class=\"hd\"><h5>Option D</h5></label>\n\t\t\t<input class=\"offset-1 hd\" type=\"text\" id=\"D\">\n\t\t\t<br>\n\t\t\t<label class=\"hd\"><h5>Select Answer</h5></label>\n\t\t\t<select class=\"offset-1 hd\" id=\"opt\">\n\t\t\t\t<option value=\"A\">A</option>\n\t\t\t\t<option value=\"B\">B</option>\n\t\t\t\t<option value=\"C\">C</option>\n\t\t\t\t<option value=\"D\">D</option>\n\t\t\t</select>\n\t\t\t<br>\n\t\t\t<label id=\"Pt1\"><h5>Points</h5></label>\n\t\t\t<input class=\"offset-1 hd\" type=\"text\" id=\"Pt\">\n\t\t\t<br>\n\t\t\t<label ><h5>Level</h5></label>\n\t\t\t<select class=\"offset-1 \" id=\"lev\">\n\t\t\t\t<option value=\"Ea\">Easy</option>\n\t\t\t\t<option value=\"Md\">Medium</option>\n\t\t\t\t<option value=\"Df\">Difficult</option>\n\t\t\t</select>\n\t\t\t<br>\n\n\t\t</div>\n\t</div>\n</mat-dialog-content>\n<mat-dialog-actions>\n\t<button mat-button style=\"background-color: green\" (click)=\"add_question()\"><strong>Add</strong></button>\n\t<button mat-button type=\"button\" mat-dialog-close><strong>Cancel</strong></button>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "./src/app/add-question/addquestion.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/add-question/addquestion.component.ts ***!
  \*******************************************************/
/*! exports provided: AddQuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddQuestionComponent", function() { return AddQuestionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var AddQuestionComponent = /** @class */ (function () {
    function AddQuestionComponent(data, dialogRef, route, api, router, formBuilder) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.route = route;
        this.api = api;
        this.router = router;
        this.formBuilder = formBuilder;
        this.fc_id = '';
        this.selected_value = '';
        this.fc_id = data.fcid;
    }
    AddQuestionComponent.prototype.ngOnInit = function () {
    };
    AddQuestionComponent.prototype.hide = function () {
        this.selected_value = jquery__WEBPACK_IMPORTED_MODULE_5__("#ls").children("option:selected").val();
        if (this.selected_value == 'M') {
            jquery__WEBPACK_IMPORTED_MODULE_5__('.hd').show();
            jquery__WEBPACK_IMPORTED_MODULE_5__('#Pt').hide();
            jquery__WEBPACK_IMPORTED_MODULE_5__('#Pt1').hide();
        }
        else {
            jquery__WEBPACK_IMPORTED_MODULE_5__('.hd').hide();
            jquery__WEBPACK_IMPORTED_MODULE_5__('#Pt').show();
            jquery__WEBPACK_IMPORTED_MODULE_5__('#Pt1').show();
        }
    };
    AddQuestionComponent.prototype.add_question = function () {
        var _this = this;
        var question = {};
        question['Question'] = jquery__WEBPACK_IMPORTED_MODULE_5__('#qs').val();
        question['level'] = jquery__WEBPACK_IMPORTED_MODULE_5__('#lev').children("option:selected").val();
        if (this.selected_value == 'D') {
            question['pts'] = jquery__WEBPACK_IMPORTED_MODULE_5__('#Pt').val();
            console.log(question);
            this.api.postDescriptiveQuestions(question)
                .subscribe(function (res) {
                var questionfc = {};
                questionfc['qid'] = res._id;
                questionfc['dmq'] = 'D';
                questionfc['fcid'] = _this.fc_id;
                questionfc['level'] = jquery__WEBPACK_IMPORTED_MODULE_5__('#lev').children("option:selected").val();
                _this.api.postFacultyCourseQuestions(questionfc)
                    .subscribe(function (res) {
                    console.log("****");
                    console.log(res);
                    console.log(_this.fc_id);
                    _this.dialogRef.close();
                }, function (err) {
                    // console.log(err);
                });
            }, function (err) {
                // console.log(err);
            });
        }
        else {
            question['OptA'] = jquery__WEBPACK_IMPORTED_MODULE_5__('#A').val();
            question['OptB'] = jquery__WEBPACK_IMPORTED_MODULE_5__('#B').val();
            question['OptC'] = jquery__WEBPACK_IMPORTED_MODULE_5__('#C').val();
            question['OptD'] = jquery__WEBPACK_IMPORTED_MODULE_5__('#D').val();
            question['AnsOpt'] = jquery__WEBPACK_IMPORTED_MODULE_5__('#opt').children("option:selected").val();
            this.api.postMultipleQuestions(question)
                .subscribe(function (res) {
                var questionfc = {};
                questionfc['qid'] = res._id;
                questionfc['dmq'] = 'M';
                questionfc['fcid'] = _this.fc_id;
                questionfc['level'] = jquery__WEBPACK_IMPORTED_MODULE_5__('#lev').children("option:selected").val();
                _this.api.postFacultyCourseQuestions(questionfc)
                    .subscribe(function (res) {
                    _this.dialogRef.close();
                }, function (err) {
                    // console.log(err);
                });
            }, function (err) {
                // console.log(err);
            });
        }
    };
    AddQuestionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'add-question',
            template: __webpack_require__(/*! ./addquestion.component.html */ "./src/app/add-question/addquestion.component.html"),
            styles: [__webpack_require__(/*! ./addquestion.component.css */ "./src/app/add-question/addquestion.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], AddQuestionComponent);
    return AddQuestionComponent;
}());



/***/ }),

/***/ "./src/app/angular-material/angular-material.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/angular-material/angular-material.module.ts ***!
  \*************************************************************/
/*! exports provided: AngularMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularMaterialModule", function() { return AngularMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AngularMaterialModule = /** @class */ (function () {
    function AngularMaterialModule() {
    }
    AngularMaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"]
            ],
            exports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"]
            ],
            declarations: []
        })
    ], AngularMaterialModule);
    return AngularMaterialModule;
}());



/***/ }),

/***/ "./src/app/api.service.ts":
/*!********************************!*\
  !*** ./src/app/api.service.ts ***!
  \********************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var apiUrl = '/api';
var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
    }
    ApiService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.log('error');
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.log('error1');
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])('Something bad happened; please try again later.');
    };
    ApiService.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    ApiService.prototype.getStudent = function (id) {
        var url = apiUrl + "/student/" + id;
        return this.http.get(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.getFaculty = function (id) {
        var url = apiUrl + "/faculty/" + id;
        return this.http.get(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.ValidateStudent = function (uname, upwd) {
        var url = apiUrl + "/student/" + uname + "/" + upwd;
        return this.http.get(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.ValidateFaculty = function (uname, upwd) {
        var url = apiUrl + "/faculty/" + uname + "/" + upwd;
        return this.http.get(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.postStudent = function (data) {
        var url = apiUrl + "/student";
        return this.http.post(url, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.postFaculty = function (data) {
        var url = apiUrl + "/faculty";
        return this.http.post(url, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.updateStudent = function (id, data) {
        var url = apiUrl + "/student/" + id;
        return this.http.put(url, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.updateFaculty = function (id, data) {
        var url = apiUrl + "/faculty/" + id;
        return this.http.put(url, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.deleteStudent = function (id) {
        var url = apiUrl + "/student/" + id;
        return this.http.delete(url, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.deleteFaculty = function (id) {
        var url = apiUrl + "/faculty/" + id;
        return this.http.delete(url, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.postCourse = function (data) {
        var url = apiUrl + "/course";
        return this.http.post(url, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.getCourse = function (id) {
        var url = apiUrl + "/course/" + id;
        return this.http.get(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.getCourses = function () {
        var url = apiUrl + "/course";
        return this.http.get(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.getFacultyCourse = function (fid) {
        var url = apiUrl + "/facultycourse/" + fid;
        console.log(url);
        return this.http.get(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.getFacultyCourses = function () {
        var url = apiUrl + "/facultycourse";
        console.log(url);
        return this.http.get(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.getStudentCourse = function (fcid) {
        var url = apiUrl + "/studentcourse/" + fcid;
        console.log(url);
        return this.http.get(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.getStudentCourseExists = function (fcid, sid) {
        var url = apiUrl + "/studentcourse/" + fcid + "/" + sid;
        console.log(url);
        return this.http.get(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.getFacultyCourseQuestions = function (fcid) {
        var url = apiUrl + "/facultycoursequestions/" + fcid;
        console.log(url);
        return this.http.get(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.getFacultyQuestionsLevel = function (fcid, fc, fct) {
        var url = apiUrl + "/facultycoursequestions/" + fcid + "/" + fc + "/" + fct;
        console.log(url);
        return this.http.get(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.getDescriptive = function (fcid) {
        var url = apiUrl + "/descriptivequestions/" + fcid;
        console.log(url);
        return this.http.get(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.getMultiple = function (fcid) {
        var url = apiUrl + "/multiplequestions/" + fcid;
        console.log(url);
        return this.http.get(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.postFacultyCourse = function (data) {
        var url = apiUrl + "/facultycourse";
        return this.http.post(url, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.postStudentCourse = function (data) {
        var url = apiUrl + "/studentcourse";
        return this.http.post(url, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.postFacultyCourseQuestions = function (data) {
        var url = apiUrl + "/facultycoursequestions";
        return this.http.post(url, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.postDescriptiveQuestions = function (data) {
        var url = apiUrl + "/descriptivequestions";
        return this.http.post(url, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.postMultipleQuestions = function (data) {
        var url = apiUrl + "/multiplequestions";
        return this.http.post(url, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_add_user_add_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-add/user-add.component */ "./src/app/user-add/user-add.component.ts");
/* harmony import */ var _user_login_user_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-login/user-login.component */ "./src/app/user-login/user-login.component.ts");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "./src/app/user-profile/user-profile.component.ts");
/* harmony import */ var _enrollments_enrollments_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./enrollments/enrollments.component */ "./src/app/enrollments/enrollments.component.ts");
/* harmony import */ var _user_signup_user_signup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-signup/user-signup.component */ "./src/app/user-signup/user-signup.component.ts");
/* harmony import */ var _faculty_add_faculty_add_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./faculty-add/faculty-add.component */ "./src/app/faculty-add/faculty-add.component.ts");
/* harmony import */ var _courses_courses_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./courses/courses.component */ "./src/app/courses/courses.component.ts");
/* harmony import */ var _student_list_studentlist_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./student-list/studentlist.component */ "./src/app/student-list/studentlist.component.ts");
/* harmony import */ var _questions_list_questionslist_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./questions-list/questionslist.component */ "./src/app/questions-list/questionslist.component.ts");
/* harmony import */ var _add_question_addquestion_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./add-question/addquestion.component */ "./src/app/add-question/addquestion.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var appRoutes = [
    {
        path: '',
        component: _user_signup_user_signup_component__WEBPACK_IMPORTED_MODULE_7__["UserSignupComponent"],
        data: { title: 'Signup' }
    },
    {
        path: 'user-login/:type',
        component: _user_login_user_login_component__WEBPACK_IMPORTED_MODULE_4__["UserLoginComponent"],
        data: { title: 'login' }
    },
    {
        path: 'add-question/:type',
        component: _add_question_addquestion_component__WEBPACK_IMPORTED_MODULE_12__["AddQuestionComponent"],
        data: { title: 'Add Question' }
    },
    {
        path: 'courses/:id/:type',
        component: _courses_courses_component__WEBPACK_IMPORTED_MODULE_9__["CoursesComponent"],
        data: { title: 'Books' }
    },
    {
        path: 'faculty-add',
        component: _faculty_add_faculty_add_component__WEBPACK_IMPORTED_MODULE_8__["FacultyAddComponent"],
        data: { title: 'Faculty SignUp' }
    },
    {
        path: 'user-add',
        component: _user_add_user_add_component__WEBPACK_IMPORTED_MODULE_3__["UserAddComponent"],
        data: { title: 'Sign Up' }
    },
    {
        path: 'my-enrollments/:id/:type',
        component: _enrollments_enrollments_component__WEBPACK_IMPORTED_MODULE_6__["EnrollmentsComponent"],
        data: { title: 'Sign Up' }
    },
    {
        path: 'user-template/:id',
        component: _user_add_user_add_component__WEBPACK_IMPORTED_MODULE_3__["UserAddComponent"],
        data: { title: 'Sign Up' }
    },
    {
        path: 'user-profile/:id/:type',
        component: _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_5__["UserProfileComponent"],
        data: { title: 'User Profile' }
    },
    {
        path: 'student-list/:id/:type',
        component: _student_list_studentlist_component__WEBPACK_IMPORTED_MODULE_10__["StudentListComponent"],
        data: { title: 'Student List' }
    },
    {
        path: 'question-list/:id/:type',
        component: _questions_list_questionslist_component__WEBPACK_IMPORTED_MODULE_11__["QuestionListComponent"],
        data: { title: 'Questions List' }
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes, { useHash: true }),
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<header class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a center class=\"navbar-brand\" href=\"#\">Customer CRUD operations</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n          aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n</header>-->\n\n<div class=\"container col-12\" style=\"background-color: black\" >\n  <router-outlet></router-outlet>\n</div>\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.service */ "./src/app/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(route, api, router) {
        this.route = route;
        this.api = api;
        this.router = router;
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm5/ngx-bootstrap-datepicker.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _user_add_user_add_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-add/user-add.component */ "./src/app/user-add/user-add.component.ts");
/* harmony import */ var _user_login_user_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-login/user-login.component */ "./src/app/user-login/user-login.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./angular-material/angular-material.module */ "./src/app/angular-material/angular-material.module.ts");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "./src/app/user-profile/user-profile.component.ts");
/* harmony import */ var _user_template_user_template_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user-template/user-template.component */ "./src/app/user-template/user-template.component.ts");
/* harmony import */ var _enrollments_enrollments_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./enrollments/enrollments.component */ "./src/app/enrollments/enrollments.component.ts");
/* harmony import */ var _user_signup_user_signup_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./user-signup/user-signup.component */ "./src/app/user-signup/user-signup.component.ts");
/* harmony import */ var _faculty_add_faculty_add_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./faculty-add/faculty-add.component */ "./src/app/faculty-add/faculty-add.component.ts");
/* harmony import */ var _courses_courses_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./courses/courses.component */ "./src/app/courses/courses.component.ts");
/* harmony import */ var _student_list_studentlist_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./student-list/studentlist.component */ "./src/app/student-list/studentlist.component.ts");
/* harmony import */ var _questions_list_questionslist_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./questions-list/questionslist.component */ "./src/app/questions-list/questionslist.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _add_question_addquestion_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./add-question/addquestion.component */ "./src/app/add-question/addquestion.component.ts");
/* harmony import */ var _generate_paper_generate_paper_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./generate-paper/generate-paper.component */ "./src/app/generate-paper/generate-paper.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _user_add_user_add_component__WEBPACK_IMPORTED_MODULE_6__["UserAddComponent"],
                _user_login_user_login_component__WEBPACK_IMPORTED_MODULE_7__["UserLoginComponent"],
                _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_10__["UserProfileComponent"],
                _user_template_user_template_component__WEBPACK_IMPORTED_MODULE_11__["UserTemplateComponent"],
                _enrollments_enrollments_component__WEBPACK_IMPORTED_MODULE_12__["EnrollmentsComponent"],
                _user_signup_user_signup_component__WEBPACK_IMPORTED_MODULE_13__["UserSignupComponent"],
                _faculty_add_faculty_add_component__WEBPACK_IMPORTED_MODULE_14__["FacultyAddComponent"],
                _courses_courses_component__WEBPACK_IMPORTED_MODULE_15__["CoursesComponent"],
                _student_list_studentlist_component__WEBPACK_IMPORTED_MODULE_16__["StudentListComponent"],
                _questions_list_questionslist_component__WEBPACK_IMPORTED_MODULE_17__["QuestionListComponent"],
                _add_question_addquestion_component__WEBPACK_IMPORTED_MODULE_19__["AddQuestionComponent"],
                _generate_paper_generate_paper_component__WEBPACK_IMPORTED_MODULE_20__["GeneratePaperComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_9__["AngularMaterialModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatButtonModule"],
                ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_4__["BsDatepickerModule"].forRoot()
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
            entryComponents: [_add_question_addquestion_component__WEBPACK_IMPORTED_MODULE_19__["AddQuestionComponent"], _generate_paper_generate_paper_component__WEBPACK_IMPORTED_MODULE_20__["GeneratePaperComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/courses/courses.component.css":
/*!***********************************************!*\
  !*** ./src/app/courses/courses.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n"

/***/ }),

/***/ "./src/app/courses/courses.component.html":
/*!************************************************!*\
  !*** ./src/app/courses/courses.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"background:black; min-height:730px;\">\n<div class=\"row\">\n\t<div *ngIf=\"collapse\"class=\"col-2\" style=\"background-color: darkblue;color:white;min-height: 730px\">\n\t\t<h3> Welcome, </h3>\n\t\t<h3 > &nbsp;{{faculty_name}} </h3>\n\t\t<br>\n\t\t<h5 (click)=\"onNavigate(number)\" style=\"cursor: pointer;padding-top: 4%;padding-bottom: 4%;margin-top: 5%;margin-bottom: 5%;\" *ngFor=\"let number of v\">{{number}}</h5>\n\n\n\t</div>\n\t<div id=\"content-div\" class=\"col-10\">\n\t\t<i class=\"fa fa-bars fa-3x\" (click)=\"onCollapse()\" style=\"color: white;\"></i>\n\t\t<button (click)=\"logout()\" style=\"cursor: pointer;position:relative;float: right;right:15px; top:10px;\"><i class=\"fa fa-lg fa-sign-out fa-4x \"></i></button>\n\t\t<br>\n\t\t<div style=\"overflow: scroll;border: black;border-style: solid;background-color: white;margin-top: 2%;padding-top: 2%;padding-bottom: 1%;max-height: 620px;min-height: 620px;\" class=\"col-12\">\n\t\t\t<div *ngFor=\"let course of courses\" style=\"padding: 0px;margin-top: 2%;margin-bottom: 2%;\"class=\"row\">\n\n\t\t\t\t<h4 style=\"color: darkblue;\" class=\"col-4\">{{course.CourseName}}</h4>\n\t\t\t\t<div class=\"col-3\" id=\"bt\"> <a style=\"color: blue\" (click)=\"openWindow(course.fc_id)\"><span style=\"cursor: pointer;\"> Generate Paper</span></a></div>\n\t\t\t</div>\n</div>\n\n  </div>\n  </div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/courses/courses.component.ts":
/*!**********************************************!*\
  !*** ./src/app/courses/courses.component.ts ***!
  \**********************************************/
/*! exports provided: CoursesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesComponent", function() { return CoursesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _generate_paper_generate_paper_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../generate-paper/generate-paper.component */ "./src/app/generate-paper/generate-paper.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CoursesComponent = /** @class */ (function () {
    function CoursesComponent(dialog, route, api, router, formBuilder) {
        this.dialog = dialog;
        this.route = route;
        this.api = api;
        this.router = router;
        this.formBuilder = formBuilder;
        this.courses = [];
        this.collapse = true;
        this.v = [];
        this.faculty_name = '';
    }
    CoursesComponent.prototype.logout = function () {
        this.router.navigate(['']);
    };
    CoursesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user_id = this.route.snapshot.params['id'];
        this.user_type = this.route.snapshot.params['type'];
        this.api.getFaculty(this.user_id).subscribe(function (data) {
            _this.faculty_name = data.name;
        });
        this.getCourses();
        if (this.user_type == 'F') {
            this.v = ['My Profile', 'Courses', 'Student List', 'Questions List'];
        }
        else {
            this.v = ['My Profile', 'Courses', 'Assignments', 'Grades'];
        }
    };
    CoursesComponent.prototype.getCourses = function () {
        var _this = this;
        var j = 0;
        this.api.getFacultyCourse(this.user_id)
            .subscribe(function (data) {
            //console.log(data);
            var _loop_1 = function (i) {
                _this.api.getCourse(data[i].cid)
                    .subscribe(function (res) {
                    // console.log(res);
                    res['fc_id'] = data[i]._id;
                    _this.courses[j] = res;
                    j++;
                }, function (err) {
                    // console.log(err);
                });
            };
            for (var i = 0; i < data.length; i++) {
                _loop_1(i);
            }
        });
    };
    CoursesComponent.prototype.openWindow = function (id) {
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.height = '550px';
        dialogConfig.width = '550px';
        dialogConfig.position = { top: '8%', left: '30%' };
        dialogConfig.data = {
            fcid: id,
            title: 'Generate Paper'
        };
        var dialogRef = this.dialog.open(_generate_paper_generate_paper_component__WEBPACK_IMPORTED_MODULE_5__["GeneratePaperComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe(function (data) { return console.log(2); });
    };
    CoursesComponent.prototype.onNavigate = function (navpage) {
        console.log(navpage);
        if (navpage == 'My Profile') {
            this.router.navigate(['/user-profile', this.user_id, this.user_type]);
        }
        else if (navpage == 'Courses') {
            this.router.navigate(['/courses', this.user_id, this.user_type]);
        }
        else if (navpage == 'Student List') {
            this.router.navigate(['/student-list', this.user_id, this.user_type]);
        }
        else if (navpage == 'Questions List') {
            this.router.navigate(['/question-list', this.user_id, this.user_type]);
        }
    };
    CoursesComponent.prototype.onCollapse = function () {
        if (this.collapse == true) {
            this.collapse = false;
            document.getElementById("content-div").classList.add("col-12");
            document.getElementById("content-div").classList.remove("col-10");
        }
        else {
            this.collapse = true;
            document.getElementById("content-div").classList.add("col-10");
            document.getElementById("content-div").classList.remove("col-12");
        }
    };
    CoursesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'courses',
            template: __webpack_require__(/*! ./courses.component.html */ "./src/app/courses/courses.component.html"),
            styles: [__webpack_require__(/*! ./courses.component.css */ "./src/app/courses/courses.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], CoursesComponent);
    return CoursesComponent;
}());



/***/ }),

/***/ "./src/app/enrollments/enrollments.component.css":
/*!*******************************************************!*\
  !*** ./src/app/enrollments/enrollments.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n"

/***/ }),

/***/ "./src/app/enrollments/enrollments.component.html":
/*!********************************************************!*\
  !*** ./src/app/enrollments/enrollments.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"background:black; min-height:730px;\">\n    <div class=\"row\">\n        <div *ngIf=\"collapse\"class=\"col-2\" style=\"background-color: darkblue;color:white;min-height: 730px\">\n            <h3> Welcome, </h3>\n            <h3 > &nbsp;{{student_name}} </h3>\n            <br>\n            <h5 (click)=\"onNavigate(number)\" style=\"cursor: pointer;padding-top: 4%;padding-bottom: 4%;margin-top: 5%;margin-bottom: 5%;\" *ngFor=\"let number of v\">{{number}}</h5>\n        </div>\n\n <div class=\"container\" >\n\n          <i class=\"fa fa-bars fa-3x\" (click)=\"onCollapse()\" style=\"color: white;\"></i>\n          <button (click)=\"logout()\" style=\"cursor: pointer;position:relative;float: right;right:15px; top:10px;\"><i class=\"fa fa-lg fa-sign-out fa-4x \"></i></button>\n          <br>\n\t  <div style=\"overflow: scroll;border: black;border-style: solid;background-color: white;margin-top: 2%;padding-top: 2%;padding-bottom: 1%;max-height: 620px;min-height: 620px;\" id=\"content-div\" class=\"col-12\">\n\n              <div *ngFor=\"let enrollment of enrollments\" class=\"col-12\" id=\"enrollment.BookID\">\n                  <h3 style=\"color: darkblue;display: inline\">{{enrollment.CourseName}}</h3>\n                  <button *ngIf=\"enrollment.btnvis\" (click)=\"add(enrollment._id,enrollment.ind)\"  style=\"background-color:white;position: absolute;float: right;right: 20px;padding: 0px;margin: 0px;border: none; color: green\" class=\"col-1 lbutton btn btn-md\"><i class=\"fa fa-md\">enroll</i></button>\n\n\n                  <div>\n                      <h5 style=\"display: inline\"> Professor:</h5> {{enrollment.FacultyName}}\n                  </div>\n                  <br>\n                  <hr>\n                 <!-- <div>\n                      <h5 style=\"display: inline\"> Availability: </h5>{{enrollment.availability}}\n                  </div>\n                  <div> <h5 style=\"display: inline\" > Rating: </h5> {{enrollment.rating}}\n                  </div>\n              </div>-->\n  </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/enrollments/enrollments.component.ts":
/*!******************************************************!*\
  !*** ./src/app/enrollments/enrollments.component.ts ***!
  \******************************************************/
/*! exports provided: EnrollmentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnrollmentsComponent", function() { return EnrollmentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EnrollmentsComponent = /** @class */ (function () {
    function EnrollmentsComponent(route, api, router, formBuilder) {
        this.route = route;
        this.api = api;
        this.router = router;
        this.formBuilder = formBuilder;
        this.enrollments = [];
        this.v = [];
        this.collapse = true;
    }
    EnrollmentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user_id = this.route.snapshot.params['id'];
        this.v = ['My Profile', 'Enrollments', 'Assignments'];
        this.user_type = this.route.snapshot.params['type'];
        this.api.getStudent(this.user_id).subscribe(function (data) {
            _this.student_name = data.name;
        });
        this.getEnrollments();
    };
    EnrollmentsComponent.prototype.logout = function () {
        this.router.navigate(['']);
    };
    EnrollmentsComponent.prototype.onCollapse = function () {
        if (this.collapse == true) {
            this.collapse = false;
            document.getElementById("content-div").classList.add("col-12");
            document.getElementById("content-div").classList.remove("col-10");
        }
        else {
            this.collapse = true;
            document.getElementById("content-div").classList.add("col-10");
            document.getElementById("content-div").classList.remove("col-12");
        }
    };
    EnrollmentsComponent.prototype.onNavigate = function (navpage) {
        if (navpage == 'My Profile') {
            this.router.navigate(['/user-profile', this.user_id, this.user_type]);
        }
        else if (navpage == 'Courses') {
            this.router.navigate(['/courses', this.user_id, this.user_type]);
        }
        else if (navpage == 'Student List') {
            this.router.navigate(['/student-list', this.user_id, this.user_type]);
        }
        else if (navpage == 'Questions List') {
            this.router.navigate(['/question-list', this.user_id, this.user_type]);
        }
        else if (navpage == 'Enrollments') {
            this.router.navigate(['/my-enrollments', this.user_id, this.user_type]);
        }
    };
    EnrollmentsComponent.prototype.getEnrollments = function () {
        var _this = this;
        this.api.getFacultyCourses()
            .subscribe(function (data) {
            //console.log(data);
            _this.enrollments = data;
            var _loop_1 = function (i) {
                _this.enrollments[i].ind = i;
                _this.api.getCourse(_this.enrollments[i].cid)
                    .subscribe(function (res) {
                    console.log(res);
                    _this.enrollments[i].CourseName = res.CourseName;
                    console.log(_this.enrollments[i].CourseName);
                    //console.log(this.enrollments[i]);
                }, function (err) {
                    console.log(err);
                });
                //console.log(this.enrollments[i]);
                _this.api.getFaculty(_this.enrollments[i].fid)
                    .subscribe(function (res) {
                    // console.log(res)
                    _this.enrollments[i].FacultyName = res.name;
                    //  console.log(this.enrollments[i]);
                }, function (err) {
                    console.log(err);
                });
                _this.api.getStudentCourseExists(_this.enrollments[i]._id, _this.user_id).subscribe(function (res) {
                    //console.log(res)
                    if (res.length > 0) {
                        _this.enrollments[i].btnvis = false;
                    }
                    else {
                        _this.enrollments[i].btnvis = true;
                    }
                }, function (err) {
                    console.log(err);
                });
            };
            for (var i = 0; i < _this.enrollments.length; i++) {
                _loop_1(i);
            }
        });
    };
    EnrollmentsComponent.prototype.delete = function (id, ind) {
        /* this.api.getUserBook(this.user_id, id )
             .subscribe(data => {
               this.api.deleteUserBook(data[0]._id )
                   .subscribe(data => {
                     this.my_enrollments[ind].availability = this.my_enrollments[ind].availability+1;
                     this.api.updateBook(this.my_enrollments[ind]._id, this.my_enrollments[ind])
                         .subscribe(res1 => {
                           this.my_enrollments.splice( Number(ind) , 1);
                           for (let j = Number(ind) ; j < this.my_enrollments.length ; j++ ) {
                               this.my_enrollments[j].ind = j;}
                         }, (err) => {
                           console.log(err);
                         });
     
                   });
     
             });*/
    };
    EnrollmentsComponent.prototype.add = function (id, ind) {
        var _this = this;
        var student = {};
        student['sid'] = this.user_id;
        student['fcid'] = id;
        this.api.postStudentCourse(student)
            .subscribe(function (res) {
            _this.enrollments[ind].btnvis = false;
        }, function (err) {
            console.log(err);
        });
    };
    EnrollmentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'my-enrollments',
            template: __webpack_require__(/*! ./enrollments.component.html */ "./src/app/enrollments/enrollments.component.html"),
            styles: [__webpack_require__(/*! ./enrollments.component.css */ "./src/app/enrollments/enrollments.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], EnrollmentsComponent);
    return EnrollmentsComponent;
}());



/***/ }),

/***/ "./src/app/faculty-add/faculty-add.component.css":
/*!*******************************************************!*\
  !*** ./src/app/faculty-add/faculty-add.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/faculty-add/faculty-add.component.html":
/*!********************************************************!*\
  !*** ./src/app/faculty-add/faculty-add.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"background:black; min-height:730px;\">\n<div class=\"container\"  >\n  <br>\n\n\n  <form  [formGroup]=\"userForm\" (ngSubmit)=\"onSubmit()\" name=\"myForm\" method=\"get\"  style=\"background:white;margin-top: 2%; border-style: solid; padding-top: 5%;padding-bottom: 1%;\" class=\"offset-2 col-8 lform\" >\n    <div class=\"row\">\n      <div class=\"form-group offset-2 col-10\">\n        <label class=\"ast control-label\"><strong> Name</strong></label><br>\n        <input  id=\"Name\" formControlName=\"Name\" type=\"text\" maxlength=\"50\" class=\"col-8 form-control\" placeholder=\"Enter the Name\" [ngClass]=\"{ 'is-invalid': submitted && f.Name.errors }\">\n        <div *ngIf=\"submitted && f.Name.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"f.Name.errors.required\">Name is required</div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"form-group offset-2 col-10\">\n        <label class=\"ast control-label\"><strong> Username</strong></label><br>\n        <input  id=\"UName\" formControlName=\"UName\" type=\"text\" maxlength=\"50\" class=\"col-8 form-control\" placeholder=\"Enter the Username\" [ngClass]=\"{ 'is-invalid': submitted && f.UName.errors }\">\n        <div *ngIf=\"submitted && f.UName.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"f.UName.errors.required\">UserName is required</div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"form-group offset-2 col-10\">\n        <label class=\"ast control-label\"><strong> Password</strong></label><br>\n        <input  id=\"UPassword\" formControlName=\"UPassword\" type=\"password\" maxlength=\"20\" class=\"col-8 form-control\" placeholder=\"Enter the Password\" [ngClass]=\"{ 'is-invalid': submitted && f.UPassword.errors }\">\n        <div *ngIf=\"submitted && f.UPassword.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"f.UPassword.errors.required\">Password is required</div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"form-group offset-2 col-10\">\n        <label class=\"ast control-label\"><strong> Gender</strong></label><br>\n        <input  id=\"gender\" name=\"gender\" formControlName=\"gender\" type=\"radio\" maxlength=\"50\" class=\"col-1\"  checked value=\"F\">Female\n        <input  id=\"gender\" name=\"gender\" formControlName=\"gender\" type=\"radio\" maxlength=\"50\" class=\"col-1\"  value=\"M\">Male\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"form-group offset-2 col-10\">\n        <label class=\"ast control-label\"><strong> Date Of Birth</strong></label><br>\n        <input  id=\"dob\" formControlName=\"dob\" type=\"date\" maxlength=\"50\" class=\"col-8 form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.dob.errors }\">\n        <div *ngIf=\"submitted && f.dob.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"f.dob.errors.required\">Date Of Birth is required</div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"form-group offset-2 col-10\">\n        <label class=\"ast control-label\"><strong> Email</strong></label><br>\n        <input  id=\"email\" formControlName=\"email\" type=\"text\" maxlength=\"100\" class=\"col-8 form-control\" placeholder=\"Enter the Email address\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\">\n        <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"f.email.errors.required\">Email is required</div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\" offset-2 col-10\">\n        <label class=\" control-label\"><strong> Courses</strong></label>\n    </div>\n    </div>\n    <div class=\"row\">\n\n      <div class=\" offset-2 col-4\">\n        <input  id={{courses[0]._id}}  type=\"checkbox\"  class=\"col-1 cc \" >\n        <label class=\"offset-1\" > {{courses[0].CourseName}}</label>\n\n\n      </div>\n      <div class=\" offset-1 col-4\">\n        <input  id={{courses[1]._id}}  type=\"checkbox\"  class=\" col-1 cc\" >\n        <label class=\"offset-1\" > {{courses[1].CourseName}}</label>\n\n\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\" offset-2 col-4\">\n        <input  id={{courses[2]._id}}  type=\"checkbox\"  class=\"col-1 cc\" >\n        <label class=\"offset-1\"> {{courses[2].CourseName}}</label>\n\n\n      </div>\n      <div class=\" offset-1 col-4\">\n        <input  id={{courses[3]._id}}  type=\"checkbox\"  class=\"  col-1 cc\" >\n        <label class=\" offset-1\"> {{courses[3].CourseName}}</label>\n\n\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\" offset-2 col-4\">\n        <input  id={{courses[4]._id}}  type=\"checkbox\"  class=\" col-1 cc\" >\n        <label class=\"offset-1\" > {{courses[4].CourseName}}</label>\n\n\n      </div>\n      <div class=\" offset-1 col-4\">\n        <input  id={{courses[5]._id}}  type=\"checkbox\"  class=\" col-1 cc\" >\n        <label class=\"offset-1\"> {{courses[5].CourseName}}</label>\n\n\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\" offset-2 col-4\">\n        <input  id={{courses[6]._id}}  type=\"checkbox\"  class=\"col-1 cc\" >\n        <label class=\"offset-1\"> {{courses[6].CourseName}}</label>\n\n\n      </div>\n      <div class=\" offset-1 col-4\">\n        <input  id={{courses[7]._id}}  type=\"checkbox\"  class=\"col-1 cc\"  >\n        <label class=\"offset-1\"> {{courses[7].CourseName}}</label>\n\n\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\" offset-2 col-4\">\n        <input  id={{courses[8]._id}}  type=\"checkbox\"  class=\" col-1 cc\"  >\n        <label class=\"offset-1\"> {{courses[8].CourseName}}</label>\n\n\n      </div>\n      <div class=\" offset-1 col-4\">\n        <input  id={{courses[9]._id}}  type=\"checkbox\"  class=\"col-1 cc\"  >\n        <label class=\"offset-1\">{{courses[9].CourseName}} </label>\n\n\n      </div>\n    </div>\n    <br>\n\n    <div class=\"row\">\n      <div class=\"offset-3 col-4\">\n        <input type=\"submit\" value=\"Create Account\" class=\" col-12 lbutton btn btn-success\" style=\"margin-top: 4%\">\n      </div>\n    </div>\n\n  </form>\n\n</div>\n\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/faculty-add/faculty-add.component.ts":
/*!******************************************************!*\
  !*** ./src/app/faculty-add/faculty-add.component.ts ***!
  \******************************************************/
/*! exports provided: FacultyAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacultyAddComponent", function() { return FacultyAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FacultyAddComponent = /** @class */ (function () {
    function FacultyAddComponent(route, router, api, formBuilder) {
        this.route = route;
        this.router = router;
        this.api = api;
        this.formBuilder = formBuilder;
        this.submitted = false;
    }
    Object.defineProperty(FacultyAddComponent.prototype, "staticArray", {
        get: function () {
            return this.courses;
        },
        enumerable: true,
        configurable: true
    });
    FacultyAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.api.getCourses()
            .subscribe(function (res) {
            console.log(res);
            _this.courses = res;
            console.log(_this.courses);
        }, function (err) {
            console.log(err);
        });
        this.userForm = this.formBuilder.group({
            Name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            UName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            UPassword: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            dob: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            gender: ['F', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    Object.defineProperty(FacultyAddComponent.prototype, "f", {
        get: function () {
            return this.userForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    // getter for form fields
    FacultyAddComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.userForm.invalid) {
            return;
        }
        var user = {};
        // user['userID'] = 18;
        user['name'] = this.userForm.value.Name;
        user['gender'] = this.userForm.value.gender;
        user['birthday'] = this.userForm.value.dob;
        // user['contact'] = this.userForm.value.email;
        user['username'] = this.userForm.value.UName;
        user['user_password'] = this.userForm.value.UPassword;
        user['email'] = this.userForm.value.email;
        //user['user_type'] = this.route.snapshot.params['type'];
        this.api.postFaculty(user)
            .subscribe(function (res) {
            var faccourse = {};
            faccourse['fid'] = res._id;
            for (var i = 0; i < _this.courses.length; i++) {
                var s = "#" + _this.courses[i]._id;
                console.log(jquery__WEBPACK_IMPORTED_MODULE_3__(s)[0]);
                if (jquery__WEBPACK_IMPORTED_MODULE_3__(s)[0].checked) {
                    faccourse['cid'] = _this.courses[i]._id;
                    _this.api.postFacultyCourse(faccourse).subscribe(function (res) { }, function (err) {
                        console.log(err);
                    });
                }
            }
            _this.router.navigate(['/user-profile', res._id, 'F']);
        }, function (err) {
            console.log(err);
        });
    };
    FacultyAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'faculty-add',
            template: __webpack_require__(/*! ./faculty-add.component.html */ "./src/app/faculty-add/faculty-add.component.html"),
            styles: [__webpack_require__(/*! ./faculty-add.component.css */ "./src/app/faculty-add/faculty-add.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], FacultyAddComponent);
    return FacultyAddComponent;
}());



/***/ }),

/***/ "./src/app/generate-paper/generate-paper.component.css":
/*!*************************************************************!*\
  !*** ./src/app/generate-paper/generate-paper.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n"

/***/ }),

/***/ "./src/app/generate-paper/generate-paper.component.html":
/*!**************************************************************!*\
  !*** ./src/app/generate-paper/generate-paper.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Generate Paper</h1>\n<mat-dialog-content>\n\t<div style=\"min-height:400px; \" id=\"ty\">\n\n\t\t<select class=\"offset-3\" id=\"ls\" (change)=\"hide()\">\n\t\t\t<option value=\"M\">Multiple Choice Question</option>\n\t\t\t<option value=\"D\">Descriptive Question</option>\n\n\t\t</select>\n\t\t<button class=\"offset-1\" (click)=\"add()\" style=\"padding: 0px;border: none;\"><i class=\"fa fa-plus fa-2x fa-lg\" style=\"color:green;background-color: white\"></i></button>\n\t\t<br>\n\t\t<div *ngFor=\"let v of v1\" id=\"v_1\">\n\n\t\t\t<label class=\"hd col-3\">Number Of Questions</label>\n\t\t\t<input class=\"offset-1 hd\" type=\"text\" id=\"A{{v}}\">\n\t\t\t<br>\n\t\t\t<label class=\"hd col-3\" >Difficulty Level</label>\n\t\t\t<select id=\"B{{v}}\" class=\"offset-1\">\n\t\t\t\t<option value=\"Ea\">Easy</option>\n\t\t\t\t<option value=\"Md\">Medium</option>\n\t\t\t\t<option value=\"Df\">Difficult</option></select>\n\t\t\t<br>\n<hr>\n\t\t</div>\n\t\t\t<div *ngFor=\"let va of v2\" id=\"v_2\">\n\n\t\t\t\t<label class=\"hd col-3\">Number Of Questions</label>\n\t\t\t\t<input class=\"offset-1 hd\" type=\"text\" id=\"Av{{va}}\">\n\t\t\t\t<br>\n\t\t\t\t<label class=\"hd col-3\" >Difficulty Level</label>\n\t\t\t\t<select id=\"Bv{{va}}\" class=\"offset-1\">\n\t\t\t\t<option value=\"Ea\">Easy</option>\n\t\t\t\t<option value=\"Md\">Medium</option>\n\t\t\t\t\t<option value=\"Df\">Difficult</option></select>\n\n\t\t\t\t<br>\n\t\t\t\t<hr>\n\n\t\t\t</div>\n\t\t</div>\n\t<div style=\"min-height:400px; \" id=\"ty1\">\n\t\t<div *ngFor=\"let vz of final_res1\" id=\"v_4\">\n         Question {{vz.ind}} : {{vz.Question }}<br>\n\t\t</div>\n\t\t<div *ngFor=\"let vz of final_res\" id=\"v_5\">\n\t\t\tQuestion {{vz.ind}} : {{vz.Question }}<br>\n\t\t\tA.){{vz.OptA}} &nbsp;&nbsp; B.){{vz.OptB}} &nbsp;&nbsp; C.){{vz.OptC}} &nbsp;&nbsp; D.){{vz.OptD}}<br>\n\t\t</div>\n\t</div>\n</mat-dialog-content>\n<mat-dialog-actions>\n\t<button mat-button style=\"background-color: green\" (click)=\"generate()\"><strong>Generate</strong></button>\n\t<button mat-button type=\"button\" mat-dialog-close><strong>Cancel</strong></button>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "./src/app/generate-paper/generate-paper.component.ts":
/*!************************************************************!*\
  !*** ./src/app/generate-paper/generate-paper.component.ts ***!
  \************************************************************/
/*! exports provided: GeneratePaperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneratePaperComponent", function() { return GeneratePaperComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var GeneratePaperComponent = /** @class */ (function () {
    function GeneratePaperComponent(data, dialogRef, route, api, router, formBuilder) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.route = route;
        this.api = api;
        this.router = router;
        this.formBuilder = formBuilder;
        this.fc_id = '';
        this.selected_value = '';
        this.v1 = [];
        this.i = 0;
        this.v2 = [];
        this.j = 0;
        this.res5 = [];
        this.final_res = [];
        this.fr = 0;
        this.final_res1 = [];
        this.fc_id = data.fcid;
    }
    GeneratePaperComponent.prototype.ngOnInit = function () {
        jquery__WEBPACK_IMPORTED_MODULE_5__('#ty1').hide();
    };
    GeneratePaperComponent.prototype.add = function () {
        if (jquery__WEBPACK_IMPORTED_MODULE_5__("#ls").children("option:selected").val() == 'D') {
            this.v1[this.i] = this.i;
            this.i++;
        }
        else {
            this.v2[this.j] = this.j;
            this.j++;
        }
        console.log(this.v2);
    };
    GeneratePaperComponent.prototype.generate = function () {
        var _this = this;
        this.res5 = [];
        this.final_res = [];
        this.final_res1 = [];
        this.fr = 0;
        if (this.selected_value == 'M') {
            var m_1 = 0;
            var _loop_1 = function () {
                var id_1 = "#Bv" + m_1;
                var id_2 = "#Av" + m_1;
                var dlevel = jquery__WEBPACK_IMPORTED_MODULE_5__(id_1).children("option:selected").val();
                var num_elems = jquery__WEBPACK_IMPORTED_MODULE_5__(id_2).val();
                this_1.api.getFacultyQuestionsLevel(this_1.fc_id, dlevel, 'M')
                    .subscribe(function (res) {
                    var max = 0;
                    var k2 = 0;
                    max = res.length;
                    while (k2 < num_elems) {
                        var rn = Math.floor(Math.random() * max);
                        _this.res5[k2] = res[rn].qid;
                        k2++;
                    }
                    if (m_1 == ((_this.j))) {
                        console.log(_this.res5);
                        var _loop_2 = function (g) {
                            _this.api.getMultiple(_this.res5[g])
                                .subscribe(function (res) {
                                res['ind'] = g + 1;
                                _this.final_res[_this.fr] = res;
                                _this.fr++;
                                if (g == ((_this.res5.length - 1))) {
                                    console.log(_this.final_res);
                                    console.log(_this.final_res1);
                                    jquery__WEBPACK_IMPORTED_MODULE_5__('#ty').hide();
                                    jquery__WEBPACK_IMPORTED_MODULE_5__('#ty1').show();
                                }
                                //this.dialogRef.close();
                            }, function (err) {
                                // console.log(err);
                            });
                        };
                        for (var g = 0; g < _this.res5.length; g++) {
                            _loop_2(g);
                        }
                    }
                }, function (err) {
                });
            };
            var this_1 = this;
            for (m_1 = 0; m_1 < this.j; m_1++) {
                _loop_1();
            }
        }
        else {
            var m_2 = 0;
            var _loop_3 = function () {
                var id_1 = "#B" + m_2;
                var id_2 = "#A" + m_2;
                var dlevel = jquery__WEBPACK_IMPORTED_MODULE_5__(id_1).children("option:selected").val();
                var num_elems = jquery__WEBPACK_IMPORTED_MODULE_5__(id_2).val();
                console.log(dlevel);
                this_2.api.getFacultyQuestionsLevel(this_2.fc_id, dlevel, 'D')
                    .subscribe(function (res) {
                    var max = 0;
                    var k2 = 0;
                    max = res.length - 1;
                    while (k2 < num_elems) {
                        var rn = Math.floor(Math.random() * max);
                        console.log(res);
                        console.log(rn);
                        _this.res5[k2] = res[rn].qid;
                        k2++;
                    }
                    if (m_2 == ((_this.i))) {
                        console.log(_this.res5);
                        var _loop_4 = function (g) {
                            _this.api.getDescriptive(_this.res5[g])
                                .subscribe(function (res) {
                                res['ind'] = g + 1;
                                _this.final_res1[_this.fr] = res;
                                if (g == ((_this.res5.length - 1))) {
                                    console.log(_this.final_res);
                                    console.log(_this.final_res1);
                                    jquery__WEBPACK_IMPORTED_MODULE_5__('#ty').hide();
                                    jquery__WEBPACK_IMPORTED_MODULE_5__('#ty1').show();
                                }
                                //this.dialogRef.close();
                            }, function (err) {
                                // console.log(err);
                            });
                        };
                        for (var g = 0; g < _this.res5.length; g++) {
                            _loop_4(g);
                        }
                    }
                }, function (err) {
                });
            };
            var this_2 = this;
            for (m_2 = 0; m_2 < this.i; m_2++) {
                _loop_3();
            }
        }
    };
    GeneratePaperComponent.prototype.hide = function () {
        this.v1 = [];
        this.v2 = [];
        this.i = 0;
        this.j = 0;
        this.selected_value = jquery__WEBPACK_IMPORTED_MODULE_5__("#ls").children("option:selected").val();
        if (this.selected_value == 'M') {
            jquery__WEBPACK_IMPORTED_MODULE_5__('#v_1').hide();
            jquery__WEBPACK_IMPORTED_MODULE_5__('#v_2').show();
        }
        else {
            jquery__WEBPACK_IMPORTED_MODULE_5__('#v_2').hide();
            jquery__WEBPACK_IMPORTED_MODULE_5__('#v_1').show();
        }
    };
    GeneratePaperComponent.prototype.add_question = function () {
        var _this = this;
        var question = {};
        question['Question'] = jquery__WEBPACK_IMPORTED_MODULE_5__('#qs').val();
        question['level'] = jquery__WEBPACK_IMPORTED_MODULE_5__('#lev').children("option:selected").val();
        if (this.selected_value == 'D') {
            question['pts'] = jquery__WEBPACK_IMPORTED_MODULE_5__('#Pt').val();
            this.api.postDescriptiveQuestions(question)
                .subscribe(function (res) {
                var questionfc = {};
                questionfc['qid'] = res._id;
                questionfc['dmq'] = 'D';
                questionfc['fcid'] = _this.fc_id;
                _this.api.postFacultyCourseQuestions(questionfc)
                    .subscribe(function (res) {
                    console.log("****");
                    console.log(res);
                    console.log(_this.fc_id);
                    _this.dialogRef.close();
                }, function (err) {
                    // console.log(err);
                });
            }, function (err) {
                // console.log(err);
            });
        }
        else {
            question['OptA'] = jquery__WEBPACK_IMPORTED_MODULE_5__('#A').val();
            question['OptB'] = jquery__WEBPACK_IMPORTED_MODULE_5__('#B').val();
            question['OptC'] = jquery__WEBPACK_IMPORTED_MODULE_5__('#C').val();
            question['OptD'] = jquery__WEBPACK_IMPORTED_MODULE_5__('#D').val();
            question['AnsOpt'] = jquery__WEBPACK_IMPORTED_MODULE_5__('#opt').children("option:selected").val();
            this.api.postMultipleQuestions(question)
                .subscribe(function (res) {
                var questionfc = {};
                questionfc['qid'] = res._id;
                questionfc['dmq'] = 'M';
                questionfc['fcid'] = _this.fc_id;
                _this.api.postFacultyCourseQuestions(questionfc)
                    .subscribe(function (res) {
                    _this.dialogRef.close();
                }, function (err) {
                    // console.log(err);
                });
            }, function (err) {
                // console.log(err);
            });
        }
    };
    GeneratePaperComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'generate-paper',
            template: __webpack_require__(/*! ./generate-paper.component.html */ "./src/app/generate-paper/generate-paper.component.html"),
            styles: [__webpack_require__(/*! ./generate-paper.component.css */ "./src/app/generate-paper/generate-paper.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], GeneratePaperComponent);
    return GeneratePaperComponent;
}());



/***/ }),

/***/ "./src/app/questions-list/questionslist.component.css":
/*!************************************************************!*\
  !*** ./src/app/questions-list/questionslist.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n"

/***/ }),

/***/ "./src/app/questions-list/questionslist.component.html":
/*!*************************************************************!*\
  !*** ./src/app/questions-list/questionslist.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"background:black; min-height:730px;\">\n<div class=\"row\">\n\t<div *ngIf=\"collapse\"class=\"col-2\" style=\"background-color: darkblue;color:white;min-height: 730px\">\n\t\t<h3> Welcome, </h3>\n\t\t<h3 > &nbsp;{{faculty_name}} </h3>\n\t\t<br>\n\t\t<h5 (click)=\"onNavigate(number)\" style=\"cursor: pointer;padding-top: 4%;padding-bottom: 4%;margin-top: 5%;margin-bottom: 5%;\" *ngFor=\"let number of v\">{{number}}</h5>\n\n\n\t</div>\n\t<div id=\"content-div\" class=\"col-10\">\n\t\t<i class=\"fa fa-bars fa-3x\" (click)=\"onCollapse()\" style=\"color: white;\"></i>\n\t\t<button (click)=\"logout()\" style=\"cursor: pointer;position:relative;float: right;right:15px; top:10px;\"><i class=\"fa fa-lg fa-sign-out fa-4x \"></i></button>\n\t\t<br>\n\t\t<div style=\"overflow: scroll;border: black;border-style: solid;background-color: white;color:darkblue;margin-top: 2%;padding-top: 2%;padding-bottom: 1%;max-height: 620px;min-height: 620px;\" class=\"col-12\">\n\t\t\t<select (change)=\"getQuestionList()\" id=\"course\" class=\"offset-2 col-6\">\n\t\t\t\t<option></option>\n\t\t\t\t<option *ngFor=\"let course of courses\" value=\"{{course.fc_id}}\" > {{course.CourseName}} </option>\n\t\t\t</select>\n\t\t\t<button class=\"offset-1\" (click)=\"add()\" style=\"cursor: pointer;padding: 0px;border: none;\"><i class=\"fa fa-plus fa-2x fa-lg\" style=\"color:green;background-color: white\"></i></button>\n\t\t\t<br><br><br>\n\t\t\t<h4 class=\"offset-2\">Descriptive Questions</h4><hr>\n\t\t\t<ol class=\"offset-2\">\n\t\t\t<div *ngFor=\"let desc of questions_desc\" style=\"padding: 0px;margin-top: 2%;margin-bottom: 2%;\">\n\t\t\t\t<li>\n\n\t\t\t\t<h4 style=\"color: black;\" class=\"col-12\">{{desc.Question}} </h4></li>\n\t\t\t\t<!--<div class=\"col-3\"> <a href=\"#\">Generate Paper</a></div>-->\n\t\t\t</div>\n\t\t\t</ol>\n\t\t\t<h4 class=\"offset-2\">Multiple Choice Questions</h4><hr>\n\t\t\t<ol class=\"offset-2\">\n\n\t\t\t<div *ngFor=\"let mcq of questions_mul\" style=\"padding: 0px;margin-top: 2%;margin-bottom: 2%;\">\n\n\t\t\t\t<li><h4 style=\"color: black;\" class=\"col-12\">{{mcq.Question}} </h4></li>\n\t\t\t\t<!--<div class=\"col-3\"> <a href=\"#\">Generate Paper</a></div>-->\n\t\t\t</div>\n\n\t\t\t</ol>\n</div>\n\n  </div>\n  </div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/questions-list/questionslist.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/questions-list/questionslist.component.ts ***!
  \***********************************************************/
/*! exports provided: QuestionListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionListComponent", function() { return QuestionListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _add_question_addquestion_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../add-question/addquestion.component */ "./src/app/add-question/addquestion.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var QuestionListComponent = /** @class */ (function () {
    function QuestionListComponent(dialog, route, api, router, formBuilder) {
        this.dialog = dialog;
        this.route = route;
        this.api = api;
        this.router = router;
        this.formBuilder = formBuilder;
        this.courses = [];
        this.collapse = true;
        this.v = [];
        this.questions_desc = [];
        this.questions_mul = [];
        this.selected_course = '';
        this.faculty_name = '';
    }
    QuestionListComponent.prototype.logout = function () {
        this.router.navigate(['']);
    };
    QuestionListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user_id = this.route.snapshot.params['id'];
        this.user_type = this.route.snapshot.params['type'];
        this.api.getFaculty(this.user_id).subscribe(function (data) {
            _this.faculty_name = data.name;
        });
        this.getCourses();
        if (this.user_type == 'F') {
            this.v = ['My Profile', 'Courses', 'Student List', 'Questions List'];
        }
        else {
            this.v = ['My Profile', 'Courses', 'Assignments', 'Grades'];
        }
        this.getQuestionList();
    };
    QuestionListComponent.prototype.add = function () {
        var _this = this;
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.height = '550px';
        dialogConfig.width = '550px';
        dialogConfig.position = { top: '8%', left: '30%' };
        dialogConfig.data = {
            fcid: this.selected_course,
            title: 'Add Question'
        };
        var dialogRef = this.dialog.open(_add_question_addquestion_component__WEBPACK_IMPORTED_MODULE_6__["AddQuestionComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe(function (data) { return _this.getQuestionList(); });
    };
    QuestionListComponent.prototype.getQuestionList = function () {
        var _this = this;
        this.questions_desc = [];
        this.questions_mul = [];
        this.selected_course = jquery__WEBPACK_IMPORTED_MODULE_4__("#course").children("option:selected").val();
        console.log(this.selected_course);
        if (this.selected_course != '') {
            //console.log("Inside")
            this.api.getFacultyCourseQuestions(this.selected_course)
                .subscribe(function (data) {
                //console.log(data);
                var j = 0, k = 0;
                for (var i = 0; i < data.length; i++) {
                    //console.log("********")
                    //console.log(data[i].dmq)
                    if (data[i].dmq == 'D') {
                        //console.log(data[i].qid);
                        _this.api.getDescriptive(data[i].qid)
                            .subscribe(function (res) {
                            //console.log(1);
                            // console.log(res);
                            _this.questions_desc[j] = res;
                            j++;
                        }, function (err) {
                            // console.log(err);
                        });
                    }
                    else {
                        _this.api.getMultiple(data[i].qid)
                            .subscribe(function (res) {
                            // console.log(res);
                            _this.questions_mul[k] = res;
                            k++;
                        }, function (err) {
                            // console.log(err);
                        });
                    }
                }
                //console.log(this.questions_desc);
            });
        }
    };
    QuestionListComponent.prototype.getCourses = function () {
        var _this = this;
        var j = 0;
        this.api.getFacultyCourse(this.user_id)
            .subscribe(function (data) {
            console.log(data);
            var _loop_1 = function (i) {
                _this.fc_id = data[i]._id;
                _this.api.getCourse(data[i].cid)
                    .subscribe(function (res) {
                    // console.log(res);
                    _this.courses[j] = { 'fc_id': data[i]._id, 'CourseName': res.CourseName, '_id': res._id };
                    j++;
                }, function (err) {
                    // console.log(err);
                });
            };
            for (var i = 0; i < data.length; i++) {
                _loop_1(i);
            }
        });
    };
    QuestionListComponent.prototype.onNavigate = function (navpage) {
        //console.log(navpage);
        if (navpage == 'My Profile') {
            this.router.navigate(['/user-profile', this.user_id, this.user_type]);
        }
        else if (navpage == 'Courses') {
            this.router.navigate(['/courses', this.user_id, this.user_type]);
        }
        else if (navpage == 'Questions List') {
            this.router.navigate(['/question-list', this.user_id, this.user_type]);
        }
        else if (navpage == 'Student List') {
            this.router.navigate(['/student-list', this.user_id, this.user_type]);
        }
    };
    QuestionListComponent.prototype.onCollapse = function () {
        if (this.collapse == true) {
            this.collapse = false;
            document.getElementById("content-div").classList.add("col-12");
            document.getElementById("content-div").classList.remove("col-10");
        }
        else {
            this.collapse = true;
            document.getElementById("content-div").classList.add("col-10");
            document.getElementById("content-div").classList.remove("col-12");
        }
    };
    QuestionListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'questionslist',
            template: __webpack_require__(/*! ./questionslist.component.html */ "./src/app/questions-list/questionslist.component.html"),
            styles: [__webpack_require__(/*! ./questionslist.component.css */ "./src/app/questions-list/questionslist.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], QuestionListComponent);
    return QuestionListComponent;
}());



/***/ }),

/***/ "./src/app/student-list/studentlist.component.css":
/*!********************************************************!*\
  !*** ./src/app/student-list/studentlist.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n"

/***/ }),

/***/ "./src/app/student-list/studentlist.component.html":
/*!*********************************************************!*\
  !*** ./src/app/student-list/studentlist.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"background:black; min-height:730px;\">\n<div class=\"row\">\n\t<div *ngIf=\"collapse\"class=\"col-2\" style=\"background-color: darkblue;color:white;min-height: 730px\">\n\t\t<h3> Welcome, </h3>\n\t\t<h3 > &nbsp;{{faculty_name}} </h3>\n\t\t<br>\n\t\t<h5 (click)=\"onNavigate(number)\" style=\"cursor: pointer;padding-top: 4%;padding-bottom: 4%;margin-top: 5%;margin-bottom: 5%;\" *ngFor=\"let number of v\">{{number}}</h5>\n\n\n\t</div>\n\t<div id=\"content-div\" class=\"col-10\">\n\t\t<i class=\"fa fa-bars fa-3x\" (click)=\"onCollapse()\" style=\"color: white;\"></i>\n\t\t<button (click)=\"logout()\" style=\"cursor: pointer;position:relative;float: right;right:15px; top:10px;\"><i class=\"fa fa-lg fa-sign-out fa-4x \"></i></button>\n\t\t<br>\n\t\t<div style=\"border: black;border-style: solid;background-color: white;margin-top: 2%;padding-top: 2%;padding-bottom: 1%;max-height: 620px;min-height: 620px;\" class=\"col-12\">\n\t\t\t<select (change)=\"getStudentList()\" id=\"course\" class=\"offset-2 col-6\">\n\t\t\t\t<option></option>\n\t\t\t\t<option *ngFor=\"let course of courses\" value=\"{{course.fc_id}}\" > {{course.CourseName}} </option>\n\t\t\t</select>\n\t\t\t<ol>\n\t\t\t<div *ngFor=\"let student of students\" style=\"padding: 0px;margin-top: 2%;margin-bottom: 2%;\"class=\"row\">\n\n\t\t\t\t<li class=\"offset-2 col-4\"><h4 style=\"color: darkblue;\" >{{student.name}}</h4></li>\n\t\t\t\t<!--<div class=\"col-3\"> <a href=\"#\">Generate Paper</a></div>-->\n\t\t\t</div>\n\t\t\t</ol>\n</div>\n\n  </div>\n  </div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/student-list/studentlist.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/student-list/studentlist.component.ts ***!
  \*******************************************************/
/*! exports provided: StudentListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentListComponent", function() { return StudentListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StudentListComponent = /** @class */ (function () {
    function StudentListComponent(route, api, router, formBuilder) {
        this.route = route;
        this.api = api;
        this.router = router;
        this.formBuilder = formBuilder;
        this.courses = [];
        this.collapse = true;
        this.v = [];
        this.students = [];
        this.selected_course = '';
        this.faculty_name = '';
        this.kl = 0;
    }
    StudentListComponent.prototype.logout = function () {
        this.router.navigate(['']);
    };
    StudentListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user_id = this.route.snapshot.params['id'];
        this.user_type = this.route.snapshot.params['type'];
        this.api.getFaculty(this.user_id).subscribe(function (data) {
            _this.faculty_name = data.name;
        });
        this.getCourses();
        if (this.user_type == 'F') {
            this.v = ['My Profile', 'Courses', 'Student List', 'Questions List'];
        }
        else {
            this.v = ['My Profile', 'Courses', 'Assignments', 'Grades'];
        }
        this.getStudentList();
    };
    StudentListComponent.prototype.getStudentList = function () {
        var _this = this;
        this.students = [];
        this.selected_course = jquery__WEBPACK_IMPORTED_MODULE_4__("#course").children("option:selected").val();
        console.log(this.selected_course);
        if (this.selected_course != '') {
            this.api.getStudentCourse(this.selected_course)
                .subscribe(function (data) {
                console.log(data);
                for (var i = 0; i < data.length; i++) {
                    _this.api.getStudent(data[i].sid)
                        .subscribe(function (res) {
                        // console.log(res);
                        _this.students[_this.kl] = res;
                        _this.kl++;
                    }, function (err) {
                        // console.log(err);
                    });
                }
                console.log(_this.students);
            });
        }
    };
    StudentListComponent.prototype.getCourses = function () {
        var _this = this;
        var j = 0;
        this.api.getFacultyCourse(this.user_id)
            .subscribe(function (data) {
            //console.log(data);
            for (var i = 0; i < data.length; i++) {
                _this.fc_id = data[i]._id;
                _this.api.getCourse(data[i].cid)
                    .subscribe(function (res) {
                    // console.log(res);
                    _this.courses[j] = { 'fc_id': _this.fc_id, 'CourseName': res.CourseName, '_id': res._id };
                    j++;
                }, function (err) {
                    // console.log(err);
                });
            }
        });
    };
    StudentListComponent.prototype.onNavigate = function (navpage) {
        console.log(navpage);
        if (navpage == 'My Profile') {
            this.router.navigate(['/user-profile', this.user_id, this.user_type]);
        }
        else if (navpage == 'Courses') {
            this.router.navigate(['/courses', this.user_id, this.user_type]);
        }
        else if (navpage == 'Questions List') {
            this.router.navigate(['/question-list', this.user_id, this.user_type]);
        }
        else if (navpage == 'Student List') {
            this.router.navigate(['/student-list', this.user_id, this.user_type]);
        }
    };
    StudentListComponent.prototype.onCollapse = function () {
        if (this.collapse == true) {
            this.collapse = false;
            document.getElementById("content-div").classList.add("col-12");
            document.getElementById("content-div").classList.remove("col-10");
        }
        else {
            this.collapse = true;
            document.getElementById("content-div").classList.add("col-10");
            document.getElementById("content-div").classList.remove("col-12");
        }
    };
    StudentListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'studentlist',
            template: __webpack_require__(/*! ./studentlist.component.html */ "./src/app/student-list/studentlist.component.html"),
            styles: [__webpack_require__(/*! ./studentlist.component.css */ "./src/app/student-list/studentlist.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], StudentListComponent);
    return StudentListComponent;
}());



/***/ }),

/***/ "./src/app/user-add/user-add.component.css":
/*!*************************************************!*\
  !*** ./src/app/user-add/user-add.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user-add/user-add.component.html":
/*!**************************************************!*\
  !*** ./src/app/user-add/user-add.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"background:black; min-height:730px;\">\n<div class=\"container\"  >\n  <br>\n\n\n  <form  [formGroup]=\"userForm\" (ngSubmit)=\"onSubmit()\" name=\"myForm\" method=\"get\"  style=\"background:white;margin-top: 2%; border-style: solid; padding-top: 5%;padding-bottom: 1%;\" class=\"offset-2 col-8 lform\" >\n    <div class=\"row\">\n      <div class=\"form-group offset-2 col-10\">\n        <label class=\"ast control-label\"><strong> Name</strong></label><br>\n        <input  id=\"Name\" formControlName=\"Name\" type=\"text\" maxlength=\"50\" class=\"col-8 form-control\" placeholder=\"Enter the Name\" [ngClass]=\"{ 'is-invalid': submitted && f.Name.errors }\">\n        <div *ngIf=\"submitted && f.Name.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"f.Name.errors.required\">Name is required</div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"form-group offset-2 col-10\">\n        <label class=\"ast control-label\"><strong> Username</strong></label><br>\n        <input  id=\"UName\" formControlName=\"UName\" type=\"text\" maxlength=\"50\" class=\"col-8 form-control\" placeholder=\"Enter the Username\" [ngClass]=\"{ 'is-invalid': submitted && f.UName.errors }\">\n        <div *ngIf=\"submitted && f.UName.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"f.UName.errors.required\">UserName is required</div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"form-group offset-2 col-10\">\n        <label class=\"ast control-label\"><strong> Password</strong></label><br>\n        <input  id=\"UPassword\" formControlName=\"UPassword\" type=\"password\" maxlength=\"20\" class=\"col-8 form-control\" placeholder=\"Enter the Password\" [ngClass]=\"{ 'is-invalid': submitted && f.UPassword.errors }\">\n        <div *ngIf=\"submitted && f.UPassword.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"f.UPassword.errors.required\">Password is required</div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"form-group offset-2 col-10\">\n        <label class=\"ast control-label\"><strong> Gender</strong></label><br>\n        <input  id=\"gender\" name=\"gender\" formControlName=\"gender\" type=\"radio\" maxlength=\"50\" class=\"col-1\"  checked value=\"F\">Female\n        <input  id=\"gender\" name=\"gender\" formControlName=\"gender\" type=\"radio\" maxlength=\"50\" class=\"col-1\"  value=\"M\">Male\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"form-group offset-2 col-10\">\n        <label class=\"ast control-label\"><strong> Date Of Birth</strong></label><br>\n        <input  id=\"dob\" formControlName=\"dob\" type=\"date\" maxlength=\"50\" class=\"col-8 form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.dob.errors }\">\n        <div *ngIf=\"submitted && f.dob.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"f.dob.errors.required\">Date Of Birth is required</div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"form-group offset-2 col-10\">\n        <label class=\"ast control-label\"><strong> Email</strong></label><br>\n        <input  id=\"email\" formControlName=\"email\" type=\"text\" maxlength=\"100\" class=\"col-8 form-control\" placeholder=\"Enter the Email address\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\">\n        <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"f.email.errors.required\">Email is required</div>\n        </div>\n      </div>\n    </div>\n    <br>\n    <div class=\"row\">\n      <div class=\"offset-3 col-4\">\n        <input type=\"submit\" value=\"Create Account\" class=\" col-12 lbutton btn btn-success\" style=\"margin-top: 4%\">\n      </div>\n    </div>\n\n  </form>\n\n</div>\n\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/user-add/user-add.component.ts":
/*!************************************************!*\
  !*** ./src/app/user-add/user-add.component.ts ***!
  \************************************************/
/*! exports provided: UserAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAddComponent", function() { return UserAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserAddComponent = /** @class */ (function () {
    function UserAddComponent(route, router, api, formBuilder) {
        this.route = route;
        this.router = router;
        this.api = api;
        this.formBuilder = formBuilder;
        this.submitted = false;
    }
    UserAddComponent.prototype.ngOnInit = function () {
        this.userForm = this.formBuilder.group({
            Name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            UName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            UPassword: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            dob: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            gender: ['F', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    Object.defineProperty(UserAddComponent.prototype, "f", {
        get: function () {
            return this.userForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    // getter for form fields
    UserAddComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.userForm.invalid) {
            return;
        }
        var user = {};
        //user['userID'] = 18;
        user['name'] = this.userForm.value.Name;
        user['gender'] = this.userForm.value.gender;
        user['birthday'] = this.userForm.value.dob;
        //user['contact'] = this.userForm.value.email;
        user['username'] = this.userForm.value.UName;
        user['user_password'] = this.userForm.value.UPassword;
        user['email'] = this.userForm.value.email;
        //user['user_type'] = this.route.snapshot.params['type'];
        console.log(user);
        this.api.postStudent(user)
            .subscribe(function (res) {
            _this.router.navigate(['/user-profile', res._id, 'S']);
        }, function (err) {
            console.log(err);
        });
    };
    UserAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'user-add',
            template: __webpack_require__(/*! ./user-add.component.html */ "./src/app/user-add/user-add.component.html"),
            styles: [__webpack_require__(/*! ./user-add.component.css */ "./src/app/user-add/user-add.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], UserAddComponent);
    return UserAddComponent;
}());



/***/ }),

/***/ "./src/app/user-login/user-login.component.css":
/*!*****************************************************!*\
  !*** ./src/app/user-login/user-login.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user-login/user-login.component.html":
/*!******************************************************!*\
  !*** ./src/app/user-login/user-login.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<header class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a center class=\"navbar-brand\" href=\"#\">Customer CRUD operations</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n          aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n</header>-->\n<div class=\"col-12\" style=\"background:black; min-height:730px\">\n<div class=\"container\"  >\n  <br>\n  <div class=\"row\">\n    <div class=\"offset-4 col-8\">\n      <img src=\"assets/onlineexam2.jpg\" alt=\"MOOC\" style=\"width: 350px\" height=\"190\">\n    </div>\n  </div>\n\n  <form  [formGroup]=\"UserForm\" (ngSubmit)=\"onSubmit()\" name=\"myForm\" method=\"get\"  style=\"min-height:380px;background:white;margin-top: 2%; border-style: solid; padding-top: 5%;padding-bottom: 5%;z-index: 2;\" class=\"offset-1 col-10 lform\"  >\n    <div class=\"row\">\n      <div class=\"form-group offset-2 col-10\">\n        <label class=\"ast control-label\"><strong> Username</strong></label><br>\n        <input  id=\"UName\" formControlName=\"UName\" type=\"text\" maxlength=\"50\" class=\"form-control col-8\" placeholder=\"Enter the Username\" [ngClass]=\"{ 'is-invalid': (submitted && f.UName.errors)|| login_error }\">\n        <div *ngIf=\"submitted && f.UName.errors\" class=\"invalid-feedback\" >\n          <div *ngIf=\"f.UName.errors != null && f.UName.errors.required\">UserName is required</div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"form-group offset-2 col-10\">\n        <label class=\"ast control-label\"><strong> Password</strong></label><br>\n        <input  id=\"UPassword\" formControlName=\"UPassword\" type=\"password\" maxlength=\"20\" class=\"form-control col-8\" placeholder=\"Enter the Password\" [ngClass]=\"{ 'is-invalid': (submitted && f.UPassword.errors)|| login_error }\">\n        <div *ngIf=\"submitted && f.UPassword.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"f.UPassword.errors != null && f.UPassword.errors.required\">Password is required</div>\n        </div>\n      </div>\n    </div>\n    <div *ngIf=\"!(f.UPassword.errors!=null || f.UName.errors != null) && login_error\" id=\"error_div\" class=\"offset-2\" style=\"color: red\"> <b>invalid login credentials</b></div>\n\n    <div class=\"row\">\n      <div class=\"offset-2 col-10\">\n        <input type=\"submit\" value=\"Login\" class=\" col-3 lbutton btn btn-primary\" style=\"margin-top: 4%;background-color: darkblue\">\n        <input type=\"button\" value=\"Sign Up\" (click)=\"onSignUp()\" class=\" offset-2 col-3 lbutton btn btn-success\" style=\"margin-top: 4%\">\n\n      </div>\n     </div>\n\n   </form>\n\n </div>\n </div>\n"

/***/ }),

/***/ "./src/app/user-login/user-login.component.ts":
/*!****************************************************!*\
  !*** ./src/app/user-login/user-login.component.ts ***!
  \****************************************************/
/*! exports provided: UserLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLoginComponent", function() { return UserLoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserLoginComponent = /** @class */ (function () {
    function UserLoginComponent(route, api, router, formBuilder) {
        this.route = route;
        this.api = api;
        this.router = router;
        this.formBuilder = formBuilder;
        this.title = 'app';
        this.user = {};
        this.submitted = false;
        this.login_error = false;
    }
    UserLoginComponent.prototype.ngOnInit = function () {
        this.UserForm = this.formBuilder.group({
            UName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            UPassword: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    };
    Object.defineProperty(UserLoginComponent.prototype, "f", {
        get: function () {
            return this.UserForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    UserLoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.UserForm.invalid) {
            return;
        }
        if (this.route.snapshot.params['type'] == 'F') {
            this.api.ValidateFaculty(this.UserForm.value.UName, this.UserForm.value.UPassword).subscribe(function (data) {
                if (data.length > 0) {
                    _this.router.navigate(['/user-profile', data[0]._id, 'F']);
                }
                else {
                    _this.login_error = true;
                }
            }, function (err) {
                console.log("error in login page");
            });
        }
        else {
            this.api.ValidateStudent(this.UserForm.value.UName, this.UserForm.value.UPassword).subscribe(function (data) {
                if (data.length > 0) {
                    _this.router.navigate(['/user-profile', data[0]._id, 'S']);
                }
                else {
                    _this.login_error = true;
                }
            }, function (err) {
                console.log("error in login page");
            });
        }
    };
    UserLoginComponent.prototype.onSignUp = function () {
        if (this.route.snapshot.params['type'] == 'S')
            this.router.navigate(['/user-add']);
        else
            this.router.navigate(['/faculty-add']);
    };
    UserLoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./user-login.component.html */ "./src/app/user-login/user-login.component.html"),
            styles: [__webpack_require__(/*! ./user-login.component.css */ "./src/app/user-login/user-login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], UserLoginComponent);
    return UserLoginComponent;
}());



/***/ }),

/***/ "./src/app/user-profile/user-profile.component.css":
/*!*********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".success-message\r\n{\r\n    position: absolute;\r\n    float:right;\r\n    top:4px;\r\n    right: 7px;\r\n    background: darkgreen;\r\n    min-height:50px;\r\n    min-width:150px;\r\n    z-index:1;\r\n    color:white;\r\n    font-weight:bold;\r\n    padding-top:1%;\r\n    padding-left:15%;\r\n    font-size: 24px;\r\n    opacity: 0.5 ;\r\n    text-align:center;\r\n}\r\n"

/***/ }),

/***/ "./src/app/user-profile/user-profile.component.html":
/*!**********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"background:black; min-height:730px;\">\n    <div class=\"row\">\n      <div *ngIf=\"collapse\"class=\"col-2\" style=\"background-color: darkblue;color:white;min-height: 730px\">\n        <h3> Welcome, </h3>\n        <h3 > &nbsp;{{user_name}} </h3>\n        <br>\n        <h5 (click)=\"onNavigate(number)\" style=\"cursor: pointer;padding-top: 4%;padding-bottom: 4%;margin-top: 5%;margin-bottom: 5%;\" *ngFor=\"let number of v\">{{number}}</h5>\n      </div>\n\n      <div id=\"content-div\" class=\"col-10\">\n        <i class=\"fa fa-bars fa-3x\" (click)=\"onCollapse()\" style=\"color: white;\"></i>\n        <button (click)=\"logout()\" style=\"cursor: pointer;position:relative;float: right;right:15px; top:10px;\"><i class=\"fa fa-lg fa-sign-out fa-4x \"></i></button>\n        <br>\n    <form  [formGroup]=\"userForm\" id=\"userForm\"  name=\"myForm\"   style=\"background:white;margin-top: 2%; border-style: solid; padding-top: 2%;padding-bottom: 1%\" class=\"col-12 lform\" >\n      <div id=\"message\" class=\"success-message\" style=\"display: none\">Data Saved</div>\n      <div class=\"row\">\n        <div class=\"form-group offset-2 col-10\">\n          <label class=\"ast control-label\"><strong> Name</strong></label><br>\n          <input  id=\"Name\"  formControlName=\"Name\" type=\"text\" maxlength=\"50\" class=\"ro col-8 form-control\" placeholder=\"Enter the Name\" [ngClass]=\"{ 'is-invalid': submitted && f.Name.errors }\">\n          <div *ngIf=\"submitted && f.Name.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.Name.errors.required\">Name is required</div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"form-group offset-2 col-10\">\n          <label class=\"ast control-label\"><strong> Username</strong></label><br>\n          <input  id=\"UName\"  formControlName=\"UName\" type=\"text\" maxlength=\"50\" class=\"ro col-8 form-control\" placeholder=\"Enter the Username\" [ngClass]=\"{ 'is-invalid': submitted && f.UName.errors }\">\n          <div *ngIf=\"submitted && f.UName.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.UName.errors.required\">UserName is required</div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"form-group offset-2 col-10\">\n          <label class=\"ast control-label\"><strong> Password</strong></label><br>\n          <input  id=\"UPassword\"  formControlName=\"UPassword\" type=\"password\" maxlength=\"20\" class=\"ro col-8 form-control\" placeholder=\"Enter the Password\" [ngClass]=\"{ 'is-invalid': submitted && f.UPassword.errors }\">\n          <div *ngIf=\"submitted && f.UPassword.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.UPassword.errors.required\">Password is required</div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"form-group offset-2 col-10\">\n          <label class=\"ast control-label\"><strong> Gender</strong></label><br>\n          <input  id=\"gender\" name=\"gender\" formControlName=\"gender\" type=\"radio\" maxlength=\"50\" class=\"dis col-1\"  checked value=\"F\">Female\n          <input  id=\"gender\" name=\"gender\" formControlName=\"gender\" type=\"radio\" maxlength=\"50\" class=\"dis col-1\"  value=\"M\">Male\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"form-group offset-2 col-10\">\n          <label class=\"ast control-label\"><strong> Date Of Birth</strong></label><br>\n          <input  id=\"dob\" formControlName=\"dob\"  type=\"date\" maxlength=\"50\" class=\"ro col-8 form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.dob.errors }\">\n          <div *ngIf=\"submitted && f.dob.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.dob.errors.required\">Date Of Birth is required</div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"form-group offset-2 col-10\">\n          <label class=\"ast control-label\"><strong> Email</strong></label><br>\n          <input  id=\"email\"  formControlName=\"email\" type=\"text\" maxlength=\"100\" class=\"ro col-8 form-control\" placeholder=\"Enter the Email address\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\">\n          <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.email.errors.required\">Email is required</div>\n          </div>\n        </div>\n      </div>\n      <br>\n      <div class=\"row\">\n        <div class=\"offset-3 col-6\">\n          <button id=\"edit\" (click)=\"onEdit()\" class=\"col-4 lbutton btn btn-primary\" style=\"margin-top: 4%\"><i class=\"fa fa-lg fa-edit\"></i></button>\n          <button id=\"save\" (click)=\"onSave()\" class=\"col-4 lbutton btn btn-success\" style=\"margin-top: 4%\"><i class=\"fa fa-lg fa-save\"></i></button>\n          <button (click)=\"onDelete()\" class=\" offset-2 col-4 lbutton btn btn-success \" style=\"margin-top: 4%;background-color: red\"><i class=\"fa fa-lg fa-trash\"></i> </button>\n\n        </div>\n      </div>\n\n    </form>\n      </div>\n    </div>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/user-profile/user-profile.component.ts":
/*!********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.ts ***!
  \********************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent(route, api, router, formBuilder) {
        this.route = route;
        this.api = api;
        this.router = router;
        this.formBuilder = formBuilder;
        this.submitted = false;
        this.collapse = true;
        this.v = [];
        this.user = {};
        this.userForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            Name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            UName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            UPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            dob: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]()
        });
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        this.user_id = this.route.snapshot.params['id'];
        this.user_type = this.route.snapshot.params['type'];
        document.getElementById("save").style.display = "none";
        this.getUser(this.user_id);
        if (this.user_type == 'F') {
            this.v = ['My Profile', 'Courses', 'Student List', 'Questions List'];
        }
        else {
            this.v = ['My Profile', 'Enrollments', 'Assignments'];
        }
    };
    Object.defineProperty(UserProfileComponent.prototype, "f", {
        get: function () {
            return this.userForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    UserProfileComponent.prototype.onNavigate = function (navpage) {
        if (navpage == 'My Profile') {
            this.router.navigate(['/user-profile', this.user_id, this.user_type]);
        }
        else if (navpage == 'Courses') {
            this.router.navigate(['/courses', this.user_id, this.user_type]);
        }
        else if (navpage == 'Student List') {
            this.router.navigate(['/student-list', this.user_id, this.user_type]);
        }
        else if (navpage == 'Questions List') {
            this.router.navigate(['/question-list', this.user_id, this.user_type]);
        }
        else if (navpage == 'Enrollments') {
            this.router.navigate(['/my-enrollments', this.user_id, this.user_type]);
        }
    };
    UserProfileComponent.prototype.logout = function () {
        this.router.navigate(['']);
    };
    UserProfileComponent.prototype.getUser = function (id) {
        var _this = this;
        if (this.user_type == 'F') {
            this.api.getFaculty(id)
                .subscribe(function (data) {
                _this.user = data;
                _this.user_name = _this.user['name'];
                _this.userForm = _this.formBuilder.group({
                    Name: [_this.user['name'], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                    UName: [_this.user['username'], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                    UPassword: [_this.user['user_password'], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                    dob: [_this.user['birthday'], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                    email: [_this.user['email'], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                    gender: [_this.user['gender'], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                });
                var f = document.getElementsByClassName("ro");
                for (var i = 0, fLen = f.length; i < fLen; i++) {
                    f[i].setAttribute("readonly", "true"); //As @oldergod noted, the "O" must be upper case
                }
                f = document.getElementsByClassName("dis");
                for (var i = 0, fLen = f.length; i < fLen; i++) {
                    f[i].setAttribute("disabled", "true");
                }
            });
        }
        else {
            this.api.getStudent(id)
                .subscribe(function (data) {
                _this.user = data;
                _this.user_name = _this.user['name'];
                _this.userForm = _this.formBuilder.group({
                    Name: [_this.user['name'], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                    UName: [_this.user['username'], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                    UPassword: [_this.user['user_password'], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                    dob: [_this.user['birthday'], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                    email: [_this.user['email'], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                    gender: [_this.user['gender'], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                });
                var f = document.getElementsByClassName("ro");
                for (var i = 0, fLen = f.length; i < fLen; i++) {
                    f[i].setAttribute("readonly", "true"); //As @oldergod noted, the "O" must be upper case
                }
                f = document.getElementsByClassName("dis");
                for (var i = 0, fLen = f.length; i < fLen; i++) {
                    f[i].setAttribute("disabled", "true");
                }
            });
        }
    };
    UserProfileComponent.prototype.onDelete = function () {
        var _this = this;
        if (this.user_type == 'F') {
            this.api.deleteFaculty(this.user_id)
                .subscribe(function (res) {
                _this.router.navigate(['']);
            }, function (err) {
                console.log(err);
            });
        }
        else {
            this.api.deleteStudent(this.user_id)
                .subscribe(function (res) {
                _this.router.navigate(['']);
            }, function (err) {
                console.log(err);
            });
        }
    };
    UserProfileComponent.prototype.onEdit = function () {
        var f = document.getElementsByClassName("ro");
        for (var i = 0, fLen = f.length; i < fLen; i++) {
            f[i].removeAttribute("readonly");
        }
        f = document.getElementsByClassName("dis");
        for (var i = 0, fLen = f.length; i < fLen; i++) {
            f[i].removeAttribute("disabled");
        }
        document.getElementById("save").style.display = "";
        document.getElementById("edit").style.display = "none";
    };
    UserProfileComponent.prototype.onCollapse = function () {
        if (this.collapse == true) {
            this.collapse = false;
            document.getElementById("content-div").classList.add("col-12");
            document.getElementById("content-div").classList.remove("col-10");
        }
        else {
            this.collapse = true;
            document.getElementById("content-div").classList.add("col-10");
            document.getElementById("content-div").classList.remove("col-12");
        }
    };
    UserProfileComponent.prototype.onSave = function () {
        var _this = this;
        this.submitted = true;
        if (this.userForm.invalid) {
            return;
        }
        var user = {};
        user['userID'] = 18;
        user['name'] = this.userForm.value.Name;
        user['gender'] = this.userForm.value.gender;
        user['birthday'] = this.userForm.value.dob;
        user['contact'] = this.userForm.value.email;
        user['username'] = this.userForm.value.UName;
        user['user_password'] = this.userForm.value.UPassword;
        user['email'] = this.userForm.value.email;
        if (this.user_type == 'F') {
            this.api.updateFaculty(this.user_id, user)
                .subscribe(function (res) {
                _this.submitted = false;
                var f = document.getElementsByClassName("ro");
                console.log(f);
                for (var i = 0, fLen = f.length; i < fLen; i++) {
                    console.log(f[i]);
                    f[i].setAttribute("readonly", "true");
                }
                f = document.getElementsByClassName("dis");
                for (var i = 0, fLen = f.length; i < fLen; i++) {
                    f[i].setAttribute("disabled", "true");
                }
                document.getElementById("save").style.display = "none";
                document.getElementById("edit").style.display = "";
            }, function (err) {
                console.log(err);
            });
        }
        else {
            this.api.updateStudent(this.user_id, user)
                .subscribe(function (res) {
                _this.submitted = false;
                var f = document.getElementsByClassName("ro");
                console.log(f);
                for (var i = 0, fLen = f.length; i < fLen; i++) {
                    console.log(f[i]);
                    f[i].setAttribute("readonly", "true");
                }
                f = document.getElementsByClassName("dis");
                for (var i = 0, fLen = f.length; i < fLen; i++) {
                    f[i].setAttribute("disabled", "true");
                }
                document.getElementById("save").style.display = "none";
                document.getElementById("edit").style.display = "";
            }, function (err) {
                console.log(err);
            });
        }
        document.getElementById("message").style.display = "";
        setTimeout(function () {
            document.getElementById("message").style.display = "none";
        }, 5000);
    };
    UserProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'user-profile',
            template: __webpack_require__(/*! ./user-profile.component.html */ "./src/app/user-profile/user-profile.component.html"),
            styles: [__webpack_require__(/*! ./user-profile.component.css */ "./src/app/user-profile/user-profile.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], UserProfileComponent);
    return UserProfileComponent;
}());



/***/ }),

/***/ "./src/app/user-signup/user-signup.component.css":
/*!*******************************************************!*\
  !*** ./src/app/user-signup/user-signup.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user-signup/user-signup.component.html":
/*!********************************************************!*\
  !*** ./src/app/user-signup/user-signup.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<header class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a center class=\"navbar-brand\" href=\"#\">Customer CRUD operations</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n          aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n</header>-->\n<div class=\"col-12\" style=\"background:black; min-height:730px;\">\n<div class=\"container\"  >\n  <br>\n  <div class=\"row\">\n    <div class=\"offset-4 col-8\">\n      <img src=\"assets/onlineexam2.jpg\" alt=\"MOOC\" style=\"width: 350px\" height=\"190\">\n    </div>\n  </div>\n\n  <form   name=\"myForm\" method=\"get\"  style=\"min-height:380px;background:white;margin-top: 2%; border-style: solid; padding-top: 5%;padding-bottom: 5%;z-index: 2;\" class=\"offset-1 col-10 lform\" >\n    <div class=\"row\">\n      <div class=\"offset-2 col-10\">\n        <input type=\"button\" value=\"Student Login\" (click)=\"onStudentSignUp()\" class=\"offset-1 col-8 lbutton btn btn-primary\" style=\"cursor: pointer;margin-top: 4%;background-color: darkblue;min-height: 75px;font-size: xx-large;font-weight: bolder;\">\n\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"offset-2 col-10\">\n        <input type=\"button\" value=\"Faculty Login\" (click)=\"onFacultySignUp()\" class=\"offset-1 col-8 lbutton btn btn-primary\" style=\"cursor: pointer;margin-top: 7%;background-color: darkblue;min-height: 75px;font-size: xx-large;font-weight: bolder\">\n      </div>\n    </div>\n\n  </form>\n\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/user-signup/user-signup.component.ts":
/*!******************************************************!*\
  !*** ./src/app/user-signup/user-signup.component.ts ***!
  \******************************************************/
/*! exports provided: UserSignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSignupComponent", function() { return UserSignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserSignupComponent = /** @class */ (function () {
    function UserSignupComponent(route, api, router, formBuilder) {
        this.route = route;
        this.api = api;
        this.router = router;
        this.formBuilder = formBuilder;
        this.title = 'app';
    }
    UserSignupComponent.prototype.ngOnInit = function () {
    };
    UserSignupComponent.prototype.onFacultySignUp = function () {
        this.router.navigate(['/user-login', 'F']);
    };
    UserSignupComponent.prototype.onStudentSignUp = function () {
        this.router.navigate(['/user-login', 'S']);
    };
    UserSignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./user-signup.component.html */ "./src/app/user-signup/user-signup.component.html"),
            styles: [__webpack_require__(/*! ./user-signup.component.css */ "./src/app/user-signup/user-signup.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], UserSignupComponent);
    return UserSignupComponent;
}());



/***/ }),

/***/ "./src/app/user-template/user-template.component.css":
/*!***********************************************************!*\
  !*** ./src/app/user-template/user-template.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a{\r\n    color: midnightblue;\r\n}\r\n"

/***/ }),

/***/ "./src/app/user-template/user-template.component.html":
/*!************************************************************!*\
  !*** ./src/app/user-template/user-template.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n"

/***/ }),

/***/ "./src/app/user-template/user-template.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/user-template/user-template.component.ts ***!
  \**********************************************************/
/*! exports provided: UserTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserTemplateComponent", function() { return UserTemplateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserTemplateComponent = /** @class */ (function () {
    function UserTemplateComponent(route, api, router, formBuilder) {
        this.route = route;
        this.api = api;
        this.router = router;
        this.formBuilder = formBuilder;
    }
    UserTemplateComponent.prototype.ngOnInit = function () {
        this.user_id = this.route.snapshot.params['id'];
    };
    UserTemplateComponent.prototype.onProfile = function () {
        this.router.navigate(['/user-profile', this.user_id]);
    };
    UserTemplateComponent.prototype.onBooks = function () {
        this.router.navigate(['/books', this.user_id]);
    };
    UserTemplateComponent.prototype.onEnrollments = function () {
        this.router.navigate(['/my-enrollments', this.user_id]);
    };
    UserTemplateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'user-template',
            template: __webpack_require__(/*! ./user-template.component.html */ "./src/app/user-template/user-template.component.html"),
            styles: [__webpack_require__(/*! ./user-template.component.css */ "./src/app/user-template/user-template.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], UserTemplateComponent);
    return UserTemplateComponent;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Aparna Manda\Desktop\Automatic Question Paper Generator\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map