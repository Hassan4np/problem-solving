// CLASS 6 AR PROBLEM SOLVING;

// includes string tolowercase and upparcases
// const line = "ami tmr onk vlobasi tmi ki jano na koto din r aka aka vlobasbo ";

// const value = "vLoBaSbO"
// const check = line.toLowerCase().includes(value.toLowerCase());
// console.log(check);

// startwith and endwith
// const line = "ami tmr onk vlobasi tmi ki jano na koto din r aka aka vlobasbo";
// const line2 = "jani na tmi amr kto ta vlobasbo"
// const value = line.endsWith("ami");
// const value = line.startsWith("ami");
// console.log(value);


// .split / slice / substring / concrete / join
// const value = line.split(" ");
// const add = value.join(" ")
// console.log(add);
// -- -- -- -- -- -- -- -- -
// const valueadd2 = line.concat(line2);
// console.log(valueadd2)
// -- -- -- -- -- -- -- -- -- -- -- -- -- -
// const value = line.slice(3, 10);
// console.log(value);
// -- -- -- -- -- -- -- --
// const str = 'Mozilla';
// console.log(str.substring(1, 3));
// // Expected output: "oz"

// console.log(str.substring(2));
// // Expected output: "zilla"


// math.pow / math.abs / math.round / math.ceil / math.foor / math.random
// const num = 3;
// const value = Math.pow(num, 3)
// console.log(value);

// const absulit = Math.abs(-23);
// console.log(absulit);

// const absulit = Math.round(23.51);
// console.log(absulit);
// const absulit = Math.ceil(23.41);
// console.log(absulit);
// const absulit = Math.floor(23.99);
// console.log(absulit);
// for (i = 0; i < 10; i++) {
//     const num = Math.round(Math.random() * 10);
//     console.log(num);
// }


// swap
// let num1 = 26;
// let num2 = 30;
// console.log(num1, num2)
// let temp = num1;
// num1 = num2;
// num2 = temp;
// console.log(num1, num2);
// [num1, num2] = [num2, num1]
// console.log(num1, num2)


// 3 number max ber / min korte hobe
// const num1 = 16;
// const num2 = 10;
// const num3 = 9;
// if (num1 > num2 && num1 > num3) {
//     console.log(num1);
// } else if (num2 > num1 && num2 > num3) {
//     console.log(num2);
// } else {
//     console.log(num3);
// }

// function maxnumber(nums) {
//     leargst = nums[0];
//     for (i = 1; i < nums.length; i++) {
//         if (leargst < nums[i]) {
//             leargst = nums[i];
//         }
//     }
//     return leargst;
// }
// const nums = [10, 60, 36, 96, 53, 23, 56, 52, 32, 223, 36, 6, 9];
// const allnumber = maxnumber(nums);
// console.log(allnumber);

// function maxnumber(nums) {
//     smallest = nums[0];
//     for (i = 1; i < nums.length; i++) {
//         if (smallest > nums[i]) {
//             smallest = nums[i];
//         }
//     }
//     return smallest;
// }
// const nums = [10, 60, 36, 96, 53, -1, 23, 56, 52, 32, 223, 36, 6, 9];
// const allnumber = maxnumber(nums);
// console.log(allnumber);

// const nums = [10, 60, 36];
// const max = nums.reduce((a, b) => Math.max(a, b), -Infinity);
// console.log(max);
// const x = 10;
// const y = -20;
// const z = Math.min(x, y); // -20
// console.log(z);


// array moddo thake max / min length number ber korte hobe.
// function arrayreturns(arra) {
//     let allstr = ''
//     for (i = 0; i < arra.length; i++) {
//         allstr = allstr + arra[i];
//     }
//     return allstr;

// }
// const arra = "tmi ki jano na sabi ke ak sathe kaj korte  hobe na hole hobe na"
// const all = arrayreturns(arra);
// console.log(all);


// max lenath
// function arrayreturns(arra) {
//     let maxlength = arra[0]

//     for (i = 1; i < arra.length; i++) {
//         if (maxlength.length < arra[i].length) {
//             maxname = arra[i]
//         }
//     }
//     return maxname;
//     // return maxlength
// }
// const arra = ['hassan', 'bappy', 'mahmud', 'emon khan', 'sagor']
// const all = arrayreturns(arra);
// console.log(all);

// function arrayreturns(arra) {
//     let minlength = arra[0]

