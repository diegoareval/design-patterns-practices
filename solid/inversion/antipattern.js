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
  
  class RelationShips {
    constructor() {
      this.data = [];
    }
  
    addParentAndChild(parent, child) {
      this.data.push({
        from: parent,
        type: RelationShip.parent,
        to: child,
      });
    }
  }
  // High-Level Module
  class Research {
    constructor(relationships) {
      // find all children of Diego
      let relations = relationships.data;
      for (let rel of relations.filter(
        (r) => r.from.name === "Diego" && r.type === RelationShip.parent
      )) {
        console.log(`Diego has a child name: ${rel.to.name}`);
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
  