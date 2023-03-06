var emp={
    "squadName": "Super hero squad",
    "homeTown": "Metro City",
    "formed": 2016,
    "secretBase": "Super tower",
    "active": true,
    "members": [
    {
    "name": "Molecule Man",
    "age": 29,
    "secretIdentity": "Dan Jukes",
    "powers": [
    "Radiation resistance",
    "Turning tiny",
    "Radiation blast",
    "Heat Immunity",
    "Damage resistance",
    ]
    },
    {
    "name": "Madame Uppercut",
    "age": 39,
    "secretIdentity": "Jane Wilson",
    "powers": [
    "Million tonne punch",
    "Damage resistance",
    "Superhuman reflexes",
    "Radiation resistance",
    
    ]
    },
    {
    "name": "Eternal Flame",
    "age": 25,
    "secretIdentity": "Unknown",
    "powers": [
    "Immortality",
    "Heat Immunity",
    "Inferno",
    "Teleportation",
    "Interdimensional travel"
    ]
    }
    ]
    }
  
    let a=emp.members.map((b)=>{
      if(b.age>25){
        console.log(b.name);
      }
    })
     
    
    