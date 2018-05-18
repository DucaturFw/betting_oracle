var dotenv = require("dotenv");
const axios = require('axios');

/**
 * OKEx API keys
 */
// - url: https://www.okex.com/api/v1/ticker.do?symbol=btc_usdt
// - response:
// {
//     "date": "1526630139",
//     "ticker": {
//         "high": "8369.0000",
//         "vol": "28815.8917",
//         "last": "8092.0254",
//         "low": "7918.0906",
//         "buy": "8092.1066",  //it!
//         "sell": "8099.5000"
//      }
// }

/**
 * Binanace
 */
// - url: https://www.binance.com/api/v3/ticker/price?symbol=BTCUSDT
// - response:
// {
//     "symbol": "BTCUSDT",
//     "price": "8095.36000000" //it!
// }

/**
 * Huobi
 */
// - url: https://api.huobi.pro/market/detail?symbol=btcusdt
// - response:
// {
//     "status":"ok",
//     "ch":"market.btcusdt.detail",
//     "ts":1526630691846,
//     "tick":
//         {
//             "amount":17603.284869391556461406,
//             "open":8267.360000000000000000,
//             "close":8110.000000000000000000,
//             "high":8364.300000000000000000,  //it!
//             "id":7572612314,
//             "count":134011,
//             "low":7892.530000000000000000,
//             "version":7572612314,
//             "vol":143185991.280065364351457938390000000000000000
//         }
// }

/**
 * Bitfinex
 */
// - url: https://api.bitfinex.com/v1//pubticker/btcusd
// - response:
// {
//     "mid": "8090.15",
//     "bid": "8090.1",
//     "ask": "8090.2",
//     "last_price": "8090.1",
//     "low": "7925.0",
//     "high": "8363.0",    //it!
//     "volume": "27176.28888098",
//     "timestamp": "1526630903.732889"
// }

/**
 * Upbit
 */
// - url: https://crix-api.upbit.com/v1/crix/trades/ticks?code=CRIX.UPBIT.USDT-BTC&count=1
// - response:
// [
//     {
//         "code": "CRIX.UPBIT.USDT-BTC",
//         "tradeDate": "2018-05-18",
//         "tradeTime": "08:21:12",
//         "tradeDateKst": "2018-05-18",
//         "tradeTimeKst": "17:21:12",
//         "tradeTimestamp": 1526631672227,
//         "tradePrice": 8130,              //it!
//         "tradeVolume": 0.60631367,
//         "prevClosingPrice": 8014.89253377,
//         "change": "RISE",
//         "changePrice": 115.10746623,
//         "askBid": "BID",
//         "sequentialId": 15266316648400004,
//         "timestamp": 1526631664840
//     }
// ]


/**
 * Load environment variables from .env file, where API keys and passwords are configured.
 */
dotenv.config();

function betting() {
    console.log("\n----- Running betting task -----");

    axios.all([
        axios.get('https://www.okex.com/api/v1/ticker.do?symbol=btc_usdt'),
        axios.get('https://www.binance.com/api/v3/ticker/price?symbol=BTCUSDT'),
        axios.get('https://api.huobi.pro/market/detail?symbol=btcusdt'),
        axios.get('https://api.bitfinex.com/v1/pubticker/btcusd'),
        axios.get('https://crix-api.upbit.com/v1/crix/trades/ticks?code=CRIX.UPBIT.USDT-BTC&count=1')
    ]).then(axios.spread((response1, response2, response3, response4, response5) => {
            console.log("[OKEx]: ", response1.data.ticker.buy);
            console.log("[Binance]: ", response2.data.price);
            console.log("[Huobi]: ", response3.data.tick.high);
            console.log("[Bitfinex]: ", response4.data.high);
            console.log("[Upbit]: ", response5.data[0].tradePrice);

            var prices = [parseFloat(response1.data.ticker.buy), parseFloat(response2.data.price), parseFloat(response3.data.tick.high), parseFloat(response4.data.high), parseFloat(response5.data[0].tradePrice)];
            var median, sum = 0, bad = false, avg = 5;

            // calculate average
            for (var i = 0; i < 5; i ++){
                sum += prices[i];
            }
            median = sum / 5;
            console.log("[median] : ", median);


            // determine bad
            for (i = 0; i < 5; i ++){
                if (Math.abs(prices[i] - avg) > process.env.DIFF_LIMIT){
                    bad = true;
                    avg = 4;
                    break;
                }
            }
    })).catch(error => {
        console.log(error);
    });
};

module.exports = betting;