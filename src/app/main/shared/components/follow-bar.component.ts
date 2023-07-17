import { Component } from '@angular/core';

@Component({
  selector: 'app-follow-bar',
  template: `
   <div class="px-6 py-4 hidden lg:block">
    <div class="bg-neutral-800 rounded-xl p-4">
      <h2 class="text-white text-xl font-semibold">Who to follow?</h2>
      <div class="flex flex-col gap-6 mt-4">
        <div class="flex flex-row gap-4">
          <!-- Avatar -->
          <Avatar/>
          <div class="flex flex-col">
            <p class="text-white font-semibold text-sm">
              Full name
            </p>
            <p class="text-neutral-400 text-sm">
              @Username
            </p>
          </div>
        </div>
      </div>
    </div>
   </div>
  `,
  styles: [
  ]
})
export class FollowBarComponent {

}
