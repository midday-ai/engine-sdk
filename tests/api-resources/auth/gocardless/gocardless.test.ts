// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Midday from '@midday-ai/engine';
import { Response } from 'node-fetch';

const client = new Midday({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource gocardless', () => {
  test('exchange: only required params', async () => {
    const responsePromise = client.auth.gocardless.exchange({
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

  test('exchange: required and optional params', async () => {
    const response = await client.auth.gocardless.exchange({
      institutionId: 'REVOLUT_REVOGB21',
      transactionTotalDays: 90,
    });
  });

  test('link: only required params', async () => {
    const responsePromise = client.auth.gocardless.link({
      agreement: '2dea1b84-97b0-4cb4-8805-302c227587c8',
      institutionId: 'REVOLUT_REVOGB21',
      redirect: 'http://www.yourwebpage.com',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('link: required and optional params', async () => {
    const response = await client.auth.gocardless.link({
      agreement: '2dea1b84-97b0-4cb4-8805-302c227587c8',
      institutionId: 'REVOLUT_REVOGB21',
      redirect: 'http://www.yourwebpage.com',
      reference: '1234567890',
    });
  });
});
