// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '@midday/engine/core';
import { APIResource } from '@midday/engine/resource';
import * as PlaidAPI from '@midday/engine/resources/auth/plaid';
import * as Shared from '@midday/engine/resources/shared';

export class Plaid extends APIResource {
  /**
   * Exchange token (Plaid)
   */
  exchange(body: PlaidExchangeParams, options?: Core.RequestOptions): Core.APIPromise<Shared.Auth> {
    return this._client.post('/auth/plaid/exchange', { body, ...options });
  }

  /**
   * Auth Link (Plaid)
   */
  link(body: PlaidLinkParams, options?: Core.RequestOptions): Core.APIPromise<Shared.Auth> {
    return this._client.post('/auth/plaid/link', { body, ...options });
  }
}

export interface PlaidExchangeParams {
  link: string;
}

export interface PlaidLinkParams {
  link: string;
}

export namespace Plaid {
  export import PlaidExchangeParams = PlaidAPI.PlaidExchangeParams;
  export import PlaidLinkParams = PlaidAPI.PlaidLinkParams;
}
