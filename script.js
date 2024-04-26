function toCase(str) {
    const lowercase = str.toLowerCase();
    const uppercase = str.toUpperCase();
    return `${lowercase}-${uppercase}`;
}
// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
