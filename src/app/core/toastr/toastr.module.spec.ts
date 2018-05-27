import { ToastrModule } from './toastr.module';

describe('ToastrModule', () => {
  let toastrModule: ToastrModule;

  beforeEach(() => {
    toastrModule = new ToastrModule(toastrModule);
  });

  it('should create an instance', () => {
    expect(toastrModule).toBeTruthy();
  });
});
