// How to create a object in js 
let person = {
    name: "Prabhat",
    age: 23,
    Qualification: "MCA",
    address : {
        city: "Pauri Garhwal",
        state: "Uttarakhand",
        country: "India"
    }
}
// print key and value pairs in an object
console.log("Print object key value pairs : ", person)

// Print all keys in an object using for-in loop.
for(let key in person){
    console.log(key) // print all keys only
    // if we want to print key with values then write
    // console.log(key ,"=>>", person[key])
}


// if we want array of keys then
console.log("Printing all keys in an array : ",Object.keys(person))

// if we want array of values then
console.log("Printing all values in an array: ",Object.values(person))

// if we want both key and values in an array then 
console.log("Both key and value pairs in an array : ",Object.entries(person))

// Cloning and object using assign 
let new_person = Object.assign( {} , person ) 
console.log("Cloning old object to the New Object => ",new_person)
// It simply means person Object is assigned using curly braces to the new_person Object.

//Cloning and adding some additional features
let new_person1 = Object.assign({}, person, {role : "Web Developer"}) 
console.log("Cloning and adding key values in an object ", new_person1)


// Exmaple of Objects can contain other objects or we can say nested Object:
const university = {
    name: 'Uttarakhand State University',
    location: {
      city: 'Pauri',
      state: 'Uttarakhand',
    },
    departments: {
      science: {
        head: 'Dr. Sharma',
        courses: ['Physics', 'Chemistry', 'Biology'],
      },
      arts: {
        head: 'Dr. Verma',
        courses: ['History', 'Literature', 'Philosophy'],
      },
    },
    getAddress() {
      return `${this.location.city}, ${this.location.state}`;
    },
  };
  
  console.log(university.name); // 'Uttarakhand State University'
  console.log(university.location.city); // 'Pauri'
  console.log(university.departments.science.head); // 'Dr. Sharma'
  console.log(university.departments.arts.courses); // ['History', 'Literature', 'Philosophy']
  console.log(university.getAddress()); // 'Pauri, Uttarakhand'