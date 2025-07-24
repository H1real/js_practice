const Timoha = ["hndyl", "shynshl", "bcndyl", "bcsyndyl", "tcndyl"];
// show in console bcsyndyl
console.log(Timoha[2])


const tcndyl =[3, ["rcnshyl"], ["shnshyl", "bcncnyl", 3627.5], 10];
//show in console shnshyl
console.log(tcndyl[2][0])

var tymofing = [1,2,5,6];

console.log(tymofing);
tymofing.push("serhii");
console.log(tymofing);
tymofing.push("nastya");
console.log(tymofing);
tymofing.push("fanatia");
//show in console fanatia
console.log(tymofing)


const sh = [0, 'hello', 'dddd'];
console.log(sh);
sh.unshift("gogogo");
//show in console hello
console.log(sh);

const Numbers = ["1", "2", '3', '4', '5'];

const teat =[3, ["rcnshyl"], ["shnshyl", "bcncnyl", 3627.5]];

teat.pop();

console.log(Numbers.length);

//delete
console.log(teat);


// conditions
var packages = "boxes";
 
if (packages.length < 3) {
    console.log("This is not what i wanted");
} else if (packages.length > 10) {
    console.log("Too much");
} else {
    console.log("Gift "+ packages, ' - it`s what i need');
}

//loops

var packages = 0;
while (packages < 10) {
    console.log("You gave me " + packages + " That's what i need");
    packages++;
}

var presents = "boxes";

var presents = 2;
while (presents < 3) {
    console.log("I have " + presents + " presents!")
    presents++;
}

var dog = {"second type": "run"};
dog["ears"] = 2;
dog["name"] = "Greg";
dog["color"] = "Orange";
console.log(Object.keys(dog));
//var obj = { color: "Orange", ears: 2, name: "Greg"}

var brothers = [
    { name: "Tom", year: "2006" },
    { name: "Mat", year: "2009" },
];

console.log(brothers[0][""]);