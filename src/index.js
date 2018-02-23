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
    var reversedElements = [];
    var argsLength = arguments.length;
    for (var i = 0; i < arguments.length; i++)
    {
      if ((typeof(this.elements[arguments[i]]) == "number") && (arguments.length > 1))
      {
        reversedElements[i] = this.elements[argsLength-1];
        argsLength--;
       /* buffer = this.elements[arguments[i]];
        this.elements[arguments[i]] = this.elements[arguments[i+1]];
        this.elements[arguments[i+1]] = buffer; */
      }
    }
  }

  setComparator(compareFunction) {
    compareFunction (this.elements);
  }
}

module.exports = Sorter;