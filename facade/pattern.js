class Buffer extends Array
{
    constructor(width=30, height=20)
    {
        super();
        this.width = width;
        this.height = height;
        this.alloc(width*height);
    }
    write(text, position = 0){
        // 
    }
}

class ViewPort 
{
    constructor(buffer = new Buffer()){
        this.buffer = buffer;
        this.offset = 0;
    }

    append(text, pos)
    {
      this.buffer.write(text, pos + this.offset);
    }

    getCharAt(index){
        return this.buffer[this.offset + index];
    }
}

class Console 
{
    constructor()
    {
        this.buffer = new Buffer();
        this.currentViewport = new ViewPort(this.buffer);
        this.buffers = [this.buffer];
        this.viewPorts = [this.currentViewport];
    }

    write(text)
    {
        this.currentViewport.buffer.write(text);
    }

    getCharAt(index){
        return this.currentViewport.getCharAt(index);
    }
}

let c = new Console();
c.write("hola");
let ch = c.getCharAt(0);