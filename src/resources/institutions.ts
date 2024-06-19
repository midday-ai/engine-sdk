// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '@midday-ai/engine/core';
import { APIResource } from '@midday-ai/engine/resource';
import * as InstitutionsAPI from '@midday-ai/engine/resources/institutions';

export class Institutions extends APIResource {
  /**
   * Search Institutions
   */
  search(options?: Core.RequestOptions): Core.APIPromise<Institution> {
    return this._client.get('/institutions/search', options);
  }
}

export interface Institution {
  id: string;

  logo: string | null;

  name: string;
}

export namespace Institutions {
  export import Institution = InstitutionsAPI.Institution;
}
