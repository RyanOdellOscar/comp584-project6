let sum = 0;
for (let i = 2; i < process.argv.length; i++){// loop through the arguments starting from index 2
    sum += Number(process.argv[i]);
}
console.log(sum);