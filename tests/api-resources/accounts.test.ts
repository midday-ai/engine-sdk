// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Midday from '@midday-ai/engine';
import { Response } from 'node-fetch';

const midday = new Midday({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource accounts', () => {
  test('list: only required params', async () => {
    const responsePromise = midday.accounts.list({ provider: 'teller' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await midday.accounts.list({
      provider: 'teller',
      id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
      accessToken: 'test_token_ky6igyqi3qxa4',
      institutionId: 'ins_109508',
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = midday.accounts.delete({
      accountId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
      provider: 'teller',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await midday.accounts.delete({
      accountId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
      provider: 'teller',
      accessToken: 'test_token_ky6igyqi3qxa4',
    });
  });

  test('balance: only required params', async () => {
    const responsePromise = midday.accounts.balance({
      id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
      provider: 'teller',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('balance: required and optional params', async () => {
    const response = await midday.accounts.balance({
      id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
      provider: 'teller',
      accessToken: 'test_token_ky6igyqi3qxa4',
    });
  });
});
