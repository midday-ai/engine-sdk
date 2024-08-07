// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as PlaidAPI from './plaid';

export class Plaid extends APIResource {
  /**
   * Exchange token (Plaid)
   */
  exchange(body: PlaidExchangeParams, options?: Core.RequestOptions): Core.APIPromise<PlaidExchange> {
    return this._client.post('/auth/plaid/exchange', { body, ...options });
  }

  /**
   * Auth Link (Plaid)
   */
  link(body?: PlaidLinkParams, options?: Core.RequestOptions): Core.APIPromise<PlaidLink>;
  link(options?: Core.RequestOptions): Core.APIPromise<PlaidLink>;
  link(
    body: PlaidLinkParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<PlaidLink> {
    if (isRequestOptions(body)) {
      return this.link({}, body);
    }
    return this._client.post('/auth/plaid/link', { body, ...options });
  }
}

export interface PlaidExchange {
  data: PlaidExchange.Data;
}

export namespace PlaidExchange {
  export interface Data {
    access_token: string;
  }
}

export interface PlaidLink {
  data: PlaidLink.Data;
}

export namespace PlaidLink {
  export interface Data {
    expiration: string;

    link_token: string;
  }
}

export interface PlaidExchangeParams {
  token: string;
}

export interface PlaidLinkParams {
  /**
   * Used when initiating the reconnect flow
   */
  accessToken?: string;

  language?: string;

  userId?: string;
}

export namespace Plaid {
  export import PlaidExchange = PlaidAPI.PlaidExchange;
  export import PlaidLink = PlaidAPI.PlaidLink;
  export import PlaidExchangeParams = PlaidAPI.PlaidExchangeParams;
  export import PlaidLinkParams = PlaidAPI.PlaidLinkParams;
}
