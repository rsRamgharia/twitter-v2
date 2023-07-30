import { Component } from '@angular/core';
import { SidebarItems } from '../../interface';
import { ModelService } from '../services/model.service';

@Component({
  selector: 'sidebar-items',
  template: `
    <div class="rounded-full h-14 w-14 p-4 flex items-center justify-center hover:bg-opacity-10 hover:bg-blue-300 cursor-pointer transition">
      <img src="/assets/images/logo.svg" class="h-14 w-14" alt="Logo">
    </div>
    <div class="flex flex-row items-center" *ngFor="let item of items">
      <a [routerLink]="item.route"
      [ngClass]="{'text-white': !item.isActive, 'text-sky-500': item.isActive}"
        class="material-icons relative rounded-full h-14 w-14 flex items-center justify-center p-4 hover:bg-slate-300 hover:bg-opacity-10 cursor-pointer">
        {{item.icon}}
      </a>
      <a [routerLink]="item.route" class="relative hidden lg:flex items-center gap-4 p-4 rounded-full hover:bg-slate-300 hover:bg-opacity-10 cursor-pointer">
        <p class="hidden lg:block text-white text-lg">{{item.label}}</p>
      </a>
    </div>

    <!-- Logout Button -->
    <div class="flex flex-row items-center">
      <div class="material-icons text-white relative rounded-full h-14 w-14 flex items-center justify-center p-4 hover:bg-slate-300 hover:bg-opacity-10 cursor-pointer">
        logout
      </div>
      <div class="relative hidden lg:flex items-center gap-4 p-4 rounded-full hover:bg-opacity-10 hover:bg-slate-300 cursor-pointer">
        <p class="hidden lg:block text-white text-lg">Logout</p>
      </div>
    </div>

    <!-- Tweet Button -->
    <div class="mt-6 lg:hidden h-14 w-14 rounded-full p-4 flex items-center justify-center bg-sky-500 hover:bg-opacity-80 transition cursor-pointer">
      <svg viewBox="0 0 24 24" aria-hidden="true" fill="#fff">
        <g>
          <path d="M23 3c-6.62-.1-10.38 2.421-13.05 6.03C7.29 12.61 6 17.331 6 22h2c0-1.007.07-2.012.19-3H12c4.1 0 7.48-3.082 7.94-7.054C22.79 10.147 23.17 6.359 23 3zm-7 8h-1.5v2H16c.63-.016 1.2-.08 1.72-.188C16.95 15.24 14.68 17 12 17H8.55c.57-2.512 1.57-4.851 3-6.78 2.16-2.912 5.29-4.911 9.45-5.187C20.95 8.079 19.9 11 16 11zM4 9V6H1V4h3V1h2v3h3v2H6v3H4z"/>
        </g>
      </svg>
    </div>
    <div
      (click)="openLoginModal()"
     class="mt-6 hidden lg:block px-4 py-2 rounded-full bg-sky-500 hover:bg-opacity-90 cursor-pointer transition">
      <p class="text-white text-center font-semibold text-[15px]">
        Tweet
      </p>
    </div>
  `,
  styles: [
  ]
})
export class SidebarItemsComponent {
  items: Array<SidebarItems> = [
    {
      label: 'Home',
      route: '/',
      icon: 'home',
    },
    {
      label: 'Notifications',
      route: '/notifications',
      icon: 'notifications'
    }
  ]

  constructor(private modalService: ModelService) { }

  openLoginModal(): void {
    this.modalService.isLoginModelOpen.set(true);
  }

  signOut() {

  }
}
