// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { type Agent } from './_shims/index';
import * as Core from './core';
import * as Errors from './error';
import * as Uploads from './uploads';
import * as API from './resources/index';
import {
  AccountBalance,
  AccountBalanceParams,
  AccountDeleteParams,
  AccountDeleteResponse,
  AccountListParams,
  Accounts,
} from './resources/accounts';
import { ConnectionStatus, ConnectionStatusParams, Connections } from './resources/connections';
import { Health } from './resources/health';
import { Rates, RatesSchema } from './resources/rates';
import { TransactionListParams, Transactions } from './resources/transactions';
import { Auth } from './resources/auth/auth';
import { InstitutionListParams, Institutions } from './resources/institutions/institutions';

const environments = {
  production: 'https://engine.midday.ai',
  staging: 'https://engine-staging.midday.ai',
  development: 'http://localhost:3002',
};
type Environment = keyof typeof environments;
export interface ClientOptions {
  /**
   * Defaults to process.env['MIDDAY_ENGINE_API_KEY'].
   */
  bearerToken?: string | undefined;

  /**
   * Specifies the environment to use for the API.
   *
   * Each environment maps to a different base URL:
   * - `production` corresponds to `https://engine.midday.ai`
   * - `staging` corresponds to `https://engine-staging.midday.ai`
   * - `development` corresponds to `http://localhost:3002`
   */
  environment?: Environment;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['MIDDAY_BASE_URL'].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   */
  timeout?: number;

  /**
   * An HTTP agent used to manage HTTP(S) connections.
   *
   * If not provided, an agent will be constructed by default in the Node.js environment,
   * otherwise no agent is used.
   */
  httpAgent?: Agent;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we use `node-fetch` on Node.js and otherwise expect that `fetch` is
   * defined globally.
   */
  fetch?: Core.Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `undefined` or `null` in request options.
   */
  defaultHeaders?: Core.Headers;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Core.DefaultQuery;
}

/**
 * API Client for interfacing with the Midday API.
 */
export class Midday extends Core.APIClient {
  bearerToken: string;

  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Midday API.
   *
   * @param {string | undefined} [opts.bearerToken=process.env['MIDDAY_ENGINE_API_KEY'] ?? undefined]
   * @param {Environment} [opts.environment=production] - Specifies the environment URL to use for the API.
   * @param {string} [opts.baseURL=process.env['MIDDAY_BASE_URL'] ?? https://engine.midday.ai] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
   * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = Core.readEnv('MIDDAY_BASE_URL'),
    bearerToken = Core.readEnv('MIDDAY_ENGINE_API_KEY'),
    ...opts
  }: ClientOptions = {}) {
    if (bearerToken === undefined) {
      throw new Errors.MiddayError(
        "The MIDDAY_ENGINE_API_KEY environment variable is missing or empty; either provide it, or instantiate the Midday client with an bearerToken option, like new Midday({ bearerToken: 'My Bearer Token' }).",
      );
    }

    const options: ClientOptions = {
      bearerToken,
      ...opts,
      baseURL,
      environment: opts.environment ?? 'production',
    };

    if (baseURL && opts.environment) {
      throw new Errors.MiddayError(
        'Ambiguous URL; The `baseURL` option (or MIDDAY_BASE_URL env var) and the `environment` option are given. If you want to use the environment you must pass baseURL: null',
      );
    }

    super({
      baseURL: options.baseURL || environments[options.environment || 'production'],
      timeout: options.timeout ?? 60000 /* 1 minute */,
      httpAgent: options.httpAgent,
      maxRetries: options.maxRetries,
      fetch: options.fetch,
    });

    this._options = options;

    this.bearerToken = bearerToken;
  }

  transactions: API.Transactions = new API.Transactions(this);
  accounts: API.Accounts = new API.Accounts(this);
  institutions: API.Institutions = new API.Institutions(this);
  auth: API.Auth = new API.Auth(this);
  health: API.Health = new API.Health(this);
  rates: API.Rates = new API.Rates(this);
  connections: API.Connections = new API.Connections(this);

  protected override defaultQuery(): Core.DefaultQuery | undefined {
    return this._options.defaultQuery;
  }

  protected override defaultHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return {
      ...super.defaultHeaders(opts),
      ...this._options.defaultHeaders,
    };
  }

  protected override authHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return { Authorization: `Bearer ${this.bearerToken}` };
  }

  static Midday = this;
  static DEFAULT_TIMEOUT = 60000; // 1 minute

  static MiddayError = Errors.MiddayError;
  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;

  static toFile = Uploads.toFile;
  static fileFromPath = Uploads.fileFromPath;
}

Midday.Auth = Auth;
Midday.Rates = Rates;
Midday.Connections = Connections;
export declare namespace Midday {
  export type RequestOptions = Core.RequestOptions;

  export { type Transactions as Transactions, type TransactionListParams as TransactionListParams };

  export {
    type Accounts as Accounts,
    type AccountBalance as AccountBalance,
    type AccountDeleteResponse as AccountDeleteResponse,
    type AccountListParams as AccountListParams,
    type AccountDeleteParams as AccountDeleteParams,
    type AccountBalanceParams as AccountBalanceParams,
  };

  export { type Institutions as Institutions, type InstitutionListParams as InstitutionListParams };

  export { Auth as Auth };

  export { type Health as Health };

  export { Rates as Rates, type RatesSchema as RatesSchema };

  export {
    Connections as Connections,
    type ConnectionStatus as ConnectionStatus,
    type ConnectionStatusParams as ConnectionStatusParams,
  };
}

export { toFile, fileFromPath } from './uploads';
export {
  MiddayError,
  APIError,
  APIConnectionError,
  APIConnectionTimeoutError,
  APIUserAbortError,
  NotFoundError,
  ConflictError,
  RateLimitError,
  BadRequestError,
  AuthenticationError,
  InternalServerError,
  PermissionDeniedError,
  UnprocessableEntityError,
} from './error';

export default Midday;
