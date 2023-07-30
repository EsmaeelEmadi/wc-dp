import { expect } from '@open-wc/testing';
import { ObservableSet } from '../../src/utils/observableSet';

describe('ObservableSet', () => {
  it('should call onAdd when asyncAdd is called', async () => {
    let onAddCalled = false;

    // Define a mock onAdd function that sets the onAddCalled flag to true
    const onAddMock = () => {
      onAddCalled = true;
    };

    // Create an instance of ObservableSet with the mock onAdd function
    const observableSet = new ObservableSet<number>(onAddMock);

    // Call asyncAdd with a value
    await observableSet.asyncAdd(42);

    // Verify that the onAdd function was called
    expect(onAddCalled).to.be.true;
  });

  it('should add the value to the set after onAdd is called', async () => {
    let onAddCalled = false;

    // Define a mock onAdd function that sets the onAddCalled flag to true
    const onAddMock = () => {
      onAddCalled = true;
    };

    // Create an instance of ObservableSet with the mock onAdd function
    const observableSet = new ObservableSet<number>(onAddMock);

    // Call asyncAdd with a value
    await observableSet.asyncAdd(42);

    // Verify that the onAdd function was called
    expect(onAddCalled).to.be.true;

    // Verify that the value was added to the set
    expect(observableSet.has(42)).to.be.true;
  });

  it('should not add the value to the set if onAdd is not a function', async () => {
    // Create an instance of ObservableSet without an onAdd function

    // @ts-ignore
    const observableSet = new ObservableSet<number>(null);

    // Call asyncAdd with a value
    await observableSet.asyncAdd(42);

    // Verify that the value was not added to the set
    expect(observableSet.has(42)).to.be.false;
  });
});
