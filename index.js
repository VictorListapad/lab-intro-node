class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {
    if (this.items[pos]) {
      return this.items[pos];
    } else {
      throw new Error("OutOfBounds");
    }
  }

  max() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return Math.max(...this.items);
    }
  }
  // max() {
  //   if (this.items.length > 0) {
  //     let highest = this.items[0];
  //     for (let i = 1; i < this.items.length; i++) {
  //       if (this.items[i] > highest) {
  //         highest = this.items[i];
  //       }
  //     }
  //     return highest;
  //   } else {
  //     throw new Error("EmptySortedList");
  //   }
  // }

  min() {
    // if (this.items.length > 0) {
    //   let lowest = this.items[0];
    //   for (let i = 1; i < this.items.length; i++) {
    //     if (this.items[i] < lowest) {
    //       lowest = this.items[i];
    //     }
    //   }
    //   return lowest;
    // } else {
    //   throw new Error("EmptySortedList");
    // }
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return Math.min(...this.items);
    }
  }

  sum() {
    let total = this.items.reduce((acc, cur) => {
      return acc + cur;
    }, 0);
    return total;
  }

  avg() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      let total = this.items.reduce((acc, cur) => {
        return acc + cur;
      }, 0);
      return total / this.length;
    }
  }
}

module.exports = SortedList;
