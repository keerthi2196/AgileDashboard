import { Component, OnInit } from '@angular/core';
import { childRoutes } from '../../child-routes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  showMenu = false;
  routes = childRoutes;
  constructor(private readonly router: Router) {}


  ngOnInit() {}

  onLoggedout() {
    localStorage.removeItem('isLoggedin');
    this.router.navigate(['/login']);
  }
}
