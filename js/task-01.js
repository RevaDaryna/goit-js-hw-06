const categoriesEl = document.querySelectorAll('.item');
console.log('Number of categories:', categoriesEl.length)


const element = categoriesEl.forEach(category => {
    const titleEl = category.firstElementChild.textContent
    console.log('Category:', titleEl)
    const elementsEl = category.lastElementChild.querySelectorAll('li').length
    console.log('Elements:', elementsEl)
    return
})