let RelationShip = Object.freeze({
  parent: 0,
  child: 1,
  sibling: 2,
});

class Person {
  constructor(name) {
    this.name = name;
  }
}

// Low-Level Module
class RelationShipsBrowser {
  constructor() {
    if (this.constructor.name == "RelationShipsBrowser") {
      throw new Error("RelationShipsBrowser is abstract");
    }
  }

  findAllChildrenOf(name) {}
}
class RelationShips extends RelationShipsBrowser {
  constructor() {
    super();
    this.data = [];
  }

  addParentAndChild(parent, child) {
    this.data.push({
      from: parent,
      type: RelationShip.parent,
      to: child,
    });
  }

  findAllChildrenOf(name) {
    return this.data
      .filter((r) => r.from.name === name && r.type === RelationShip.parent)
      .map((r) => r.to);
  }
}
// High-Level Module
class Research {
  constructor(browser) {
    for (let p of browser.findAllChildrenOf("Diego")) {
      console.log(`Diego has a child name: ${p.name}`);
    }
  }
}
let parent = new Person("Diego");
let child1 = new Person("Daniel");
let child2 = new Person("Jenny");

let rels = new RelationShips();
rels.addParentAndChild(parent, child1);
rels.addParentAndChild(parent, child2);

new Research(rels);
