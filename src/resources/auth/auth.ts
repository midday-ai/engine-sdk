// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '@midday/engine/resource';
import * as GocardlessAPI from '@midday/engine/resources/auth/gocardless';
import * as PlaidAPI from '@midday/engine/resources/auth/plaid';

export class Auth extends APIResource {
  gocardless: GocardlessAPI.Gocardless = new GocardlessAPI.Gocardless(this._client);
  plaid: PlaidAPI.Plaid = new PlaidAPI.Plaid(this._client);
}

export namespace Auth {
  export import Gocardless = GocardlessAPI.Gocardless;
  export import GocardlessExchangeParams = GocardlessAPI.GocardlessExchangeParams;
  export import GocardlessLinkParams = GocardlessAPI.GocardlessLinkParams;
  export import Plaid = PlaidAPI.Plaid;
  export import PlaidExchangeParams = PlaidAPI.PlaidExchangeParams;
  export import PlaidLinkParams = PlaidAPI.PlaidLinkParams;
}
