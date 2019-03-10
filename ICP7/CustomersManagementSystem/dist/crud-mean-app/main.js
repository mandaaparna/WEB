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
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])('Something bad happened; please try again later.');
    };
    ;
    ApiService.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    ApiService.prototype.getCustomers = function () {
        return this.http.get(apiUrl, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.getCustomer = function (id) {
        var url = apiUrl + "/" + id;
        return this.http.get(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.postCustomer = function (data) {
        return this.http.post(apiUrl, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.updateCustomer = function (id, data) {
        var url = apiUrl + "/" + id;
        return this.http.put(url, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.deleteCustomer = function (id) {
        var url = apiUrl + "/" + id;
        console.log(url);
        return this.http.delete(url, httpOptions)
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
/* harmony import */ var _customer_customer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customer/customer.component */ "./src/app/customer/customer.component.ts");
/* harmony import */ var _customer_detail_customer_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customer-detail/customer-detail.component */ "./src/app/customer-detail/customer-detail.component.ts");
/* harmony import */ var _customer_add_customer_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customer-add/customer-add.component */ "./src/app/customer-add/customer-add.component.ts");
/* harmony import */ var _customer_edit_customer_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./customer-edit/customer-edit.component */ "./src/app/customer-edit/customer-edit.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var appRoutes = [
    {
        path: 'customers',
        component: _customer_customer_component__WEBPACK_IMPORTED_MODULE_3__["CustomerComponent"],
        data: { title: 'Customers List' }
    },
    {
        path: 'customer-details/:id',
        component: _customer_detail_customer_detail_component__WEBPACK_IMPORTED_MODULE_4__["CustomerDetailComponent"],
        data: { title: 'Customer Details' }
    },
    {
        path: 'customer-add',
        component: _customer_add_customer_add_component__WEBPACK_IMPORTED_MODULE_5__["CustomerAddComponent"],
        data: { title: 'Add Customer' }
    },
    {
        path: 'customer-edit/:id',
        component: _customer_edit_customer_edit_component__WEBPACK_IMPORTED_MODULE_6__["CustomerEditComponent"],
        data: { title: 'Edit Book' }
    },
    {
        path: '',
        redirectTo: '/customers',
        pathMatch: 'full'
    }
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

module.exports = "<header class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a center class=\"navbar-brand\" href=\"#\">Customer CRUD operations</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n          aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n</header>\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _customer_customer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./customer/customer.component */ "./src/app/customer/customer.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./angular-material/angular-material.module */ "./src/app/angular-material/angular-material.module.ts");
/* harmony import */ var _customer_detail_customer_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./customer-detail/customer-detail.component */ "./src/app/customer-detail/customer-detail.component.ts");
/* harmony import */ var _customer_add_customer_add_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./customer-add/customer-add.component */ "./src/app/customer-add/customer-add.component.ts");
/* harmony import */ var _customer_edit_customer_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./customer-edit/customer-edit.component */ "./src/app/customer-edit/customer-edit.component.ts");
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
                _customer_customer_component__WEBPACK_IMPORTED_MODULE_6__["CustomerComponent"],
                _customer_detail_customer_detail_component__WEBPACK_IMPORTED_MODULE_9__["CustomerDetailComponent"],
                _customer_add_customer_add_component__WEBPACK_IMPORTED_MODULE_10__["CustomerAddComponent"],
                _customer_edit_customer_edit_component__WEBPACK_IMPORTED_MODULE_11__["CustomerEditComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_8__["AngularMaterialModule"],
                ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_4__["BsDatepickerModule"].forRoot()
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/customer-add/customer-add.component.css":
/*!*********************************************************!*\
  !*** ./src/app/customer-add/customer-add.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\n    min-width: 150px;\n    max-width: 500px;\n    width: 100%;\n}\n\n.example-full-width {\n    width: 100%;\n}\n\n.example-full-width:nth-last-child() {\n    margin-bottom: 10px;\n}\n\n.button-row {\n    margin: 10px 0;\n}"

/***/ }),

/***/ "./src/app/customer-add/customer-add.component.html":
/*!**********************************************************!*\
  !*** ./src/app/customer-add/customer-add.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-6 col-md-offset-3\">\n    <form [formGroup]=\"customerForm\" (ngSubmit)=\"onSubmit()\">\n      <div class=\"form-group\">\n        <label class=\"control-label\">First Name</label>\n        <input type=\"text\" class=\"form-control\" formControlName=\"firstName\" \n          [ngClass]=\"{ 'is-invalid': submitted && f.firstName.errors }\">\n        <div *ngIf=\"submitted && f.firstName.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.firstName.errors.required\">First Name is required</div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"control-label\">Last Name</label>\n        <input type=\"text\" class=\"form-control\" formControlName=\"lastName\" \n          [ngClass]=\"{ 'is-invalid': submitted && f.lastName.errors }\">\n        <div *ngIf=\"submitted && f.lastName.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.lastName.errors.required\">Last Name is required</div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"control-label\">Gender</label>\n        <input type=\"text\" class=\"form-control\" formControlName=\"gender\" \n          [ngClass]=\"{ 'is-invalid': submitted && f.gender.errors }\">\n        <div *ngIf=\"submitted && f.gender.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.gender.errors.required\">Gender is required</div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"control-label\">Birthday</label>\n        <input type=\"text\"\n          formControlName=\"birthday\"\n          class=\"form-control\"\n          [ngClass]=\"{ 'is-invalid': submitted && f.birthday.errors }\"\n          bsDatepicker>\n        <div *ngIf=\"submitted && f.birthday.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.birthday.errors.required\">Birthday is required</div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"control-label\">Last contact date</label>\n        <input type=\"text\" class=\"form-control\" formControlName=\"lastContact\" \n          [ngClass]=\"{ 'is-invalid': submitted && f.lastContact.errors }\">\n        <div *ngIf=\"submitted && f.lastContact.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.lastContact.errors.required\">Last contacted date is required</div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"control-label\">Customer life time</label>\n        <input type=\"number\" class=\"form-control\" formControlName=\"customerLifetimeValue\" \n          [ngClass]=\"{ 'is-invalid': submitted && f.customerLifetimeValue.errors }\">\n        <div *ngIf=\"submitted && f.customerLifetimeValue.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.customerLifetimeValue.errors.required\">Life time value is required</div>\n        </div>\n      </div>\n      <button class=\"btn btn-default\" type=\"button\" (click)=\"onReset()\">Reset</button>\n      <button class=\"btn btn-primary pull-right\" type=\"submit\">Submit</button>\n    </form>\n  </div>\n</div>\n\n\n\n\n\n<!-- <div class=\"button-row\">\n  <a mat-raised-button color=\"primary\" [routerLink]=\"['/customers']\"><mat-icon>list</mat-icon></a>\n</div>\n<form [formGroup]=\"customerForm\" (ngSubmit)=\"onFormSubmit(customerForm.value)\">\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"First Name\" formControlName=\"name.first\"\n           [errorStateMatcher]=\"matcher\">\n    <mat-error>\n      <span *ngIf=\"!customerForm.get('name.first').valid && customerForm.get('name.first').touched\">Please enter first name</span>\n    </mat-error>\n  </mat-form-field>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Last Name\" formControlName=\"name.last\"\n           [errorStateMatcher]=\"matcher\">\n    <mat-error>\n      <span *ngIf=\"!customerForm.get('name.last').valid && customerForm.get('name.last').touched\">Please enter last name</span>\n    </mat-error>\n  </mat-form-field>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Birthday\" formControlName=\"birthday\"\n           [errorStateMatcher]=\"matcher\">\n    <mat-error>\n      <span *ngIf=\"!customerForm.get('birthday').valid && customerForm.get('birthday').touched\">Please enter DOB</span>\n    </mat-error>\n  </mat-form-field>\n  <mat-form-field class=\"example-full-width\">\n    <textarea matInput placeholder=\"Gender\" formControlName=\"gender\"\n           [errorStateMatcher]=\"matcher\"></textarea>\n    <mat-error>\n      <span *ngIf=\"!customerForm.get('gender').valid && customerForm.get('gender').touched\">Please enter gender</span>\n    </mat-error>\n  </mat-form-field>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Last Contact\" formControlName=\"lastContact\"\n           [errorStateMatcher]=\"matcher\">\n    <mat-error>\n      <span *ngIf=\"!customerForm.get('lastContact').valid && customerForm.get('lastContact').touched\">Please enter last contact date</span>\n    </mat-error>\n  </mat-form-field>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Life Time\" formControlName=\"customerLifetimeValue\"\n           [errorStateMatcher]=\"matcher\">\n    <mat-error>\n      <span *ngIf=\"!customerForm.get('customerLifetimeValue').valid && customerForm.get('customerLifetimeValue').touched\">Please enter customer life time</span>\n    </mat-error>\n  </mat-form-field>\n  <div class=\"button-row\">\n    <button type=\"submit\" [disabled]=\"!customerForm.valid\" mat-raised-button color=\"primary\"><mat-icon>save</mat-icon></button>\n  </div>\n</form> -->"

/***/ }),

