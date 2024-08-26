const fooEl = document.querySelector('#foo')
if(fooEl) {
    const boxList = document.getElementsByClassName('box')
    if(boxList.length >  0) {
        for(let i = 0; i < boxList.length; i++) {
            const pList = boxList[i].querySelectorAll('p')
            pList.forEach(element => {
                    element.style.border = '2px solid green'
            });
        }
    }
    
}
const section2 = document.querySelector('#foo2')
const imageList = section2.querySelectorAll('img')
imageList.forEach(image => {
    image.removeAttribute('class')
    image.setAttribute('alt', 'image of a cat')
})

const liElement = document.querySelector('li')
if(liElement) {
    console.log(
        liElement.dataset.age,
        liElement.dataset.city
    )
    liElement.setAttribute('data-age', '16')
    liElement.dataset.age = '17'

    console.log(liElement.dataset.age)
}