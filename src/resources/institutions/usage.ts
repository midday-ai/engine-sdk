// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

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

export declare namespace Usage {
  export { type Institution as Institution, type UsageUpdateResponse as UsageUpdateResponse };
}