//     for (i = 1; i < arra.length; i++) {
//         if (minlength.length > arra[i].length) {
//             minname = arra[i]
//         }
//     }
//     return minname;
//     // return maxlength
// }
// const arra = ['hassan', 'bappy', 'mahmud', 'emon khan', 'sagor', 'ol']
// const all = arrayreturns(arra);
// console.log(all);


// fibonacchi numberf

// function Fibonucchi() {
//     const fibo = [0, 1];
//     for (i = 2; i < 10; i++) {
//         fibo[i] = fibo[i - 1] + fibo[i - 2];

//     }
//     return fibo;
// }
// const numbers = Fibonucchi();
// console.log(numbers);


// letter and word revarce and output this string
// function Wordrevarce(a) {
//     let linecut = a.split(" ");
//     let revarce = [""]
//     for (i = linecut.length - 1; i >= 0; i--) {
//         revarce = revarce + " " + linecut[i];
//     }
//     return revarce;
// }

// line = "onk shodna por pelam tme mon pelam khube tmr ami ak jibon";
// const linehut = Wordrevarce(line)
// console.log(linehut)

// function Wordrevarce(a) {

//     let revarce = [""]
//     for (i = a.length - 1; i >= 0; i--) {
//         revarce = revarce + a[i];
//         // revarce = revarce + " " + a[i];

//     }
//     return revarce;
// }

// line = "onk shodna por pelam tme mon pelam khube tmr ami ak jibon";
// const linehut = Wordrevarce(line)
// console.log(linehut)


// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

// CLASS 5 AR PROBEM SOLVING;

// // Inche to fitf
// function FiteCount(number) {
//     const fit = number / 12;
//     return fit
// }
// const allfit = FiteCount(180);
// console.log(allfit);



// // odd / even number
// function EvenOddNumber(num) {
//     if (num % 2 == 0) {
//         return true
//     }
//     return false
// };
// const numbrs = 27
// const evenoddnumbr = EvenOddNumber(numbrs);
// console.log(evenoddnumbr);


// // km to mile convate
// function MileToKm(num) {
//     const mile = num * 1.61;
//     return mile
// }
// const km = 12;
// const miletokm = MileToKm(km);
// console.log(miletokm);


// // lepear year

// function LeparYear(year) {
//     // if (year % 4 == 0 $$ year % 100 != 0 || year % 400 == 0) {
//     //     return true

//     //     return false
//     if (year % 4 == 0) {
//         return true
//     };
//     return false
// };
// const years = 2022;
// const lepar = LeparYear(years);
// console.log(lepar);


// //  Array sum number
// function ArryNumberSum(NumerList) {
//     let sum = 0;
//     for (let i = 0; i < NumerList.length; i++) {
//         sum = sum + NumerList[i];
//     }
//     return sum
// };
// const Numbers = [10, 30, 20, 54, 20];
// const AllSum = ArryNumberSum(Numbers);
// console.log(AllSum);


// // array moddo thkale odd number list ber kore and tar sum ber kora
// function ArrayList(Numberlist) {
//     AllOddNum = []
//     for (let i = 0; i < Numberlist.length; i++) {
//         const list = Numberlist[i];
//         if (list % 2 == 1) {
//             AllOddNum.push(list)
//         }

//     }
//     return AllOddNum
// };
// const NumbersList = [10, 31, 21, 54, 23, 40, 32, 65];
// const ListArray = ArrayList(NumbersList);
// console.log(ListArray);
// const sumallarray = ArryNumberSum(ListArray);
// console.log(sumallarray);


// fictral number

// function Factrial(num) {
//     let nums = 1
//     for (i = 1; i <= num; i++) {
//         console.log(i)
//         nums = nums * i;

//     }
//     return nums
// };

// const numbers = Factrial(5);
// console.log(numbers)


// lepart list number 
// if (year % 4 == 0 $$ year % 100 != 0 || year % 400 == 0) 
// function LeparList(leparlistNumber) {
//     let leparlist = []
//     for (let i = 0; i < leparlistNumber.length; i++) {
//         const element = leparlistNumber[i];
//         if ((element % 4 == 0) && (element % 100 != 0) || (element % 400 == 0)) {
//             leparlist.push(element);
//         }
//     }
//     return leparlist
// };
// const years = [2010, 2021, 2020, 2021, 2024, 1972, 2025, 2030, 2028];
// const AllListLepaar = LeparList(years);
// console.log(AllListLepaar);



