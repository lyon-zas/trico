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

  backToDashboard(){
    this.router.navigate(['/pages/viewList'],{relativeTo: this.route});
  }

  ngOnInit(): void {
  }

}
