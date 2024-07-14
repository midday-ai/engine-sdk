// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '@midday-ai/engine/resource';
import * as Core from '@midday-ai/engine/core';
import * as TransactionsAPI from '@midday-ai/engine/resources/transactions';

export class Transactions extends APIResource {
  /**
   * Get transactions
   */
  list(
    query: TransactionListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TransactionListResponse> {
    return this._client.get('/transactions', { query, ...options });
  }
}

export interface TransactionListResponse {
  data: Array<TransactionListResponse.Data>;
}

export namespace TransactionListResponse {
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
  latest?: boolean;
}

export namespace Transactions {
  export import TransactionListResponse = TransactionsAPI.TransactionListResponse;
  export import TransactionListParams = TransactionsAPI.TransactionListParams;
}