/***/ "./src/app/customer-add/customer-add.component.ts":
/*!********************************************************!*\
  !*** ./src/app/customer-add/customer-add.component.ts ***!
  \********************************************************/
/*! exports provided: CustomerAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerAddComponent", function() { return CustomerAddComponent; });
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




var CustomerAddComponent = /** @class */ (function () {
    function CustomerAddComponent(router, api, formBuilder) {
        this.router = router;
        this.api = api;
        this.formBuilder = formBuilder;
        this.submitted = false;
    }
    CustomerAddComponent.prototype.ngOnInit = function () {
        this.customerForm = this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            gender: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            birthday: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastContact: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            customerLifetimeValue: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    Object.defineProperty(CustomerAddComponent.prototype, "f", {
        // getter for form fields
        get: function () {
            return this.customerForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    CustomerAddComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.customerForm.invalid) {
            return;
        }
        var customer = {};
        customer['customerID'] = 15;
        customer['name'] = {
            first: this.customerForm.value.firstName,
            last: this.customerForm.value.lastName
        };
        customer['gender'] = this.customerForm.value.gender;
        customer['birthday'] = this.customerForm.value.birthday;
        customer['lastContact'] = this.customerForm.value.lastContact;
        customer['customerLifetimeValue'] = this.customerForm.value.customerLifetimeValue;
        console.log(customer);
        this.api.postCustomer(customer)
            .subscribe(function (res) {
            var id = res['_id'];
            _this.router.navigate(['/customer-details', id]);
        }, function (err) {
            console.log(err);
        });
    };
    CustomerAddComponent.prototype.onReset = function () {
        this.submitted = false;
        this.customerForm.reset();
    };
    CustomerAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customer-add',
            template: __webpack_require__(/*! ./customer-add.component.html */ "./src/app/customer-add/customer-add.component.html"),
            styles: [__webpack_require__(/*! ./customer-add.component.css */ "./src/app/customer-add/customer-add.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], CustomerAddComponent);
    return CustomerAddComponent;
}());



/***/ }),

/***/ "./src/app/customer-detail/customer-detail.component.css":
/*!***************************************************************!*\
  !*** ./src/app/customer-detail/customer-detail.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".user-name {\n    padding-top: 10px; \n}\n\n.customer-detail-container {\n    padding-top: 20px; \n}\n\n.list-all {\n    padding: 10px 0;\n}\n\n.icon-svg {\n    height: 1rem;\n    width: 1rem;\n}\n\n.btn {\n    width: 60px;\n    margin-right: 20px; \n}\n\n.icon-trash {\n    fill: #dc3545;\n}\n\n.icon-pencil, .icon-list {\n    fill: #007bff;\n}\n\n.icon-list {\n    vertical-align: middle;\n}\n\n.btn:hover .icon-trash, .btn:hover .icon-pencil, .btn:hover .icon-list {\n    fill: #fff;\n}"

/***/ }),

