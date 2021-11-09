const { BittrexClient } = require('bittrex-rest-client')
const client = new BittrexClient({
    apiKey: process.env.KEY, // pass API creds from .env file in project directory
    apiSecret: process.env.SECRET,
    timeout: 3000 // Optional, specify timeout for web requests, in milliseconds.
    })

// process.argv[x]

async function main(){
    // Crear una orden 
    const order = await client.sendOrder(
        marketSymbol,
        direction,
        type,
        {
            quantity,
            ceiling,
            limit
        }={},
        timeInForce='IMMEDIATE_OR_CANCEL',
        clientOrderId=uuid(),
        useAwards=false
        ) 

    const currencySymbol = 'EUR'
    const data = await client.balance(currencySymbol)
    console.log(data)
}

main()