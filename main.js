const API_KEY = '47cfdbbfbf446bbfa56694e426d1a260'


async function getCryptoData() {
    const url = `http://api.coinlayer.com/api/live?access_key=${API_KEY}`
    
    let result = await fetch(url);
    let data = await result.json();
    console.log(data)


    const bitcoinPrice = data.rates.BTC;
    const ethereumPrice = data.rates.ETH;
    const tetherPrice = data.rates.USDT;
    const dogecoinPrice = data.rates.DOGE;
    const cardanoPrice = data.rates.ADA;
    const ripplePrice = data.rates.XRP;
    

    document.getElementById('bitcoin-price').innerHTML = bitcoinPrice
    document.getElementById('ethereum-price').innerHTML = ethereumPrice
    document.getElementById('tether-price').innerHTML = tetherPrice
    document.getElementById('dogecoin-price').innerHTML = dogecoinPrice
    document.getElementById('cardano-price').innerHTML = cardanoPrice
    document.getElementById('ripple-price').innerHTML = ripplePrice
  
}

getCryptoData()