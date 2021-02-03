const ages = [12, 14, 16, 13, 17];
const ages2 = [15, 16, 12];
const ages3 = [25, 28, 27, 22];
// const allAges = ages.concat(ages2).concat([15, 16]).concat(ages3);

const allAges = [...ages, ...ages2, ...ages3]; // this three dots will spread out the elements out of the array
console.log(allAges);

const oldest = Math.max(...allAges);
console.log(oldest);