//不用class实现继承
function fruit(color, smell) {
    this.color = color;
    this.smell = smell;
}
fruit.prototype.eat = function() {}

function apple(color, smell, name) {
    fruit.call(this, color, smell)
    this.name = name;
}

function temp() {}
temp.prototype = fruit.prototype