/***/ "./src/app/customer-detail/customer-detail.component.html":
/*!****************************************************************!*\
  !*** ./src/app/customer-detail/customer-detail.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container customer-detail-container\">\n  <div class=\"row\">\n    <div class=\"col-lg-8 offset-lg-2 col-sm-12 offset-sm-0\">\n      <div class=\"list-all\">\n        <a href=\"#\" class=\"btn btn-outline-primary\" [routerLink]=\"['/customers']\">\n          <svg class=\"icon-svg icon-list\">\n            <use xlink:href=\"assets/iconic/sprite.min.svg#list\" class=\"icon-list\"></use>\n          </svg>\n        </a>\n        <span class=\"btn-outline-primary\">List all customers</span>\n      </div>\n      <div class=\"card\">\n        <div class=\"card-header text-center\">\n          <img  *ngIf=\"customer.gender === 'm'; else femaleAvatar\" class=\"avatar\" src=\"assets/male-avatar.svg\"/>\n          <ng-template #femaleAvatar>\n            <img class=\"avatar\" src=\"assets/female-avatar.svg\"/>\n          </ng-template>\n          <h5 class=\"user-name\">{{customer.name?.first}} {{customer.name?.last}}</h5>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"row\">\n            <div class=\"col-6\">\n              <div class=\"card-text\"><small class=\"text-muted\">Birthday</small></div>\n              <p>{{customer.birthday | date}}</p>\n              <div class=\"card-text\"><small class=\"text-muted\">Life Time Value</small></div>\n              <p>{{customer.customerLifetimeValue}}</p>\n            </div>\n            <div class=\"col-6\">\n              <div class=\"card-text\"><small class=\"text-muted\">Last Contacted Date</small></div>\n              <p>{{customer.lastContact | date}}</p>\n            </div>\n          </div>\n        </div>\n        <div class=\"card-footer bg-transparent\">\n          <a href=\"#\" class=\"btn btn-outline-primary\" [routerLink]=\"['/customer-edit', customer._id]\">\n            <svg class=\"icon-svg icon-pencil\">\n              <use xlink:href=\"assets/iconic/sprite.min.svg#pencil\" class=\"icon-pencil\"></use>\n            </svg>\n          </a>\n          <a href=\"#\" class=\"btn btn-outline-danger\" (click)=\"deleteCustomer(customer._id)\">\n            <svg class=\"icon-svg icon-trash\">\n              <use xlink:href=\"assets/iconic/sprite.min.svg#trash\" class=\"icon-trash\"></use>\n            </svg>\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/customer-detail/customer-detail.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/customer-detail/customer-detail.component.ts ***!
  \**************************************************************/
