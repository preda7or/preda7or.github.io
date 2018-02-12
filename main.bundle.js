webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_articles_article_article_component__ = __webpack_require__("../../../../../src/app/components/articles/article/article.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_articles_articles_component__ = __webpack_require__("../../../../../src/app/components/articles/articles.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/components/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_services_article_resolver__ = __webpack_require__("../../../../../src/app/services/article.resolver.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_services_article_guard__ = __webpack_require__("../../../../../src/app/services/article.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_5__app_components_home_home_component__["a" /* HomeComponent */] },
    {
        path: 'articles',
        component: __WEBPACK_IMPORTED_MODULE_3__components_articles_articles_component__["a" /* ArticlesComponent */],
        children: [
            {
                path: '',
                pathMatch: 'full',
                component: __WEBPACK_IMPORTED_MODULE_2__components_articles_article_article_component__["a" /* ArticleComponent */],
                resolve: { article: __WEBPACK_IMPORTED_MODULE_6__app_services_article_resolver__["a" /* ArticleResolver */] }
            },
            {
                path: ':id',
                component: __WEBPACK_IMPORTED_MODULE_2__components_articles_article_article_component__["a" /* ArticleComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_7__app_services_article_guard__["a" /* ArticleGuard */]],
                resolve: { article: __WEBPACK_IMPORTED_MODULE_6__app_services_article_resolver__["a" /* ArticleResolver */] }
            }
            // {
            //   path: '**',
            //   component: ArticleComponent,
            //   canActivate: [ArticleGuard],
            //   resolve: { article: ArticleResolver }
            // }
        ]
    },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_4__components_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* RouterModule */].forRoot(routes
                // , { enableTracing: true }
                )
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app-settings.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSettings; });
var AppSettings = /** @class */ (function () {
    function AppSettings() {
    }
    AppSettings.API_KEY = '1712cb52-6add-4e8f-9ca9-c702c066ac7e';
    AppSettings.API_URL = 'https://content.guardianapis.com';
    AppSettings.ARTICLE_LIST_COUNT = 10;
    return AppSettings;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n    <app-navbar [brandName]=\"brandName\"></app-navbar>\n</header>\n\n<main>\n    <div class=\"container\">\n        <router-outlet></router-outlet>\n    </div>\n</main>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.brandName = 'News App';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_time_ago_pipe__ = __webpack_require__("../../../../time-ago-pipe/time-ago-pipe.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_time_ago_pipe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_time_ago_pipe__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_components_article_input_article_input_component__ = __webpack_require__("../../../../../src/app/components/article-input/article-input.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_components_articles_article_article_component__ = __webpack_require__("../../../../../src/app/components/articles/article/article.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_components_articles_articles_component__ = __webpack_require__("../../../../../src/app/components/articles/articles.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_components_articles_list_list_component__ = __webpack_require__("../../../../../src/app/components/articles/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_components_page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/components/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_pipes_bigthumb_pipe__ = __webpack_require__("../../../../../src/app/pipes/bigthumb.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_pipes_cleanurl_pipe__ = __webpack_require__("../../../../../src/app/pipes/cleanurl.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_pipes_escape_pipe__ = __webpack_require__("../../../../../src/app/pipes/escape.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__app_pipes_reprocess_pipe__ = __webpack_require__("../../../../../src/app/pipes/reprocess.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__app_services_article_cache_service__ = __webpack_require__("../../../../../src/app/services/article-cache.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__app_services_article_guard__ = __webpack_require__("../../../../../src/app/services/article.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__app_services_article_resolver__ = __webpack_require__("../../../../../src/app/services/article.resolver.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__app_services_articles_service__ = __webpack_require__("../../../../../src/app/services/articles.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__app_components_articles_articles_component__["a" /* ArticlesComponent */],
                __WEBPACK_IMPORTED_MODULE_9__app_components_articles_list_list_component__["a" /* ListComponent */],
                __WEBPACK_IMPORTED_MODULE_7__app_components_articles_article_article_component__["a" /* ArticleComponent */],
                __WEBPACK_IMPORTED_MODULE_12__app_components_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_11__app_components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_15__app_pipes_escape_pipe__["a" /* EscapePipe */],
                __WEBPACK_IMPORTED_MODULE_16__app_pipes_reprocess_pipe__["a" /* ReprocessPipe */],
                __WEBPACK_IMPORTED_MODULE_6__app_components_article_input_article_input_component__["a" /* ArticleInputComponent */],
                __WEBPACK_IMPORTED_MODULE_10__app_components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_13__app_pipes_bigthumb_pipe__["a" /* BigthumbPipe */],
                __WEBPACK_IMPORTED_MODULE_14__app_pipes_cleanurl_pipe__["a" /* CleanUrlPipe */],
                __WEBPACK_IMPORTED_MODULE_3_time_ago_pipe__["TimeAgoPipe"]
            ],
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */], __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClientModule */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_20__app_services_articles_service__["a" /* ArticlesService */],
                __WEBPACK_IMPORTED_MODULE_19__app_services_article_resolver__["a" /* ArticleResolver */],
                __WEBPACK_IMPORTED_MODULE_18__app_services_article_guard__["a" /* ArticleGuard */],
                __WEBPACK_IMPORTED_MODULE_17__app_services_article_cache_service__["a" /* ArticleCacheService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/article-input/article-input.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pt-1\">\n  <form (submit)=\"onSubmit(url.value)\">\n    <div class=\"md-form\">\n      <div class=\"prefix pt-0\">\n        <button class=\"btn px-1 mt-0 waves-effect waves-light\" routerLinkActive #rla=\"routerLinkActive\" [routerLink]=\"['./',url.value | cleanurl]\"\n          [ngClass]=\"{'btn-primary':rla.isActive,'btn-outline-primary':!rla.isActive}\">\n          <i class=\"fa fa-newspaper-o\"></i>\n        </button>\n      </div>\n      <input #url type=\"text\" id=\"articleUrl\" class=\"form-control\" value=\"https://www.theguardian.com/us-news/2018/feb/09/john-kelly-from-the-designated-white-house-grownup-to-trumps-enabler\">\n      <label for=\"articleUrl\" class=\"active\">Article URL</label>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/article-input/article-input.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/article-input/article-input.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleInputComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_pipes_cleanurl_pipe__ = __webpack_require__("../../../../../src/app/pipes/cleanurl.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ArticleInputComponent = /** @class */ (function () {
    function ArticleInputComponent(router, activatedRoute) {
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    ArticleInputComponent.prototype.onSubmit = function (url) {
        var articleId = new __WEBPACK_IMPORTED_MODULE_2__app_pipes_cleanurl_pipe__["a" /* CleanUrlPipe */]().transform(url);
        this.router.navigate(['.', articleId], { relativeTo: this.activatedRoute });
        return false;
    };
    ArticleInputComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-article-input',
            template: __webpack_require__("../../../../../src/app/components/article-input/article-input.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/article-input/article-input.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], ArticleInputComponent);
    return ArticleInputComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/articles/article/article.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"progress primary-color-dark\" *ngIf=\"article==null;else compContent\">\n  <div class=\"indeterminate\"></div>\n</div>\n\n<ng-template #compContent>\n\n  <div class=\"card card-cascade wider reverse\">\n    <div class=\"view overlay hm-white-slight\">\n      <img src=\"{{article.thumbnail | bigthumb}}\" class=\"img-fluid\" alt=\"\">\n    </div>\n\n    <div class=\"card-body\">\n      <h2 class=\"card-title\">{{article.title}}</h2>\n      <div class=\"row py-3\">\n        <div class=\"col-auto pr-0\">\n          <i class=\"fa fa-user-circle\"></i>\n        </div>\n        <div class=\"h5-responsive col-md-5 col-6\">\n          <h5>\n            {{article.byline}}\n          </h5>\n        </div>\n        <div class=\"col-auto pr-0\">\n          <i class=\"fa fa-calendar\"></i>\n        </div>\n        <h5 class=\"h5-responsive col-md-5 col-6\">\n          {{article.date|date:'medium'}}\n        </h5>\n      </div>\n      <div [innerHTML]=\"article.body | reprocess\"></div>\n      <!-- <div>{{article.body | reprocess}}</div> -->\n\n    </div>\n  </div>\n  <!-- \n -->\n</ng-template>"

/***/ }),

/***/ "../../../../../src/app/components/articles/article/article.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ArticleComponent = /** @class */ (function () {
    function ArticleComponent(route, router) {
        // Router subscription has to be in constructore otherwise not called in time for the inital ur
        var _this = this;
        this.route = route;
        this.router = router;
        this.router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* NavigationStart */]) {
                _this.prevArticle = _this.article;
                _this.article = null;
            }
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* NavigationCancel */]) {
                _this.article = _this.prevArticle;
            }
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivationEnd */] &&
                event.snapshot.component &&
                event.snapshot.component['name'] === 'ArticleComponent') {
                if ('article' in _this.route.snapshot.data) {
                    _this.article = _this.route.snapshot.data.article;
                }
            }
        });
    }
    ArticleComponent.prototype.ngOnInit = function () { };
    ArticleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-article-detail',
            template: __webpack_require__("../../../../../src/app/components/articles/article/article.component.html"),
            styles: ['::ng-deep p {text-indent:.6em;}']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* Router */]])
    ], ArticleComponent);
    return ArticleComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/articles/articles.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Start of Articles Component -->\n<div class=\"row py-4\">\n  <div class=\"col-md-8\">\n    <router-outlet></router-outlet>\n  </div>\n  <div class=\"col-md-4\">\n    <app-article-input></app-article-input>\n    <app-article-list></app-article-list>\n  </div>\n</div>\n<!-- End of Articles Component -->"

