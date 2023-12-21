var Item = (function () {
    function Item(name, price) {
        this.name = name;
        this.price = price;
    }
    return Item;
}());
function calc() {
    checkNameAndPrices();
    var items = Array.from(document.getElementById('items').children).map(function (row) {
        var name = row.children[0].children[0].value;
        var price = Number(row.children[1].children[0].value);
        return new Item(name, price);
    });
    if (items.length === 0) {
        return;
    }
    var prices = items.map(function (x) { return x.price; });
    var avg = prices.reduce(function (x, y) { return x + y; }) / prices.length;
    document.getElementById('avg').textContent = avg.toFixed(2);
    var stdDev = Math.sqrt(prices.map(function (x) { return Math.pow(x - avg, 2); }).reduce(function (x, y) { return x + y; }) / prices.length);
    document.getElementById('stdDev').textContent = stdDev.toFixed(2);
    var NUMBER_OF_CHEAPEST = 3;
    if (items.length > NUMBER_OF_CHEAPEST) {
        var oneOfTheCheapest = items.sort(function (x, y) { return x.price - y.price; })[Math.floor(Math.random() * NUMBER_OF_CHEAPEST)];
        document.getElementById('cheap').textContent = oneOfTheCheapest.name;
    }
    else {
        document.getElementById('cheap').textContent = 'Must be more than three items';
    }
}
function addItem() {
    var name = document.getElementById('item-name').value;
    var price = Number(document.getElementById('item-price').value);
    if (name.length < 3) {
        document.getElementById('item-name-error').textContent = 'Item name must be a least 3 characters';
        return;
    }
    if (name.length >= 15) {
        document.getElementById('item-name-error').textContent = 'Item name must be maxumm 15 characters';
        return;
    }
    if (price < 0) {
        document.getElementById('item-price-error').textContent = 'Item price cannot be negative';
        return;
    }
    document.getElementById('item-name-error').textContent = '\u00a0';
    document.getElementById('item-price-error').textContent = '\u00a0';
    calc();
}
function addRow() {
    var tr = document.createElement('tr');
    var nameCell = document.createElement('td');
    var nameInput = document.createElement('input');
    nameInput.setAttribute('placeholder', 'Item name');
    nameInput.classList.add('list-item-name');
    nameInput.addEventListener('change', checkNameAndPrices);
    nameCell.appendChild(nameInput);
    var priceCell = document.createElement('td');
    var priceInput = document.createElement('input');
    priceInput.setAttribute('placeholder', 'Price');
    priceInput.setAttribute('type', 'number');
    priceInput.setAttribute('min', '0');
    priceInput.classList.add('list-item-price');
    priceInput.addEventListener('change', calc);
    priceCell.appendChild(priceInput);
    var removeButtonCell = document.createElement('td');
    var removeButton = document.createElement('button');
    removeButton.classList.add('delete-button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', remove);
    removeButtonCell.appendChild(removeButton);
    var errorCell = document.createElement('td');
    errorCell.classList.add('item-error');
    tr.appendChild(nameCell);
    tr.appendChild(priceCell);
    tr.appendChild(removeButtonCell);
    tr.appendChild(errorCell);
    document.getElementById('items').appendChild(tr);
}
function remove(e) {
    e.target.parentElement.parentElement.parentElement.removeChild(e.target.parentElement.parentElement);
    calc();
}
function checkNameAndPrices() {
    var rows = Array.from(document.getElementById('items').children);
    rows.forEach(function (row) {
        var priceString = row.querySelector('.list-item-price').value;
        var price;
        var name = row.querySelector('.list-item-name').value;
        var errors = '';
        if (priceString === '') {
            errors = 'Invalid price ';
        }
        else {
            price = Number(priceString);
            if (price < 0 || isNaN(price)) {
                errors = 'Invalid price ';
            }
        }
        if (name.length < 3) {
            errors += 'Name is too short (min 3)';
        }
        else if (name.length > 15) {
            errors += 'Name is too long (max 15)';
        }
        row.querySelector('.item-error').textContent = errors;
    });
}
Array.from(document.getElementsByClassName('delete-button')).forEach(function (x) {
    x.addEventListener('click', remove);
});
calc();
document.addEventListener('mousemove', function (evt) {
    var x = evt.clientX / innerWidth;
    var y = evt.clientY / innerHeight;
    document.documentElement.style.setProperty('--mouse-x', x.toString());
    document.documentElement.style.setProperty('--mouse-y', y.toString());
});