/*! exports provided: CustomerDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerDetailComponent", function() { return CustomerDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CustomerDetailComponent = /** @class */ (function () {
    function CustomerDetailComponent(route, api, router) {
        this.route = route;
        this.api = api;
        this.router = router;
        this.customer = {};
    }
    CustomerDetailComponent.prototype.ngOnInit = function () {
        this.getCustomerDetails(this.route.snapshot.params['id']);
    };
    CustomerDetailComponent.prototype.getCustomerDetails = function (id) {
        var _this = this;
        this.api.getCustomer(id)
            .subscribe(function (data) {
            console.log(data);
            _this.customer = data;
        });
    };
    CustomerDetailComponent.prototype.deleteCustomer = function (id) {
        var _this = this;
        this.api.deleteCustomer(id)
            .subscribe(function (res) {
            _this.router.navigate(['/customers']);
        }, function (err) {
            console.log(err);
        });
    };
    CustomerDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customer-detail',
            template: __webpack_require__(/*! ./customer-detail.component.html */ "./src/app/customer-detail/customer-detail.component.html"),
            styles: [__webpack_require__(/*! ./customer-detail.component.css */ "./src/app/customer-detail/customer-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], CustomerDetailComponent);
    return CustomerDetailComponent;
}());



/***/ }),

