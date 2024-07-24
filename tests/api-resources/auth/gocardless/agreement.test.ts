// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Midday from '@midday-ai/engine';
import { Response } from 'node-fetch';

const midday = new Midday({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource agreement', () => {
  test('create: only required params', async () => {
    const responsePromise = midday.auth.gocardless.agreement.create({
      institutionId: 'REVOLUT_REVOGB21',
      transactionTotalDays: 90,
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await midday.auth.gocardless.agreement.create({
      institutionId: 'REVOLUT_REVOGB21',
      transactionTotalDays: 90,
    });
  });
});
