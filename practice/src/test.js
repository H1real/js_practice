var myname = "serhii";

var drawdb = function (howManyTimes) {
    for (var i = 0; i < howManyTimes; i++) {
        console.log(i + "db");
    }
};


function circle(symbol, count) {
   
    let lngth = count + count - 1;
    let str = '';
for (let i = 0; i < lngth; i++) {
    let cnt = lngth/2;
    if (i >= lngth/2) {
        cnt =  lngth -1 - i;
    } else {
       cnt = cnt - i;  
    }
    str += addSpace(Math.trunc(cnt)) + symbol +'\n';
   
   
}
console.log(str); 

}

function addSpace(cnt) {
    let str = '';
  for (let i = 0; i < cnt; i++) {
    str += '  ';
    
  }
  return str;
}


function sum(name){
      "hello"
    console.log("hello",name);
}


sum('serhya');
//drawdb(1000);
