const { BittrexClient } = require('bittrex-rest-client')
const uuid = require('uuid-random')

const client = new BittrexClient({
    apiKey: process.env.KEY, // pass API creds from .env file in project directory
    apiSecret: process.env.SECRET,
    timeout: 3000 // Optional, specify timeout for web requests, in milliseconds.
    })

// process.argv[x]

async function main(){
    let marketSymbol = "DOT-EUR"
    let direction = "SELL"
    let type = "MARKET"
    let quantity = 2.39
    let ceiling = ""
    let limit = ""
   
    try {
        // Crear una orden 
    
        let order = await client.sendOrder(
            marketSymbol,
            direction,
            type,
            {
                quantity,
                ceiling,
                limit
            },
            timeInForce='POST_ONLY_GOOD_TIL_CANCELLED',
            clientOrderId=uuid(),
            useAwards=true
            )
        console.log(order)
    } catch (error) {
        console.error(error)
    }

/* 
    const currencySymbol = 'EUR'
    const data = await client.balance(currencySymbol)
    console.log(data) */
}

main()