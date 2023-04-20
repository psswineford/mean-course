import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  userIsAuthenticated = false;
  private authListnerSubs: Subscription;
  constructor(private authService: AuthService){}

ngOnInit(): void {
  this.userIsAuthenticated = this.authService.getIsAuthenticated();
  this.authListnerSubs = this.authService
    .getAuthStatusListener()
    .subscribe(isAuthenticated => {
      this.userIsAuthenticated = isAuthenticated;
    })
}

onLogout() {
  this.authService.logout();
}

ngOnDestroy(): void {
  this.authListnerSubs.unsubscribe();
}

}
