// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '@midday-ai/engine/core';
import { APIResource } from '@midday-ai/engine/resource';
import * as AccountsAPI from '@midday-ai/engine/resources/accounts';

export class Accounts extends APIResource {
  /**
   * Get Accounts
   */
  list(query: AccountListParams, options?: Core.RequestOptions): Core.APIPromise<AccountListResponse> {
    return this._client.get('/accounts', { query, ...options });
  }

  /**
   * Get Account Balance
   */
  balance(
    query: AccountBalanceParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AccountBalanceResponse> {
    return this._client.get('/accounts/balance', { query, ...options });
  }
}

export interface AccountListResponse {
  data: Array<AccountListResponse.Data>;
}

export namespace AccountListResponse {
  export interface Data {
    id: string;

    currency: string;

    enrollment_id: string | null;

    institution: Data.Institution;

    name: string;

    provider: 'teller' | 'plaid' | 'gocardless';
  }

  export namespace Data {
    export interface Institution {
      id: string;

      logo: string | null;

      name: string;
    }
  }
}

export interface AccountBalanceResponse {
  id: string;

  currency: string;

  enrollment_id: string | null;

  institution: AccountBalanceResponse.Institution;

  name: string;

  provider: 'teller' | 'plaid' | 'gocardless';
}

export namespace AccountBalanceResponse {
  export interface Institution {
    id: string;

    logo: string | null;

    name: string;
  }
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
  export import AccountListResponse = AccountsAPI.AccountListResponse;
  export import AccountBalanceResponse = AccountsAPI.AccountBalanceResponse;
  export import AccountListParams = AccountsAPI.AccountListParams;
  export import AccountBalanceParams = AccountsAPI.AccountBalanceParams;
}
