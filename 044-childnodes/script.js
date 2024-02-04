console.log(document.body.firstChild)

console.log(document.body.lastChild)

console.log("All child nodes of body : ",document.body.childNodes) // it is look like array but it is not an array

console.log("2nd  child of body : ", document.body.childNodes[1])

console.log("Last childNodes :",document.body.childNodes[document.body.childNodes.length - 1])//last nodes

//to convert childnodes into array

console.log(Array.from(document.body.childNodes))
