# Transactions

Types:

- <code><a href="./src/resources/transactions.ts">Transactions</a></code>

Methods:

- <code title="get /transactions">client.transactions.<a href="./src/resources/transactions.ts">list</a>({ ...params }) -> Transactions</code>

# Accounts

Types:

- <code><a href="./src/resources/accounts.ts">AccountBalance</a></code>
- <code><a href="./src/resources/accounts.ts">Accounts</a></code>
- <code><a href="./src/resources/accounts.ts">AccountDeleteResponse</a></code>

Methods:

- <code title="get /accounts">client.accounts.<a href="./src/resources/accounts.ts">list</a>({ ...params }) -> Accounts</code>
- <code title="delete /accounts">client.accounts.<a href="./src/resources/accounts.ts">delete</a>({ ...params }) -> AccountDeleteResponse</code>
- <code title="get /accounts/balance">client.accounts.<a href="./src/resources/accounts.ts">balance</a>({ ...params }) -> AccountBalance</code>

# Institutions

Types:

- <code><a href="./src/resources/institutions/institutions.ts">Institutions</a></code>

Methods:

- <code title="get /institutions">client.institutions.<a href="./src/resources/institutions/institutions.ts">list</a>({ ...params }) -> Institutions</code>

## Usage

Types:

- <code><a href="./src/resources/institutions/usage.ts">Institution</a></code>
- <code><a href="./src/resources/institutions/usage.ts">UsageUpdateResponse</a></code>

Methods:

- <code title="put /institutions/{id}/usage">client.institutions.usage.<a href="./src/resources/institutions/usage.ts">update</a>(id) -> UsageUpdateResponse</code>

# Auth

## Plaid

Types:

- <code><a href="./src/resources/auth/plaid.ts">PlaidExchange</a></code>
- <code><a href="./src/resources/auth/plaid.ts">PlaidLink</a></code>

Methods:

- <code title="post /auth/plaid/exchange">client.auth.plaid.<a href="./src/resources/auth/plaid.ts">exchange</a>({ ...params }) -> PlaidExchange</code>
- <code title="post /auth/plaid/link">client.auth.plaid.<a href="./src/resources/auth/plaid.ts">link</a>({ ...params }) -> PlaidLink</code>

## Gocardless

Types:

- <code><a href="./src/resources/auth/gocardless/gocardless.ts">GocardlessExchange</a></code>
- <code><a href="./src/resources/auth/gocardless/gocardless.ts">GocardlessLink</a></code>

Methods:

- <code title="post /auth/gocardless/exchange">client.auth.gocardless.<a href="./src/resources/auth/gocardless/gocardless.ts">exchange</a>({ ...params }) -> GocardlessExchange</code>
- <code title="post /auth/gocardless/link">client.auth.gocardless.<a href="./src/resources/auth/gocardless/gocardless.ts">link</a>({ ...params }) -> GocardlessLink</code>

### Agreement

Types:

- <code><a href="./src/resources/auth/gocardless/agreement.ts">GocardlessAgreement</a></code>

Methods:

- <code title="post /auth/gocardless/agreement">client.auth.gocardless.agreement.<a href="./src/resources/auth/gocardless/agreement.ts">create</a>({ ...params }) -> GocardlessAgreement</code>

# Health

Types:

- <code><a href="./src/resources/health.ts">Health</a></code>

Methods:

- <code title="get /health">client.health.<a href="./src/resources/health.ts">retrieve</a>() -> Health</code>

# Rates

Types:

- <code><a href="./src/resources/rates.ts">RatesSchema</a></code>

Methods:

- <code title="get /rates">client.rates.<a href="./src/resources/rates.ts">list</a>() -> RatesSchema</code>

# Connections

Types:

- <code><a href="./src/resources/connections.ts">ConnectionStatus</a></code>

Methods:

- <code title="get /connections/status">client.connections.<a href="./src/resources/connections.ts">status</a>({ ...params }) -> ConnectionStatus</code>
