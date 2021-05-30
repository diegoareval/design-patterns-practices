class Document {

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
// ISP = Split

class Printer {
    constructor(){
        if(this.constructor.name == "Printer"){
            throw new Error("Printer is abstract")
        }
    }
    print(doc){}
}

class PhotoPrinter {
    constructor(){
        if(this.constructor.name == "PhotoPrinter"){
            throw new Error("PhotoPrinter is abstract")
        }
    }
    print(doc){}
    scan(doc){
        // 
    }
}


let old = new OldFashionPrinter();
old.scan();