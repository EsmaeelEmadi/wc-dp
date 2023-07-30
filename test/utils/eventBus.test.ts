import { expect } from '@open-wc/testing';
import { EventBus, type EventCallback } from '../../src/utils/eventBus';

describe('EventBus', () => {
  let eventBus: EventBus;

  beforeEach(() => {
    // Create a new instance of EventBus before each test
    eventBus = new EventBus();
  });

  it('should add event listeners using `on`', () => {
    const callback1: EventCallback = () => {};
    const callback2: EventCallback = () => {};

    eventBus.on('event1', callback1);
    eventBus.on('event2', callback2);

    expect(eventBus['listeners']).to.deep.equal({
      event1: [callback1],
      event2: [callback2],
    });
  });

  it('should remove event listeners using `off`', () => {
    const callback1: EventCallback = () => {};
    const callback2: EventCallback = () => {};

    eventBus.on('event1', callback1);
    eventBus.on('event2', callback2);

    expect(eventBus['listeners']).to.deep.equal({
      event1: [callback1],
      event2: [callback2],
    });

    eventBus.off('event1', callback1);

    expect(eventBus['listeners']).to.deep.equal({
      event1: [],
      event2: [callback2],
    });
  });

  it('should emit events and call event listeners', () => {
    let count1 = 0;
    let count2 = 0;

    const callback1: EventCallback = () => {
      count1++;
    };

    const callback2: EventCallback = () => {
      count2++;
    };

    eventBus.on('event1', callback1);
    eventBus.on('event2', callback2);

    eventBus.emit('event1');
    eventBus.emit('event2');
    eventBus.emit('event2');

    expect(count1).to.equal(1);
    expect(count2).to.equal(2);
  });
});
