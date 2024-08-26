const divEl = document.querySelector('div')
if(divEl) {
    const styles = getComputedStyle(divEl)
    const oldColor = styles.getPropertyValue('--color');
    console.log(oldColor)

    const docElement = document.documentElement;
    docElement.style.setProperty('--color', 'orange' )

    const newColor = styles.getPropertyValue('--color');
    console.log(newColor) //orange
}

const articleElement = document.querySelector('article')
console.log(articleElement)
if(articleElement) {
    const newSection = document.createElement('article')

    newSection.classList.add('comments');
    newSection.innerText = 'New Article!!!'
    newSection.dataset.label = 'some Text'
    newSection.id = 'commentsList'
   /*  articleElement.appendChild(newSection) */
   ///or insert as first article
    const firstArticle = document.querySelector('article:first-child')
    firstArticle.parentNode.insertBefore(newSection, firstArticle)
}

//////Element vs Node
const ulElement = document.querySelector('ul')
if(ulElement && ulElement.hasChildNodes) {
    const children = ulElement.children;
    console.log(children[0])
    if(children[0].hasChildNodes) {
        console.log('Pierwsze dziecko ma dzieci') //false
    }
    if(children[1].hasChildNodes) {
        console.log('Drugie dziecko ma dzieci') //true
    }
    if(children[2].hasChildNodes) {
        console.log('Trzecie dziecko ma dzieci') //true
    }
}