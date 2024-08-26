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