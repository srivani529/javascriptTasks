let orderData = [
{"id":"1","item":"laptop","status":"Y"},
{"id":"2","item":"laptop","status":"Y"},
{"id":"1","item":"desktop","status":"Y"},
{"id":"2","item":"vm","status":"Y"},
{"id":"5","item":"desktop","status":"N"}
]
  

var g=orderData.filter((x)=>
{
    if(x.status=="Y")
    {
        return x;
    }
})



var h=g.sort((x,y)=>-(x.id<y.id)||+(x.id>y.id));

const j = (array, key) => {
    return array.reduce((h, currentValue) => {
    (h[currentValue[key]] = h[currentValue[key]] || []).push(currentValue);
    return h;
    }, {});
    };
    var z = j(h, "id");
    console.log(g);