/***/ }),

/***/ "../../../../../src/app/components/articles/articles.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticlesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ArticlesComponent = /** @class */ (function () {
    function ArticlesComponent() {
    }
    ArticlesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-articles',
            template: __webpack_require__("../../../../../src/app/components/articles/articles.component.html"),
            styles: []
        })
    ], ArticlesComponent);
    return ArticlesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/articles/list/list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"progress primary-color-dark\" *ngIf=\"articleList==null;else compContent\">\n  <div class=\"indeterminate\"></div>\n</div>\n\n<ng-template #compContent>\n  <div class=\"list-group \" *ngFor=\"let article of articleList\">\n    <a [routerLink]=\"['./',article.id] \" class=\"waves-effect list-group-item list-group-item-action\" routerLinkActive=\"active\">\n      <div>\n        {{ article.title }}\n      </div>\n      <small class=\"float-right grey-text\">{{ article.date | timeAgo }}</small>\n    </a>\n  </div>\n</ng-template>"

/***/ }),

/***/ "../../../../../src/app/components/articles/list/list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_services_articles_service__ = __webpack_require__("../../../../../src/app/services/articles.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListComponent = /** @class */ (function () {
    function ListComponent(articleService) {
        this.articleService = articleService;
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.articleService
            .getArticleList()
            .subscribe(function (articles) { return (_this.articleList = articles); });
    };
    ListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-article-list',
            template: __webpack_require__("../../../../../src/app/components/articles/list/list.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_services_articles_service__["a" /* ArticlesService */]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"my-5\">Home sweet home...</h2>\n<p>To check out the article selection features, please go to the 'Articles' section</p>"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Navbar-->\n<nav class=\"navbar navbar-expand-md navbar-dark indigo\">\n  <div class=\"container\">\n\n    <!-- Navbar brand -->\n    <a class=\"navbar-brand\" routerLink=\"/\">{{ brandName }}</a>\n\n    <!-- Collapse button -->\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarContent\" aria-controls=\"navbarContent\"\n      aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <!-- Collapsible content -->\n    <div class=\"collapse navbar-collapse\" id=\"navbarContent\">\n\n      <!-- Links -->\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item\" routerLinkActive=\"active\">\n          <a class=\"nav-link\" routerLink=\"/articles\">Articles</a>\n        </li>\n      </ul>\n      <!-- Links -->\n\n    </div>\n    <!-- Collapsible content -->\n\n  </div>\n</nav>\n<!--/.Navbar-->"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], NavbarComponent.prototype, "brandName", void 0);
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  Page Not Found :(\n</p>"

/***/ }),