/***/ "./src/app/customer-edit/customer-edit.component.css":
/*!***********************************************************!*\
  !*** ./src/app/customer-edit/customer-edit.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/customer-edit/customer-edit.component.html":
/*!************************************************************!*\
  !*** ./src/app/customer-edit/customer-edit.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- write code to edit and save customer in this component -->\n<div class=\"row\">\n    <div class=\"col-md-6 col-md-offset-3\">\n        <form [formGroup]=\"customerForm\" (ngSubmit)=\"onSubmit()\">\n            <div class=\"form-group\">\n                <label class=\"control-label\">First Name</label>\n                <input type=\"text\" id=\"firstName\" class=\"form-control\" formControlName=\"firstName\" value = {{customer.name?.first}}\n                       [ngClass]=\"{ 'is-invalid': submitted && f.firstName.errors }\">\n                <div *ngIf=\"submitted && f.firstName.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.firstName.errors.required\">First Name is required</div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"control-label\">Last Name</label>\n                <input type=\"text\" id=\"lastName\" class=\"form-control\" formControlName=\"lastName\" value = {{customer.name?.last}}\n                       [ngClass]=\"{ 'is-invalid': submitted && f.lastName.errors }\">\n                <div *ngIf=\"submitted && f.lastName.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.lastName.errors.required\">Last Name is required</div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"control-label\">Gender</label>\n                <input type=\"text\" id=\"gender\" class=\"form-control\" formControlName=\"gender\" value = {{customer.gender}}\n                       [ngClass]=\"{ 'is-invalid': submitted && f.gender.errors }\">\n                <div *ngIf=\"submitted && f.gender.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.gender.errors.required\">Gender is required</div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"control-label\">Birthday</label>\n                <input type=\"text\" id=\"birthday\"\n                       formControlName=\"birthday\" value = {{customer.birthday}}\n                       class=\"form-control\"\n                       [ngClass]=\"{ 'is-invalid': submitted && f.birthday.errors }\"\n                       bsDatepicker>\n                <div *ngIf=\"submitted && f.birthday.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.birthday.errors.required\">Birthday is required</div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"control-label\">Last contact date</label>\n                <input type=\"text\" id=\"lastContact\" class=\"form-control\" formControlName=\"lastContact\" value = {{customer.lastContact}}\n                       [ngClass]=\"{ 'is-invalid': submitted && f.lastContact.errors }\">\n                <div *ngIf=\"submitted && f.lastContact.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.lastContact.errors.required\">Last contacted date is required</div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"control-label\">Customer life time</label>\n                <input type=\"number\"  id=\"customerLifetimeValue\" class=\"form-control\" formControlName=\"customerLifetimeValue\" value = {{customer.customerLifetimeValue}}\n                       [ngClass]=\"{ 'is-invalid': submitted && f.customerLifetimeValue.errors }\">\n                <div *ngIf=\"submitted && f.customerLifetimeValue.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.customerLifetimeValue.errors.required\">Life time value is required</div>\n                </div>\n            </div>\n            <button class=\"btn btn-default\" type=\"button\" (click)=\"onReset()\">Reset</button>\n            <button class=\"btn btn-primary pull-right\" type=\"submit\">Submit</button>\n        </form>\n    </div>\n</div>\n\n\n\n\n\n<!-- <div class=\"button-row\">\n  <a mat-raised-button color=\"primary\" [routerLink]=\"['/customers']\"><mat-icon>list</mat-icon></a>\n</div>\n<form [formGroup]=\"customerForm\" (ngSubmit)=\"onFormSubmit(customerForm.value)\">\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"First Name\" formControlName=\"name.first\"\n           [errorStateMatcher]=\"matcher\">\n    <mat-error>\n      <span *ngIf=\"!customerForm.get('name.first').valid && customerForm.get('name.first').touched\">Please enter first name</span>\n    </mat-error>\n  </mat-form-field>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Last Name\" formControlName=\"name.last\"\n           [errorStateMatcher]=\"matcher\">\n    <mat-error>\n      <span *ngIf=\"!customerForm.get('name.last').valid && customerForm.get('name.last').touched\">Please enter last name</span>\n    </mat-error>\n  </mat-form-field>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Birthday\" formControlName=\"birthday\"\n           [errorStateMatcher]=\"matcher\">\n    <mat-error>\n      <span *ngIf=\"!customerForm.get('birthday').valid && customerForm.get('birthday').touched\">Please enter DOB</span>\n    </mat-error>\n  </mat-form-field>\n  <mat-form-field class=\"example-full-width\">\n    <textarea matInput placeholder=\"Gender\" formControlName=\"gender\"\n           [errorStateMatcher]=\"matcher\"></textarea>\n    <mat-error>\n      <span *ngIf=\"!customerForm.get('gender').valid && customerForm.get('gender').touched\">Please enter gender</span>\n    </mat-error>\n  </mat-form-field>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Last Contact\" formControlName=\"lastContact\"\n           [errorStateMatcher]=\"matcher\">\n    <mat-error>\n      <span *ngIf=\"!customerForm.get('lastContact').valid && customerForm.get('lastContact').touched\">Please enter last contact date</span>\n    </mat-error>\n  </mat-form-field>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Life Time\" formControlName=\"customerLifetimeValue\"\n           [errorStateMatcher]=\"matcher\">\n    <mat-error>\n      <span *ngIf=\"!customerForm.get('customerLifetimeValue').valid && customerForm.get('customerLifetimeValue').touched\">Please enter customer life time</span>\n    </mat-error>\n  </mat-form-field>\n  <div class=\"button-row\">\n    <button type=\"submit\" [disabled]=\"!customerForm.valid\" mat-raised-button color=\"primary\"><mat-icon>save</mat-icon></button>\n  </div>\n</form> -->"

/***/ }),

