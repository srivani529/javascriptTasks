
 // calback function programs

// function a(name,callback){
//     console.log('hi'+' '+name);
//     callback()
// }
// function b(){
//     console.log('hello vineetha');
// }
// a('vinnu',b)//hi vinnu
//              //hello vineetha

// callback setTimeout

// function a(name,callback){
//     console.log('hi');
//     callback(name)
// }
// function b(name){
//     console.log('hello '+ ' '+name);
// }
// setTimeout(a,2000,'vinnu',b)//hi vinnu
                            //hello vineetha

//Callback hell

// function a(callback1){
//     console.log("First");
//     callback1()
// }
// function b(callback2){
//     console.log("Second");
//     callback2()
// }
// function c(callback3){
//     console.log("Third");
//     callback3()
// }
// function d(callback4){
//     console.log("Fourth");
//     callback4()
// }
// a(function(){
//     b(function(){
//         c(function(){
//             d(function(){

//             })
//         })
//     })
// })

//synchrous/Asynchrous programs

// console.log("vinnu1")
// setTimeout(()=>{
// console.log("vinnu2")},1000)
// console.log("vinnu3")

// console.log("vinnu1")
// console.log("vinnu2")
// console.log("vinnu3")


// Program Promise
// let promise=new Promise((b,c)=>{
//     if(3==2){
//         b()
//     }
//     else{
//         c()
//     }
// })
// promise.then(()=>
// {
//     console.log("sucess")
// }).catch(()=>{
//     console.log("fail")
// })//fail


//Promise methods all(),allSettled(),any() and race()

// const promise1=Promise.resolve(3);
// const promise2=32
// const promise3=new Promise((resolve,reject)=>{
//     setTimeout(()=>
//         resolve("sucess"),1000)})

// Promise.all([promise1,promise2,promise3])
// .then((d)=>
// console.log(d))//[3,32,'sucess']

// Promise.allSettled([promise1,promise2,promise3])
// .then((d)=>
// console.log(d))//[{status:'fulfilled', value:3}]

// Promise.any([promise1,promise2,promise3])
// .then((d)=>
// console.log(d))//3


// let p1=new Promise((x,y)=>{
//     setTimeout(x,2000,"vinnu");
// })
// let p2=new Promise((x,y)=>{
//     setTimeout(x,1000,"koti");
// })
// Promise.race([p1,p2])
// .then((z)=>{console.log(z);})


//Promise chaing
// function display(){
//     let p1=new Promise((resolve)=>{
//         resolve("First")
//     })
//     let p2=new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve("Second")
//         },1000)
        
//     })
//     let p3=new Promise((resolve)=>{
//         resolve("Third")
//     })
//     p1.then((a)=>{
//         console.log(a);
//     })
//     p2.then((a)=>{
//         console.log(a);
//     })
//     p3.then((a)=>{
//         console.log(a);
//     })
// }
// display();//First
// Third
// Second

 
//Async() and await

async function display(){
    let p1=new Promise((resolve)=>{
        resolve("First")
    })
    let p2=new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Second")
        },1000)
        
    })
    let p3=new Promise((resolve)=>{
        resolve("Third")
    })
    p1.then((a)=>{
        console.log(a);
    })
    let d=await p2;
    console.log(d);
    p3.then((a)=>{
        console.log(a);
    })
}
display();//First
          //Second
         //Third






 