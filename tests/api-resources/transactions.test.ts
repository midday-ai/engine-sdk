// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Midday from '@midday/engine';
import { Response } from 'node-fetch';

const midday = new Midday({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource transactions', () => {
  test('list: only required params', async () => {
    const responsePromise = midday.transactions.list({ accountType: 'depository', provider: 'teller' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await midday.transactions.list({
      accountType: 'depository',
      provider: 'teller',
      accessToken: 'token-123',
      accountId: '5341343-4234-4c65-815c-t234213442',
      latest: 'true',
    });
  });
});
