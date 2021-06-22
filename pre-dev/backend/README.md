# typescript-node-boilerplate

> ⚡️ minimal boilerplate based on typescript with node, docker, pm2 ⚡️

## Technology

- Typescript
- Node.js
- Docker
- PM2

## Requirements

- `Node.js (>= 10.13.0, except for v13)`

## Getting Started

1. `git clone https://github.com/amamov/typescript-node-boilerplate.git <project_name>`

2. `cd project_name`

3. `rm -rf .git`

4. `npm i`

5. `touch .env` (create dotenv file)

6. `npm run start:dev`

## .env example

```python
# .env

PORT="8000"
MONGO_URL="mongodb+srv://..."
COOKIE_SECRET="..."
JWT_SECRET="..."
JWT_EXPIRATION="1y"
S3_ACCESS_KEY_ID=""
S3_SECRET_ACCESS_KEY=""
REDIS_HOST="localhost"
REDIS_PORT="6379"
REDIS_PASSWORD="1205"
```
