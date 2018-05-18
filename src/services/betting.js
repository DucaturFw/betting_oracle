// var Sample = require("../models/Sample");

/**
 * OKEx API keys
 */
// - url: https://www.okex.com/api/v1/ticker.do?symbol=btc_usdt
// - response:
// {
//     "date": "1526630139",
//     "ticker": {
//     "high": "8369.0000",
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

function betting() {
    console.log("\n----- Running betting task -----");


};

module.exports = betting;