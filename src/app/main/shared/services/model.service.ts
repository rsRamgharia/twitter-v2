import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModelService {

  constructor() { }

  isOpen = signal<boolean>(false);
  isClose = signal<boolean>(false);

  isRegisterModelOpen = signal<boolean>(false);
  isLoginModelOpen = signal<boolean>(false);
  isEditModalOpen = signal<boolean>(false);
}
