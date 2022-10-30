function Item(name, color, quantity) {
    this.name = name;
    this.color = color;
    this.quantity = quantity;
}

Item.prototype.incrementQuantity = function() {
    this.quantity++;
    console.log(this.quantity);
}

function List(items) {
    this.items = items;
}

List.prototype.render = function() {
    let element = document.createElement('div');
    element.innerHTML = "<div></div>";
    for (let item of this.items) {
        let name = item.name;
        let color = item.color;
        let quantity = item.quantity;
        let nextChild = document.createElement('div');
        nextChild.innerHTML = 
        `<div class="grocery" style="color:${color};">
            ${name}
            ${quantity}
        </div>`;
        nextChild.onclick = () => {
            item.incrementQuantity();
        }
        element.firstChild.insertAdjacentElement("beforeend", nextChild);
    }

    document.getElementById('grocery-list').insertAdjacentElement("beforeend", element);
}

window.onload = function () {
    let apple_item = new Item("apple", "red", 1);
    let banana_item = new Item("banana", "yellow", 2);
    let items = new List([apple_item, banana_item]);
    items.render();
}
