function calc() {
    checkNameAndPrices();
    const items = Array.from(document.getElementById('items').children).map((row) => {
        const name = row.children[0].children[0].value;
        const price = Number(row.children[1].children[0].value);
        return new Item(name, price);
    });
    if (items.length === 0) {
        return;
    }
    const prices = items.map((x) => x.price);
    const avg = prices.reduce((x, y) => x + y) / prices.length;
    document.getElementById('avg').textContent = avg;

    const stdDev = Math.sqrt(prices.map((x) => Math.pow(x - avg, 2)).reduce((x, y) => x + y) / prices.length);
    document.getElementById('stdDev').textContent = stdDev;

    if (items.length > 3) {
        const oneOfTheCheapest = items.sort((x, y) => x.price - y.price)[Math.floor(Math.random() * 3)];
        document.getElementById('cheap').textContent = oneOfTheCheapest.name;
    } else {
        document.getElementById('cheap').textContent = 'Must be more than three items';
    }
}

function addItem() {
    const name = document.getElementById('item-name').value;
    const price = Number(document.getElementById('item-price').value);

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

    const newItem = new Item(name, price);

    calc();
}

function addRow() {
    const tr = document.createElement('tr');

    const nameCell = document.createElement('td');
    const nameInput = document.createElement('input');
    nameInput.setAttribute('placeholder', 'Item name');
    nameInput.classList.add('list-item-name');
    nameInput.addEventListener('change', checkNameAndPrices);
    nameCell.appendChild(nameInput);

    const priceCell = document.createElement('td');
    const priceInput = document.createElement('input');
    priceInput.setAttribute('placeholder', 'Price');
    priceInput.setAttribute('type', 'number');
    priceInput.setAttribute('min', '0');
    priceInput.classList.add('list-item-price');
    priceInput.addEventListener('change', calc);
    priceCell.appendChild(priceInput);

    const removeButtonCell = document.createElement('td');
    const removeButton = document.createElement('button');
    removeButton.classList.add('delete-button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', remove);
    removeButtonCell.appendChild(removeButton);

    const errorCell = document.createElement('td');
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
    const rows = Array.from(document.getElementById('items').children);

    rows.forEach((row) => {
        let price = row.querySelector('.list-item-price').value;
        const name = row.querySelector('.list-item-name').value;
        let errors = '';
        if (price === '') {
            errors = 'Invalid price ';
        } else {
            price = Number(price);
        }
        if (price < 0 || isNaN(price)) {
            errors = 'Invalid price ';
        }
        if (name.length < 3) {
            errors += 'Name is too short (min 3)';
        } else if (name.length > 15) {
            errors += 'Name is too long (max 15)';
        }

        row.querySelector('.item-error').textContent = errors;
    });
}

Array.from(document.getElementsByClassName('delete-button')).forEach((x) => {
    x.addEventListener('click', remove);
});
calc();
