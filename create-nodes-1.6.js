const block = document.createElement('div');
const list = document.createElement('ul');
const item_1 = document.createElement('li');
const item_2 = document.createElement('li');
const ref_1 = document.createElement('a');
const ref_2 = document.createElement('a');

ref_1.append(item_1)
ref_1.textContent = 'наш инстаграм'
ref_1.href = 'https://instagram.com/intocode'

item_1.append(ref_1)

ref_2.append(item_2)
ref_2.textContent = 'наш сайт'
ref_2.href = 'https://intocode.ru';
item_2.append(ref_2)

list.append(item_1, item_2)


block.append(list)
document.body.append(block)


console.log(block)


