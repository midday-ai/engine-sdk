// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '@midday-ai/engine/resource';
import * as Core from '@midday-ai/engine/core';
import * as InstitutionsAPI from '@midday-ai/engine/resources/institutions';

export class Institutions extends APIResource {
  /**
   * Get Institutions
   */
  list(
    query: InstitutionListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<InstitutionListResponse> {
    return this._client.get('/institutions', { query, ...options });
  }

  /**
   * Update Institution Usage
   */
  usage(id: string, options?: Core.RequestOptions): Core.APIPromise<InstitutionUsageResponse> {
    return this._client.put(`/institutions/${id}/usage`, options);
  }
}

export interface InstitutionListResponse {
  data: Array<InstitutionListResponse.Data | null>;
}

export namespace InstitutionListResponse {
  export interface Data {
    id: string;

    logo: string | null;

    name: string;

    provider: 'teller' | 'plaid' | 'gocardless';

    available_history?: number | null;
  }
}

export interface InstitutionUsageResponse {
  data: InstitutionUsageResponse.Data | null;
}

export namespace InstitutionUsageResponse {
  export interface Data {
    id: string;

    logo: string | null;

    name: string;

    provider: 'teller' | 'plaid' | 'gocardless';

    available_history?: number | null;
  }
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
  export import InstitutionListResponse = InstitutionsAPI.InstitutionListResponse;
  export import InstitutionUsageResponse = InstitutionsAPI.InstitutionUsageResponse;
  export import InstitutionListParams = InstitutionsAPI.InstitutionListParams;
}
