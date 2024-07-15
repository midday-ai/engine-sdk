# Transactions

Types:

- <code><a href="./src/resources/transactions.ts">TransactionListResponse</a></code>

Methods:

- <code title="get /transactions">client.transactions.<a href="./src/resources/transactions.ts">list</a>({ ...params }) -> TransactionListResponse</code>

# Accounts

Types:

- <code><a href="./src/resources/accounts.ts">AccountListResponse</a></code>
- <code><a href="./src/resources/accounts.ts">AccountDeleteResponse</a></code>
- <code><a href="./src/resources/accounts.ts">AccountBalanceResponse</a></code>

Methods:

- <code title="get /accounts">client.accounts.<a href="./src/resources/accounts.ts">list</a>({ ...params }) -> AccountListResponse</code>
- <code title="delete /accounts">client.accounts.<a href="./src/resources/accounts.ts">delete</a>({ ...params }) -> AccountDeleteResponse</code>
- <code title="get /accounts/balance">client.accounts.<a href="./src/resources/accounts.ts">balance</a>({ ...params }) -> AccountBalanceResponse</code>

# Institutions

Types:

- <code><a href="./src/resources/institutions.ts">InstitutionListResponse</a></code>

Methods:

- <code title="get /institutions">client.institutions.<a href="./src/resources/institutions.ts">list</a>({ ...params }) -> InstitutionListResponse</code>

# Auth

## Gocardless

Types:

- <code><a href="./src/resources/auth/gocardless.ts">GocardlessExchangeResponse</a></code>
- <code><a href="./src/resources/auth/gocardless.ts">GocardlessLinkResponse</a></code>

Methods:

- <code title="post /auth/gocardless/exchange">client.auth.gocardless.<a href="./src/resources/auth/gocardless.ts">exchange</a>({ ...params }) -> GocardlessExchangeResponse</code>
- <code title="post /auth/gocardless/link">client.auth.gocardless.<a href="./src/resources/auth/gocardless.ts">link</a>({ ...params }) -> GocardlessLinkResponse</code>

## Plaid

Types:

- <code><a href="./src/resources/auth/plaid.ts">PlaidExchangeResponse</a></code>
- <code><a href="./src/resources/auth/plaid.ts">PlaidLinkResponse</a></code>

Methods:

- <code title="post /auth/plaid/exchange">client.auth.plaid.<a href="./src/resources/auth/plaid.ts">exchange</a>({ ...params }) -> PlaidExchangeResponse</code>
- <code title="post /auth/plaid/link">client.auth.plaid.<a href="./src/resources/auth/plaid.ts">link</a>({ ...params }) -> PlaidLinkResponse</code>

# Health

Types:

- <code><a href="./src/resources/health.ts">HealthRetrieveResponse</a></code>

Methods:

- <code title="get /health">client.health.<a href="./src/resources/health.ts">retrieve</a>() -> HealthRetrieveResponse</code>
