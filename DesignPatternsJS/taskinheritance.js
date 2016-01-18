var task = {
    title: 'Title for inheritance task',
    description: 'Description for inheritance task.'
};

Object.defineProperty(task, 'toString', {
    value: function () {
        return this.title + ' ' + this.description;
    },
    writable: false,
    enumerable: false,
    configurable: false
});

console.log(task.toString());

var urgentTask = Object.create(task); //creates new object that inherits from the task object

Object.defineProperty(urgentTask, 'toString', {
    value: function () {
        return this.title + ' ' + this.description + ' This is a very urgent task.';
    },
    writable: false,
    enumerable: false,
    configurable: false
});

console.log(urgentTask.toString());