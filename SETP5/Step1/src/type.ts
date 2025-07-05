function Componet(params: any) {
  return function (TargetClass: any) {
    let tc: any = new TargetClass();
    return class {
      titile = tc.titile;
      selector = params.selector;
      template = params.template;
    };
  };
}

// decorator
@Componet({
  selector: "app-root",
  template: `<div>
              <h2>Welcome to Angular </h2>
            </div>`,
})
class Appcom {
  titile = "App Component's Title";
}
