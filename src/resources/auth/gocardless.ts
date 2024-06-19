// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '@midday-ai/engine/core';
import { APIResource } from '@midday-ai/engine/resource';
import * as GocardlessAPI from '@midday-ai/engine/resources/auth/gocardless';

export class Gocardless extends APIResource {
  /**
   * Exchange token (GoCardLess)
   */
  exchange(
    body: GocardlessExchangeParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<GocardlessExchangeResponse> {
    return this._client.post('/auth/gocardless/exchange', { body, ...options });
  }

  /**
   * Auth link (GoCardLess)
   */
  link(body: GocardlessLinkParams, options?: Core.RequestOptions): Core.APIPromise<GocardlessLinkResponse> {
    return this._client.post('/auth/gocardless/link', { body, ...options });
  }
}

export interface GocardlessExchangeResponse {
  id: string;

  access_valid_for_days: string;

  institutionId: string;

  max_historical_days: string;
}

export interface GocardlessLinkResponse {
  link: string;
}

export interface GocardlessExchangeParams {
  institutionId: string;

  transactionTotalDays: string;
}

export interface GocardlessLinkParams {
  agreement: string | null;

  institutionId: string;

  redirect: string;
}

export namespace Gocardless {
  export import GocardlessExchangeResponse = GocardlessAPI.GocardlessExchangeResponse;
  export import GocardlessLinkResponse = GocardlessAPI.GocardlessLinkResponse;
  export import GocardlessExchangeParams = GocardlessAPI.GocardlessExchangeParams;
  export import GocardlessLinkParams = GocardlessAPI.GocardlessLinkParams;
}
