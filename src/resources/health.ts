// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '@midday-ai/engine/resource';
import * as Core from '@midday-ai/engine/core';
import * as HealthAPI from '@midday-ai/engine/resources/health';

export class Health extends APIResource {
  /**
   * Health
   */
  retrieve(options?: Core.RequestOptions): Core.APIPromise<HealthRetrieveResponse> {
    return this._client.get('/health', options);
  }
}

export interface HealthRetrieveResponse {
  data: HealthRetrieveResponse.Data;
}

export namespace HealthRetrieveResponse {
  export interface Data {
    gocardless: Data.Gocardless;

    plaid: Data.Plaid;

    teller: Data.Teller;
  }

  export namespace Data {
    export interface Gocardless {
      healthy: boolean;
    }

    export interface Plaid {
      healthy: boolean;
    }

    export interface Teller {
      healthy: boolean;
    }
  }
}

export namespace Health {
  export import HealthRetrieveResponse = HealthAPI.HealthRetrieveResponse;
}