/***/ "../../../../../src/app/components/page-not-found/page-not-found.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__("../../../../../src/app/components/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/page-not-found/page-not-found.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "../../../../../src/app/models/transfer-objects/article-list-to.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = mapArticleList;
function mapArticleList(articles) {
    return articles.response.results.map(function (a) {
        return {
            // id: encodeURIComponent(a.id),
            id: a.id,
            url: a.webUrl,
            title: a.webTitle,
            date: Date.parse(a.webPublicationDate)
        };
    });
}


/***/ }),

/***/ "../../../../../src/app/models/transfer-objects/article-to.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = mapArticle;
function mapArticle(article) {
    return {
        title: article.response.content.webTitle,
        body: article.response.content.fields.body,
        byline: article.response.content.fields.byline,
        date: new Date(article.response.content.webPublicationDate),
        url: article.response.content.webUrl,
        thumbnail: article.response.content.fields.thumbnail
    };
}


/***/ }),

/***/ "../../../../../src/app/pipes/bigthumb.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BigthumbPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BigthumbPipe = /** @class */ (function () {
    function BigthumbPipe() {
    }
    BigthumbPipe.prototype.transform = function (value, args) {
        if (value == null) {
            return value;
        }
        return String(value).replace(/500\.jpg$/i, '1000.jpg');
    };
    BigthumbPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'bigthumb'
        })
    ], BigthumbPipe);
    return BigthumbPipe;
}());



