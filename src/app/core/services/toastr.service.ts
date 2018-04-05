// 3rd party lib import

import { InjectionToken } from '@angular/core';

// InjectionToken<T> T is return type. This is good for small api like toastr, we will have intellisense.
// but for jquery, we don't have to define an interface
export let TOASTR_TOKEN = new InjectionToken<Toastr>('toastr');

// not necessary if api is large, just for intellisense
export interface Toastr {
  success(message: string, title?: string): void;
  info(message: string, title?: string): void;
  error(message: string, title?: string): void;
  warning(message: string, title?: string): void;
}
