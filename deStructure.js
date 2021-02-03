const person = {
    name: 'Abu Khalek',
    age: 67,
    gender: 'Male',
    phone: '017185445651',
    education: 'Computer Science'
};

// console.log(person.name);
// const personName = person.name;
// const personPhone = person.phone;


// const { phone } = person;
// const { name } = person;

const { phone, name } = person;

console.log(name);
console.log(phone);

const friends = ['Shakib Khan', 'Arman Khan', 'Aamir Khan', 'Salman Khan', 'Shahrukh Khan'];
const [chotoFriend, nextFriend, ...generalFriends] = friends;      // serially assigned friends array value
// general friend will be an array
console.log(chotoFriend, nextFriend, generalFriends);


const complexObject = {
    name: 'abc',
    info:{
        address: 'Chankhar Pool',
        leaderName: 'Tiger Bhai'
    }
}

const { address, leaderName } = complexObject.info;
console.log(leaderName, address);