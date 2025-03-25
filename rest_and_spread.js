console.log("Hello, World!");

function rest(a, b, ...all){
    console.log(a, b, ...all)
}
rest(1,2,3,4,5,6)



let car = {
    name: "BMW",
    model: "2021",
    color: "red"
}
const modify = {
    color: "green"
}
const afterModify = {...modify, ...car} //green replaced by red as ...car was called after (green(red), bmw,2021)
const afterModify2 = {...car, ...modify}

console.log(afterModify)
console.log(afterModify2)