// // Hour to minits
// function HourToList(hour) {
//     const element = hour * 60
//     return element
// };
// const hournumner = 3;
// const minit = HourToList(hournumner);
// console.log(minit);


// // revarce factioal
// function Factrial(num) {
//     let nums = 1
//     for (i = num; i >= 1; i--) {
//         console.log(i)
//         nums = nums * i;

//     }
//     return nums
// };

// const numbers = Factrial(5);
// console.log(numb

// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -

// CLASS 4 AR PROBEM SOLVING;

// Problen solving
// let color = "red";
// switch (color) {
//     case 'green':
//         console.log("you are green");
//         break
//     case "yellow":
//         console.log("you are yello");
//         break
//     case "red":
//         console.log("you are red");
//         break
//     case "blue":
//         console.log("you are blue");
//         break
//     default:
//         console.log("no color")

// }
// avarge array

// let nubber = [12, 34, 25]
// let sum = 0;
// for (let numbers of nubber) {
//     sum = sum + numbers;
// };
// let avarge = sum / nubber.length;A
// let ack = avarge.toFixed(2);
// console.log(ack);
// function evenoddnumber(a) {
//     if (a % 2 == 0) {
//         console.log("even number");
//     } else {
//         console.log("odd number");
//     }
// }
// let number = 11;
// evenoddnumber(number);

//------------------------------------------------------------------------------------------------------------------

// CLASS 1 ST AR PROBELM SOLVING;

// for (var i = 0; i <= 20; i++) {
//     console.log("my first project");
// }
// var i = 0;
// while (i <= 10) {
//     console.log("secend project");
//     i++;
// };
// var a = [10, 20, 30, 20, 50, 40, 60, 520, 50, 65, 98, 45, 632, 32];
// var i = 0;
// while (i <= a.length) {
//     var c = a[i];
//     var d = c + a[i];
//     i++;
//     console.log(d)
// }
// var a = [10, 20, 30, 20, 50, 40, 60, 520, 50, 65, 98, 45, 632, 32];
// var b = a.indexOf(50);
// b = a[5];
// console.log(b);

// var a = 100;
// var b = 50
// if (a > b) {
//     console.log("possticve number")
// } else {
//     console.log("negtive number")
// }

//----------------------------------------------------------------------------------------------------------------

// SESSION 2 AR RPOBLEM SOLVING// let result = "hassan ali"
// let resultis = result.includes("alis");
// console.log(resultis);

// let alimal = ['hours', 'pet', 'crock', 'bird', 'sagol']
// let list = alimal.includes("pet");
// console.log(list);

// let alimal = ['hours', 'pet', 'crock', 'bird', 'sagol'];
// let list = alimal.pop();
// alimal.push("mad");
// alimal.shift("box");
// alimal.unshift("jack");
// console.log(alimal);



// let number = [10, 20, 30, 40, 50, 60, 20];
// let result = number.slice(2, 5);
// console.log(result);

// let number = [10, 20, 30, 40, 50, 60, 20];
// number.splice(2, 2, 70);
// console.log(number);


// function LEARGENUMBER(a) {
//     let leargst = a[0];
//     for (i = 1; i < a.length; i++) {
//         const num = a[i]
//         if (num > leargst) {
//             leargst = num;
//         }
//     }
//     return leargst
// }
// a = [10, 20, 30, 21, 22, 33, 5, 1, 20, 23, 33, 533, 322, 23, 30, 96, 32];
// const bignumber = LEARGENUMBER(a);
// console.log(bignumber);


// function Leargenumber(a) {
//     let leargst = a[0];
//     for (item of a) {
//         if (item > leargst) {
//             leargst = item
//         }
//     }
//     return leargst;
// };
// a = [10, 20, 30, 21, 22, 33, 5, 1, 20, 23, 33, 322, 23, 30, 96, 32];
// const bignumber = Leargenumber(a);
// console.log(bignumber); 

// function Voualcount(s) {
//     if (typeof s != "string") {
//         return "place string input"
//     }
//     let voul = 0;
//     let con = 0;
//     let sprace = 0;
//     for (i = 0; i < s.length; i++) {
//         let char = s[i];
//         if (char == "a" || char == "e" || char == "i" || char == "o" || char == "y") {
//             // voul = voul +
//             voul++;
//             console.log(voul);
//         } else if (char == " ") {
//             sprace++
//         } else {
//             con++;
//             console.log(con);
//         }
//     }
//     const obj = {
//         voual: voul,
//         constul: con,
//         sprac: sprace,
//     }
//     return obj

