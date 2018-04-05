// 3rd party lib import

import { InjectionToken } from '@angular/core';

// InjectionToken<T> T is return type. This is good for small api like toastr, we will have intellisense.
// but for jquery, we don't have to define an interface
export let JQUERY_TOKEN = new InjectionToken<any>('jquery');
