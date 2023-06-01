const arr = [{ name: "Google", url: "https://google.com" },
{ name: "Instagram", url: "https://instagram.com" },
{ name: "Intocode", url: "https://intocode.ru" }];

function render(array) {
    const list = document.createElement('ul')
    for (i = 0; i < array.length; i++) {
        const item = document.createElement('li');
        const refs = document.createElement('a');
        refs.href = array[i].url
        refs.textContent = array[i].name
        item.append(refs)
        list.append(item)


    }
    return list
}

document.body.append(render(arr))   