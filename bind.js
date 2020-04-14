function greetings(hisLove){
    console.log(`${this.name}  hello bro! How is your ${hisLove}?`);
}

const myBuddy = {
    name: 'Gregorio'
}


Function.prototype.bindMy = function (context, ...rest) {
    context['anyDuck'] = this;
    return function(){
        return context['anyDuck'](...rest);
    }
}

console.log(greetings.bindMy(myBuddy, 'rubber duck')());