/***/ }),

/***/ "../../../../../src/app/pipes/cleanurl.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CleanUrlPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CleanUrlPipe = /** @class */ (function () {
    function CleanUrlPipe() {
    }
    CleanUrlPipe.prototype.transform = function (value, args) {
        return String(value).replace(/^\s*(http[s]?:\/\/(?:www\.)?theguardian\.com\/)?\/?|\s*$/gi, '');
    };
    CleanUrlPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'cleanurl'
        })
    ], CleanUrlPipe);
    return CleanUrlPipe;
}());



/***/ }),

/***/ "../../../../../src/app/pipes/escape.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EscapePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var EscapePipe = /** @class */ (function () {
    function EscapePipe() {
    }
    EscapePipe.prototype.transform = function (value, args) {
        return encodeURIComponent(value);
    };
    EscapePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'escape'
        })
    ], EscapePipe);
    return EscapePipe;
}());



/***/ }),

/***/ "../../../../../src/app/pipes/reprocess.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReprocessPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReprocessPipe = /** @class */ (function () {
    function ReprocessPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    ReprocessPipe.prototype.transform = function (value, args) {
        var content = String(value);
        // make images fluid
        content = content.replace(/<img\s/gi, '<img class="img-fluid" ');
        // replace article urls to local link
        // e.g.: https://www.theguardian.com/world/2017/dec/07/uk-acid-attacks-2017-likely-new-record
        // content = content.replace(/(<a\s.*?)(?:href="https:\/\/www\.theguardian\.com)([^"]*(?:")|)([^>]*>)/gi, `$1data-link="$2"$3`);
        return this.sanitizer.bypassSecurityTrustHtml(content);
    };
    ReprocessPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'reprocess'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */]])
    ], ReprocessPipe);
    return ReprocessPipe;
}());



/***/ }),

/***/ "../../../../../src/app/services/article-cache.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleCacheService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ArticleCacheService = /** @class */ (function () {
    function ArticleCacheService() {
        this.cache = new Map();
    }
    ArticleCacheService.prototype.store = function (id, article) {
        this.cache.clear(); // TODO: Now clear for simplicity, but should keep a healthy cache size
        var copy = Object.assign({}, article);
        this.cache.set(id, copy);
    };
    ArticleCacheService.prototype.fetch = function (id) {
        return this.cache.get(id);
    };
    ArticleCacheService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ArticleCacheService);
    return ArticleCacheService;
}());



/***/ }),

/***/ "../../../../../src/app/services/article.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_articles_service__ = __webpack_require__("../../../../../src/app/services/articles.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_services_article_cache_service__ = __webpack_require__("../../../../../src/app/services/article-cache.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ArticleGuard = /** @class */ (function () {
    //
    function ArticleGuard(articlesService, cacheService) {
        this.articlesService = articlesService;
        this.cacheService = cacheService;
    }
    /**
     * Guard is checking if the next route is a valid article and only then navigates
     */
    ArticleGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        //
        var routeId = route.paramMap.get('id');
        if (routeId == null) {
            return true;
        }
        return this.articlesService
            .getArticle(routeId)
            .map(function (article) {
            var valid = !!article;
            if (valid) {
                _this.cacheService.store(routeId, article);
            }
            return valid;
        })
            .catch(function (err) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].of(false);
        });
    };
    ArticleGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__app_services_articles_service__["a" /* ArticlesService */],
            __WEBPACK_IMPORTED_MODULE_4__app_services_article_cache_service__["a" /* ArticleCacheService */]])
    ], ArticleGuard);
    return ArticleGuard;
}());



