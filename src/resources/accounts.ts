// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
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

    /**
     * Teller/Plaid enrollment id
     */
    enrollment_id: string | null;

    institution: UsageAPI.Institution;

    name: string;

    /**
     * GoCardLess reference id
     */
    resource_id: string | null;

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
   * GoCardLess reference id
   */
  id?: string;

  /**
   * Teller or Plaid access token
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
   * Teller or Plaid access token
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
   * Teller or Plaid access token
   */
  accessToken?: string;
}

export declare namespace Accounts {
  export {
    type AccountBalance as AccountBalance,
    type Accounts as Accounts,
    type AccountDeleteResponse as AccountDeleteResponse,
    type AccountListParams as AccountListParams,
    type AccountDeleteParams as AccountDeleteParams,
    type AccountBalanceParams as AccountBalanceParams,
  };
}
