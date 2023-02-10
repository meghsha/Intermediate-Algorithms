//Sum All Numbers in a Range
function sumAll(arr) {
    arr = arr.sort(function(a,b){
      return a - b;
    })
    let newNum = 0;
    for(let i=arr[0]; i<=arr[1]; i++){
      newNum += i;
    }
    return newNum;
  }
  sumAll([1, 4]);
  
  //Diff Two Arrays
  function diffArray(arr1, arr2) {
    const newArr = [];
    for(let i=0; i<arr1.length; i++){
      if(arr2.indexOf(arr1[i])==-1){
        newArr.push(arr1[i])
      }
    }
    for(let j=0; j<arr2.length; j++){
      if(arr1.indexOf(arr2[j])==-1){
        newArr.push(arr2[j])
      }
    }
    return newArr;
  }
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
  
  //Seek and Destroy
  function destroyer(arr) {
    let results = [];
    let valstoremove = [...arguments].slice(1);
    for(let i=0; i<arr.length; i++){
      let addElement = true;
      for(let j=0; j<valstoremove.length; j++){
        if(arr[i] === valstoremove[j]){
          addElement = false;
        }
      }
      if(addElement){
        results.push(arr[i]);
      }
    }
    return(results);
  }
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);
  
  //Wherefore art thou
  function whatIsInAName(collection, source) {
    const sourceKeys = Object.keys(source);
    // console.log(souceKeys)
    let newArr = collection.filter(obj => sourceKeys
    .every(key => obj.hasOwnProperty(key) && obj[key] === source[key]))
    return newArr;
  }
  whatIsInAName([{ first: "Romeo", last: "Montague" }, 
  { first: "Mercutio", last: null }, 
  { first: "Tybalt", last: "Capulet" }]
  , { last: "Capulet" });
  
  //Spinal Tap Case
  function spinalCase(str) {
    return str
      .split(/\s|_|(?=[A-Z])/)
      .join("-")
      .toLowerCase();
  }
  spinalCase("AllThe-small Things")
  
  //Pig Latin
  function translatePigLatin(str) {
    let regex = /^[^aeiou]+/
    let myConsonents = str.match(regex)
    if(myConsonents !== null){
      return str.replace(myConsonents, "")
      .concat(myConsonents)
      .concat("ay");
    } else {
      return str + "way";
    }
  }
  translatePigLatin("aonsonant");
  
  //Search and Replace
  function myReplace(str, before, after) {
    str = str.split(" ")
    let indexVal = str.indexOf(before);
    let regex = /[A-Z]/
    let Before = "";
    let After = "";
    if(before.charAt(0).match(regex)){
      After = after.charAt(0).toUpperCase() + after.slice(1);
      str.splice(indexVal, 1, After);
      return str.join(" ");
    } else if(after.charAt(0).match(regex)){
      Before = after.charAt(0).toLowerCase() + after.slice(1);
      str.splice(indexVal, 1, Before);
      return str.join(" ");
    }
    else {
      str.splice(indexVal, 1, after);
      return str.join(" ");
    }
  }
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
  
  //DNA Pairing
  function pairElement(str) {
    let result = [];
    let newArr = str.split("")
    // console.log(newArr)
    for(let i=0; i<newArr.length; i++){
      if(newArr[i] == 'G'){
        result.push(['G', 'C'])
      } else if(newArr[i] == 'C'){
        result.push(['C', 'G'])
      } else if(newArr[i] == 'T'){
        result.push(['T', 'A'])
      } else if (newArr[i] == 'A'){
        result.push(['A', 'T'])
      } 
    }
    return result;
  }
  pairElement("GCG");
  
  //Missing letters
  function fearNotLetter(str) {
    for(let i=0; i<str.length; i++){
      let code = str.charCodeAt(i)
      
      if(code !== str.charCodeAt(0) + i){
        console.log(String.fromCharCode(code - 1))
        return String.fromCharCode(code - 1)
      }
    }
    return undefined;
  }
  fearNotLetter("abce");
  
  //Sorted Union
  function uniteUnique(arr) {
    const args = [...arguments];
    const result = [];
    for (let i = 0; i < args.length; i++) {
      for (let j = 0; j < args[i].length; j++) {
        if (!result.includes(args[i][j])) {
          result.push(args[i][j]);
        }
      }
    }
    return result;
  }
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
  
  //Convert HTML Entities
  function convertHTML(str) {
    var newStr = str.split("");
    for (var i = 0; i < newStr.length; i++) {
      switch (newStr[i]) {
        case "<":
          temp[i] = "&lt;";
          break;
        case "&":
          temp[i] = "&amp;";
          break;
        case ">":
          temp[i] = "&gt;";
          break;
        case '"':
          temp[i] = "&quot;";
          break;
        case "'":
          temp[i] = "&apos;";
          break;
      }
    }
  
    newStr = newStr.join("");
    return newStr;
  }
  convertHTML("Dolce & Gabbana");
  
  //Sum All Odd Fibonacci Numbers
  function sumFibs(num) {
    let newArr = [1, 1];
    let sum = 0;
    if(num == 1){
      newArr.splice(0, 2, 1)
    }
    if(num == 2){
      newArr.splice(0, 2, 1, 1)
    }
    for(let i=2; i<=num; i++){
      newArr.push(newArr[i-1]+newArr[i-2])
    }
    console.log(newArr)
    sum = newArr.filter(elem => elem%2 != 0 && elem<=num).reduce((acc, elem) => acc + elem, 0)
    return sum;
  }
  sumFibs(2);
  
  //Sum All Primes
  function sumPrimes(num) {
    let sum = 0;
    let primes = [2]
    // if(num == 2){
    //   primes = [2]
    // }
    for(let i=3; i<=num; i++){
      let flag = true;
      for(let j=2; j<i; j++){
        if(i%j == 0){
          flag = false;
        }
      }
      if(flag){
        primes.push(i)
      }
    }
    console.log(primes)
    sum = primes.reduce((acc, elem) => acc + elem, 0)
    return sum;
  }
  sumPrimes(10);
  
  //Smallest Common Multiple
  function smallestCommons(arr) {
    //Array destructuring
    let [min, max] = arr.sort(function(a, b){
      return a-b;
    })
    // console.log(min, max, jhandu)
    let divisorsNumber = max - min + 1;
    let upperBound = 1;
    for(let i=min; i<=max; i++){
      upperBound *= i;
    }
    // console.log(upperBound)
    for(let mul = max; mul<=upperBound; mul++){
      let divisorsCount = 0;
      for(let j=min; j<=max; j++){
        if(mul % j == 0){
          divisorsCount++;
        }
      }
      if(divisorsCount == divisorsNumber){
        return mul;
      }
    }
  }
  smallestCommons([1,5]);
  
  //Drop it
  function dropElements(arr, func) {
    let Len = arr.length;
    for(let i = 0; i<Len; i++){
      if(func(arr[0])){
        break;
      } else{
        arr.shift();
      }
    }
    return arr;
  }
  dropElements([1, 2, 3, 4], function(n) {return n > 4;})
  
  //Deeply nested flatten array
  function steamrollArray(arr) {
    const flat = [].concat(...arr);
    // console.log(flat)
    return flat.some(item => Array.isArray(item)) ? steamrollArray(flat) : flat;
  }
  steamrollArray([1, [2], [3, [[4]]]])
  
  //Binay to string
  function binaryAgent(str) {
    let newArr = str.split(" ")
    let uniString = [];
    for(let i=0; i<newArr.length; i++){
      uniString.push(parseInt(newArr[i], 2))
    }
    let newString = []
    for(let i=0; i<uniString.length; i++){
      newString.push(String.fromCharCode(uniString[i]))
    }
    return newString.join("")
  }
  binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 
              01100010 01101111 01101110 01100110 01101001 01110010 01100101 
              01110011 00100000 01100110 01110101 01101110 00100001 00111111");
  //New Approach
  function binaryAgent(str) {
    // Separate the binary code by space.
    str = str.split(" ");
    var power;
    var decValue = 0;
    var sentence = "";
    // Check each binary number from the array.
    for (var s = 0; s < str.length; s++) {
      // Check each bit from binary number
      for (var t = 0; t < str[s].length; t++) {
        // This only takes into consideration the active ones.
        if (str[s][t] == 1) {
          // This is quivalent to 2 ** position
          power = Math.pow(2, +str[s].length - t - 1);
          // console.log(power);
          decValue += power;
          // console.log(decValue);
          // Record the decimal value by adding the number to the previous one.
        }
      }
      // After the binary number is converted to decimal, convert it to string and store
      sentence += String.fromCharCode(decValue);
      // Reset decimal value for next binary number.
      decValue = 0;
    }
    return sentence;
  }
  binaryAgent(
    "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 
  01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
  );
  
  //Everything Be True
  function truthCheck(collection, pre) {
    let counter = 0;
    let newArr = [];
    for(let item in collection){
      if(collection[item].hasOwnProperty(pre) && Boolean(collection[item][pre])){
        counter++
      }
    }
    if(counter == collection.length){
      return true;
    } else {
      return false;
    }
  }
  truthCheck([{name: "Quincy", role: "Founder", isBot: false}, 
  {name: "Naomi", role: "", isBot: false}, 
  {name: "Camperbot", role: "Bot", isBot: true}], "isBot");
  
  //Arguments Optional | Currying
  function addTogether(...args) {
    let [one, two] = args;
    if(typeof one == 'number' && typeof two == 'number'){
      return one + two;
    }
    if(typeof one == 'number' && args.length == 1){
      return function curried(num){
        if(typeof num == 'number'){
          return num + one
        }
      }
    }
  }
  addTogether(2,3);
  //Alternate Approach of currying
  function addTogether() {
    const [one, two] = arguments;
    if(typeof one != 'number'){
      return undefined;
    } else if(arguments.length == 1){
      return (two) => addTogether(one, two)
    } else if(typeof two != 'number'){
      return undefined;
    }
    return one + two;
  }
  addTogether(2,3);
  
  //Make a Person | OOPS
  const Person = function(firstAndLast) {
    this.getFirstName = function() {
      return firstAndLast.split(" ").splice(0, 1).join(" ");
    }
    this.getLastName = function() {
      return firstAndLast.split(" ").slice(1).join(" ");
    }
    this.getFullName = function() {
      return firstAndLast;
    };
    this.setFirstName = function(name) {
      firstAndLast = name + " " + firstAndLast.split(" ").slice(1).join(" ") ;
    };
    this.setLastName = function(name) {
      firstAndLast = firstAndLast.split(" ").splice(0, 1).join(" ") + " " + name;
    };
    this.setFullName = function(name) {
      firstAndLast = name;
    };
    // return firstAndLast;
  };
  const bob = new Person('Bob Ross');
  console.log(bob.getFirstName())
  console.log(bob.getLastName())
  
  //Object and implementation of a formula
  function orbitalPeriod(arr) {
    let GM = 398600.4418;
    let earthRadius = 6367.4447;
    let a = 2 * Math.PI;
    let newArr = [];
    let getOrbPeriod = function(obj) {
      let c = Math.pow(earthRadius + obj.avgAlt, 3);
      let b = Math.sqrt(c / GM);
      let orbPeriod = Math.round(a * b);
      // creating new object
      return {name: obj.name, orbitalPeriod: orbPeriod};
    };
    for (let elem in arr) {
      newArr.push(getOrbPeriod(arr[elem]));
    }
    return newArr;
  }
  orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);