import { TestBed, inject } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { SharedSpecModule } from '../shared/shared.module';

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SharedSpecModule],
      providers: [AuthService],
    });
  });

  it(
    'should be created',
    inject([AuthService], (service: AuthService) => {
      expect(service).toBeTruthy();
    }),
  );
});
