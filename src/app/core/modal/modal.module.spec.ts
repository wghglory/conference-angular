import { ModalModule } from './modal.module';

describe('ModalModule', () => {
  let modalModule: ModalModule;

  beforeEach(() => {
    modalModule = new ModalModule(modalModule);
  });

  it('should create an instance', () => {
    expect(modalModule).toBeTruthy();
  });
});
