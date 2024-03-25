import { Directive, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';

@Directive({
  selector: '[appCurrentRoute]',
})
export class CurrentRouteDirective implements OnInit, OnDestroy {
  private subscription!: Subscription;

  constructor(private router: Router, private el: ElementRef) {}

  ngOnInit() {
    this.subscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        const currentRoute = event.url;
        if (
          currentRoute.includes('auth') ||
          currentRoute === '' ||
          currentRoute === '/'
        ) {
          this.el.nativeElement.style.display = 'none';
        } else {
          this.el.nativeElement.style.display = 'block';
        }
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
