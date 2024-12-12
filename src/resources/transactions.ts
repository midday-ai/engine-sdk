// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Transactions extends APIResource {
  /**
   * Get transactions
   */
  list(query: TransactionListParams, options?: Core.RequestOptions): Core.APIPromise<Transactions> {
    return this._client.get('/transactions', { query, ...options });
  }
}

export interface Transactions {
  data: Array<Transactions.Data>;
}

export namespace Transactions {
  export interface Data {
    id: string;

    amount: number;

    balance: number | null;

    category: string | null;

    currency: string;

    date: string;

    description: string | null;

    method: string | null;

    name: string;

    status: 'pending' | 'posted';
  }
}

export interface TransactionListParams {
  /**
   * Get transactions by accountId
   */
  accountId: string;

  /**
   * Get transactions with the correct amount depending on credit or depository
   */
  accountType: 'credit' | 'depository';

  provider: 'teller' | 'plaid' | 'gocardless';

  /**
   * Used for Teller and Plaid
   */
  accessToken?: string;

  /**
   * Get latest transactions
   */
  latest?: boolean | null;
}

export declare namespace Transactions {
  export { type Transactions as Transactions, type TransactionListParams as TransactionListParams };
}
