// オブジェクトリテラル
const person = {
    name: "Alice",
    age: 30,
    greet: function () {
        return `I'm ${this.name}. ${this.age} years old.`;
    }
};

// TODO: オブジェクトリテラルで処理

for (let key in person) {
    document.getElementById(`object-${key}`).innerHTML = person[key];
}

// name
document.getElementById('person-name').innerHTML = person.name;

// age
document.getElementById('person-age').innerHTML = person.age;

// greet()
document.getElementById('person-greet').innerHTML = person.greet();