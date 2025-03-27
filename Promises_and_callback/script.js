// let body = document.getElementsByTagName('body')[0];


// setTimeout(() => {
//     console.log("Hi");
// },2000); 

//callbacks 
// function sum(a,b){
//     console.log(a+b);
// }

// function calculator(a,b,sumCallback) {
//     sumCallback(a,b);
// }
// calculator(1,2, (a,b) => {

// });

// const hello = () => {
//     console.log("hello");
// }
// setTimeout(hello,3000);

//nesting 
// let age = 18;
// if(age > 18){
//     if(age >= 60){
//         console.log("Senior");
//     }
//     else{
//         console.log("Middle")
//     }
// }else{
//     console.log("child")
// }

// for(let i = 0; i < 5; i++){
//     let str = "";
//     for(let j = 0; j < 5; j++){
//         str = str + j;
//     }
//     console.log(i,str);
// };

// function getData(dataId,getNextData) {
//     setTimeout(() => {
//         console.log('data', dataId);
//         if(getNextData){
//             getNextData();
//         }
//     },1000);
// }
// getData(1, () => {
//     getData(2, () => {
//         getData(3, () => {
//             getData(4);
//         });
//     });
// })

//promise

// let promise = new Promise ((resolve,reject) => {
//     console.log("im a promise");
//     reject('error');
// });

//  let promise = new Promise ((resolve,reject) => {
//     console.log("Promise");
//     reject("some error");
//  });
 
//  function getData(dataId, getNextData){
//     return new Promise ((resolve,reject) => {
//        setTimeout(() => {
//         console.log('Data',dataId);
//         resolve("success");
//         if(getNextData){
//             getNextData()
//         }
//        },7000);   
//     })
//  };

// let promise = new Promise ((resolve, reject) => {
//     console.log("im new promise");
//     reject("some error");
// }); 

// const getPromise = () => {
//     return new Promise ((resolve,reject) => {
//         console.log('im a new promise');
//         // resolve("success");
//         reject("network error ");
//     })
// };
// let promise = getPromise();
// promise.then((res) => {
//     console.log("promise fullfilled",res); 
// })
// promise.catch((err) => {
//     console.log("rejected",err);
// });


//promise chaining 
// function getDataFunc() {
//     return new Promise ((resolve,reject) => {
//        setTimeout(() => {
//         console.log('data1');
//         resolve('success');
//        },2000);
//     })   
// }
// console.log('fetcing data');
// let p1 = getDataFunc();
// p1.then((res) => {
//     console.log(res);
// }) 
// let p2 = getDataFunc();
// p2.then((res) => {
//     console.log(res);
// });

// function getData(dataId, getNextData) {
//     return new Promise ((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success");
//             if(getNextData){
//                 getNextData();
//             }
//         },3000);
//     });
// }
// let p1 = getData(1);
// p1.then((res) => {
//     return getData(2);
// }).then((res) => {
//     console.log(res);
// });
function api() {
    return new Promise ((resolve,reject) => {
        setTimeout(() => {
            console.log('whether data');
            resolve(200);
        },2000); 
    })
}
async function getWhetherData() {
    await api();
}


async function getAllData() {
    await api()
}
