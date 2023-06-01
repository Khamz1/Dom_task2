
const arr = ["html", "css", "js"];

function render (array) {
    const list = document.createElement('ul');
 
    for(i=0;i<array.length;i++){
        const items = document.createElement('li')
     items.append(array[i])
     list.append(items)
    }
    return list

}

document.body.append(render(arr))