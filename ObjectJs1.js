/**
 * Created by admin on 2016/10/25.
 */


var checkObject={
    checkName:function(){
        console.log("checkname");
    },checkEmail:function(){
        console.log("checkEmail");
    }
}
checkObject.checkName();
//************************************
var checkObj=function(){};
checkObj.checkName=function(){
    console.log("checkname");
}
checkObj.checkEmail=function(){
    console.log("checkEmail");
}
checkObj.checkName();


//////////////////////////////////������÷�ʽnew
var checkObj1=function(){};
    checkObj1.prototype.checkName=function(){//prototype��ʹֻ����һ�ζ��󣬲����ظ�����;this.�ᴴ�����
        console.log("checkname2");

    }
    checkObj1.prototype.checkEmail=function(){
        console.log("checkemail2");
    }


var c1=new checkObj1();
c1.checkName();


//////////////////////////////////������÷�ʽnew
var checkObj2=function(){};
    checkObj2.prototype={//prototype��ʹֻ����һ�ζ��󣬲����ظ�����;this.�ᴴ�����
    checkName:function(){
        console.log("checkname22222");
        return this;
    },
    checkEmail:function(){
        console.log("checkemail222222");
        return this;
    }}


var c2=new checkObj2();
c2.checkName().checkEmail();


///////////////////////////////////////////////////////��Ⱦȫ��function

Function.prototype.checkEmail=function(){
    console.log("=====prototype.checkEmail");
}


var f=function(){};
f.checkEmail();

//////////////////////////////////////
/****
 * prototype(ԭ�͸���)
 * JavaScript ���Խ����䴫ͳ OO �����е�
 �̳У��Ӷ����ֶ���Ĳ�ι�ϵ��JavaScript �����ǻ���ԭ�͵ģ�ÿ��������һ�� prototype �������������
 prototype ����Ҳ��һ���������������Ҳ�������Լ���ԭ�ͣ������͹�����һ�����ṹ�� ����һ�����Ե�ʱ
 �򣬽�������Ҫ�������ϵı���������ṹ��ֱ�����������ԣ��򷵻����Զ�Ӧ��ֵ����������ԭ��Ϊ null �Ķ�
 ��(JavaScript �Ļ����� Object �� prototype ���Լ�Ϊ null)������˶�����û�и����ԣ��򷵻� undefined.
 *
 */

Function.prototype.addMethod=function(name,fn){
    this.prototype[name]=fn;   //prototypeʹ����checkName������(�̳еĸ���)��addM������Ҳ����function(){}ȫ�֣������·���m.checkEmail�����ҵ�
    return this;
}

/*var addM=new Function();*/    //�������
var addM=function(){};
addM.addMethod('checkName',function(){
    console.log("Function checkname");
    return this;
}).addMethod('checkEmail',function(){
    console.log("Function checkEmail");
    return this;
});
var m=new addM;
m.checkEmail().checkName();



function Base(name){
    this.name = name;
    this.getName = function(){
        return this.name;
    }
}
//����һ������child
function Child(id){
    this.id = id;
    this.getId = function(){
        return this.id;
    }
}
//��child��ԭ��ָ��һ���µ�base����
Child.prototype = new Base("base");
//ʵ����һ��child����
var c1 = new Child("child");
//c1�������getId����
console.log(c1.getId());
//����c1��ԭ������"�̳�"����getName��������˿��Է���
console.log(c1.getName());


/**�������ض��ֵ   ����!!!!*/
function point(left,top){
    this.left=left;
    this.top=top;
    return {x:this.left,y:top};
}
var po= point(12,45);
console.log(po.x+"==="+po.y);



/**
 *
 *
 �����==������ȣ��������===�������ͬ
 *��������
 ���������������ͬ�����ͣ����ж����ͬ�ԣ����������������ֵ��ȣ��򷵻� true(���)�����򷵻� fals
 e(�����). ��������������Ͳ�ͬ������������������жϣ� - null �� undefined��� - ����һ�������֣���
 һ�����ַ��������ַ���ת��Ϊ���֣������Ƚ� - ����һ���� true����ת���� 1(false ��ת��Ϊ 0)�����Ƚ� -
 ���һ��ֵ�Ƕ�����һ��������/�ַ������򽫶���ת��Ϊԭʼֵ(ͨ�� toString()���� valueOf()����) - ����
 �������ֱ�ӷ��� false
 ��ͬ�����
 ��������������Ͳ�ͬ���򲻽���ֵ���жϣ�ֱ�ӷ���false
 �����������������ͬ��������������жϣ�
 ?  �������ֵ���������ֵ��ͬ�������ߵ�ͬ(��һ�����⣬���� NaN��NaN ���䱾��Ҳ�����)�����򲻵�ͬ
 ?  �����ַ���������������������������һ�����������ֵ���ȣ��򲻵�ͬ�������ͬ
 ?  ���ǲ���ֵ����ֵ��Ϊ true/false                �����ͬ�����򲻵�ͬ
 ?  �����������������ͬһ������(���飬����)����������ȫ��ͬ�����򲻵�ͬ
 ?  ���������������Ϊ  null/undefined  �����ͬ�����򲻵�ͬ
 *
 **/
console.log(1 == true);
console.log(1 === true);
console.log("" == false);
console.log("" === false);
console.log(null == undefined);
console.log(null === undefined);

console.log(null!==undefined);




/*

javascript �����������
concat()    �����������������飬�����ؽ����
join()       �����������Ԫ�ط���һ���ַ�����Ԫ��ͨ��ָ���ķָ������зָ���
pop()       ɾ����������������һ��Ԫ�ء�
push()      �������ĩβ���һ�������Ԫ�أ��������µĳ��ȡ�
reverse()   �ߵ�������Ԫ�ص�˳��
shift()     ɾ������������ĵ�һ��Ԫ�ء�
slice()     ��ĳ�����е����鷵��ѡ����Ԫ�ء�
sort()      �������Ԫ�ؽ�������
splice()    ɾ��Ԫ�أ��������������Ԫ�ء�
unshift()   ������Ŀ�ͷ���һ�������Ԫ�أ��������µĳ��ȡ�
valueOf()   ������������ԭʼֵ��
*/

const a=23; //��������



o={x:1,y:{z:[false,null,""]}};
s=JSON.stringify(o);//���л�
p=JSON.parse(s);    //��ԭ����
console.log(s+"==="+ p.x);


var ss={x:1,y:1}.toString();
console.log(ss);//����[object Object]

console.log(new Date().valueOf())


/*
 //���ߵ�ͬ
var a=cons();
var a=cons;
*/


var info={"error":{"status":"12","message":"454"}};
console.log(info)

console.log(true===true)