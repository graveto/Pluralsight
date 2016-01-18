//First way of creating new object
var task = {};

task.title = 'My task';
task.description = 'My description';
task.toString = function () {
    return this.title + ' ' + this.description;
};

console.log(task.toString());

//or
var taskAlt = {
    title: 'My alt task',
    description: 'My alt description',
    toString: function () {
        return this.title + ' ' + this.description;
    }
};

console.log(taskAlt.toString());

//Second way of creating a new object
var taskTwo = Object.create(Object.prototype);

taskTwo.title = 'My second task';
taskTwo.description = 'My second description';

taskTwo.toString = function () {
    return this.title + ' ' + this.description;
};

console.log(taskTwo.toString());

//Third way of creating new object
var taskThree = new Object();

taskThree.title = 'My third task';
taskThree.description = 'My third description';

taskThree.toString = function () {
    return this.title + ' ' + this.description;
};

console.log(taskThree.toString());