// }
// const s = "ami tme onk vlobasi tmi ki amr vlo valo";
// const all = Voualcount(s);
// console.log(all);l);


// CLASS 7 AR PROBELM SOLVING;


// //1. duplacate array;
// const names = ['hassan', 'sagor', 'munna', 'arif', 'hossain', 'bappy', 'hassan', 'ralse', 'bappy', 'munna'];

// function DuplacateArray(name) {
//     let MainName = []
//         // for (item of name) {
//         //     if (MainName.includes(item) === false) {
//         //         MainName.push(item);
//         //     }
//         // }
//     for (i = 0; i < name.length; i++) {
//         let item = name[i];
//         if (MainName.includes(item) === false) {
//             MainName.push(item);
//         }
//     }
//     return MainName;
// }
// const mainname = DuplacateArray(names);
// console.log(mainname);


// //2. 1-50 projento number moddo 3 diye vag gele print foo 5 diye gele print bar r 3 and 5 diye gele print foobar hobe;
// for (i = 1; i <= 50; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("foobar");
//     } else if (i % 3 === 0) {
//         console.log("foo");
//     } else if (i % 5 === 0) {
//         console.log("bar");
//     } else {
//         console.log(i);
//     }
// }


// //3. array moddo obj rekhe tar por tar moddo kar phn ar dam basi oti ber korte hobe;

// maxprice = [
//     { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue", parice: 2000 },
//     {
//         firstName: "rose",
//         lastName: "Doe",
//         age: 23,
//         eyeColor: "blue",
//         parice: 300
//     },
//     { firstName: "rnike", lastName: "Doe", age: 65, eyeColor: "blue", parice: 6000 },
//     { firstName: "roon", lastName: "Doe", age: 654, eyeColor: "blue", parice: 8000 },
// ]

// function AllPrice(item) {
//     let maxpricess = item[0];
//     for (i = 0; i < item.length; i++) {
//         if (maxpricess.parice < item[i].parice) {
//             maxpricess = item[i];
//         }
//     }
//     return maxpricess;
// }
// const allitem = AllPrice(maxprice);
// console.log(allitem);

//4. array moddo obj rekhe tar por tar moddo kar phn ar quntaty hisabe dam ber korte hobe sum phn;

// const maxpriceall = [
//     { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue", parice: 2222, quantaty: 2 },
//     { firstName: "rnike", lastName: "Doe", age: 65, eyeColor: "blue", parice: 474, quantaty: 3 },
//     { firstName: "roon", lastName: "Doe", age: 654, eyeColor: "blue", parice: 424, quantaty: 4 },
//     { firstName: "hasan", lastName: "Doe", age: 654, eyeColor: "blue", parice: 9242, quantaty: 4 },
// ];

// function AllPriceProduct(product) {
//     let allprice = 0;
//     for (item of product) {
//         let itemall = item.parice * item.quantaty;
//         allprice = allprice + itemall;

//     }
//     return allprice
// }
// const allroductprice = AllPriceProduct(maxpriceall);
// console.log(allroductprice + " tk");


// //5. ticket 100 jonno 100tk and100- 200 jonno 90 tk and 200+ ar jonno 70tk mto kto tk hobe ber korte hobe.
// const num = 201;

// function TickteCount(value) {
//     const partic100 = 100;
//     const partic200 = 90;
//     const partic200up = 70;
//     if (value <= 100) {
//         let total100price = value * partic100;
//         return total100price
//     } else if (value <= 200) {
//         let par100price = 100 * partic100;
//         let total200price = value - 100;
//         let total200ticketpeice = par100price + total200price * partic200
//         return total200ticketpeice
//     } else {
//         let par100price = 100 * partic100;
//         let par200price = 100 * 90
//         let total200up = value - 200;
//         let total200upprice = par100price + par200price + total200up * partic200up
//         return total200upprice
//     }
// }
// const alprice = TickteCount(num);
// console.log(alprice);


// //6. number type check korte hobe valid ase ki na

// function add(a, b) {
//     if (typeof a !== "number" || typeof b !== "number") {
//         return ("number is not a valid");
//     }
//     let c = a + b;
//     return c
// }
// const adds = add(12, 12);
// console.log(adds);