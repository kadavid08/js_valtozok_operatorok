console.log(typeof(2));
console.log(typeof(true));
console.log(typeof('Aladár'));
console.log(typeof({name: 'Béla', age: 69}));
console.log(typeof(function f(a, b) { return a + b; }));
console.log(typeof(nonexisting));

let a = 0.1 + 0.2
console.log(a);
console.log(a.toFixed(2));
console.log(typeof(a.toFixed(2)));

let firstname = 'John';
let lastname = 'Doe';
console.log('Hello' + ' ' + firstname + ' ' + lastname + '!');
console.log(`Hello ${firstname} ${lastname}!`);

let kocka = "kocka";
let has = "has";
let doboz = kocka + has;
console.log(doboz);

console.log('BOOLEAN')
console.log(typeof true)
console.log(Boolean(0))
console.log(Boolean(1))
console.log(Boolean(""))
console.log(Boolean("a"))

let person = {
    name: 'Alice',
    age: 39,
    isStudent: false
}

console.log(person)
console.log(typeof person)
console.log(person.name)
console.log(person.age)
console.log(person.isStudent)
console.log