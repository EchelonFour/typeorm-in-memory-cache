typeorm-in-memory-cache
=======================
An in-memory cache for typeorm

Badically just a wrapper for [node-cache](https://www.npmjs.com/package/node-cache)

Usage
-----
Use the provider for the cache when [configuring typeorm](https://github.com/typeorm/typeorm/blob/master/docs/caching.md)
```typescript
import InMemoryCacheProvider from 'typeorm-in-memory-cache'
{
    ...
    cache: {
        provider() {
            return new InMemoryCacheProvider()
        }
    }
}
```
Maybe you are a special person with special config needs.
```typescript
import InMemoryCacheProvider from 'typeorm-in-memory-cache'
import NodeCache = require('node-cache')
{
    ...
    cache: {
        provider() {
            const cache = new NodeCache({
              stdTTL: 420,
              checkperiod: 69,
              etc: 'more options',
            })
            return new InMemoryCacheProvider(cache)
        }
    }
}
```