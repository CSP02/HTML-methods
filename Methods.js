window.onload = function () {
    const listOfMethods = document.getElementsByClassName("CThis")
    let methodName = []
    let content = []
    for (let i = 0; i < listOfMethods.length; i++) {
        const cont = listOfMethods[i];
        methodName.push(cont.getAttribute('as'))
        content.push(cont.innerHTML)
    }

    var toPaste = document.getElementsByClassName("PHere")
    for (let j = 0; j < methodName.length; j++) {
        let methodN = methodName[j];
        for (let i = 0; i < toPaste.length; i++) {
            var element = toPaste[i];
            const method = element.getAttribute('as')
            if (methodN == method) {
                element.innerHTML = content[j]
            } else {
                continue
            }
        }
    }
}