import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-error404',
  templateUrl: './error404.component.html',
  styleUrls: ['./error404.component.scss']
})
export class Error404Component implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  backToLoginPage(){
    this.router.navigate(['/utilities/dashboard'],{relativeTo: this.route});
  }

  ngOnInit(): void {
  }

}
