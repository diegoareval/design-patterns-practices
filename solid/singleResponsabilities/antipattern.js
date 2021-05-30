const fs = require("fs");

class Journal {
  constructor() {
    this.entries = {};
  }

  addEntry(text) {
    let c = ++Journal.count;
    let entry = `${c}: ${text}`;
    this.entries[c] = entry;
    return c;
  }

  removeEntry(index) {
    delete this.entries[index];
  }

  toString() {
    return Object.values(this.entries).join("\n");
  }

  save(filename) {
    fs.writeFileSync(filename, this.toString());
  }

  load(filename) {
    // TODO: to load file
  }

  loadFromUrl(url) {}
}

Journal.count = 0;
let j = new Journal();
j.addEntry("I coded today.");
j.addEntry("i was pissed");
console.log(j.toString());
