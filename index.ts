import type { QueryResultCache } from 'typeorm/cache/QueryResultCache'
import type { QueryResultCacheOptions } from 'typeorm/cache/QueryResultCacheOptions'
import type { QueryRunner } from 'typeorm'

export default class InMemoryCacheProvider implements QueryResultCache {
  connect(): Promise<void> {
    throw new Error("Method not implemented.")
  }
  disconnect(): Promise<void> {
    throw new Error("Method not implemented.")
  }
  synchronize(queryRunner?: QueryRunner | undefined): Promise<void> {
    throw new Error("Method not implemented.")
  }
  getFromCache(options: QueryResultCacheOptions, queryRunner?: QueryRunner | undefined): Promise<QueryResultCacheOptions | undefined> {
    throw new Error("Method not implemented.")
  }
  storeInCache(options: QueryResultCacheOptions, savedCache: QueryResultCacheOptions | undefined, queryRunner?: QueryRunner | undefined): Promise<void> {
    throw new Error("Method not implemented.")
  }
  isExpired(savedCache: QueryResultCacheOptions): boolean {
    throw new Error("Method not implemented.")
  }
  clear(queryRunner?: QueryRunner | undefined): Promise<void> {
    throw new Error("Method not implemented.")
  }
  remove(identifiers: string[], queryRunner?: QueryRunner | undefined): Promise<void> {
    throw new Error("Method not implemented.")
  }
}
