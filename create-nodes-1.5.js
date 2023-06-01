const block_1 = document.createElement('div')
block_1.classList.add('red')
const block_2 = document.createElement('div')
block_2.classList.add('green')
const block_3 = document.createElement('div')
block_3.classList.add('blue')
block_3.textContent = 'I am nested'

block_1.append(block_2)
block_2.append(block_3)
console.log(block_1)