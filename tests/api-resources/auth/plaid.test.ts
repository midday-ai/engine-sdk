// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Midday from '@midday-ai/engine';
import { Response } from 'node-fetch';

const client = new Midday({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource plaid', () => {
  test('exchange: only required params', async () => {
    const responsePromise = client.auth.plaid.exchange({
      token: 'ojwmef9823f892n9h98h2efoqed9823hdodfcoj13er92hef',
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
    const response = await client.auth.plaid.exchange({
      token: 'ojwmef9823f892n9h98h2efoqed9823hdodfcoj13er92hef',
    });
  });

  test('link', async () => {
    const responsePromise = client.auth.plaid.link();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('link: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.auth.plaid.link({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Midday.NotFoundError,
    );
  });

  test('link: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.auth.plaid.link(
        {
          accessToken: 'ojwmef9823f892n9h98h2efoqed9823hdodfcoj13er92hef',
          language: 'en',
          userId: '9293961c-df93-4d6d-a2cc-fc3e353b2d10',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Midday.NotFoundError);
  });
});
