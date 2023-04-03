const preview = document.querySelector("#preview")
const template = document.querySelector("#template-preview")

const clear = () => (preview.innerHTML = '')

const mlog = (comment, ...args) =>{
    const templateClone = template.content.cloneNode(true)
    const commentElement = templateClone.querySelector('.comment')
    const codeElement = templateClone.querySelector('.code')

    commentElement.innerText = comment
    codeElement.innerText = args.join('\n')

    templateClone.appendChild(commentElement)
    templateClone.appendChild(codeElement)

    preview.appendChild(templateClone)
}

const setLocale = (e) =>{
    clear()
    run(e.currentTarget.dataset.locale)
    console.log(e.currentTarget.dataset.locale)
}

const localeButtoons = document.querySelectorAll('.btn-locale')

if( localeButtoons ){
    localeButtoons.forEach((btn) =>{
        btn.addEventListener('click', setLocale)
    })
}
// clear()
//             run(btn.dataset.locale)
//             console.log(btn.dataset)
