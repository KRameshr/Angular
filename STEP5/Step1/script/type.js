"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Componet(params) {
    return function (TargetClass) {
        let tc = new TargetClass();
        return class {
            constructor() {
                this.titile = tc.titile;
                this.selector = params.selector;
                this.template = params.template;
            }
        };
    };
}
// decorator
let Appcom = class Appcom {
    constructor() {
        this.titile = "App Component's Title";
    }
};
Appcom = __decorate([
    Componet({
        selector: "app-root",
        template: `<div>
              <h2>Welcome to Angular </h2>
            </div>`,
    })
], Appcom);
