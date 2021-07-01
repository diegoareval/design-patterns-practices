class FormattedText 
{
    constructor(plainText)
    {
        this.plainText = plainText;
        this.caps = new Array(plainText.length).map(()=>false);
    }

    capitalize(start, end){
     for(let i=start; i<=end; i++){
       this.caps[i] = true;
     }
    }
   
    toString()
    {
        let buffer = [];
        for(let i in this.plainText)
        {
            let c = this.plainText[i];
            buffer.push(this.caps[i]?c.toUpperCase():c);
        }
        return buffer.join('');
    }
}

const text = "This is a brave new world";
let ft = new FormattedText(text);
ft.capitalize(10,15);
console.log(ft.toString());