let outputFormat = Object.freeze({
  markdown: 0,
  html: 1,
});

class TextProcessor {
  constructor(outputFormat) {
    this.buffer = [];
    this.setOutputFormat(outputFormat);
  }
  setOutputFormat(format) {
    switch (format) {
      case outputFormat.markdown:
        this.listStrategy = new MarkDownListStrategy();
        break;
      case outputFormat.html:
        this.listStrategy = new HtmlListStrategy();
        break;
    }
  }
  apendList(items){
    this.listStrategy.start(this.buffer)
    for(let item of items) 
    this.listStrategy.addListItem(this.buffer, item);
    this.listStrategy.end(this.buffer)
  }
  clear() {
    this.buffer = [];
  }

  toString() {
      return this.buffer.join('\n')
  }
}

class ListStrategy
{
    start(buffer) {}
    end(buffer) {}
    addListItem(buffer, item) {}
}

class HtmlListStrategy extends ListStrategy
{
    start(buffer) {
        buffer.push('<ul>')
    }
    end(buffer) {
        buffer.push('</ul>')
    }
    addListItem(buffer, item){
        buffer.push( `   <li>${item}</li>` );
      }
}

class MarkDownListStrategy extends ListStrategy
{
    addListItem(buffer, item){
      buffer.push( `* ${item}` );
    }
}


let tp = new TextProcessor(outputFormat.markdown);
tp.apendList(['foo, bar', 'jazz'])
console.log(tp.toString());

let tp2 = new TextProcessor(outputFormat.html);
tp2.apendList(['foo, bar', 'jazz'])
console.log(tp2.toString());