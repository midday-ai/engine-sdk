// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '@midday-ai/engine/core';
import { APIResource } from '@midday-ai/engine/resource';
import * as AccountsAPI from '@midday-ai/engine/resources/accounts';
import * as InstitutionsAPI from '@midday-ai/engine/resources/institutions';

export class Accounts extends APIResource {
  /**
   * Get Accounts
   */
  list(query: AccountListParams, options?: Core.RequestOptions): Core.APIPromise<Accounts> {
    return this._client.get('/accounts', { query, ...options });
  }

  /**
   * Get Account Balance
   */
  balance(query: AccountBalanceParams, options?: Core.RequestOptions): Core.APIPromise<Account> {
    return this._client.get('/accounts/balance', { query, ...options });
  }
}

export interface Account {
  id: string;

  currency: string;

  enrollment_id: string | null;

  institution: InstitutionsAPI.Institution;

  name: string;

  provider: 'teller' | 'plaid' | 'gocardless';
}

export interface Accounts {
  data: Array<Account>;
}

export interface AccountListParams {
  provider: 'teller' | 'plaid' | 'gocardless';

  /**
   * GoCardLess account id
   */
  id?: string;

  /**
   * Teller & Plaid access token
   */
  accessToken?: string;

  /**
   * GoCardLess country code
   */
  countryCode?: string;

  /**
   * Plaid institution id
   */
  institutionId?: string;
}

export interface AccountBalanceParams {
  provider: 'teller' | 'plaid' | 'gocardless';

  /**
   * GoCardLess account id
   */
  id?: string;

  /**
   * Teller & Plaid access token
   */
  accessToken?: string;

  /**
   * GoCardLess country code
   */
  countryCode?: string;

  /**
   * Plaid institution id
   */
  institutionId?: string;
}

export namespace Accounts {
  export import Account = AccountsAPI.Account;
  export import Accounts = AccountsAPI.Accounts;
  export import AccountListParams = AccountsAPI.AccountListParams;
  export import AccountBalanceParams = AccountsAPI.AccountBalanceParams;
}
