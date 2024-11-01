// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Rates extends APIResource {
  /**
   * Get rates
   */
  list(options?: Core.RequestOptions): Core.APIPromise<RatesSchema> {
    return this._client.get('/rates', options);
  }
}

export interface RatesSchema {
  data: Array<RatesSchema.Data>;
}

export namespace RatesSchema {
  export interface Data {
    date: string;

    rates: Record<string, number>;

    source: string;
  }
}

export declare namespace Rates {
  export { type RatesSchema as RatesSchema };
}
