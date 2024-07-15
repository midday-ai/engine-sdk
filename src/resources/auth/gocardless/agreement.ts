// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '@midday-ai/engine/resource';
import * as Core from '@midday-ai/engine/core';
import * as AgreementAPI from '@midday-ai/engine/resources/auth/gocardless/agreement';

export class Agreement extends APIResource {
  /**
   * Agreement (GoCardLess)
   */
  create(body: AgreementCreateParams, options?: Core.RequestOptions): Core.APIPromise<GocardlessAgreement> {
    return this._client.post('/auth/gocardless/agreement', { body, ...options });
  }
}

export interface GocardlessAgreement {
  data: GocardlessAgreement.Data;
}

export namespace GocardlessAgreement {
  export interface Data {
    id: string;

    accepted: boolean;

    access_valid_for_days: number;

    created: string;

    institution_id: string;

    max_historical_days: number;
  }
}

export interface AgreementCreateParams {
  institution_id: string;

  transactionTotalDays: number;
}

export namespace Agreement {
  export import GocardlessAgreement = AgreementAPI.GocardlessAgreement;
  export import AgreementCreateParams = AgreementAPI.AgreementCreateParams;
}
