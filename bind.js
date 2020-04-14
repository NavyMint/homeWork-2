function greetings(hisLove){
    console.log(`${this.name}  hello bro! How is your ${hisLove.duck}? Have you ever been used ${hisLove.onion}`);
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

console.log(greetings.bindMy(myBuddy, {duck:'rubber duck', onion: 'cucumber'})());

