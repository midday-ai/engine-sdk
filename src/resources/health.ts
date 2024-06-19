// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '@midday-ai/engine/core';
import { APIResource } from '@midday-ai/engine/resource';
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
  gocardless: HealthRetrieveResponse.Gocardless;

  plaid: HealthRetrieveResponse.Plaid;

  teller: HealthRetrieveResponse.Teller;
}

export namespace HealthRetrieveResponse {
  export interface Gocardless {
    health: boolean;
  }

  export interface Plaid {
    health: boolean;
  }

  export interface Teller {
    health: boolean;
  }
}

export namespace Health {
  export import HealthRetrieveResponse = HealthAPI.HealthRetrieveResponse;
}
