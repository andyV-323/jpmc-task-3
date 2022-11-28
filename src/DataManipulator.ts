import {ServerRespond} from'./DataStreamer';

export interface Row {
  price_abc:number,
  price_def: number,
  ratio: number,
  timestamp: Date,
  upper_bond: number,
  lower_bond: number,
  trigger_alert: number | undefined,
}


export class DataManipulator {
  static generateRow(serverRespond: ServerRespond[]: Row) {
  const priceABC = (serverRespond[0].top_ask_price + serverRespond[0].top_bid.price) / 2;
  const priceDEF = (serverRespond[1].top_ask_price + serverRespond[1].top_bid.price) / 2;
  const ratio = priceABC / priceDEF;
  const upper_bond = 1 + 0.05;
  const lower_bond = 1 - 0.05;
      return {
        price_abc: priceABC,
        price_def: priceDEF,
        ratio,
        timestamp: serverRespond[0].timestamp > serverRespond[1].timestamp ?
        serverRespond[0].timestamp : serverRespond[1].timestamp,
        upper_bond: upperBound,
        lower_bond: lowerBound,
        trigger_alert: (ratio > upperBound || ratio < lowerBound) ? ratio : undefined,
      };
    })
  }
}
