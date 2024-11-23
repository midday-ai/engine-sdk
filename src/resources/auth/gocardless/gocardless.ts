// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as AgreementAPI from './agreement';
import { Agreement, AgreementCreateParams, GocardlessAgreement } from './agreement';

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
  institutionId: string;

  transactionTotalDays: number;
}

export interface GocardlessLinkParams {
  agreement: string | null;

  institutionId: string;

  redirect: string;

  reference?: string;
}

Gocardless.Agreement = Agreement;

export declare namespace Gocardless {
  export {
    type GocardlessExchange as GocardlessExchange,
    type GocardlessLink as GocardlessLink,
    type GocardlessExchangeParams as GocardlessExchangeParams,
    type GocardlessLinkParams as GocardlessLinkParams,
  };

  export {
    Agreement as Agreement,
    type GocardlessAgreement as GocardlessAgreement,
    type AgreementCreateParams as AgreementCreateParams,
  };
}
