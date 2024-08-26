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