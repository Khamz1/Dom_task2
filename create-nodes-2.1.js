const list = document.createElement('ul');
// const items = document.createElement('li')
const arr = ["html", "css", "js"];

for (i = 0; i < arr.length; i++){
    const items = document.createElement('li')
    items.textContent = arr[i];
    list.append(items)}

    document.body.append(list)

console.log(list)