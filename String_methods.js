var a=[
    {"name":"vinnu","salary":2000,village:"vizag"},
    {"name":"koti","salary":3000,"village":"srikakulam"},
    {"name":"sai","salary":4000,"village":"vizag"},]
//     for(var i = 0; i < a.length; i++) {
//         if(a[i].village=="vizag"){
//             console.log(a[i].name);
//         }
        
//     }

    
  

    // for(var i=0;i<a.length;i++){
    //     if(a[i].village=="vizag"){
    //         console.log(a[i]);
    //     }
    // }
  

for(var i=0;i<a.length;i++){
    if(a[i].village=="vizag"){
        var b=a[i].name
        console.log(b.split());
    }
}