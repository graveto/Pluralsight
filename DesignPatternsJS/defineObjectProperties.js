var task = {
    title: 'My title',
    description: 'My description'
};

task.toString = Object.defineProperty(task, 'toString', {
    value: function () {
        return this.title + ' ' + this.description;
    },
    writable: false, //makes this property write safe, we cannot assign something new to this later on
    enumerable: false, //makes this property hidden ie. when we run console.log on this object we will only see the title and the description properties
    configurable: false //cannot be modified later (ie. we cannot change the writable property from false to true)
});

console.log(task.toString());
console.log(task);
console.log(Object.keys(task));