const access_key = 'bd606eca367e2935ab1a9f19deca1812';
let endpoint = 'live';

const getPrice = async () => {
    const result = await fetch(`http://api.coinlayer.com/api/${endpoint}?access_key=${access_key}`);
    let response = await result.json();
    console.log(response)
    console.log(response.rates)
    show(response);
}

function show(response) {
    let tab = 
        `<tr>
            <th>Symbol</th>
            <th>Price</th>
        </tr>`;
    Object.keys(response.rates).forEach(key => {
        tab += `<tr>
        <td>${key}</td>
        <td>${response.rates[key]}</td>
        </tr>`
    })
    document.getElementById("price-display").innerHTML = tab;
}


const getSinglePrice = async () => {
    const formElement = document.getElementById("symbol-input").value;
    let symbol = formElement.toUpperCase()
    console.log(symbol)

    const result = await fetch(`http://api.coinlayer.com/api/${endpoint}?access_key=${access_key}&symbols=${symbol}`);
    console.log('before response')
    let response = await result.json();
    console.log(response)
    show1(response);
}

function show1(response) {
    let tab = 
        `<tr>
            <th>Symbol</th>
            <th>Price</th>
        </tr>`;
    Object.keys(response.rates).forEach(key => {
        tab += `<tr>
        <td>${key}</td>
        <td>${response.rates[key]}</td>
        </tr>`
    })
    document.getElementById("single-price").innerHTML = tab;
}