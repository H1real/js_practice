
var text;
var num = 2;

console.log('our text is ',text, 'our number is ', num);


text = 'Hello';

console.log('our text is ',text, 'our number is ', num);

function calculator(a, b, operation) {

    if (operation === '+') {
        return a + b;
    }
    if (operation === '-') {
        return a - b;
    }
    if (operation === '/') {
        return a/b;
    }
    if (operation === '*') {
        return a*b;
    }

}

console.log(calculator(4, 157,'*'));

var moms = 1;
++moms;
//2
++moms;
//3
--moms;
//2
console.log(moms);

var dads = 10;
dads = dads + 60;
dads;

console.log(dads);

var UHD = 1440;
var mega_UHD = 2160;
diff = mega_UHD - UHD;

console.log('uhd = ', UHD, ' mega_uhd = ', mega_UHD, ' diff = ', calculator(mega_UHD,UHD,'-'));


var mid = 480;
diff - mid;
var diff2 = diff - mid;

console.log('diff = ', diff, ' mid = ', mid, ' diff2 = ', diff2);