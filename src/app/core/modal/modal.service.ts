import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor() {}

  activate: (title?: string, message?: string) => Promise<boolean>;
}
