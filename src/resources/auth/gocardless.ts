// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '@midday-ai/engine/resource';
import * as Core from '@midday-ai/engine/core';
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
  data: GocardlessExchangeResponse.Data;
}

export namespace GocardlessExchangeResponse {
  export interface Data {
    id: string;

    access_valid_for_days: number;

    institution_id: string;

    max_historical_days: number;
  }
}

export interface GocardlessLinkResponse {
  data: GocardlessLinkResponse.Data;
}

export namespace GocardlessLinkResponse {
  export interface Data {
    link: string;
  }
}

export interface GocardlessExchangeParams {
  institution_id: string;

  transaction_total_days: number;
}

export interface GocardlessLinkParams {
  agreement: string | null;

  institution_id: string;

  redirect: string;
}

export namespace Gocardless {
  export import GocardlessExchangeResponse = GocardlessAPI.GocardlessExchangeResponse;
  export import GocardlessLinkResponse = GocardlessAPI.GocardlessLinkResponse;
  export import GocardlessExchangeParams = GocardlessAPI.GocardlessExchangeParams;
  export import GocardlessLinkParams = GocardlessAPI.GocardlessLinkParams;
}
