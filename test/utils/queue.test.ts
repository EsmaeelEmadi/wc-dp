import { expect } from '@open-wc/testing';
import { Queue } from '../../src/utils/queue';

describe('Queue', () => {
  let queue: Queue<number>;

  beforeEach(() => {
    // Create a new Queue instance before each test
    queue = new Queue<number>();
  });

  it('should enqueue and dequeue elements', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.dequeue()).to.equal(1);
    expect(queue.dequeue()).to.equal(2);
    expect(queue.dequeue()).to.equal(3);
    expect(queue.dequeue()).to.be.undefined;
  });

  it('should check if the queue is empty', () => {
    expect(queue.isEmpty()).to.be.true;

    queue.enqueue(42);

    expect(queue.isEmpty()).to.be.false;
  });

  it('should clear the queue', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.size()).to.equal(3);

    queue.clear();

    expect(queue.isEmpty()).to.be.true;
    expect(queue.size()).to.equal(0);
  });

  it('should return the size of the queue', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.size()).to.equal(3);

    queue.dequeue();

    expect(queue.size()).to.equal(2);

    queue.enqueue(4);

    expect(queue.size()).to.equal(3);

    queue.clear();

    expect(queue.size()).to.equal(0);
  });
});
