// for, while, do while

// for (let i = 0; i < 3; i++) {
//     console.log("hello world")
// }

// while

// let i = 0

// while (i < 4) {
//     console.log("halo");
//     i++;
// } 

//  do while bedanya ngejalanin do sekali baru while nya masuk

// let count = 6;

// do {
//     console.log("ini iterasi ke: " + count);
//     count++;
// } while (count <= 5);

// break

// let sum = 0

// while(true) {
//     console.log("sum: " + sum);

//     if (sum >= 5) break;

//     sum += 1
// }

// continue melakukan skip pada looping

for(let i =1; i <= 5; i++) {
    if(i===3) {
        continue;
    }
    console.log(i)
}