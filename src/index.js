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
      indices.sort();
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
        function compareNumeric(a, b) {
          return a - b;
        }
        sortTemp.sort(compareNumeric);
      }
      var j = 0;
      for (var i = 0; i < indices.length; i++)
      {
        this.elements[indices[i]] = sortTemp[j];
        j++;
      }
  }

  setComparator(compareFunction) {
    this.compareFunction = compareFunction;
  }
}

module.exports = Sorter;