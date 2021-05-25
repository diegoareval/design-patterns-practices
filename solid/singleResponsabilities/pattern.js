const fs = require('fs');

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

}

class PersistentManager {
    saveFile(journal, filename) {
        fs.writeFileSync(filename, journal.toString())
    }

    loadFile(filename) {
        // TODO: to load file
    }

    loadFileFromUrl(url) {
      
    }
}

Journal.count = 0;
let j = new Journal();
j.addEntry("I coded today.");
j.addEntry("i was pissed");
console.log(j.toString());

// persist file
let persistManager = PersistentManager();
const fileName = "fileName"
persistManager.saveFile(j, fileName);
