class Sorter {
  constructor() {
    this.elements = [];
    this.addedCount = 0;
  }

  add(element) {
    this.elements.push(element);
    this.addedCount++;
  }

  at(index) {
    return this.elements[index];
  }

  get length() {
    return this.addedCount;
  }

  toArray() {
    this.resultingArray = [];
    for (var i = 0; i < this.addedCount; i++)
    {
      this.resultingArray[i] = this.elements[i];
    }
    return this.resultingArray;
  }

  sort(indices) {
    var buffer;
    for (var i = 0; i < this.indicies.length; i++)
    {
      if (typeof(this.elements[indities[i]]) == "number")
      {
        buffer = this.elements[indicies[i]];
        this.elements[indicies[i]] = this.elements[indities[i+1]];
        this.elements[indities[i+1]] = buffer;
      }
    }
  }

  setComparator(compareFunction) {
    compareFunction (this.elements); // принимает функцию в качестве параметра и использует её, чтобы отсортировать элементы
  }
}

module.exports = Sorter;