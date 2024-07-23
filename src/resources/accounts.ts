// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as AccountsAPI from './accounts';
import * as UsageAPI from './institutions/usage';

export class Accounts extends APIResource {
  /**
   * Get Accounts
   */
  list(query: AccountListParams, options?: Core.RequestOptions): Core.APIPromise<Accounts> {
    return this._client.get('/accounts', { query, ...options });
  }

  /**
   * Delete Accounts
   */
  delete(params: AccountDeleteParams, options?: Core.RequestOptions): Core.APIPromise<AccountDeleteResponse> {
    const { accountId, provider, accessToken } = params;
    return this._client.delete('/accounts', { query: { accountId, provider, accessToken }, ...options });
  }

  /**
   * Get Account Balance
   */
  balance(query: AccountBalanceParams, options?: Core.RequestOptions): Core.APIPromise<AccountBalance> {
    return this._client.get('/accounts/balance', { query, ...options });
  }
}

export interface AccountBalance {
  data: AccountBalance.Data | null;
}

export namespace AccountBalance {
  export interface Data {
    amount: number;

    currency: string;
  }
}

export interface Accounts {
  data: Array<Accounts.Data>;
}

export namespace Accounts {
  export interface Data {
    id: string;

    balance: Data.Balance;

    currency: string;

    enrollment_id: string | null;

    institution: UsageAPI.Institution;

    name: string;

    type: 'depository' | 'credit' | 'other_asset' | 'loan' | 'other_liability';
  }

  export namespace Data {
    export interface Balance {
      amount: number;

      currency: string;
    }
  }
}

export interface AccountDeleteResponse {
  success: boolean;
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
   * Plaid institution id
   */
  institutionId?: string;
}

export interface AccountDeleteParams {
  /**
   * Account id (GoCardLess)
   */
  accountId: string;

  provider: 'teller' | 'plaid' | 'gocardless';

  /**
   * Teller & Plaid access token
   */
  accessToken?: string;
}

export interface AccountBalanceParams {
  /**
   * Account id
   */
  id: string;

  provider: 'teller' | 'plaid' | 'gocardless';

  /**
   * Teller & Plaid access token
   */
  accessToken?: string;
}

export namespace Accounts {
  export import AccountBalance = AccountsAPI.AccountBalance;
  export import Accounts = AccountsAPI.Accounts;
  export import AccountDeleteResponse = AccountsAPI.AccountDeleteResponse;
  export import AccountListParams = AccountsAPI.AccountListParams;
  export import AccountDeleteParams = AccountsAPI.AccountDeleteParams;
  export import AccountBalanceParams = AccountsAPI.AccountBalanceParams;
}
