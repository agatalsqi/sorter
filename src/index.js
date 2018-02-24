class Sorter {
  constructor() {
    this.elements = [];
  }

  add(element) {
    this.elements.push(element);
  }

  at(index) {
    return this.elements[index];
  }

  get length() {
    return this.elements.length;
  }

  toArray() {
    return this.elements;
  }

  sort(indices) {
      var sortTemp = [];
      for (var i = 0; i < indices.length; i++)
      {
        sortTemp[i] = this.elements[indices[i]];
      }
      if (this.compareFunction)
      {
        sortTemp.sort(this.compareFunction);
      }
      else
      {
        sortTemp.sort();
      }
      var j = 0;
      for (var i in indices)
      {
        this.elements[i] = sortTemp[j];
        j++;
      }
  }

  setComparator(compareFunction) {
    this.compareFunction = compareFunction;
  }
}

module.exports = Sorter;