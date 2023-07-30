export class Queue<T> {
  private data: T[] = [];

  public enqueue(value: T): void {
    this.data.unshift(value);
  }

  public dequeue(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }

    return this.data.pop();
  }

  public isEmpty(): boolean {
    return this.data.length === 0;
  }

  public clear(): void {
    this.data = [];
  }

  public size(): number {
    return this.data.length;
  }
}
