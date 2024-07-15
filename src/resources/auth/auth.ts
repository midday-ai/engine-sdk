// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '@midday-ai/engine/resource';
import * as PlaidAPI from '@midday-ai/engine/resources/auth/plaid';
import * as GocardlessAPI from '@midday-ai/engine/resources/auth/gocardless/gocardless';

export class Auth extends APIResource {
  plaid: PlaidAPI.Plaid = new PlaidAPI.Plaid(this._client);
  gocardless: GocardlessAPI.Gocardless = new GocardlessAPI.Gocardless(this._client);
}

export namespace Auth {
  export import Plaid = PlaidAPI.Plaid;
  export import PlaidExchange = PlaidAPI.PlaidExchange;
  export import PlaidLink = PlaidAPI.PlaidLink;
  export import PlaidExchangeParams = PlaidAPI.PlaidExchangeParams;
  export import PlaidLinkParams = PlaidAPI.PlaidLinkParams;
  export import Gocardless = GocardlessAPI.Gocardless;
  export import GocardlessExchange = GocardlessAPI.GocardlessExchange;
  export import GocardlessLink = GocardlessAPI.GocardlessLink;
  export import GocardlessExchangeParams = GocardlessAPI.GocardlessExchangeParams;
  export import GocardlessLinkParams = GocardlessAPI.GocardlessLinkParams;
}
