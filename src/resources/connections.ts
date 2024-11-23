// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Connections extends APIResource {
  /**
   * Get Connection Status
   */
  status(query: ConnectionStatusParams, options?: Core.RequestOptions): Core.APIPromise<ConnectionStatus> {
    return this._client.get('/connections/status', { query, ...options });
  }
}

export interface ConnectionStatus {
  data: ConnectionStatus.Data;
}

export namespace ConnectionStatus {
  export interface Data {
    status: string;
  }
}

export interface ConnectionStatusParams {
  provider: 'teller' | 'plaid' | 'gocardless';

  /**
   * GoCardLess reference id
   */
  id?: string;

  /**
   * Teller or Plaid access token
   */
  accessToken?: string;
}

export declare namespace Connections {
  export { type ConnectionStatus as ConnectionStatus, type ConnectionStatusParams as ConnectionStatusParams };
}
