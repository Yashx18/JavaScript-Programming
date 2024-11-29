const Marvel_Heros = ["Iron-Man", "Spider-Man", "Thor", "Loki"]
const Dc_Heros = ["Superman", "Batman", "Aquaman", "Flash"]

// Marvel_Heros.push(Dc_Heros)// It cause array in an array situation.
// console.log(Marvel_Heros);

// console.log(Marvel_Heros[4][1]);

// let List = Marvel_Heros.concat(Dc_Heros)// Concat method returns a new Array while push adds the value into existing array.

// console.log(List);

const New_list = [...Marvel_Heros, ...Dc_Heros] // This is done by the use of SPREAD operator just remember the example 'take a glass and drop it and the glass will spread all over' , just put 3 dots before the name of array.

// console.log(New_list);

// const another_Array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
// const Normal_Array = another_Array.flat(Infinity)// This flat method puts all the elements in a single array.
// console.log(Normal_Array);
// console.log(another_Array);

// console.log(Array.isArray("Yash"));// Tells if a value is an Array or not in boolean.

// console.log(Array.from("Yash"));// Turn value into an array.
// console.log(Array.from({ name: "Yash" }));// When it can't turn into array, it will give back an empty array.//INTERESTING CASE.

let Score1 = 100
let Score2 = 300
let Score3 = 600

// console.log(Array.of(Score1, Score2, Score3));// Returns a new array from set of elements.
