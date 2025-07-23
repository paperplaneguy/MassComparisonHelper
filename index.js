/** 
 * creates a new element
 * @type{(string: tag) => Element}
 */
var createElement = document.createElement.bind(document)

/**
 * append a fact to an item
 * @param {Element} parent item to add the fact to
 * @param {Element} html the fact to add
 */
function appendFactToItem(parent, html) {
    let listItem = createElement("li")
    listItem.insertAdjacentHTML('beforeend', html)
    parent.appendChild(listItem)
}