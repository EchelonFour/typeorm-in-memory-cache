import type { QueryResultCache } from 'typeorm/cache/QueryResultCache'
import type { QueryResultCacheOptions } from 'typeorm/cache/QueryResultCacheOptions'

import NodeCache = require('node-cache')

export default class InMemoryCacheProvider implements QueryResultCache {

  private cache: NodeCache;

  constructor(userCache?: NodeCache) {
    if (userCache) {
      this.cache = userCache
    } else {
      this.cache = new NodeCache()
    }
  }
  connect(): Promise<void> {
    return Promise.resolve()
  }
  disconnect(): Promise<void> {
    return Promise.resolve()
  }
  synchronize(): Promise<void> { 
    return Promise.resolve()
  }
  
  async getFromCache(options: QueryResultCacheOptions): Promise<QueryResultCacheOptions | undefined> {
    return this.cache.get(options.identifier || options.query)
  }

  async storeInCache(options: QueryResultCacheOptions, savedCache: QueryResultCacheOptions | undefined): Promise<void> {
    this.cache.set(options.identifier || options.query, options, options.duration / 1000)
  }

  isExpired(savedCache: QueryResultCacheOptions): boolean {
    return (savedCache.time! + savedCache.duration) < new Date().getTime()
  }

  async clear(): Promise<void> {
    this.cache.flushAll()
  }

  async remove(identifiers: string[]): Promise<void> {
    this.cache.del(identifiers)
  }

  getStatistics() {
    return this.cache.getStats()
  }
}
