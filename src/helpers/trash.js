
// function objectFromHTML(el) {
//     // console.log(el)

//     const res = {
//         tagName: el.tagName,
//         innerText: '',
//         attributes: {},
//         children: []
//     }

//     for (const attr of el.attributes) {
//         res.attributes[attr.name] = attr.value
//     }

//     for (const child of el.children) {
//         res.children.push(objectFromHTML(child))
//     }
//     if (res.children.length === 0) {
//         res.innerText = el.innerText
//     } else if (res.children.some(el => el.tagName === 'BR')) {
//         res.innerText = el.innerText
//     }

//     return res
// }

// function htmlFromObj(obj) {
//     const res = document.createElement(obj.tagName)
    
//     if (obj.innerText) {
//         res.innerText = obj.innerText
//     }
//     for (const attrName in obj.attributes) {
//         const value = obj.attributes[attrName]
//         console.log(attrName, value)
//         res.setAttribute(attrName, value)
//     }
//     for (const child of obj.children) {
//         // console.log(child)
//         res.appendChild(htmlFromObj(child))
//     }

//     return res
// }

