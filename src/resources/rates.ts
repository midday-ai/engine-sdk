// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as RatesAPI from './rates';

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
    rates: Record<string, number>;

    source: string;
  }
}

export namespace Rates {
  export import RatesSchema = RatesAPI.RatesSchema;
}
