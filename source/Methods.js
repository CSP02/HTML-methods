window.onload = function () {
    methods = new Methods()
    methods.run()
}

class Methods {
    run() {
        let definition = document.getElementsByTagName('def')
        let importStatements = document.getElementsByTagName('import')
        let methodNames = []
        let methodContent = []
        let methodDefTags = []
        let DOMparser = new DOMParser()

        for (let k = 0; k < importStatements.length; k++) {
            let importStatement = importStatements[k]
            let importFrom = importStatement.getAttribute('from')
            let importTag = importStatement.getAttribute('name')

            fetch(importFrom)
                .then(response => {
                    response.text().then(data => {
                        let defTags = (DOMparser.parseFromString(data, 'text/html').body.getElementsByTagName('def'))
                        for (let d = 0; d < defTags.length; d++) {
                            const def = defTags[d]
                            const defAttr = def.getAttribute('name')

                            if (importTag == defAttr) {
                                importStatement.innerHTML = def.innerHTML
                                importStatement.style.width = '100%'
                            }
                        }
                    })
                })
        }

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
            methodDefTags[l].remove()
        }
    }
}