const upperCaseArray = array => array.map(word => word.toUpperCase());

const onlyIncludes = (array, str) => array.filter(word => word.includes(str));

const repeat = (func, count) => new Array(count).fill(func).forEach(f => f());

const reduce = (array, func, initialValue) => {
    let accumulator = initialValue ? func(initialValue, array[0]) : array[0];
    for (let i = 1; i < array.length; i++) {
        accumulator = func(accumulator, array[i])
    }
    return accumulator;
};

const sum = num => {
    let res = 0;

    function subsum(n) {

        subsum.toString = subsum.valueOf = () => res;

        if (n) {
            res += n;
            return subsum;
        } else {
            return res;
        }
    }

    return subsum(num);
};

/* base class */
const BaseClass = function () {
    this.name = "I'm BaseClass";
};

BaseClass.prototype = {
    getName: function () {
        return this.name;
    },
    setName: function (str) {
        this.name = str;
    }
};

/* sub class 1 */
const SubClass1 = function () {
    this.setName("I'm SubClass1");
};

/* sub class 2 */
const SubClass2 = function () {
    this.setName("I'm SubClass2");
};

const extend = (childClass, baseClass) => {
    childClass.prototype = new baseClass();
    childClass.prototype.constructor = childClass;
};

extend(SubClass1, BaseClass);
extend(SubClass2, BaseClass);

const base = new BaseClass();
const sub1 = new SubClass1();
const sub2 = new SubClass2();

console.log(sub1.constructor.name);
console.log(sub1 instanceof BaseClass);

console.log(base.getName());
console.log(sub1.getName());
console.log(sub2.getName());

Function.prototype.bind = null;

Function.prototype.bind = function (context, ...bindArgs) {
    return (...args) => this.apply(context, bindArgs.concat(args));
};

const someObj = {
    someValue: 'some value',
};

const someObjAnotherObject = {
    someValue: 'some another value',
};

const some = {
    someValue: 'some',
};

const printSmth = function () {
    console.log(this.someValue);
};

const firstBindFunc = printSmth.bind(someObj);
const secondBindFunc = firstBindFunc.bind(someObjAnotherObject);
const thirdFunc = firstBindFunc.bind(some);

firstBindFunc();
secondBindFunc();
thirdFunc();

console.log(upperCaseArray(['sd', 'asdasdfas']));
console.log(onlyIncludes(['helloy', 'boy', 'Baby'], 'oy'));
repeat(() => console.log('hi'), 3);
console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 10));
console.log(+sum(1)(2)(3)(4));