/***/ }),

/***/ "../../../../../src/app/services/article.resolver.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleResolver; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_services_articles_service__ = __webpack_require__("../../../../../src/app/services/articles.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_services_article_cache_service__ = __webpack_require__("../../../../../src/app/services/article-cache.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ArticleResolver = /** @class */ (function () {
    function ArticleResolver(router, articlesService, cacheService) {
        this.router = router;
        this.articlesService = articlesService;
        this.cacheService = cacheService;
    }
    ArticleResolver.prototype.navigateToArticle = function (route, id) {
        var urlSegments = route.parent.url.map(function (seg) { return seg.path; }).concat([id]);
        console.log('Redirecting to:', urlSegments.join('/'));
        this.router.navigate(urlSegments);
    };
    ArticleResolver.prototype.resolve = function (route) {
        var _this = this;
        var routeId = route.paramMap.get('id');
        if (routeId == null) {
            // we are in articles root, no article selected yet, select the first one
            return this.articlesService.getFirstId().map(function (id) {
                _this.navigateToArticle(route, id);
                return null;
            });
        }
        else {
            // First check cache, probably the guard loaded the artice
            var article = this.cacheService.fetch(routeId);
            if (article != null) {
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].of(article);
            }
            // Load selected article or redirect if error received from API
            return this.articlesService
                .getArticle(routeId)
                .catch(function (err) {
                console.error('Invalid article, trying to redirect to first one!');
                return _this.articlesService.getFirstId().map(function (id) {
                    if (id === routeId) {
                        console.error('Could not load first article, nowhere to redirect!');
                        return null;
                    }
                    else {
                        _this.navigateToArticle(route, id);
                        return null;
                    }
                });
            });
        }
    };
    ArticleResolver = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__app_services_articles_service__["a" /* ArticlesService */],
            __WEBPACK_IMPORTED_MODULE_6__app_services_article_cache_service__["a" /* ArticleCacheService */]])
    ], ArticleResolver);
    return ArticleResolver;
}());



/***/ }),

/***/ "../../../../../src/app/services/articles.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticlesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_settings__ = __webpack_require__("../../../../../src/app/app-settings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_models_transfer_objects_article_list_to__ = __webpack_require__("../../../../../src/app/models/transfer-objects/article-list-to.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_models_transfer_objects_article_to__ = __webpack_require__("../../../../../src/app/models/transfer-objects/article-to.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ArticlesService = /** @class */ (function () {
    //
    function ArticlesService(http) {
        this.http = http;
    }
    ArticlesService.prototype.queryApi = function (urlPath, queryparams) {
        var config = {
            params: {
                'api-key': __WEBPACK_IMPORTED_MODULE_2__app_settings__["a" /* AppSettings */].API_KEY
            }
        };
        Object.assign(config.params, queryparams);
        // console.log(
        //   'query:',
        //   `${AppSettings.API_URL}${urlPath}?api-key=${config.params['api-key']}`
        // );
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_2__app_settings__["a" /* AppSettings */].API_URL + "/" + urlPath, config)
            .map(function (data) {
            // console.log('success');
            return data;
        });
    };
    /**
     * @param pageSize Page size, number of articles on a page
     * @param page Page number to get
     */
    ArticlesService.prototype.getArticleList = function (page, pageSize) {
        if (page === void 0) { page = 1; }
        if (pageSize === void 0) { pageSize = 10; }
        var config = {
            'order-by': 'newest',
            page: page,
            'page-size': pageSize
        };
        return this.queryApi('search', config).map(__WEBPACK_IMPORTED_MODULE_4__app_models_transfer_objects_article_list_to__["a" /* mapArticleList */]);
    };
    ArticlesService.prototype.getFirstId = function () {
        return this.getArticleList().map(function (articleList) {
            return articleList && articleList.length ? articleList[0].id : '';
        });
    };
    /**
     * @param id URI encoded path for the selected articles
     */
    ArticlesService.prototype.getArticle = function (id) {
        // if (id == null || !id.length) {
        //   return Observable.empty();
        // }
        var config = {
            'show-fields': 'body,byline,thumbnail'
        };
        return this.queryApi(id, config).map(__WEBPACK_IMPORTED_MODULE_5__app_models_transfer_objects_article_to__["a" /* mapArticle */]);
    };
    ArticlesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ArticlesService);
    return ArticlesService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map