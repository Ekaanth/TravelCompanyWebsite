import { ExploreSikkimModule } from './explore-sikkim.module';

describe('ExploreSikkimModule', () => {
  let exploreSikkimModule: ExploreSikkimModule;

  beforeEach(() => {
    exploreSikkimModule = new ExploreSikkimModule();
  });

  it('should create an instance', () => {
    expect(exploreSikkimModule).toBeTruthy();
  });
});
