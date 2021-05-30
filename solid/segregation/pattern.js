class Document {

}

class Machine {
    constructor(){
        if(this.constructor.name == "Machine"){
            throw new Error("Machine is abstract")
        }
    }
    print(doc){}
    fax(doc){}
    scan(doc){}
}

class MultiFunctionPrinter extends Machine {

    print(doc){
        // 
    }
    fax(doc){
        // 
    }
    scan(doc){
        // 
    }
}

class NotImplementedError extends Error {
    constructor(name){
      let message =  `${name} is not implemented`
      super(message)
      if(Error.captureStackTrace){
          Error.captureStackTrace(this, NotImplementedError)
      }
    }
}

class OldFashionPrinter extends Machine {

    print(doc){
        // ok
    }
    fax(doc){
        // do nothing... principle least surprise
    }
    scan(doc){
        throw new NotImplementedError("OldFashionPrinter.scan")
    }
}

let old = new OldFashionPrinter();
old.scan();