/**
 * Created by fancy on 16-12-1.
 */

var path=require('path');
var resou='123.map';
path.normalize(resou);
console.log(path.dirname(resou));
console.log(path.extname(resou));
console.log(path.basename(resou))
console.log(path.normalize('/foo/bar//baz/asdf/quux/sd/../../'));
console.log(path.relative('C:\\orandea\\test\\aaa', 'C:\\orandea\\impl\\bbb'));


function A(x,y)
{
    this.x = x;
    this.y = y;
    A.prototype.FunX = function(){console.log(x)};
    A.prototype.FunY = function(){console.log(y)};
}
var obj = new A(5,10);
console.log(obj.x);
console.log(obj.y);
obj.FunX();
obj.FunY();

console.log()