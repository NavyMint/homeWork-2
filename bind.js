function greetings(){
    console.log(this.name + ', hello bro!');
}

const myBuddy = {
    name: 'Gregorio'
}


Function.prototype.bindMy = function (context) {
    context['anyDuck'] = this;
    return function(){
        return context['anyDuck']();
    }
}

console.log(greetings.bindMy(myBuddy)());

