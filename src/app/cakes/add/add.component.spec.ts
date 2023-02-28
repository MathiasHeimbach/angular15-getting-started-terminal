import { AddComponent } from './add.component'
import { TestBed } from '@angular/core/testing'

describe('AddComponent', () => {
  it('should be created', () => {
    const addComponent: AddComponent = TestBed.get(AddComponent);
    expect(addComponent).toBeTruthy();
  });
});