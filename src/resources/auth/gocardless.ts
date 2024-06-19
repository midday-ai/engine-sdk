// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '@midday-ai/engine/core';
import { APIResource } from '@midday-ai/engine/resource';
import * as GocardlessAPI from '@midday-ai/engine/resources/auth/gocardless';
import * as Shared from '@midday-ai/engine/resources/shared';

export class Gocardless extends APIResource {
  /**
   * Exchange token (GoCardLess)
   */
  exchange(body: GocardlessExchangeParams, options?: Core.RequestOptions): Core.APIPromise<Shared.Auth> {
    return this._client.post('/auth/gocardless/exchange', { body, ...options });
  }

  /**
   * Auth link (GoCardLess)
   */
  link(body: GocardlessLinkParams, options?: Core.RequestOptions): Core.APIPromise<Shared.Auth> {
    return this._client.post('/auth/gocardless/link', { body, ...options });
  }
}

export interface GocardlessExchangeParams {
  link: string;
}

export interface GocardlessLinkParams {
  link: string;
}

export namespace Gocardless {
  export import GocardlessExchangeParams = GocardlessAPI.GocardlessExchangeParams;
  export import GocardlessLinkParams = GocardlessAPI.GocardlessLinkParams;
}
