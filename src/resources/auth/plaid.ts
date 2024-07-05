// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '@midday-ai/engine/resource';
import * as Core from '@midday-ai/engine/core';
import * as PlaidAPI from '@midday-ai/engine/resources/auth/plaid';

export class Plaid extends APIResource {
  /**
   * Exchange token (Plaid)
   */
  exchange(body: PlaidExchangeParams, options?: Core.RequestOptions): Core.APIPromise<PlaidExchangeResponse> {
    return this._client.post('/auth/plaid/exchange', { body, ...options });
  }

  /**
   * Auth Link (Plaid)
   */
  link(body: PlaidLinkParams, options?: Core.RequestOptions): Core.APIPromise<PlaidLinkResponse> {
    return this._client.post('/auth/plaid/link', { body, ...options });
  }
}

export interface PlaidExchangeResponse {
  data: PlaidExchangeResponse.Data;
}

export namespace PlaidExchangeResponse {
  export interface Data {
    access_token: string;
  }
}

export interface PlaidLinkResponse {
  data: PlaidLinkResponse.Data;
}

export namespace PlaidLinkResponse {
  export interface Data {
    expiration: string;

    link_token: string;
  }
}

export interface PlaidExchangeParams {
  token: string;
}

export interface PlaidLinkParams {
  language: string;

  userId: string;
}

export namespace Plaid {
  export import PlaidExchangeResponse = PlaidAPI.PlaidExchangeResponse;
  export import PlaidLinkResponse = PlaidAPI.PlaidLinkResponse;
  export import PlaidExchangeParams = PlaidAPI.PlaidExchangeParams;
  export import PlaidLinkParams = PlaidAPI.PlaidLinkParams;
}
