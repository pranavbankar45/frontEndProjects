
function customRender(reactElement, container) {
    const document = dpcument.createElement
        (reactElement.type)
    document.innerHTML = reactElement.Children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    container.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    Children: 'click me to visit gooogle'
}


const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)