import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-studentdetails',
  standalone: false,
  template: `
    <p>studentdetails works! are the details is {{ id }}</p>
    <button (click)="dispalyOverview()">overview</button>
    <button (click)="dispalyContact()">overview</button>
  `,
  styles: ``,
})
export class StudentdetailsComponent implements OnInit {
  id: any;
  constructor(private route: ActivatedRoute, private router: Router) {}
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
  }

  dispalyOverview() {
    this.router.navigate(['overview'], { relativeTo: this.route });
  }
  dispalyContact() {
    this.router.navigate(['contact'], { relativeTo: this.route });
  }
}
