const listTag = document.createElement('ul');
listTag.classList.add('list');
const item_1 = document.createElement('li')
item_1.textContent = 'Hello World';
listTag.append(item_1)

console.log(listTag)