/***/ "./src/app/customer-edit/customer-edit.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/customer-edit/customer-edit.component.ts ***!
  \**********************************************************/
/*! exports provided: CustomerEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerEditComponent", function() { return CustomerEditComponent; });
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




var CustomerEditComponent = /** @class */ (function () {
    function CustomerEditComponent(router, route, api, formBuilder) {
        this.router = router;
        this.route = route;
        this.api = api;
        this.formBuilder = formBuilder;
        this.customer = {};
        this.id = '';
        this.name = {
            first: '',
            last: ''
        };
        this.gender = '';
        this.birthday = '';
        this.lastContact = '';
        this.customerLifetimeValue = '';
    }
    CustomerEditComponent.prototype.ngOnInit = function () {
        this.customerForm = this.formBuilder.group({
            'firstName': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'lastName': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'gender': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'birthday': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'lastContact': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'customerLifetimeValue': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.getCustomer(this.route.snapshot.params['id']);
    };
    /*** Get the Customer Details*/
    CustomerEditComponent.prototype.getCustomer = function (id) {
        var _this = this;
        this.api.getCustomer(id)
            .subscribe(function (data) {
            console.log(data);
            _this.customer = data;
        });
    };
    CustomerEditComponent.prototype.onSubmit = function () {
        var _this = this;
        /*** On form submit update the customer details*/
        //let customer: object = {};
        console.log(document.getElementById('firstName'));
        if (document.getElementById('firstName').classList.contains('ng-dirty'))
            this.customer['name']['first'] = this.customerForm.value.firstName;
        if (document.getElementById('lastName').classList.contains('ng-dirty'))
            this.customer['name']['last'] = this.customerForm.value.lastName;
        /*this.customer['name'] = {
          first: this.customerForm.value.firstName,
          last: this.customerForm.value.lastName
        };*/
        if (document.getElementById('gender').classList.contains('ng-dirty'))
            this.customer['gender'] = this.customerForm.value.gender;
        if (document.getElementById('birthday').classList.contains('ng-dirty'))
            this.customer['birthday'] = this.customerForm.value.birthday;
        if (document.getElementById('lastContact').classList.contains('ng-dirty'))
            this.customer['lastContact'] = this.customerForm.value.lastContact;
        if (document.getElementById('customerLifetimeValue').classList.contains('ng-dirty'))
            this.customer['customerLifetimeValue'] = this.customerForm.value.customerLifetimeValue;
        this.api.updateCustomer(this.route.snapshot.params['id'], this.customer)
            .subscribe(function (res) {
            _this.router.navigate(['/customer-details', _this.route.snapshot.params['id']]);
        }, function (err) {
            console.log('test err');
            console.log(err);
        });
    };
    CustomerEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customer-edit',
            template: __webpack_require__(/*! ./customer-edit.component.html */ "./src/app/customer-edit/customer-edit.component.html"),
            styles: [__webpack_require__(/*! ./customer-edit.component.css */ "./src/app/customer-edit/customer-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], CustomerEditComponent);
    return CustomerEditComponent;
}());



/***/ }),

/***/ "./src/app/customer/customer.component.css":
/*!*************************************************!*\
  !*** ./src/app/customer/customer.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".col-padding {\n    padding: 20px;\n}\n\n.card-body {\n    display: flex;\n    align-items: center;\n    cursor: pointer;\n}\n\n.avatar {\n    height: 4rem;\n    width: 4rem;\n    flex: 2;\n}\n\n.customer-name {\n    padding: 0 10px;\n    flex: 3;\n}\n\n.icon-plus {\n    fill: #007bff;\n    height: 1rem;\n    text-align: center;\n\n}\n\n.add-customer.card {\n    border: 1px dashed #007bff;\n}\n\n.dotted-circle {\n    border: 1px dashed #007bff;\n    border-radius: 50%;\n    height: 4rem;\n    width: 4rem;\n    display: flex;\n    align-items: center;\n}\n\n.add-customer-label {\n    padding: 0 10px;\n}"

/***/ }),

