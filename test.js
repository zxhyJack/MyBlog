class Set {
  constructor() {
    this.item = {};
  }

  has(value) {
    return value in this.item;
    // return this.item.hasOwnProperty(value);
  }

  add(value) {
    if(!this.has(value)){
      this.item[value] = value;
    }
  }

  delete(value) {
    if(this.has(value)){
      delete this.item[value];
      return true;
    }
    return false;
  }

  clear() {
    this.item = {};
  }

  size() {
    return Object.keys(this.item).length;
  }

  values() {
    return Object.keys(this.item);
  }
}

let set = new Set();
set.add(1);