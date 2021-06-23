class HotDrinks {
    consume(){
        
    }
}

class Tea extends HotDrink 
{
    consume(){
        console.log(`this tea is really nice`);
    }
}

class Coffee extends HotDrink 
{
    consume(){
        console.log(`this coffee is really nice`);
    }
}

class HotDrinkFactory 
{
    prepare(amount){/* test */}
}
