let sum = [1,2,4,6];
console.log(sum[3])
// to change the data on any index
sum[1]=5;
console.log(sum);

// iteration of array
for(let i=0; i<=sum.length; i++){
    console.log(`at index ${i} value is ${sum[i]}`)
}
// with while loop
let veg=["carrot","potato", "onion","garlic"]
let j=0;
while(j<=veg.length){
    console.log(veg[j], ` equal to ${j}`)
    j++;
}

// if we need only data then we can use . for of loop
for(let sums of sum){
    console.log(` value is ${sums}`)

}