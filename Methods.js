window.onload = function () {
    let definition = document.getElementsByTagName('def')
    let methodNames = []
    let methodContent = []
    let methodDefTags = []

    for (let i = 0; i < definition.length; i++) {
        let methodDefs = definition[i];
        methodDefs.style.visibility = 'hidden'
        methodNames.push(methodDefs.getAttribute('name'))
        methodContent.push(methodDefs.innerHTML)
        methodDefTags.push(methodDefs)
    }

    for (let j = 0; j < methodNames.length; j++) {
        const methodName = methodNames[j];
        let methodCall = document.getElementsByTagName(methodName)
        for (let k = 0; k < methodCall.length; k++) {
            let tag = methodCall[k];
            tag.innerHTML = methodContent[j]
        }
    }

    for (var l = 0; l < methodDefTags.length; l++) {
        console.log(methodDefTags[l])
        methodDefTags[l].remove()
    }
}