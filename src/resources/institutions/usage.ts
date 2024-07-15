// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '@midday-ai/engine/resource';
import * as UsageAPI from '@midday-ai/engine/resources/institutions/usage';

export class Usage extends APIResource {}

export interface Institution {
  id: string;

  logo: string | null;

  name: string;

  provider: 'teller' | 'plaid' | 'gocardless';

  available_history?: number | null;
}

export namespace Usage {
  export import Institution = UsageAPI.Institution;
}
