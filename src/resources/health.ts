// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '@midday/engine/core';
import { APIResource } from '@midday/engine/resource';
import * as HealthAPI from '@midday/engine/resources/health';

export class Health extends APIResource {
  /**
   * Health
   */
  retrieve(options?: Core.RequestOptions): Core.APIPromise<Health> {
    return this._client.get('/health', options);
  }
}

export interface Health {
  gocardless: Health.Gocardless;

  plaid: Health.Plaid;

  teller: Health.Teller;
}

export namespace Health {
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
  export import Health = HealthAPI.Health;
}