/***/ "./src/app/customer/customer.component.html":
/*!**************************************************!*\
  !*** ./src/app/customer/customer.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-padding col-lg-3 col-md-4 col-sm-6\">\n      <div class=\"card add-customer\">\n        <div class=\"card-body\">\n          <div class=\"dotted-circle\">\n            <svg class=\"icon-plus\">\n              <use xlink:href=\"assets/iconic/sprite.min.svg#plus\" class=\"icon-plus\"></use>\n            </svg>\n          </div>\n          <span class=\"add-customer-label\"><a href=\"#/customer-add\">Add customer</a></span>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-padding col-lg-3 col-md-4 col-sm-6\" *ngFor=\"let customer of customers\">\n      <div class=\"card\" [routerLink]=\"['/customer-details/', customer._id]\">\n        <div class=\"card-body\">\n          <img *ngIf=\"customer.gender === 'm'; else femaleAvatar\" class=\"avatar\" src=\"assets/male-avatar.svg\"/>\n          <ng-template #femaleAvatar>\n            <img class=\"avatar\" src=\"assets/female-avatar.svg\"/>\n          </ng-template>\n          <span class=\"customer-name\">{{customer.name.first}} {{customer.name.last}}</span>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/customer/customer.component.ts":
/*!************************************************!*\
  !*** ./src/app/customer/customer.component.ts ***!
  \************************************************/
/*! exports provided: CustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerComponent", function() { return CustomerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CustomerComponent = /** @class */ (function () {
    function CustomerComponent(api) {
        this.api = api;
    }
    CustomerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.api.getCustomers()
            .subscribe(function (res) {
            console.log(res);
            _this.customers = res;
        }, function (err) {
            console.log(err);
        });
    };
    CustomerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customer',
            template: __webpack_require__(/*! ./customer.component.html */ "./src/app/customer/customer.component.html"),
            styles: [__webpack_require__(/*! ./customer.component.css */ "./src/app/customer/customer.component.css")]
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], CustomerComponent);
    return CustomerComponent;
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

module.exports = __webpack_require__(/*! C:\Users\Aparna Manda\WebstormProjects\03-09-19\CustomersManagementSystem\CustomersManagementSystem\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map