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
// workate = workdate.reduce((o, k, i) => ({...o, [k]: date[i]}), {});  
// workDatename = workdateName.reduce((o, k, i) => ({...o, [k]: day[i]}), {});
// var k=[];
// k.push(workate,{workDatename});
// var p={"workDate":k}
// console.log(JSON.stringify(p));



// let a=Object.keys(data);
// let c=a.filter(d=>!d.includes("Name"));
// let e=a.filter(d=>d.includes("Name"));
// let b=Object.values(data);
// let f=b.filter(d=>d.includes("day"));
// let g=b.filter(d=>!d.includes("day"));
// let h=c.reduce((i,j,k)=>({...i, [j]: g[k]}),{});
// let WorkDateName=e.reduce((k,m,n)=>({...k, [m]: f[n]}),{});
// var o=[];
// o.push(h,{WorkDateName});
// var p={"WorkDate":o}
// console.log(JSON.stringify(p));