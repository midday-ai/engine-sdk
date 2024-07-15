// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '@midday-ai/engine/resource';
import * as Core from '@midday-ai/engine/core';
import * as HealthAPI from '@midday-ai/engine/resources/health';

export class Health extends APIResource {
  /**
   * Health
   */
  retrieve(options?: Core.RequestOptions): Core.APIPromise<Health> {
    return this._client.get('/health', options);
  }
}

export interface Health {
  data: Health.Data;
}

export namespace Health {
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
  export import Health = HealthAPI.Health;
}
