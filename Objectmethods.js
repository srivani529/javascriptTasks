// object.create() method

//   const a={b:function(){
//   console.log(`My name is ${this.name}`)}}
//   const c=Object.create(a)
//   c.name="vineetha",
//   c.b();


//Object.entries()

// const b={"vinnu":'chinnu',koti:20,'sai':'ganesh'}
// console.log(Object.entries(b)[1])


// Object.values()
// const b={"vinnu":'chinnu',20:'kanna','sai':'ganesh'}
// console.log(Object.entries(b))

//Object.is()
// const b=Object.assign(22,6)
// console.log(b)
// console.log(Object.isSealed(b))
// console.log(Object.isExtensible(b))

//Object.freeze()
// const b={2:2}
// console.log(Object.freeze(b))

//Object.seal()
// const obj1 = { property1: 'Marry'};  
//         const obj2 = Object.seal(obj1);  
       // prevents other code from deleting properties of an object.  
        // obj2.property1 = 'carry';  
        // console.log(obj2.property1);  




       //  const a={b:function(){
       //        console.log(`My name is ${this.name}`);
       //  }}
       //  const c=Object.create(a);
       //  c.name="vineetha";
       //  c.b();




      //converts array to objects

//       function a(b){
//        var c={};
//        b.forEach((d)=>{
//               let key=d[0];
//               let value=d[1];
//               c[key]=value;
//        })
//        return c;
//       }
//       console.log(a([["vinnu",1],["sai",2],["koti",3]]));
              //        //  (or)
              //        function a(b){
              //               return b.reduce((c,d)=>{
              //                      key=d[0];
              //                      value=d[1];
              //                      c[key]=value;
              //                      return c;
              //               },{})
                            
              //        }
              //     console.log(a([['vinnu',1],['sai',2],['koti',3]]));
           
       //create an object from two arrays
// let a=[1,2,3];
// let b=['vinnu',"sai",'koti']
// function c(a,b){
//        if(a.length !=b.length || a.length==0 || b.length==0){
//               return null;
//        }
//        let d={};
//        a.forEach((e,f)=>{d[e]=b[f]});
//        return d;
       
// }
// console.log(c(a,b));
               
                     //  (or)
       //        let a=[1,2,3];
       // let b=['vinnu','koti','sai'];
       // function c(a,b){
       //        if(a.length !=b.length || a.length==0 || b.length==0){
       //        return null;
       // }
      
       // let g=a.reduce((d,e,f)=>{return{...d,[e]:b[f]}},{})
       // return g;
       // }
       // console.log(c(a,b));
                  //(or)
       //            let a=[1,2,3];
       // let b=['vinnu','koti','sai'];
       // function c(a,b){
       //        if(a.length !=b.length || a.length==0 || b.length==0){
       //        return null;
       // }
       // return Object.assign(...a.map((c,d)=>({[c]:b[d]})))
       // }
       // console.log(c(a,b));
         

     // var a={
     //           "name":"Ram",
     //           "age":27,
     //           "vehicles": [{
     //              "car":"limousine",
     //              "bike":"ktm-duke",
     //              "plane":"lufthansa"
     //           }]
     //        }
     //        var b=a.vehicles.map(c=>c.car)
     //        console.log(b)




      
           
