// var a="vineetha";
// console.log(a)

// var a=[4554,4554,55]
// console.log(a[1])


// const a=[1,5,4]
// const b=[44,22]
// console.log(a.concat(b))


// const a=["vinnu","sai"]
// console.log(a.entries(fff))
// function fff(xx){
//     return xx;
// }


// let arr=[44,55,59];
// arr.forEach((val))
//  console.log(arr);
// for (val of arr) {
//     console.log(val); 
//   }
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const f = fruits.entries();

// for (let x of f) {
//   return x;
// }


// const a=["vinnu","sowmya","sai"]
// console.log(a.join)
// var a=[60,7,33,55,77,55]
// console.log(a.findIndex(getnum))
// function getnum(nums){
//   return nums<40;
// }


// var a={firstname:"vineetha",lastname:"kondepudi",age:45};
// console.log(a.firstname)
// console.log(a.lastname)
// console.log(a.age)


// const a=[545,556,534,2421,8,776]
// console.log(a.reduce(get1))
// function get1(get2,get2){
//   return get2-get3;
// }


// let a="vineetha is Good gilr and too Good girl"
// console.log(a.endsWith("gir"))


// console.log(Number(true))
// console.log(Number(false))
 //console.log(Number.isInteger(10))
// console.log(Number("vinnu"))


// let x=new Date("1999-08-22")
// console.log(x)


//console.log(Number(new Date("1999-08-22")))

//localStorage.setItem(vinnu,kondepudi)



//JSON.stringify program
// var value = { name: "Logan", age: 21, location: "London" };
// console.log(JSON.stringify(value))


//JSON.parse program
// var txt = '{"name":"vinnu", "age":10, "class":"5th"}'
// var obj = JSON.parse(txt);
// console.log(obj.name+" age is "+obj.age+", she is studyng "+obj.class+" class")


// Arrow function programs
// let mul=(a,b)=>a*b
// console.log(mul(4,3))

// var a=["vinnu","koti"]
// a.map((x)=>
// console.log(x))

//with function
// let hello=function(){
//     return "hai vinnu"
// }
// console.log(hello())

//with arrow function
// let hello=()=>{
//     return "hai vinnu"
// }
// console.log(hello())

//with arrow function
// let hello=()=> "hai vinnu"
// console.log(hello())

//this keyword
// let names={
//     name:"vinnu",
//     arrow:()=>{
//         console.log(this.name)
//     },
//     functon(){
//         console.log(this.name)
//     }
// }
// names.arrow();
// names.functon();


// array flat() method
// let a=[2,3,4,,,,,,,,,,,,,,5,6]
// let b=a.flat(4)
// console.log(b)



//array methods
//sort method for ascending order
// let a=['vinnu','chinnu','koti','chinna']
//  console.log(a.sort())
// console.log(a.reverse())

//sort method for decending order
//let a=['vinnu','chinnu','koti','chinna']
// let b=a.sort((c,d)=>-(c>d)||+(c<d))
// console.log(b)

//localCompare for ascending order
// let a=['vinnu','chinnu','koti','chinna']
//  let b=a.sort((c,d)=>c.localeCompare(d))
//  console.log(b)

//Date methods
// const d=new Date();
// console.log(d.toString())

// const d=new Date();
// console.log(d.toDateString())

// const msec = Date.parse("March 21, 2012");
// console.log(msec)

// const d=new Date("1999-08-22");
// console.log(d.getFullYear())

// const d=new Date("1999/08/22");
//  console.log(d.getMonth())

// const d=new Date("1999/08/22");
//  console.log(d.getDate())

// const d=new Date("1999-08-28");
//  console.log(d.getDay())

// const d=new Date("1999-08-30");
//  console.log(d.getSeconds())

// const d=Date.now();
//  console.log(d.get())

// const d=new Date();
// d.setFullYear(15)
// console.log(d)




// function a(s){
//     console.log(s)
// }
// a(function add(num1,num2){
//     let sum=num1+num2;
//     return sum;
// })
// let result=add(3,4);
// myDisplayer(result)

// function a(x){
//     console.log("vinnu")
// }
// a(function b(){
//     console.log("chinnu")
// })

//console.log(Math.log(0))

// let a=[45,34,65,23,6,345,6]
//console.log(a.sort())
// let c=a.sort((c,d)=>c-d)
// console.log(c)
    
// const a=[1,2,3,4,5,6,7]
//const [one,two,...rest]=a
// const c=[...a,...b]
//const d=a.sort((b,c)=>b-c)
//console.log(two)
// console.log(a.reverse())
//  let d=Date.parse("Aug 22,1999")
//  console.log(d.toTimeString())

//var a = {name: "Shark", habitat: "Ocean"}

//     {name: "Whale", habitat: "Ocean"},
//     {name: "Lion", habitat: "Savanna"},
//     {name: "Monkey", habitat: "Jungle"}
//   ];
//    var b=Object.values(a)
//   console.log(b);

//console.log(parseFloat("10 33333l"));

//console.log(Math.round(-2.2));
 







//Practice

// let arr=["vinnu",25,"AP"]
// let obj={...arr}
// console.log(obj); //{ '0': 'vinnu', '1': 25, '2': 'AP' }

// const name="vinnu";
// var age=25;
// let country="india" 
// {
//     const name="vinnu1";
// var age=26;
// let country="india1";
// }
// console.log(name); 
// console.log(age);
// console.log(country); //vinnu 26 india

// function display()
// {
//     console.log(arguments);
// }
// display(10,"vinnu") //[Arguments] { '0': 10, '1': 'vinnu' }

// console.log("one");
// setTimeout(test,1000);
// console.log("three");
// function test(){
//     console.log("two");
// }

//  function add(a,b){
//     return{
//         sum:a+b
//     }
//  }
//  console.log(add(2,4));//{ sum: 6 }

// let show =true
// setTimeout(()=>
// {
//     show=false
// },1000)
// while(show)
// console.log("hello") //hello hello......... continue


// let a=new Date();
// console.log(a.toJSON());

// var a='hello';
// var b=Array.from(a).reverse().join("")
// console.log(b);


// var a="hello";
// var b=a.split("").reverse().join('')
// console.log(b);

// var a=['vinnu','sai','koti']
// var b=a.values()
// for(const c of b)
// console.log(c[4]);

//Remove the duplicate values 

// var a=[1,2,3,4,5,6,1,2,3,4,5]
// function b(){
//     return a.filter((c,d)=>
//         a.indexOf(c)===d
//     )
// }
// console.log(b());
        // (or)
// function b(){
//     return[...new Set(a)]
// }
// console.log(b());





// var s="hello"
// var b=Array.from(s).reverse().join("")
// console.log(b);


// var s="vinnu";
// var b=s.split("").reverse().join("")
// console.log(b);


//
// var a={'name':'vinnu','age':22,'location':'vendra',
// display: function(){
//         console.log(`my name is ${a.name} my age ${a.age} i am at ${a.location}`);
// }}
// a.display();

