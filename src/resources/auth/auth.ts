// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as PlaidAPI from './plaid';
import { Plaid, PlaidExchange, PlaidExchangeParams, PlaidLink, PlaidLinkParams } from './plaid';
import * as GocardlessAPI from './gocardless/gocardless';
import {
  Gocardless,
  GocardlessExchange,
  GocardlessExchangeParams,
  GocardlessLink,
  GocardlessLinkParams,
} from './gocardless/gocardless';

export class Auth extends APIResource {
  plaid: PlaidAPI.Plaid = new PlaidAPI.Plaid(this._client);
  gocardless: GocardlessAPI.Gocardless = new GocardlessAPI.Gocardless(this._client);
}

Auth.Plaid = Plaid;
Auth.Gocardless = Gocardless;

export declare namespace Auth {
  export {
    Plaid as Plaid,
    type PlaidExchange as PlaidExchange,
    type PlaidLink as PlaidLink,
    type PlaidExchangeParams as PlaidExchangeParams,
    type PlaidLinkParams as PlaidLinkParams,
  };

  export {
    Gocardless as Gocardless,
    type GocardlessExchange as GocardlessExchange,
    type GocardlessLink as GocardlessLink,
    type GocardlessExchangeParams as GocardlessExchangeParams,
    type GocardlessLinkParams as GocardlessLinkParams,
  };
}
