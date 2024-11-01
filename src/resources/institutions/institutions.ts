// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as UsageAPI from './usage';
import { Institution, Usage, UsageUpdateResponse } from './usage';

export class Institutions extends APIResource {
  usage: UsageAPI.Usage = new UsageAPI.Usage(this._client);

  /**
   * Get Institutions
   */
  list(query: InstitutionListParams, options?: Core.RequestOptions): Core.APIPromise<Institutions> {
    return this._client.get('/institutions', { query, ...options });
  }
}

export interface Institutions {
  data: Array<UsageAPI.Institution>;
}

export interface InstitutionListParams {
  /**
   * Country code
   */
  countryCode:
    | 'AT'
    | 'BE'
    | 'BG'
    | 'HR'
    | 'CY'
    | 'CZ'
    | 'DK'
    | 'EE'
    | 'FI'
    | 'FR'
    | 'DE'
    | 'GR'
    | 'HU'
    | 'IS'
    | 'IE'
    | 'IT'
    | 'LV'
    | 'LI'
    | 'LT'
    | 'LU'
    | 'MT'
    | 'NL'
    | 'NO'
    | 'PL'
    | 'PT'
    | 'RO'
    | 'SK'
    | 'SI'
    | 'ES'
    | 'SE'
    | 'GB'
    | 'US'
    | 'CA';

  /**
   * Limit results
   */
  limit?: string;

  /**
   * Search query
   */
  q?: string;
}

Institutions.Usage = Usage;

export declare namespace Institutions {
  export { type Institutions as Institutions, type InstitutionListParams as InstitutionListParams };

  export { Usage as Usage, type Institution as Institution, type UsageUpdateResponse as UsageUpdateResponse };
}
