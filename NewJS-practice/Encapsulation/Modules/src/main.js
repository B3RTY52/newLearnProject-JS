function myModule() {
    this.hello = function () {
        console.log('hello!');
    };

    this.goodbye = function () {
        console.log('bye!');
    };
}

// COMMON JS: обращаемся к специальному объекту module и его свойству exports: 
module.exports = myModule;