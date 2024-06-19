# Shared

Types:

- <code><a href="./src/resources/shared.ts">Auth</a></code>

# Transactions

Types:

- <code><a href="./src/resources/transactions.ts">Transactions</a></code>

Methods:

- <code title="get /transactions">client.transactions.<a href="./src/resources/transactions.ts">list</a>({ ...params }) -> Transactions</code>

# Accounts

Types:

- <code><a href="./src/resources/accounts.ts">Account</a></code>
- <code><a href="./src/resources/accounts.ts">Accounts</a></code>

Methods:

- <code title="get /accounts">client.accounts.<a href="./src/resources/accounts.ts">list</a>({ ...params }) -> Accounts</code>
- <code title="get /accounts/balance">client.accounts.<a href="./src/resources/accounts.ts">balance</a>({ ...params }) -> Account</code>

# Institutions

Types:

- <code><a href="./src/resources/institutions.ts">Institution</a></code>

Methods:

- <code title="get /institutions/search">client.institutions.<a href="./src/resources/institutions.ts">search</a>() -> Institution</code>

# Auth

## Gocardless

Methods:

- <code title="post /auth/gocardless/exchange">client.auth.gocardless.<a href="./src/resources/auth/gocardless.ts">exchange</a>({ ...params }) -> Auth</code>
- <code title="post /auth/gocardless/link">client.auth.gocardless.<a href="./src/resources/auth/gocardless.ts">link</a>({ ...params }) -> Auth</code>

## Plaid

Methods:

- <code title="post /auth/plaid/exchange">client.auth.plaid.<a href="./src/resources/auth/plaid.ts">exchange</a>({ ...params }) -> Auth</code>
- <code title="post /auth/plaid/link">client.auth.plaid.<a href="./src/resources/auth/plaid.ts">link</a>({ ...params }) -> Auth</code>

# Health

Types:

- <code><a href="./src/resources/health.ts">Health</a></code>

Methods:

- <code title="get /health">client.health.<a href="./src/resources/health.ts">retrieve</a>() -> Health</code>
