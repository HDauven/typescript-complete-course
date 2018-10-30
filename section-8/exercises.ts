class MyMap<T> {
  private map: { [key: string]: T } = {};

  setItem(key: string, item: T) {
    this.map[key] = item;
  } // should create a new key-value pair

  getItem(key: string) {
    return this.map[key];
  } // should retrieve the value of the provided key

  clear() {
    this.map = {};
  } // should remove all key-value pairs

  printMap() {
    for (let key in this.map) {
      console.log(`${key} - ${this.map[key]}`);
    }
  } // should output key-value pairs
}

const numberMap = new MyMap<number>();
numberMap.setItem("apples", 10);
numberMap.setItem("banana", 3);
console.log(numberMap.getItem("apples"));
console.log(numberMap.getItem("tomato"));
numberMap.setItem("citrus", 7);
numberMap.printMap();
numberMap.clear();
