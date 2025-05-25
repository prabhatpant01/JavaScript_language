// A promise in JavaScript is like a "placeholder" for a future value. It represents an ongoing process (like fetching data from a server) 
// and lets you handle what happens when that process succeeds or fails, without blocking your code. 

const rahulpromise = new Promise((resolve, reject )=>{ // creating new promise object with callback-function resolve, reject
  let fatherDecison = true
  
  if (fatherDecison){
    resolve("YEE we are Happy now we get marry")
  }
  else{
    reject("father says no Sorry i can't marry to you")
  }
})

rahulpromise.then((msg, pd)=>{  // .then() Positive decision to process the data
  console.log("Rahul message :", msg)
  console.log("lets book the wedding hall ")
 
}).catch((msg)=>{  // .catch() Negative decision to handle the data
  console.log("Rahul message :", msg)
  console.log("sorry we should move on now")

}).finally(()=>{console.log("Chalo life mai clarity mili")}) // .finally always execute 




// using Promise.all() ---> Running multiple promises in parallel and waiting for all of them to finish.
const F1_Promise = new Promise((resolve, reject) => {
  
  setTimeout(() => {
    if (Math.random() > 0.5) {
      resolve("friend_1 : I am in for Goa");
    } else {
      reject("friend_1 : sorry i have a work");
    }
  }, 2000);

});
const F2_Promise = new Promise((resolve, reject) => {
  
  setTimeout(() => {
    if (Math.random() > 0.5) {
      resolve("friend_2 : I am in for Goa");
    } else {
      reject("friend_2 : sorry i am going to a vacation with my colleagues");
    }
  }, 3000);

});
const F3_Promise = new Promise((resolve, reject)=>{
  
  setTimeout(()=> {
    if(Math.random() > 0.5){
      resolve("friend_3 : I am in for Goa");
    } else {
      reject("friend_3 : sorry i am not feeling well")
    }
  }, 4000);
})

Promise.all([F1_Promise, F2_Promise, F3_Promise]).then((msg)=> {
  console.log(msg)
  console.log("yay we all are going Goa")
}).catch((msg)=> {
  console.log(msg)
  console.log("Stop the plan now")
})




// using Promise.any() ---> `Promise.any()` in JavaScript helps you get the first *successful* result from a list of promises. If all of them fail, 
// it gives you an error. Think of it as a "race to success" among promises!
// If all promises reject, it throws an `AggregateError`. Perfect for getting the earliest successful result!


const Gf1_Promise = new Promise((resolve1 , reject1)=> {

  setTimeout(()=> {
    if(Math.random() > 0.5){
      resolve1("Gf1 : yes i am coming for a date with you")
    }else{
      reject1("Gf1 : No i have a new boyfriend ")
    }
  }, 2000)
})
const Gf2_Promise = new Promise((resolve1, reject1)=> {

  setTimeout(()=> {
    if(Math.random() > 0.5){
      resolve1("Gf2 : yes i am coming for a date with you")
    }else{
      reject1("Gf2 : sorry tomorrow is my exam")
    }
  }, 4000)
})
const Gf3_Promise = new Promise((resolve1, reject1)=> {

  setTimeout(()=> {
    if(Math.random() > 0.5){
      resolve1("Gf3 : yes i am coming for a date with you")
    }else{
      reject1("Gf3 : Phone is unreachable")
    }
  }, 3000)
})

Promise.any([Gf1_Promise, Gf2_Promise, Gf3_Promise]).then((result)=>{
  console.log(result)
  console.log("yee my valentine day i sorted")

}).catch((result)=> {
  console.log(result)
  console.log("How to be a part of Bajragndal")
})



