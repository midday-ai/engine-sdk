// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '@midday-ai/engine/resource';
import * as Core from '@midday-ai/engine/core';
import * as GocardlessAPI from '@midday-ai/engine/resources/auth/gocardless/gocardless';
import * as AgreementAPI from '@midday-ai/engine/resources/auth/gocardless/agreement';

export class Gocardless extends APIResource {
  agreement: AgreementAPI.Agreement = new AgreementAPI.Agreement(this._client);

  /**
   * Exchange token (GoCardLess)
   */
  exchange(
    body: GocardlessExchangeParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<GocardlessExchange> {
    return this._client.post('/auth/gocardless/exchange', { body, ...options });
  }

  /**
   * Auth link (GoCardLess)
   */
  link(body: GocardlessLinkParams, options?: Core.RequestOptions): Core.APIPromise<GocardlessLink> {
    return this._client.post('/auth/gocardless/link', { body, ...options });
  }
}

export interface GocardlessExchange {
  data: GocardlessExchange.Data;
}

export namespace GocardlessExchange {
  export interface Data {
    id: string;

    access_valid_for_days: number;

    institution_id: string;

    max_historical_days: number;
  }
}

export interface GocardlessLink {
  data: GocardlessLink.Data;
}

export namespace GocardlessLink {
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
  export import GocardlessExchange = GocardlessAPI.GocardlessExchange;
  export import GocardlessLink = GocardlessAPI.GocardlessLink;
  export import GocardlessExchangeParams = GocardlessAPI.GocardlessExchangeParams;
  export import GocardlessLinkParams = GocardlessAPI.GocardlessLinkParams;
  export import Agreement = AgreementAPI.Agreement;
  export import GocardlessAgreement = AgreementAPI.GocardlessAgreement;
  export import AgreementCreateParams = AgreementAPI.AgreementCreateParams;
}
