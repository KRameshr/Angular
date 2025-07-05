import { Component } from '@angular/core';

@Component({
     selector: 'app-second',
     template: `<h1>hello world second</h1>
          <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
               iste recusandae accusamus illo est obcaecati vero a, impedit
               dignissimos quaerat dolorem suscipit dolores nesciunt inventore
               quae maxime. Asperiores, repudiandae facere?
          </p>
          <ul>
               <li>home</li>
               <li>page</li>
               <li>selection</li>
               <li>contact</li>
               <li>login</li>
               <button>Sing Up</button>
          </ul>`,
     standalone: false,
})
export class SecondClass {}
