/**
 * Created by fancy on 16-12-1.
 *
 * protype可以对象添加属性和方法
 * 对象只可以实例化才能调用其方法调用其属性
 */
function c() {
    this.age = 12;

};
c.prototype.name = '#43';
console.log(c.name)

var c2 = new c();


var employee = function (name, job, born) {
    this.name = name;
    this.job = job;
    this.born = born;
};

employee.prototype.salary = 20000;

var bill = new employee("Bill Gates", "Engineer", 1985);

console.log(bill.salary);


console.log(new Date())