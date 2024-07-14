// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Midday from '@midday-ai/engine';
import { Response } from 'node-fetch';

const midday = new Midday({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource plaid', () => {
  test('exchange: only required params', async () => {
    const responsePromise = midday.auth.plaid.exchange({
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
    const response = await midday.auth.plaid.exchange({
      token: 'ojwmef9823f892n9h98h2efoqed9823hdodfcoj13er92hef',
    });
  });

  test('link: only required params', async () => {
    const responsePromise = midday.auth.plaid.link({
      language: 'en',
      userId: '9293961c-df93-4d6d-a2cc-fc3e353b2d10',
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
    const response = await midday.auth.plaid.link({
      language: 'en',
      userId: '9293961c-df93-4d6d-a2cc-fc3e353b2d10',
    });
  });
});
