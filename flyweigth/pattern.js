
class TextRange
{
    constructor(start, end){
     this.start = start;
     this.end = end;
     this.capitalize = false;
    }

    covers(position){
    return position >=this.start && position <= this.end;
    }
}

class BetterFormattedText
{
    constructor(plainText)
    {
        this.plainText = plainText;
        this.formatting = [];
    }

    getRange(start, end){
        let range = new TextRange(start, end);
        this.formatting.push(range);
        return range;
    }

    toString(){
        let buffer = [];
        for(let i in this.plainText){
            let c = this.plainText[i];
            for(let range of this.formatting){
                if(range.covers(i) && range.capitalize){
                    c = c.toUpperCase();
                }
                buffer.push(c);
            }
        }
        return buffer.join('')
    }
}

const text = "This is a brave new world";
let bft = new BetterFormattedText(text);
bft.getRange(10, 15).capitalize = true;
console.log(bft.toString());


