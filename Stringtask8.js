// var input = [
//   "PR2062950",
//   "PR2067124",
//   "PR2069483",
//   "PR2070569",
//   "PR2073086",
//   "PR2073935",
//   "PR2074095",
//   "PR2074150",
// ];
// var a = [
//   {
//     Records: [
//       {
//         LineItems: [
//           { NumberInCollection: 1, OrderID: "" },
//           { NumberInCollection: 2, OrderID: "" },
//           { NumberInCollection: 3, OrderID: "" },
//         ],
//         StatusString: "Composing",
//         UniqueName: "PR2069483",
//         Name: "WorkBench order for REX (CANADA) MEI",
//       },
//       {
//         LineItems: [
//           { NumberInCollection: 1, OrderID: "" },
//           { NumberInCollection: 2, OrderID: "" },
//           { NumberInCollection: 3, OrderID: "" },
//           { NumberInCollection: 4, OrderID: "" },
//           { NumberInCollection: 5, OrderID: "" },
//         ],
//         StatusString: "Composing",
//         UniqueName: "PR2062950",
//         Name: "WorkBench order for DANIELLE DUBOSE",
//       },
//       {
//         LineItems: [
//           { NumberInCollection: 1, OrderID: "" },
//           { NumberInCollection: 2, OrderID: "" },
//         ],
//         StatusString: "Composing",
//         UniqueName: "PR2067124",
//         Name: "WorkBench order for CHRISTIAN (CANADA) DE LEON",
//       },
//       {
//         LineItems: [
//           { NumberInCollection: 2, OrderID: "" },
//           { NumberInCollection: 3, OrderID: "" },
//           { NumberInCollection: 4, OrderID: "" },
//           { NumberInCollection: 5, OrderID: "" },
//           { NumberInCollection: 1, OrderID: "" },
//         ],
//         StatusString: "Composing",
//         UniqueName: "PR2070569",
//         Name: "WorkBench order for MAXINE BOLTON",
//       },
//       {
//         LineItems: [
//           {
//             NumberInCollection: 1,
//             OrderID: "",
//           },
//         ],
//         StatusString: "Composing",
//         UniqueName: "PR2073086",
//         Name: "WorkBench order for CARLA (CANADA) MOREIRA",
//       },
//       {
//         LineItems: [{ NumberInCollection: 1, OrderID: "" }],
//         StatusString: "Composing",
//         UniqueName: "PR2073935",
//         Name: "WorkBench order for NOORAISHA (CANADA) SINGH",
//       },
//       {
//         LineItems: [
//           { NumberInCollection: 1, OrderID: "" },
//           { NumberInCollection: 2, OrderID: "" },
//           { NumberInCollection: 3, OrderID: "" },
//         ],
//         StatusString: "Composing",
//         UniqueName: "PR2074095",
//         Name: "WorkBench order for NICHOLAS (CANADA) BURNHAM",
//       },
//       {
//         LineItems: [{ NumberInCollection: 1, OrderID: "" }],
//         StatusString: "Composing",
//         UniqueName: "PR2074150",
//         Name: "WorkBench order for RASHEED R (CANADA) MOHAMMED",
//       },
//     ],
//   },
// ];



// var b=a.map(c=>c.Records).flat()
// var d=b.map(e=>e.UniqueName);
// var f=input.concat(d);
// console.log([...new Set(f)]);


let user={
  name:"vinnu",
arrow:()=>{
  console.log(this.name);
},
function(){
  console.log(this.name);
}}
user.arrow();
user.function();



    