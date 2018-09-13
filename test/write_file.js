var write=require('fs');
var FullDate=require('../common/Util').FullDate;
write.writeFile("a.txt",FullDate+"第四步\n",{flag:'a'});