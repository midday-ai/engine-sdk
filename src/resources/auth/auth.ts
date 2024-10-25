// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as PlaidAPI from './plaid';
import * as GocardlessAPI from './gocardless/gocardless';

export class Auth extends APIResource {
  plaid: PlaidAPI.Plaid = new PlaidAPI.Plaid(this._client);
  gocardless: GocardlessAPI.Gocardless = new GocardlessAPI.Gocardless(this._client);
}

export namespace Auth {
  export import Plaid = PlaidAPI.Plaid;
  export type PlaidExchange = PlaidAPI.PlaidExchange;
  export type PlaidLink = PlaidAPI.PlaidLink;
  export type PlaidExchangeParams = PlaidAPI.PlaidExchangeParams;
  export type PlaidLinkParams = PlaidAPI.PlaidLinkParams;
  export import Gocardless = GocardlessAPI.Gocardless;
  export type GocardlessExchange = GocardlessAPI.GocardlessExchange;
  export type GocardlessLink = GocardlessAPI.GocardlessLink;
  export type GocardlessExchangeParams = GocardlessAPI.GocardlessExchangeParams;
  export type GocardlessLinkParams = GocardlessAPI.GocardlessLinkParams;
}
