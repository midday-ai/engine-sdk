// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '@midday-ai/engine/resource';
import * as Core from '@midday-ai/engine/core';
import * as InstitutionsAPI from '@midday-ai/engine/resources/institutions/institutions';
import * as UsageAPI from '@midday-ai/engine/resources/institutions/usage';

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
  data: Array<UsageAPI.Institution | null>;
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
    | 'US';

  /**
   * Limit results
   */
  limit?: string;

  /**
   * Search query
   */
  q?: string;
}

export namespace Institutions {
  export import Institutions = InstitutionsAPI.Institutions;
  export import InstitutionListParams = InstitutionsAPI.InstitutionListParams;
  export import Usage = UsageAPI.Usage;
  export import Institution = UsageAPI.Institution;
  export import UsageUpdateResponse = UsageAPI.UsageUpdateResponse;
}
