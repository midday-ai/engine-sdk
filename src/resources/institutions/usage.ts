// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as UsageAPI from './usage';

export class Usage extends APIResource {
  /**
   * Update Institution Usage
   */
  update(id: string, options?: Core.RequestOptions): Core.APIPromise<UsageUpdateResponse> {
    return this._client.put(`/institutions/${id}/usage`, options);
  }
}

export interface Institution {
  id: string;

  logo: string | null;

  name: string;

  provider: 'teller' | 'plaid' | 'gocardless';

  available_history?: number | null;
}

export interface UsageUpdateResponse {
  data: Institution;
}

export namespace Usage {
  export import Institution = UsageAPI.Institution;
  export import UsageUpdateResponse = UsageAPI.UsageUpdateResponse;
}
