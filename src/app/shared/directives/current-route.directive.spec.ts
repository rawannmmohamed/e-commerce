import { CurrentRouteDirective } from './current-route.directive';
import { Router, NavigationStart } from '@angular/router';
import { ElementRef } from '@angular/core';

describe('CurrentRouteDirective', () => {
  it('should create an instance', () => {
    const routerMock = { events: { subscribe: () => {} } } as Router;
    const elementRefMock = {} as ElementRef;
    const directive = new CurrentRouteDirective(routerMock, elementRefMock);

    expect(directive).toBeTruthy();
  });
});
