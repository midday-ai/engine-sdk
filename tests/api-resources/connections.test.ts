// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Midday from '@midday-ai/engine';
import { Response } from 'node-fetch';

const client = new Midday({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource connections', () => {
  test('status: only required params', async () => {
    const responsePromise = client.connections.status({ provider: 'teller' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('status: required and optional params', async () => {
    const response = await client.connections.status({
      provider: 'teller',
      id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
      accessToken: 'test_token_ky6igyqi3qxa4',
    });
  });
});
