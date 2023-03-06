var data = {
  workDate1: "23-10-2022",
  workDate1Name: "Sunday",
  workDate2: "24-10-2022",
  workDate2Name: "Monday",
  workDate3: "25-10-2022",
  workDate3Name: "Tuesday",
  workDate4: "26-10-2022",
  workDate4Name: "Wednesday",
  workDate5: "27-10-2022",
  workDate5Name: "Thursday",
  workDate6: "28-10-2022",
  workDate7: "29-10-2022",
  workDate7Name: "Saturday",
};

// let a=Object.keys(data);
// let dates=Object.values(data);
// let workdate=a.filter((c)=>!c.includes("Name"));
// let date=dates.filter((t)=>!t.includes("day"));
// let workdateName=a.filter((e)=>e.includes("Name"));
// let day=dates.filter((m)=>m.includes("day"))
//              function c(workdate,date){
//               if(workdate.length !=date.length || workdate.length==0 || date.length==0){return null; }
//        let s={};
//        workdate.forEach((c,d)=>{s[c]=date[d]});return s; }
//        let workDate=(c(workdate,date));
   
//       function c(workdateName,day){
//               if(workdateName.length !=day.length || workdateName.length==0 || day.length==0){return null;}
//        let m={};
//        workdateName.forEach((c,d)=>{m[c]=day[d]});return m; }
//        let workDatename=(c(workdateName,day));
//        var h=[];
//        h.push({workDate,workDatename})
//        console.log(JSON.stringify(h));
         
   //(or)

   let a=Object.keys(data);
let dates=Object.values(data);
let workdate=a.filter((c)=>!c.includes("Name"));
let date=dates.filter((t)=>!t.includes("day"));
let workdateName=a.filter((e)=>e.includes("Name"));
let day=dates.filter((m)=>m.includes("day"))
workDate = workdate.reduce((o, k, i) => ({...o, [k]: date[i]}), {});  
workDatename = workdateName.reduce((o, k, i) => ({...o, [k]: day[i]}), {});
 var h=[];
 h.push({workDate,workDatename})
console.log(JSON.stringify(h));


    