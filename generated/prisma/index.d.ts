
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model BaseProduct
 * 
 */
export type BaseProduct = $Result.DefaultSelection<Prisma.$BaseProductPayload>
/**
 * Model ProductVariant
 * 
 */
export type ProductVariant = $Result.DefaultSelection<Prisma.$ProductVariantPayload>
/**
 * Model PriceReport
 * 
 */
export type PriceReport = $Result.DefaultSelection<Prisma.$PriceReportPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more BaseProducts
 * const baseProducts = await prisma.baseProduct.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more BaseProducts
   * const baseProducts = await prisma.baseProduct.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.baseProduct`: Exposes CRUD operations for the **BaseProduct** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BaseProducts
    * const baseProducts = await prisma.baseProduct.findMany()
    * ```
    */
  get baseProduct(): Prisma.BaseProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productVariant`: Exposes CRUD operations for the **ProductVariant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductVariants
    * const productVariants = await prisma.productVariant.findMany()
    * ```
    */
  get productVariant(): Prisma.ProductVariantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.priceReport`: Exposes CRUD operations for the **PriceReport** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PriceReports
    * const priceReports = await prisma.priceReport.findMany()
    * ```
    */
  get priceReport(): Prisma.PriceReportDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.11.1
   * Query Engine version: f40f79ec31188888a2e33acda0ecc8fd10a853a9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    BaseProduct: 'BaseProduct',
    ProductVariant: 'ProductVariant',
    PriceReport: 'PriceReport'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "baseProduct" | "productVariant" | "priceReport"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      BaseProduct: {
        payload: Prisma.$BaseProductPayload<ExtArgs>
        fields: Prisma.BaseProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BaseProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BaseProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BaseProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BaseProductPayload>
          }
          findFirst: {
            args: Prisma.BaseProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BaseProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BaseProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BaseProductPayload>
          }
          findMany: {
            args: Prisma.BaseProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BaseProductPayload>[]
          }
          create: {
            args: Prisma.BaseProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BaseProductPayload>
          }
          createMany: {
            args: Prisma.BaseProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BaseProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BaseProductPayload>[]
          }
          delete: {
            args: Prisma.BaseProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BaseProductPayload>
          }
          update: {
            args: Prisma.BaseProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BaseProductPayload>
          }
          deleteMany: {
            args: Prisma.BaseProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BaseProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BaseProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BaseProductPayload>[]
          }
          upsert: {
            args: Prisma.BaseProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BaseProductPayload>
          }
          aggregate: {
            args: Prisma.BaseProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBaseProduct>
          }
          groupBy: {
            args: Prisma.BaseProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<BaseProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.BaseProductCountArgs<ExtArgs>
            result: $Utils.Optional<BaseProductCountAggregateOutputType> | number
          }
        }
      }
      ProductVariant: {
        payload: Prisma.$ProductVariantPayload<ExtArgs>
        fields: Prisma.ProductVariantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductVariantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductVariantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload>
          }
          findFirst: {
            args: Prisma.ProductVariantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductVariantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload>
          }
          findMany: {
            args: Prisma.ProductVariantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload>[]
          }
          create: {
            args: Prisma.ProductVariantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload>
          }
          createMany: {
            args: Prisma.ProductVariantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductVariantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload>[]
          }
          delete: {
            args: Prisma.ProductVariantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload>
          }
          update: {
            args: Prisma.ProductVariantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload>
          }
          deleteMany: {
            args: Prisma.ProductVariantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductVariantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductVariantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload>[]
          }
          upsert: {
            args: Prisma.ProductVariantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload>
          }
          aggregate: {
            args: Prisma.ProductVariantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductVariant>
          }
          groupBy: {
            args: Prisma.ProductVariantGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductVariantGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductVariantCountArgs<ExtArgs>
            result: $Utils.Optional<ProductVariantCountAggregateOutputType> | number
          }
        }
      }
      PriceReport: {
        payload: Prisma.$PriceReportPayload<ExtArgs>
        fields: Prisma.PriceReportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PriceReportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceReportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PriceReportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceReportPayload>
          }
          findFirst: {
            args: Prisma.PriceReportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceReportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PriceReportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceReportPayload>
          }
          findMany: {
            args: Prisma.PriceReportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceReportPayload>[]
          }
          create: {
            args: Prisma.PriceReportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceReportPayload>
          }
          createMany: {
            args: Prisma.PriceReportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PriceReportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceReportPayload>[]
          }
          delete: {
            args: Prisma.PriceReportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceReportPayload>
          }
          update: {
            args: Prisma.PriceReportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceReportPayload>
          }
          deleteMany: {
            args: Prisma.PriceReportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PriceReportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PriceReportUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceReportPayload>[]
          }
          upsert: {
            args: Prisma.PriceReportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceReportPayload>
          }
          aggregate: {
            args: Prisma.PriceReportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePriceReport>
          }
          groupBy: {
            args: Prisma.PriceReportGroupByArgs<ExtArgs>
            result: $Utils.Optional<PriceReportGroupByOutputType>[]
          }
          count: {
            args: Prisma.PriceReportCountArgs<ExtArgs>
            result: $Utils.Optional<PriceReportCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    baseProduct?: BaseProductOmit
    productVariant?: ProductVariantOmit
    priceReport?: PriceReportOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type BaseProductCountOutputType
   */

  export type BaseProductCountOutputType = {
    variants: number
  }

  export type BaseProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    variants?: boolean | BaseProductCountOutputTypeCountVariantsArgs
  }

  // Custom InputTypes
  /**
   * BaseProductCountOutputType without action
   */
  export type BaseProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BaseProductCountOutputType
     */
    select?: BaseProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BaseProductCountOutputType without action
   */
  export type BaseProductCountOutputTypeCountVariantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductVariantWhereInput
  }


  /**
   * Count Type ProductVariantCountOutputType
   */

  export type ProductVariantCountOutputType = {
    priceReports: number
  }

  export type ProductVariantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    priceReports?: boolean | ProductVariantCountOutputTypeCountPriceReportsArgs
  }

  // Custom InputTypes
  /**
   * ProductVariantCountOutputType without action
   */
  export type ProductVariantCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariantCountOutputType
     */
    select?: ProductVariantCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductVariantCountOutputType without action
   */
  export type ProductVariantCountOutputTypeCountPriceReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PriceReportWhereInput
  }


  /**
   * Models
   */

  /**
   * Model BaseProduct
   */

  export type AggregateBaseProduct = {
    _count: BaseProductCountAggregateOutputType | null
    _min: BaseProductMinAggregateOutputType | null
    _max: BaseProductMaxAggregateOutputType | null
  }

  export type BaseProductMinAggregateOutputType = {
    id: string | null
    name: string | null
    category: string | null
    createdBy: string | null
    createdAt: Date | null
    imageUrl: string | null
  }

  export type BaseProductMaxAggregateOutputType = {
    id: string | null
    name: string | null
    category: string | null
    createdBy: string | null
    createdAt: Date | null
    imageUrl: string | null
  }

  export type BaseProductCountAggregateOutputType = {
    id: number
    name: number
    category: number
    createdBy: number
    createdAt: number
    imageUrl: number
    _all: number
  }


  export type BaseProductMinAggregateInputType = {
    id?: true
    name?: true
    category?: true
    createdBy?: true
    createdAt?: true
    imageUrl?: true
  }

  export type BaseProductMaxAggregateInputType = {
    id?: true
    name?: true
    category?: true
    createdBy?: true
    createdAt?: true
    imageUrl?: true
  }

  export type BaseProductCountAggregateInputType = {
    id?: true
    name?: true
    category?: true
    createdBy?: true
    createdAt?: true
    imageUrl?: true
    _all?: true
  }

  export type BaseProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BaseProduct to aggregate.
     */
    where?: BaseProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BaseProducts to fetch.
     */
    orderBy?: BaseProductOrderByWithRelationInput | BaseProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BaseProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BaseProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BaseProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BaseProducts
    **/
    _count?: true | BaseProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BaseProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BaseProductMaxAggregateInputType
  }

  export type GetBaseProductAggregateType<T extends BaseProductAggregateArgs> = {
        [P in keyof T & keyof AggregateBaseProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBaseProduct[P]>
      : GetScalarType<T[P], AggregateBaseProduct[P]>
  }




  export type BaseProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BaseProductWhereInput
    orderBy?: BaseProductOrderByWithAggregationInput | BaseProductOrderByWithAggregationInput[]
    by: BaseProductScalarFieldEnum[] | BaseProductScalarFieldEnum
    having?: BaseProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BaseProductCountAggregateInputType | true
    _min?: BaseProductMinAggregateInputType
    _max?: BaseProductMaxAggregateInputType
  }

  export type BaseProductGroupByOutputType = {
    id: string
    name: string
    category: string
    createdBy: string
    createdAt: Date
    imageUrl: string | null
    _count: BaseProductCountAggregateOutputType | null
    _min: BaseProductMinAggregateOutputType | null
    _max: BaseProductMaxAggregateOutputType | null
  }

  type GetBaseProductGroupByPayload<T extends BaseProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BaseProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BaseProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BaseProductGroupByOutputType[P]>
            : GetScalarType<T[P], BaseProductGroupByOutputType[P]>
        }
      >
    >


  export type BaseProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    createdBy?: boolean
    createdAt?: boolean
    imageUrl?: boolean
    variants?: boolean | BaseProduct$variantsArgs<ExtArgs>
    _count?: boolean | BaseProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["baseProduct"]>

  export type BaseProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    createdBy?: boolean
    createdAt?: boolean
    imageUrl?: boolean
  }, ExtArgs["result"]["baseProduct"]>

  export type BaseProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    createdBy?: boolean
    createdAt?: boolean
    imageUrl?: boolean
  }, ExtArgs["result"]["baseProduct"]>

  export type BaseProductSelectScalar = {
    id?: boolean
    name?: boolean
    category?: boolean
    createdBy?: boolean
    createdAt?: boolean
    imageUrl?: boolean
  }

  export type BaseProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "category" | "createdBy" | "createdAt" | "imageUrl", ExtArgs["result"]["baseProduct"]>
  export type BaseProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    variants?: boolean | BaseProduct$variantsArgs<ExtArgs>
    _count?: boolean | BaseProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BaseProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BaseProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BaseProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BaseProduct"
    objects: {
      variants: Prisma.$ProductVariantPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      category: string
      createdBy: string
      createdAt: Date
      imageUrl: string | null
    }, ExtArgs["result"]["baseProduct"]>
    composites: {}
  }

  type BaseProductGetPayload<S extends boolean | null | undefined | BaseProductDefaultArgs> = $Result.GetResult<Prisma.$BaseProductPayload, S>

  type BaseProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BaseProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BaseProductCountAggregateInputType | true
    }

  export interface BaseProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BaseProduct'], meta: { name: 'BaseProduct' } }
    /**
     * Find zero or one BaseProduct that matches the filter.
     * @param {BaseProductFindUniqueArgs} args - Arguments to find a BaseProduct
     * @example
     * // Get one BaseProduct
     * const baseProduct = await prisma.baseProduct.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BaseProductFindUniqueArgs>(args: SelectSubset<T, BaseProductFindUniqueArgs<ExtArgs>>): Prisma__BaseProductClient<$Result.GetResult<Prisma.$BaseProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BaseProduct that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BaseProductFindUniqueOrThrowArgs} args - Arguments to find a BaseProduct
     * @example
     * // Get one BaseProduct
     * const baseProduct = await prisma.baseProduct.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BaseProductFindUniqueOrThrowArgs>(args: SelectSubset<T, BaseProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BaseProductClient<$Result.GetResult<Prisma.$BaseProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BaseProduct that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BaseProductFindFirstArgs} args - Arguments to find a BaseProduct
     * @example
     * // Get one BaseProduct
     * const baseProduct = await prisma.baseProduct.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BaseProductFindFirstArgs>(args?: SelectSubset<T, BaseProductFindFirstArgs<ExtArgs>>): Prisma__BaseProductClient<$Result.GetResult<Prisma.$BaseProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BaseProduct that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BaseProductFindFirstOrThrowArgs} args - Arguments to find a BaseProduct
     * @example
     * // Get one BaseProduct
     * const baseProduct = await prisma.baseProduct.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BaseProductFindFirstOrThrowArgs>(args?: SelectSubset<T, BaseProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__BaseProductClient<$Result.GetResult<Prisma.$BaseProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BaseProducts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BaseProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BaseProducts
     * const baseProducts = await prisma.baseProduct.findMany()
     * 
     * // Get first 10 BaseProducts
     * const baseProducts = await prisma.baseProduct.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const baseProductWithIdOnly = await prisma.baseProduct.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BaseProductFindManyArgs>(args?: SelectSubset<T, BaseProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BaseProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BaseProduct.
     * @param {BaseProductCreateArgs} args - Arguments to create a BaseProduct.
     * @example
     * // Create one BaseProduct
     * const BaseProduct = await prisma.baseProduct.create({
     *   data: {
     *     // ... data to create a BaseProduct
     *   }
     * })
     * 
     */
    create<T extends BaseProductCreateArgs>(args: SelectSubset<T, BaseProductCreateArgs<ExtArgs>>): Prisma__BaseProductClient<$Result.GetResult<Prisma.$BaseProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BaseProducts.
     * @param {BaseProductCreateManyArgs} args - Arguments to create many BaseProducts.
     * @example
     * // Create many BaseProducts
     * const baseProduct = await prisma.baseProduct.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BaseProductCreateManyArgs>(args?: SelectSubset<T, BaseProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BaseProducts and returns the data saved in the database.
     * @param {BaseProductCreateManyAndReturnArgs} args - Arguments to create many BaseProducts.
     * @example
     * // Create many BaseProducts
     * const baseProduct = await prisma.baseProduct.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BaseProducts and only return the `id`
     * const baseProductWithIdOnly = await prisma.baseProduct.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BaseProductCreateManyAndReturnArgs>(args?: SelectSubset<T, BaseProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BaseProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BaseProduct.
     * @param {BaseProductDeleteArgs} args - Arguments to delete one BaseProduct.
     * @example
     * // Delete one BaseProduct
     * const BaseProduct = await prisma.baseProduct.delete({
     *   where: {
     *     // ... filter to delete one BaseProduct
     *   }
     * })
     * 
     */
    delete<T extends BaseProductDeleteArgs>(args: SelectSubset<T, BaseProductDeleteArgs<ExtArgs>>): Prisma__BaseProductClient<$Result.GetResult<Prisma.$BaseProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BaseProduct.
     * @param {BaseProductUpdateArgs} args - Arguments to update one BaseProduct.
     * @example
     * // Update one BaseProduct
     * const baseProduct = await prisma.baseProduct.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BaseProductUpdateArgs>(args: SelectSubset<T, BaseProductUpdateArgs<ExtArgs>>): Prisma__BaseProductClient<$Result.GetResult<Prisma.$BaseProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BaseProducts.
     * @param {BaseProductDeleteManyArgs} args - Arguments to filter BaseProducts to delete.
     * @example
     * // Delete a few BaseProducts
     * const { count } = await prisma.baseProduct.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BaseProductDeleteManyArgs>(args?: SelectSubset<T, BaseProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BaseProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BaseProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BaseProducts
     * const baseProduct = await prisma.baseProduct.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BaseProductUpdateManyArgs>(args: SelectSubset<T, BaseProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BaseProducts and returns the data updated in the database.
     * @param {BaseProductUpdateManyAndReturnArgs} args - Arguments to update many BaseProducts.
     * @example
     * // Update many BaseProducts
     * const baseProduct = await prisma.baseProduct.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BaseProducts and only return the `id`
     * const baseProductWithIdOnly = await prisma.baseProduct.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BaseProductUpdateManyAndReturnArgs>(args: SelectSubset<T, BaseProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BaseProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BaseProduct.
     * @param {BaseProductUpsertArgs} args - Arguments to update or create a BaseProduct.
     * @example
     * // Update or create a BaseProduct
     * const baseProduct = await prisma.baseProduct.upsert({
     *   create: {
     *     // ... data to create a BaseProduct
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BaseProduct we want to update
     *   }
     * })
     */
    upsert<T extends BaseProductUpsertArgs>(args: SelectSubset<T, BaseProductUpsertArgs<ExtArgs>>): Prisma__BaseProductClient<$Result.GetResult<Prisma.$BaseProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BaseProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BaseProductCountArgs} args - Arguments to filter BaseProducts to count.
     * @example
     * // Count the number of BaseProducts
     * const count = await prisma.baseProduct.count({
     *   where: {
     *     // ... the filter for the BaseProducts we want to count
     *   }
     * })
    **/
    count<T extends BaseProductCountArgs>(
      args?: Subset<T, BaseProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BaseProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BaseProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BaseProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BaseProductAggregateArgs>(args: Subset<T, BaseProductAggregateArgs>): Prisma.PrismaPromise<GetBaseProductAggregateType<T>>

    /**
     * Group by BaseProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BaseProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BaseProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BaseProductGroupByArgs['orderBy'] }
        : { orderBy?: BaseProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BaseProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBaseProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BaseProduct model
   */
  readonly fields: BaseProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BaseProduct.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BaseProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    variants<T extends BaseProduct$variantsArgs<ExtArgs> = {}>(args?: Subset<T, BaseProduct$variantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BaseProduct model
   */
  interface BaseProductFieldRefs {
    readonly id: FieldRef<"BaseProduct", 'String'>
    readonly name: FieldRef<"BaseProduct", 'String'>
    readonly category: FieldRef<"BaseProduct", 'String'>
    readonly createdBy: FieldRef<"BaseProduct", 'String'>
    readonly createdAt: FieldRef<"BaseProduct", 'DateTime'>
    readonly imageUrl: FieldRef<"BaseProduct", 'String'>
  }
    

  // Custom InputTypes
  /**
   * BaseProduct findUnique
   */
  export type BaseProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BaseProduct
     */
    select?: BaseProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BaseProduct
     */
    omit?: BaseProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BaseProductInclude<ExtArgs> | null
    /**
     * Filter, which BaseProduct to fetch.
     */
    where: BaseProductWhereUniqueInput
  }

  /**
   * BaseProduct findUniqueOrThrow
   */
  export type BaseProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BaseProduct
     */
    select?: BaseProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BaseProduct
     */
    omit?: BaseProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BaseProductInclude<ExtArgs> | null
    /**
     * Filter, which BaseProduct to fetch.
     */
    where: BaseProductWhereUniqueInput
  }

  /**
   * BaseProduct findFirst
   */
  export type BaseProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BaseProduct
     */
    select?: BaseProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BaseProduct
     */
    omit?: BaseProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BaseProductInclude<ExtArgs> | null
    /**
     * Filter, which BaseProduct to fetch.
     */
    where?: BaseProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BaseProducts to fetch.
     */
    orderBy?: BaseProductOrderByWithRelationInput | BaseProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BaseProducts.
     */
    cursor?: BaseProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BaseProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BaseProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BaseProducts.
     */
    distinct?: BaseProductScalarFieldEnum | BaseProductScalarFieldEnum[]
  }

  /**
   * BaseProduct findFirstOrThrow
   */
  export type BaseProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BaseProduct
     */
    select?: BaseProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BaseProduct
     */
    omit?: BaseProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BaseProductInclude<ExtArgs> | null
    /**
     * Filter, which BaseProduct to fetch.
     */
    where?: BaseProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BaseProducts to fetch.
     */
    orderBy?: BaseProductOrderByWithRelationInput | BaseProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BaseProducts.
     */
    cursor?: BaseProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BaseProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BaseProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BaseProducts.
     */
    distinct?: BaseProductScalarFieldEnum | BaseProductScalarFieldEnum[]
  }

  /**
   * BaseProduct findMany
   */
  export type BaseProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BaseProduct
     */
    select?: BaseProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BaseProduct
     */
    omit?: BaseProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BaseProductInclude<ExtArgs> | null
    /**
     * Filter, which BaseProducts to fetch.
     */
    where?: BaseProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BaseProducts to fetch.
     */
    orderBy?: BaseProductOrderByWithRelationInput | BaseProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BaseProducts.
     */
    cursor?: BaseProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BaseProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BaseProducts.
     */
    skip?: number
    distinct?: BaseProductScalarFieldEnum | BaseProductScalarFieldEnum[]
  }

  /**
   * BaseProduct create
   */
  export type BaseProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BaseProduct
     */
    select?: BaseProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BaseProduct
     */
    omit?: BaseProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BaseProductInclude<ExtArgs> | null
    /**
     * The data needed to create a BaseProduct.
     */
    data: XOR<BaseProductCreateInput, BaseProductUncheckedCreateInput>
  }

  /**
   * BaseProduct createMany
   */
  export type BaseProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BaseProducts.
     */
    data: BaseProductCreateManyInput | BaseProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BaseProduct createManyAndReturn
   */
  export type BaseProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BaseProduct
     */
    select?: BaseProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BaseProduct
     */
    omit?: BaseProductOmit<ExtArgs> | null
    /**
     * The data used to create many BaseProducts.
     */
    data: BaseProductCreateManyInput | BaseProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BaseProduct update
   */
  export type BaseProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BaseProduct
     */
    select?: BaseProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BaseProduct
     */
    omit?: BaseProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BaseProductInclude<ExtArgs> | null
    /**
     * The data needed to update a BaseProduct.
     */
    data: XOR<BaseProductUpdateInput, BaseProductUncheckedUpdateInput>
    /**
     * Choose, which BaseProduct to update.
     */
    where: BaseProductWhereUniqueInput
  }

  /**
   * BaseProduct updateMany
   */
  export type BaseProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BaseProducts.
     */
    data: XOR<BaseProductUpdateManyMutationInput, BaseProductUncheckedUpdateManyInput>
    /**
     * Filter which BaseProducts to update
     */
    where?: BaseProductWhereInput
    /**
     * Limit how many BaseProducts to update.
     */
    limit?: number
  }

  /**
   * BaseProduct updateManyAndReturn
   */
  export type BaseProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BaseProduct
     */
    select?: BaseProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BaseProduct
     */
    omit?: BaseProductOmit<ExtArgs> | null
    /**
     * The data used to update BaseProducts.
     */
    data: XOR<BaseProductUpdateManyMutationInput, BaseProductUncheckedUpdateManyInput>
    /**
     * Filter which BaseProducts to update
     */
    where?: BaseProductWhereInput
    /**
     * Limit how many BaseProducts to update.
     */
    limit?: number
  }

  /**
   * BaseProduct upsert
   */
  export type BaseProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BaseProduct
     */
    select?: BaseProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BaseProduct
     */
    omit?: BaseProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BaseProductInclude<ExtArgs> | null
    /**
     * The filter to search for the BaseProduct to update in case it exists.
     */
    where: BaseProductWhereUniqueInput
    /**
     * In case the BaseProduct found by the `where` argument doesn't exist, create a new BaseProduct with this data.
     */
    create: XOR<BaseProductCreateInput, BaseProductUncheckedCreateInput>
    /**
     * In case the BaseProduct was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BaseProductUpdateInput, BaseProductUncheckedUpdateInput>
  }

  /**
   * BaseProduct delete
   */
  export type BaseProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BaseProduct
     */
    select?: BaseProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BaseProduct
     */
    omit?: BaseProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BaseProductInclude<ExtArgs> | null
    /**
     * Filter which BaseProduct to delete.
     */
    where: BaseProductWhereUniqueInput
  }

  /**
   * BaseProduct deleteMany
   */
  export type BaseProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BaseProducts to delete
     */
    where?: BaseProductWhereInput
    /**
     * Limit how many BaseProducts to delete.
     */
    limit?: number
  }

  /**
   * BaseProduct.variants
   */
  export type BaseProduct$variantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariant
     */
    omit?: ProductVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    where?: ProductVariantWhereInput
    orderBy?: ProductVariantOrderByWithRelationInput | ProductVariantOrderByWithRelationInput[]
    cursor?: ProductVariantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductVariantScalarFieldEnum | ProductVariantScalarFieldEnum[]
  }

  /**
   * BaseProduct without action
   */
  export type BaseProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BaseProduct
     */
    select?: BaseProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BaseProduct
     */
    omit?: BaseProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BaseProductInclude<ExtArgs> | null
  }


  /**
   * Model ProductVariant
   */

  export type AggregateProductVariant = {
    _count: ProductVariantCountAggregateOutputType | null
    _avg: ProductVariantAvgAggregateOutputType | null
    _sum: ProductVariantSumAggregateOutputType | null
    _min: ProductVariantMinAggregateOutputType | null
    _max: ProductVariantMaxAggregateOutputType | null
  }

  export type ProductVariantAvgAggregateOutputType = {
    sizeValue: number | null
  }

  export type ProductVariantSumAggregateOutputType = {
    sizeValue: number | null
  }

  export type ProductVariantMinAggregateOutputType = {
    id: string | null
    baseProductId: string | null
    variantName: string | null
    unit: string | null
    sizeValue: number | null
    barcode: string | null
    imageUrl: string | null
    createdBy: string | null
  }

  export type ProductVariantMaxAggregateOutputType = {
    id: string | null
    baseProductId: string | null
    variantName: string | null
    unit: string | null
    sizeValue: number | null
    barcode: string | null
    imageUrl: string | null
    createdBy: string | null
  }

  export type ProductVariantCountAggregateOutputType = {
    id: number
    baseProductId: number
    variantName: number
    unit: number
    sizeValue: number
    barcode: number
    imageUrl: number
    createdBy: number
    _all: number
  }


  export type ProductVariantAvgAggregateInputType = {
    sizeValue?: true
  }

  export type ProductVariantSumAggregateInputType = {
    sizeValue?: true
  }

  export type ProductVariantMinAggregateInputType = {
    id?: true
    baseProductId?: true
    variantName?: true
    unit?: true
    sizeValue?: true
    barcode?: true
    imageUrl?: true
    createdBy?: true
  }

  export type ProductVariantMaxAggregateInputType = {
    id?: true
    baseProductId?: true
    variantName?: true
    unit?: true
    sizeValue?: true
    barcode?: true
    imageUrl?: true
    createdBy?: true
  }

  export type ProductVariantCountAggregateInputType = {
    id?: true
    baseProductId?: true
    variantName?: true
    unit?: true
    sizeValue?: true
    barcode?: true
    imageUrl?: true
    createdBy?: true
    _all?: true
  }

  export type ProductVariantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductVariant to aggregate.
     */
    where?: ProductVariantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductVariants to fetch.
     */
    orderBy?: ProductVariantOrderByWithRelationInput | ProductVariantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductVariantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductVariants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductVariants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductVariants
    **/
    _count?: true | ProductVariantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductVariantAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductVariantSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductVariantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductVariantMaxAggregateInputType
  }

  export type GetProductVariantAggregateType<T extends ProductVariantAggregateArgs> = {
        [P in keyof T & keyof AggregateProductVariant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductVariant[P]>
      : GetScalarType<T[P], AggregateProductVariant[P]>
  }




  export type ProductVariantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductVariantWhereInput
    orderBy?: ProductVariantOrderByWithAggregationInput | ProductVariantOrderByWithAggregationInput[]
    by: ProductVariantScalarFieldEnum[] | ProductVariantScalarFieldEnum
    having?: ProductVariantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductVariantCountAggregateInputType | true
    _avg?: ProductVariantAvgAggregateInputType
    _sum?: ProductVariantSumAggregateInputType
    _min?: ProductVariantMinAggregateInputType
    _max?: ProductVariantMaxAggregateInputType
  }

  export type ProductVariantGroupByOutputType = {
    id: string
    baseProductId: string
    variantName: string
    unit: string
    sizeValue: number | null
    barcode: string | null
    imageUrl: string | null
    createdBy: string
    _count: ProductVariantCountAggregateOutputType | null
    _avg: ProductVariantAvgAggregateOutputType | null
    _sum: ProductVariantSumAggregateOutputType | null
    _min: ProductVariantMinAggregateOutputType | null
    _max: ProductVariantMaxAggregateOutputType | null
  }

  type GetProductVariantGroupByPayload<T extends ProductVariantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductVariantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductVariantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductVariantGroupByOutputType[P]>
            : GetScalarType<T[P], ProductVariantGroupByOutputType[P]>
        }
      >
    >


  export type ProductVariantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    baseProductId?: boolean
    variantName?: boolean
    unit?: boolean
    sizeValue?: boolean
    barcode?: boolean
    imageUrl?: boolean
    createdBy?: boolean
    baseProduct?: boolean | BaseProductDefaultArgs<ExtArgs>
    priceReports?: boolean | ProductVariant$priceReportsArgs<ExtArgs>
    _count?: boolean | ProductVariantCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productVariant"]>

  export type ProductVariantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    baseProductId?: boolean
    variantName?: boolean
    unit?: boolean
    sizeValue?: boolean
    barcode?: boolean
    imageUrl?: boolean
    createdBy?: boolean
    baseProduct?: boolean | BaseProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productVariant"]>

  export type ProductVariantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    baseProductId?: boolean
    variantName?: boolean
    unit?: boolean
    sizeValue?: boolean
    barcode?: boolean
    imageUrl?: boolean
    createdBy?: boolean
    baseProduct?: boolean | BaseProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productVariant"]>

  export type ProductVariantSelectScalar = {
    id?: boolean
    baseProductId?: boolean
    variantName?: boolean
    unit?: boolean
    sizeValue?: boolean
    barcode?: boolean
    imageUrl?: boolean
    createdBy?: boolean
  }

  export type ProductVariantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "baseProductId" | "variantName" | "unit" | "sizeValue" | "barcode" | "imageUrl" | "createdBy", ExtArgs["result"]["productVariant"]>
  export type ProductVariantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    baseProduct?: boolean | BaseProductDefaultArgs<ExtArgs>
    priceReports?: boolean | ProductVariant$priceReportsArgs<ExtArgs>
    _count?: boolean | ProductVariantCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductVariantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    baseProduct?: boolean | BaseProductDefaultArgs<ExtArgs>
  }
  export type ProductVariantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    baseProduct?: boolean | BaseProductDefaultArgs<ExtArgs>
  }

  export type $ProductVariantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductVariant"
    objects: {
      baseProduct: Prisma.$BaseProductPayload<ExtArgs>
      priceReports: Prisma.$PriceReportPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      baseProductId: string
      variantName: string
      unit: string
      sizeValue: number | null
      barcode: string | null
      imageUrl: string | null
      createdBy: string
    }, ExtArgs["result"]["productVariant"]>
    composites: {}
  }

  type ProductVariantGetPayload<S extends boolean | null | undefined | ProductVariantDefaultArgs> = $Result.GetResult<Prisma.$ProductVariantPayload, S>

  type ProductVariantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductVariantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductVariantCountAggregateInputType | true
    }

  export interface ProductVariantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductVariant'], meta: { name: 'ProductVariant' } }
    /**
     * Find zero or one ProductVariant that matches the filter.
     * @param {ProductVariantFindUniqueArgs} args - Arguments to find a ProductVariant
     * @example
     * // Get one ProductVariant
     * const productVariant = await prisma.productVariant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductVariantFindUniqueArgs>(args: SelectSubset<T, ProductVariantFindUniqueArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductVariant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductVariantFindUniqueOrThrowArgs} args - Arguments to find a ProductVariant
     * @example
     * // Get one ProductVariant
     * const productVariant = await prisma.productVariant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductVariantFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductVariantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductVariant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantFindFirstArgs} args - Arguments to find a ProductVariant
     * @example
     * // Get one ProductVariant
     * const productVariant = await prisma.productVariant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductVariantFindFirstArgs>(args?: SelectSubset<T, ProductVariantFindFirstArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductVariant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantFindFirstOrThrowArgs} args - Arguments to find a ProductVariant
     * @example
     * // Get one ProductVariant
     * const productVariant = await prisma.productVariant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductVariantFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductVariantFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductVariants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductVariants
     * const productVariants = await prisma.productVariant.findMany()
     * 
     * // Get first 10 ProductVariants
     * const productVariants = await prisma.productVariant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productVariantWithIdOnly = await prisma.productVariant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductVariantFindManyArgs>(args?: SelectSubset<T, ProductVariantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductVariant.
     * @param {ProductVariantCreateArgs} args - Arguments to create a ProductVariant.
     * @example
     * // Create one ProductVariant
     * const ProductVariant = await prisma.productVariant.create({
     *   data: {
     *     // ... data to create a ProductVariant
     *   }
     * })
     * 
     */
    create<T extends ProductVariantCreateArgs>(args: SelectSubset<T, ProductVariantCreateArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductVariants.
     * @param {ProductVariantCreateManyArgs} args - Arguments to create many ProductVariants.
     * @example
     * // Create many ProductVariants
     * const productVariant = await prisma.productVariant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductVariantCreateManyArgs>(args?: SelectSubset<T, ProductVariantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductVariants and returns the data saved in the database.
     * @param {ProductVariantCreateManyAndReturnArgs} args - Arguments to create many ProductVariants.
     * @example
     * // Create many ProductVariants
     * const productVariant = await prisma.productVariant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductVariants and only return the `id`
     * const productVariantWithIdOnly = await prisma.productVariant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductVariantCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductVariantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProductVariant.
     * @param {ProductVariantDeleteArgs} args - Arguments to delete one ProductVariant.
     * @example
     * // Delete one ProductVariant
     * const ProductVariant = await prisma.productVariant.delete({
     *   where: {
     *     // ... filter to delete one ProductVariant
     *   }
     * })
     * 
     */
    delete<T extends ProductVariantDeleteArgs>(args: SelectSubset<T, ProductVariantDeleteArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductVariant.
     * @param {ProductVariantUpdateArgs} args - Arguments to update one ProductVariant.
     * @example
     * // Update one ProductVariant
     * const productVariant = await prisma.productVariant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductVariantUpdateArgs>(args: SelectSubset<T, ProductVariantUpdateArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductVariants.
     * @param {ProductVariantDeleteManyArgs} args - Arguments to filter ProductVariants to delete.
     * @example
     * // Delete a few ProductVariants
     * const { count } = await prisma.productVariant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductVariantDeleteManyArgs>(args?: SelectSubset<T, ProductVariantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductVariants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductVariants
     * const productVariant = await prisma.productVariant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductVariantUpdateManyArgs>(args: SelectSubset<T, ProductVariantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductVariants and returns the data updated in the database.
     * @param {ProductVariantUpdateManyAndReturnArgs} args - Arguments to update many ProductVariants.
     * @example
     * // Update many ProductVariants
     * const productVariant = await prisma.productVariant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProductVariants and only return the `id`
     * const productVariantWithIdOnly = await prisma.productVariant.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductVariantUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductVariantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProductVariant.
     * @param {ProductVariantUpsertArgs} args - Arguments to update or create a ProductVariant.
     * @example
     * // Update or create a ProductVariant
     * const productVariant = await prisma.productVariant.upsert({
     *   create: {
     *     // ... data to create a ProductVariant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductVariant we want to update
     *   }
     * })
     */
    upsert<T extends ProductVariantUpsertArgs>(args: SelectSubset<T, ProductVariantUpsertArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductVariants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantCountArgs} args - Arguments to filter ProductVariants to count.
     * @example
     * // Count the number of ProductVariants
     * const count = await prisma.productVariant.count({
     *   where: {
     *     // ... the filter for the ProductVariants we want to count
     *   }
     * })
    **/
    count<T extends ProductVariantCountArgs>(
      args?: Subset<T, ProductVariantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductVariantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductVariant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductVariantAggregateArgs>(args: Subset<T, ProductVariantAggregateArgs>): Prisma.PrismaPromise<GetProductVariantAggregateType<T>>

    /**
     * Group by ProductVariant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductVariantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductVariantGroupByArgs['orderBy'] }
        : { orderBy?: ProductVariantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductVariantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductVariantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductVariant model
   */
  readonly fields: ProductVariantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductVariant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductVariantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    baseProduct<T extends BaseProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BaseProductDefaultArgs<ExtArgs>>): Prisma__BaseProductClient<$Result.GetResult<Prisma.$BaseProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    priceReports<T extends ProductVariant$priceReportsArgs<ExtArgs> = {}>(args?: Subset<T, ProductVariant$priceReportsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PriceReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProductVariant model
   */
  interface ProductVariantFieldRefs {
    readonly id: FieldRef<"ProductVariant", 'String'>
    readonly baseProductId: FieldRef<"ProductVariant", 'String'>
    readonly variantName: FieldRef<"ProductVariant", 'String'>
    readonly unit: FieldRef<"ProductVariant", 'String'>
    readonly sizeValue: FieldRef<"ProductVariant", 'Float'>
    readonly barcode: FieldRef<"ProductVariant", 'String'>
    readonly imageUrl: FieldRef<"ProductVariant", 'String'>
    readonly createdBy: FieldRef<"ProductVariant", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ProductVariant findUnique
   */
  export type ProductVariantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariant
     */
    omit?: ProductVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    /**
     * Filter, which ProductVariant to fetch.
     */
    where: ProductVariantWhereUniqueInput
  }

  /**
   * ProductVariant findUniqueOrThrow
   */
  export type ProductVariantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariant
     */
    omit?: ProductVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    /**
     * Filter, which ProductVariant to fetch.
     */
    where: ProductVariantWhereUniqueInput
  }

  /**
   * ProductVariant findFirst
   */
  export type ProductVariantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariant
     */
    omit?: ProductVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    /**
     * Filter, which ProductVariant to fetch.
     */
    where?: ProductVariantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductVariants to fetch.
     */
    orderBy?: ProductVariantOrderByWithRelationInput | ProductVariantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductVariants.
     */
    cursor?: ProductVariantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductVariants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductVariants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductVariants.
     */
    distinct?: ProductVariantScalarFieldEnum | ProductVariantScalarFieldEnum[]
  }

  /**
   * ProductVariant findFirstOrThrow
   */
  export type ProductVariantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariant
     */
    omit?: ProductVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    /**
     * Filter, which ProductVariant to fetch.
     */
    where?: ProductVariantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductVariants to fetch.
     */
    orderBy?: ProductVariantOrderByWithRelationInput | ProductVariantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductVariants.
     */
    cursor?: ProductVariantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductVariants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductVariants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductVariants.
     */
    distinct?: ProductVariantScalarFieldEnum | ProductVariantScalarFieldEnum[]
  }

  /**
   * ProductVariant findMany
   */
  export type ProductVariantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariant
     */
    omit?: ProductVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    /**
     * Filter, which ProductVariants to fetch.
     */
    where?: ProductVariantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductVariants to fetch.
     */
    orderBy?: ProductVariantOrderByWithRelationInput | ProductVariantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductVariants.
     */
    cursor?: ProductVariantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductVariants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductVariants.
     */
    skip?: number
    distinct?: ProductVariantScalarFieldEnum | ProductVariantScalarFieldEnum[]
  }

  /**
   * ProductVariant create
   */
  export type ProductVariantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariant
     */
    omit?: ProductVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductVariant.
     */
    data: XOR<ProductVariantCreateInput, ProductVariantUncheckedCreateInput>
  }

  /**
   * ProductVariant createMany
   */
  export type ProductVariantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductVariants.
     */
    data: ProductVariantCreateManyInput | ProductVariantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductVariant createManyAndReturn
   */
  export type ProductVariantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariant
     */
    omit?: ProductVariantOmit<ExtArgs> | null
    /**
     * The data used to create many ProductVariants.
     */
    data: ProductVariantCreateManyInput | ProductVariantCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductVariant update
   */
  export type ProductVariantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariant
     */
    omit?: ProductVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductVariant.
     */
    data: XOR<ProductVariantUpdateInput, ProductVariantUncheckedUpdateInput>
    /**
     * Choose, which ProductVariant to update.
     */
    where: ProductVariantWhereUniqueInput
  }

  /**
   * ProductVariant updateMany
   */
  export type ProductVariantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductVariants.
     */
    data: XOR<ProductVariantUpdateManyMutationInput, ProductVariantUncheckedUpdateManyInput>
    /**
     * Filter which ProductVariants to update
     */
    where?: ProductVariantWhereInput
    /**
     * Limit how many ProductVariants to update.
     */
    limit?: number
  }

  /**
   * ProductVariant updateManyAndReturn
   */
  export type ProductVariantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariant
     */
    omit?: ProductVariantOmit<ExtArgs> | null
    /**
     * The data used to update ProductVariants.
     */
    data: XOR<ProductVariantUpdateManyMutationInput, ProductVariantUncheckedUpdateManyInput>
    /**
     * Filter which ProductVariants to update
     */
    where?: ProductVariantWhereInput
    /**
     * Limit how many ProductVariants to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductVariant upsert
   */
  export type ProductVariantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariant
     */
    omit?: ProductVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductVariant to update in case it exists.
     */
    where: ProductVariantWhereUniqueInput
    /**
     * In case the ProductVariant found by the `where` argument doesn't exist, create a new ProductVariant with this data.
     */
    create: XOR<ProductVariantCreateInput, ProductVariantUncheckedCreateInput>
    /**
     * In case the ProductVariant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductVariantUpdateInput, ProductVariantUncheckedUpdateInput>
  }

  /**
   * ProductVariant delete
   */
  export type ProductVariantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariant
     */
    omit?: ProductVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    /**
     * Filter which ProductVariant to delete.
     */
    where: ProductVariantWhereUniqueInput
  }

  /**
   * ProductVariant deleteMany
   */
  export type ProductVariantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductVariants to delete
     */
    where?: ProductVariantWhereInput
    /**
     * Limit how many ProductVariants to delete.
     */
    limit?: number
  }

  /**
   * ProductVariant.priceReports
   */
  export type ProductVariant$priceReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceReport
     */
    select?: PriceReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceReport
     */
    omit?: PriceReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceReportInclude<ExtArgs> | null
    where?: PriceReportWhereInput
    orderBy?: PriceReportOrderByWithRelationInput | PriceReportOrderByWithRelationInput[]
    cursor?: PriceReportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PriceReportScalarFieldEnum | PriceReportScalarFieldEnum[]
  }

  /**
   * ProductVariant without action
   */
  export type ProductVariantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariant
     */
    omit?: ProductVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
  }


  /**
   * Model PriceReport
   */

  export type AggregatePriceReport = {
    _count: PriceReportCountAggregateOutputType | null
    _avg: PriceReportAvgAggregateOutputType | null
    _sum: PriceReportSumAggregateOutputType | null
    _min: PriceReportMinAggregateOutputType | null
    _max: PriceReportMaxAggregateOutputType | null
  }

  export type PriceReportAvgAggregateOutputType = {
    price: number | null
  }

  export type PriceReportSumAggregateOutputType = {
    price: number | null
  }

  export type PriceReportMinAggregateOutputType = {
    id: string | null
    variantId: string | null
    price: number | null
    location: string | null
    reportedBy: string | null
    reportedAt: Date | null
    note: string | null
  }

  export type PriceReportMaxAggregateOutputType = {
    id: string | null
    variantId: string | null
    price: number | null
    location: string | null
    reportedBy: string | null
    reportedAt: Date | null
    note: string | null
  }

  export type PriceReportCountAggregateOutputType = {
    id: number
    variantId: number
    price: number
    location: number
    reportedBy: number
    reportedAt: number
    note: number
    _all: number
  }


  export type PriceReportAvgAggregateInputType = {
    price?: true
  }

  export type PriceReportSumAggregateInputType = {
    price?: true
  }

  export type PriceReportMinAggregateInputType = {
    id?: true
    variantId?: true
    price?: true
    location?: true
    reportedBy?: true
    reportedAt?: true
    note?: true
  }

  export type PriceReportMaxAggregateInputType = {
    id?: true
    variantId?: true
    price?: true
    location?: true
    reportedBy?: true
    reportedAt?: true
    note?: true
  }

  export type PriceReportCountAggregateInputType = {
    id?: true
    variantId?: true
    price?: true
    location?: true
    reportedBy?: true
    reportedAt?: true
    note?: true
    _all?: true
  }

  export type PriceReportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PriceReport to aggregate.
     */
    where?: PriceReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PriceReports to fetch.
     */
    orderBy?: PriceReportOrderByWithRelationInput | PriceReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PriceReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PriceReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PriceReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PriceReports
    **/
    _count?: true | PriceReportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PriceReportAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PriceReportSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PriceReportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PriceReportMaxAggregateInputType
  }

  export type GetPriceReportAggregateType<T extends PriceReportAggregateArgs> = {
        [P in keyof T & keyof AggregatePriceReport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePriceReport[P]>
      : GetScalarType<T[P], AggregatePriceReport[P]>
  }




  export type PriceReportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PriceReportWhereInput
    orderBy?: PriceReportOrderByWithAggregationInput | PriceReportOrderByWithAggregationInput[]
    by: PriceReportScalarFieldEnum[] | PriceReportScalarFieldEnum
    having?: PriceReportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PriceReportCountAggregateInputType | true
    _avg?: PriceReportAvgAggregateInputType
    _sum?: PriceReportSumAggregateInputType
    _min?: PriceReportMinAggregateInputType
    _max?: PriceReportMaxAggregateInputType
  }

  export type PriceReportGroupByOutputType = {
    id: string
    variantId: string
    price: number
    location: string
    reportedBy: string
    reportedAt: Date
    note: string | null
    _count: PriceReportCountAggregateOutputType | null
    _avg: PriceReportAvgAggregateOutputType | null
    _sum: PriceReportSumAggregateOutputType | null
    _min: PriceReportMinAggregateOutputType | null
    _max: PriceReportMaxAggregateOutputType | null
  }

  type GetPriceReportGroupByPayload<T extends PriceReportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PriceReportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PriceReportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PriceReportGroupByOutputType[P]>
            : GetScalarType<T[P], PriceReportGroupByOutputType[P]>
        }
      >
    >


  export type PriceReportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    variantId?: boolean
    price?: boolean
    location?: boolean
    reportedBy?: boolean
    reportedAt?: boolean
    note?: boolean
    variant?: boolean | ProductVariantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["priceReport"]>

  export type PriceReportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    variantId?: boolean
    price?: boolean
    location?: boolean
    reportedBy?: boolean
    reportedAt?: boolean
    note?: boolean
    variant?: boolean | ProductVariantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["priceReport"]>

  export type PriceReportSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    variantId?: boolean
    price?: boolean
    location?: boolean
    reportedBy?: boolean
    reportedAt?: boolean
    note?: boolean
    variant?: boolean | ProductVariantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["priceReport"]>

  export type PriceReportSelectScalar = {
    id?: boolean
    variantId?: boolean
    price?: boolean
    location?: boolean
    reportedBy?: boolean
    reportedAt?: boolean
    note?: boolean
  }

  export type PriceReportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "variantId" | "price" | "location" | "reportedBy" | "reportedAt" | "note", ExtArgs["result"]["priceReport"]>
  export type PriceReportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    variant?: boolean | ProductVariantDefaultArgs<ExtArgs>
  }
  export type PriceReportIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    variant?: boolean | ProductVariantDefaultArgs<ExtArgs>
  }
  export type PriceReportIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    variant?: boolean | ProductVariantDefaultArgs<ExtArgs>
  }

  export type $PriceReportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PriceReport"
    objects: {
      variant: Prisma.$ProductVariantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      variantId: string
      price: number
      location: string
      reportedBy: string
      reportedAt: Date
      note: string | null
    }, ExtArgs["result"]["priceReport"]>
    composites: {}
  }

  type PriceReportGetPayload<S extends boolean | null | undefined | PriceReportDefaultArgs> = $Result.GetResult<Prisma.$PriceReportPayload, S>

  type PriceReportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PriceReportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PriceReportCountAggregateInputType | true
    }

  export interface PriceReportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PriceReport'], meta: { name: 'PriceReport' } }
    /**
     * Find zero or one PriceReport that matches the filter.
     * @param {PriceReportFindUniqueArgs} args - Arguments to find a PriceReport
     * @example
     * // Get one PriceReport
     * const priceReport = await prisma.priceReport.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PriceReportFindUniqueArgs>(args: SelectSubset<T, PriceReportFindUniqueArgs<ExtArgs>>): Prisma__PriceReportClient<$Result.GetResult<Prisma.$PriceReportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PriceReport that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PriceReportFindUniqueOrThrowArgs} args - Arguments to find a PriceReport
     * @example
     * // Get one PriceReport
     * const priceReport = await prisma.priceReport.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PriceReportFindUniqueOrThrowArgs>(args: SelectSubset<T, PriceReportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PriceReportClient<$Result.GetResult<Prisma.$PriceReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PriceReport that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceReportFindFirstArgs} args - Arguments to find a PriceReport
     * @example
     * // Get one PriceReport
     * const priceReport = await prisma.priceReport.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PriceReportFindFirstArgs>(args?: SelectSubset<T, PriceReportFindFirstArgs<ExtArgs>>): Prisma__PriceReportClient<$Result.GetResult<Prisma.$PriceReportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PriceReport that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceReportFindFirstOrThrowArgs} args - Arguments to find a PriceReport
     * @example
     * // Get one PriceReport
     * const priceReport = await prisma.priceReport.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PriceReportFindFirstOrThrowArgs>(args?: SelectSubset<T, PriceReportFindFirstOrThrowArgs<ExtArgs>>): Prisma__PriceReportClient<$Result.GetResult<Prisma.$PriceReportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PriceReports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceReportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PriceReports
     * const priceReports = await prisma.priceReport.findMany()
     * 
     * // Get first 10 PriceReports
     * const priceReports = await prisma.priceReport.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const priceReportWithIdOnly = await prisma.priceReport.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PriceReportFindManyArgs>(args?: SelectSubset<T, PriceReportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PriceReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PriceReport.
     * @param {PriceReportCreateArgs} args - Arguments to create a PriceReport.
     * @example
     * // Create one PriceReport
     * const PriceReport = await prisma.priceReport.create({
     *   data: {
     *     // ... data to create a PriceReport
     *   }
     * })
     * 
     */
    create<T extends PriceReportCreateArgs>(args: SelectSubset<T, PriceReportCreateArgs<ExtArgs>>): Prisma__PriceReportClient<$Result.GetResult<Prisma.$PriceReportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PriceReports.
     * @param {PriceReportCreateManyArgs} args - Arguments to create many PriceReports.
     * @example
     * // Create many PriceReports
     * const priceReport = await prisma.priceReport.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PriceReportCreateManyArgs>(args?: SelectSubset<T, PriceReportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PriceReports and returns the data saved in the database.
     * @param {PriceReportCreateManyAndReturnArgs} args - Arguments to create many PriceReports.
     * @example
     * // Create many PriceReports
     * const priceReport = await prisma.priceReport.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PriceReports and only return the `id`
     * const priceReportWithIdOnly = await prisma.priceReport.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PriceReportCreateManyAndReturnArgs>(args?: SelectSubset<T, PriceReportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PriceReportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PriceReport.
     * @param {PriceReportDeleteArgs} args - Arguments to delete one PriceReport.
     * @example
     * // Delete one PriceReport
     * const PriceReport = await prisma.priceReport.delete({
     *   where: {
     *     // ... filter to delete one PriceReport
     *   }
     * })
     * 
     */
    delete<T extends PriceReportDeleteArgs>(args: SelectSubset<T, PriceReportDeleteArgs<ExtArgs>>): Prisma__PriceReportClient<$Result.GetResult<Prisma.$PriceReportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PriceReport.
     * @param {PriceReportUpdateArgs} args - Arguments to update one PriceReport.
     * @example
     * // Update one PriceReport
     * const priceReport = await prisma.priceReport.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PriceReportUpdateArgs>(args: SelectSubset<T, PriceReportUpdateArgs<ExtArgs>>): Prisma__PriceReportClient<$Result.GetResult<Prisma.$PriceReportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PriceReports.
     * @param {PriceReportDeleteManyArgs} args - Arguments to filter PriceReports to delete.
     * @example
     * // Delete a few PriceReports
     * const { count } = await prisma.priceReport.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PriceReportDeleteManyArgs>(args?: SelectSubset<T, PriceReportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PriceReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceReportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PriceReports
     * const priceReport = await prisma.priceReport.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PriceReportUpdateManyArgs>(args: SelectSubset<T, PriceReportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PriceReports and returns the data updated in the database.
     * @param {PriceReportUpdateManyAndReturnArgs} args - Arguments to update many PriceReports.
     * @example
     * // Update many PriceReports
     * const priceReport = await prisma.priceReport.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PriceReports and only return the `id`
     * const priceReportWithIdOnly = await prisma.priceReport.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PriceReportUpdateManyAndReturnArgs>(args: SelectSubset<T, PriceReportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PriceReportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PriceReport.
     * @param {PriceReportUpsertArgs} args - Arguments to update or create a PriceReport.
     * @example
     * // Update or create a PriceReport
     * const priceReport = await prisma.priceReport.upsert({
     *   create: {
     *     // ... data to create a PriceReport
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PriceReport we want to update
     *   }
     * })
     */
    upsert<T extends PriceReportUpsertArgs>(args: SelectSubset<T, PriceReportUpsertArgs<ExtArgs>>): Prisma__PriceReportClient<$Result.GetResult<Prisma.$PriceReportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PriceReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceReportCountArgs} args - Arguments to filter PriceReports to count.
     * @example
     * // Count the number of PriceReports
     * const count = await prisma.priceReport.count({
     *   where: {
     *     // ... the filter for the PriceReports we want to count
     *   }
     * })
    **/
    count<T extends PriceReportCountArgs>(
      args?: Subset<T, PriceReportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PriceReportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PriceReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PriceReportAggregateArgs>(args: Subset<T, PriceReportAggregateArgs>): Prisma.PrismaPromise<GetPriceReportAggregateType<T>>

    /**
     * Group by PriceReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceReportGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PriceReportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PriceReportGroupByArgs['orderBy'] }
        : { orderBy?: PriceReportGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PriceReportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPriceReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PriceReport model
   */
  readonly fields: PriceReportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PriceReport.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PriceReportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    variant<T extends ProductVariantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductVariantDefaultArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PriceReport model
   */
  interface PriceReportFieldRefs {
    readonly id: FieldRef<"PriceReport", 'String'>
    readonly variantId: FieldRef<"PriceReport", 'String'>
    readonly price: FieldRef<"PriceReport", 'Float'>
    readonly location: FieldRef<"PriceReport", 'String'>
    readonly reportedBy: FieldRef<"PriceReport", 'String'>
    readonly reportedAt: FieldRef<"PriceReport", 'DateTime'>
    readonly note: FieldRef<"PriceReport", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PriceReport findUnique
   */
  export type PriceReportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceReport
     */
    select?: PriceReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceReport
     */
    omit?: PriceReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceReportInclude<ExtArgs> | null
    /**
     * Filter, which PriceReport to fetch.
     */
    where: PriceReportWhereUniqueInput
  }

  /**
   * PriceReport findUniqueOrThrow
   */
  export type PriceReportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceReport
     */
    select?: PriceReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceReport
     */
    omit?: PriceReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceReportInclude<ExtArgs> | null
    /**
     * Filter, which PriceReport to fetch.
     */
    where: PriceReportWhereUniqueInput
  }

  /**
   * PriceReport findFirst
   */
  export type PriceReportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceReport
     */
    select?: PriceReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceReport
     */
    omit?: PriceReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceReportInclude<ExtArgs> | null
    /**
     * Filter, which PriceReport to fetch.
     */
    where?: PriceReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PriceReports to fetch.
     */
    orderBy?: PriceReportOrderByWithRelationInput | PriceReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PriceReports.
     */
    cursor?: PriceReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PriceReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PriceReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PriceReports.
     */
    distinct?: PriceReportScalarFieldEnum | PriceReportScalarFieldEnum[]
  }

  /**
   * PriceReport findFirstOrThrow
   */
  export type PriceReportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceReport
     */
    select?: PriceReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceReport
     */
    omit?: PriceReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceReportInclude<ExtArgs> | null
    /**
     * Filter, which PriceReport to fetch.
     */
    where?: PriceReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PriceReports to fetch.
     */
    orderBy?: PriceReportOrderByWithRelationInput | PriceReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PriceReports.
     */
    cursor?: PriceReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PriceReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PriceReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PriceReports.
     */
    distinct?: PriceReportScalarFieldEnum | PriceReportScalarFieldEnum[]
  }

  /**
   * PriceReport findMany
   */
  export type PriceReportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceReport
     */
    select?: PriceReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceReport
     */
    omit?: PriceReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceReportInclude<ExtArgs> | null
    /**
     * Filter, which PriceReports to fetch.
     */
    where?: PriceReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PriceReports to fetch.
     */
    orderBy?: PriceReportOrderByWithRelationInput | PriceReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PriceReports.
     */
    cursor?: PriceReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PriceReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PriceReports.
     */
    skip?: number
    distinct?: PriceReportScalarFieldEnum | PriceReportScalarFieldEnum[]
  }

  /**
   * PriceReport create
   */
  export type PriceReportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceReport
     */
    select?: PriceReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceReport
     */
    omit?: PriceReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceReportInclude<ExtArgs> | null
    /**
     * The data needed to create a PriceReport.
     */
    data: XOR<PriceReportCreateInput, PriceReportUncheckedCreateInput>
  }

  /**
   * PriceReport createMany
   */
  export type PriceReportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PriceReports.
     */
    data: PriceReportCreateManyInput | PriceReportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PriceReport createManyAndReturn
   */
  export type PriceReportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceReport
     */
    select?: PriceReportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PriceReport
     */
    omit?: PriceReportOmit<ExtArgs> | null
    /**
     * The data used to create many PriceReports.
     */
    data: PriceReportCreateManyInput | PriceReportCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceReportIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PriceReport update
   */
  export type PriceReportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceReport
     */
    select?: PriceReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceReport
     */
    omit?: PriceReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceReportInclude<ExtArgs> | null
    /**
     * The data needed to update a PriceReport.
     */
    data: XOR<PriceReportUpdateInput, PriceReportUncheckedUpdateInput>
    /**
     * Choose, which PriceReport to update.
     */
    where: PriceReportWhereUniqueInput
  }

  /**
   * PriceReport updateMany
   */
  export type PriceReportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PriceReports.
     */
    data: XOR<PriceReportUpdateManyMutationInput, PriceReportUncheckedUpdateManyInput>
    /**
     * Filter which PriceReports to update
     */
    where?: PriceReportWhereInput
    /**
     * Limit how many PriceReports to update.
     */
    limit?: number
  }

  /**
   * PriceReport updateManyAndReturn
   */
  export type PriceReportUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceReport
     */
    select?: PriceReportSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PriceReport
     */
    omit?: PriceReportOmit<ExtArgs> | null
    /**
     * The data used to update PriceReports.
     */
    data: XOR<PriceReportUpdateManyMutationInput, PriceReportUncheckedUpdateManyInput>
    /**
     * Filter which PriceReports to update
     */
    where?: PriceReportWhereInput
    /**
     * Limit how many PriceReports to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceReportIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PriceReport upsert
   */
  export type PriceReportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceReport
     */
    select?: PriceReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceReport
     */
    omit?: PriceReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceReportInclude<ExtArgs> | null
    /**
     * The filter to search for the PriceReport to update in case it exists.
     */
    where: PriceReportWhereUniqueInput
    /**
     * In case the PriceReport found by the `where` argument doesn't exist, create a new PriceReport with this data.
     */
    create: XOR<PriceReportCreateInput, PriceReportUncheckedCreateInput>
    /**
     * In case the PriceReport was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PriceReportUpdateInput, PriceReportUncheckedUpdateInput>
  }

  /**
   * PriceReport delete
   */
  export type PriceReportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceReport
     */
    select?: PriceReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceReport
     */
    omit?: PriceReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceReportInclude<ExtArgs> | null
    /**
     * Filter which PriceReport to delete.
     */
    where: PriceReportWhereUniqueInput
  }

  /**
   * PriceReport deleteMany
   */
  export type PriceReportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PriceReports to delete
     */
    where?: PriceReportWhereInput
    /**
     * Limit how many PriceReports to delete.
     */
    limit?: number
  }

  /**
   * PriceReport without action
   */
  export type PriceReportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceReport
     */
    select?: PriceReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceReport
     */
    omit?: PriceReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceReportInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const BaseProductScalarFieldEnum: {
    id: 'id',
    name: 'name',
    category: 'category',
    createdBy: 'createdBy',
    createdAt: 'createdAt',
    imageUrl: 'imageUrl'
  };

  export type BaseProductScalarFieldEnum = (typeof BaseProductScalarFieldEnum)[keyof typeof BaseProductScalarFieldEnum]


  export const ProductVariantScalarFieldEnum: {
    id: 'id',
    baseProductId: 'baseProductId',
    variantName: 'variantName',
    unit: 'unit',
    sizeValue: 'sizeValue',
    barcode: 'barcode',
    imageUrl: 'imageUrl',
    createdBy: 'createdBy'
  };

  export type ProductVariantScalarFieldEnum = (typeof ProductVariantScalarFieldEnum)[keyof typeof ProductVariantScalarFieldEnum]


  export const PriceReportScalarFieldEnum: {
    id: 'id',
    variantId: 'variantId',
    price: 'price',
    location: 'location',
    reportedBy: 'reportedBy',
    reportedAt: 'reportedAt',
    note: 'note'
  };

  export type PriceReportScalarFieldEnum = (typeof PriceReportScalarFieldEnum)[keyof typeof PriceReportScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type BaseProductWhereInput = {
    AND?: BaseProductWhereInput | BaseProductWhereInput[]
    OR?: BaseProductWhereInput[]
    NOT?: BaseProductWhereInput | BaseProductWhereInput[]
    id?: StringFilter<"BaseProduct"> | string
    name?: StringFilter<"BaseProduct"> | string
    category?: StringFilter<"BaseProduct"> | string
    createdBy?: StringFilter<"BaseProduct"> | string
    createdAt?: DateTimeFilter<"BaseProduct"> | Date | string
    imageUrl?: StringNullableFilter<"BaseProduct"> | string | null
    variants?: ProductVariantListRelationFilter
  }

  export type BaseProductOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    variants?: ProductVariantOrderByRelationAggregateInput
  }

  export type BaseProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BaseProductWhereInput | BaseProductWhereInput[]
    OR?: BaseProductWhereInput[]
    NOT?: BaseProductWhereInput | BaseProductWhereInput[]
    name?: StringFilter<"BaseProduct"> | string
    category?: StringFilter<"BaseProduct"> | string
    createdBy?: StringFilter<"BaseProduct"> | string
    createdAt?: DateTimeFilter<"BaseProduct"> | Date | string
    imageUrl?: StringNullableFilter<"BaseProduct"> | string | null
    variants?: ProductVariantListRelationFilter
  }, "id">

  export type BaseProductOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    _count?: BaseProductCountOrderByAggregateInput
    _max?: BaseProductMaxOrderByAggregateInput
    _min?: BaseProductMinOrderByAggregateInput
  }

  export type BaseProductScalarWhereWithAggregatesInput = {
    AND?: BaseProductScalarWhereWithAggregatesInput | BaseProductScalarWhereWithAggregatesInput[]
    OR?: BaseProductScalarWhereWithAggregatesInput[]
    NOT?: BaseProductScalarWhereWithAggregatesInput | BaseProductScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BaseProduct"> | string
    name?: StringWithAggregatesFilter<"BaseProduct"> | string
    category?: StringWithAggregatesFilter<"BaseProduct"> | string
    createdBy?: StringWithAggregatesFilter<"BaseProduct"> | string
    createdAt?: DateTimeWithAggregatesFilter<"BaseProduct"> | Date | string
    imageUrl?: StringNullableWithAggregatesFilter<"BaseProduct"> | string | null
  }

  export type ProductVariantWhereInput = {
    AND?: ProductVariantWhereInput | ProductVariantWhereInput[]
    OR?: ProductVariantWhereInput[]
    NOT?: ProductVariantWhereInput | ProductVariantWhereInput[]
    id?: StringFilter<"ProductVariant"> | string
    baseProductId?: StringFilter<"ProductVariant"> | string
    variantName?: StringFilter<"ProductVariant"> | string
    unit?: StringFilter<"ProductVariant"> | string
    sizeValue?: FloatNullableFilter<"ProductVariant"> | number | null
    barcode?: StringNullableFilter<"ProductVariant"> | string | null
    imageUrl?: StringNullableFilter<"ProductVariant"> | string | null
    createdBy?: StringFilter<"ProductVariant"> | string
    baseProduct?: XOR<BaseProductScalarRelationFilter, BaseProductWhereInput>
    priceReports?: PriceReportListRelationFilter
  }

  export type ProductVariantOrderByWithRelationInput = {
    id?: SortOrder
    baseProductId?: SortOrder
    variantName?: SortOrder
    unit?: SortOrder
    sizeValue?: SortOrderInput | SortOrder
    barcode?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    createdBy?: SortOrder
    baseProduct?: BaseProductOrderByWithRelationInput
    priceReports?: PriceReportOrderByRelationAggregateInput
  }

  export type ProductVariantWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductVariantWhereInput | ProductVariantWhereInput[]
    OR?: ProductVariantWhereInput[]
    NOT?: ProductVariantWhereInput | ProductVariantWhereInput[]
    baseProductId?: StringFilter<"ProductVariant"> | string
    variantName?: StringFilter<"ProductVariant"> | string
    unit?: StringFilter<"ProductVariant"> | string
    sizeValue?: FloatNullableFilter<"ProductVariant"> | number | null
    barcode?: StringNullableFilter<"ProductVariant"> | string | null
    imageUrl?: StringNullableFilter<"ProductVariant"> | string | null
    createdBy?: StringFilter<"ProductVariant"> | string
    baseProduct?: XOR<BaseProductScalarRelationFilter, BaseProductWhereInput>
    priceReports?: PriceReportListRelationFilter
  }, "id">

  export type ProductVariantOrderByWithAggregationInput = {
    id?: SortOrder
    baseProductId?: SortOrder
    variantName?: SortOrder
    unit?: SortOrder
    sizeValue?: SortOrderInput | SortOrder
    barcode?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    createdBy?: SortOrder
    _count?: ProductVariantCountOrderByAggregateInput
    _avg?: ProductVariantAvgOrderByAggregateInput
    _max?: ProductVariantMaxOrderByAggregateInput
    _min?: ProductVariantMinOrderByAggregateInput
    _sum?: ProductVariantSumOrderByAggregateInput
  }

  export type ProductVariantScalarWhereWithAggregatesInput = {
    AND?: ProductVariantScalarWhereWithAggregatesInput | ProductVariantScalarWhereWithAggregatesInput[]
    OR?: ProductVariantScalarWhereWithAggregatesInput[]
    NOT?: ProductVariantScalarWhereWithAggregatesInput | ProductVariantScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProductVariant"> | string
    baseProductId?: StringWithAggregatesFilter<"ProductVariant"> | string
    variantName?: StringWithAggregatesFilter<"ProductVariant"> | string
    unit?: StringWithAggregatesFilter<"ProductVariant"> | string
    sizeValue?: FloatNullableWithAggregatesFilter<"ProductVariant"> | number | null
    barcode?: StringNullableWithAggregatesFilter<"ProductVariant"> | string | null
    imageUrl?: StringNullableWithAggregatesFilter<"ProductVariant"> | string | null
    createdBy?: StringWithAggregatesFilter<"ProductVariant"> | string
  }

  export type PriceReportWhereInput = {
    AND?: PriceReportWhereInput | PriceReportWhereInput[]
    OR?: PriceReportWhereInput[]
    NOT?: PriceReportWhereInput | PriceReportWhereInput[]
    id?: StringFilter<"PriceReport"> | string
    variantId?: StringFilter<"PriceReport"> | string
    price?: FloatFilter<"PriceReport"> | number
    location?: StringFilter<"PriceReport"> | string
    reportedBy?: StringFilter<"PriceReport"> | string
    reportedAt?: DateTimeFilter<"PriceReport"> | Date | string
    note?: StringNullableFilter<"PriceReport"> | string | null
    variant?: XOR<ProductVariantScalarRelationFilter, ProductVariantWhereInput>
  }

  export type PriceReportOrderByWithRelationInput = {
    id?: SortOrder
    variantId?: SortOrder
    price?: SortOrder
    location?: SortOrder
    reportedBy?: SortOrder
    reportedAt?: SortOrder
    note?: SortOrderInput | SortOrder
    variant?: ProductVariantOrderByWithRelationInput
  }

  export type PriceReportWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PriceReportWhereInput | PriceReportWhereInput[]
    OR?: PriceReportWhereInput[]
    NOT?: PriceReportWhereInput | PriceReportWhereInput[]
    variantId?: StringFilter<"PriceReport"> | string
    price?: FloatFilter<"PriceReport"> | number
    location?: StringFilter<"PriceReport"> | string
    reportedBy?: StringFilter<"PriceReport"> | string
    reportedAt?: DateTimeFilter<"PriceReport"> | Date | string
    note?: StringNullableFilter<"PriceReport"> | string | null
    variant?: XOR<ProductVariantScalarRelationFilter, ProductVariantWhereInput>
  }, "id">

  export type PriceReportOrderByWithAggregationInput = {
    id?: SortOrder
    variantId?: SortOrder
    price?: SortOrder
    location?: SortOrder
    reportedBy?: SortOrder
    reportedAt?: SortOrder
    note?: SortOrderInput | SortOrder
    _count?: PriceReportCountOrderByAggregateInput
    _avg?: PriceReportAvgOrderByAggregateInput
    _max?: PriceReportMaxOrderByAggregateInput
    _min?: PriceReportMinOrderByAggregateInput
    _sum?: PriceReportSumOrderByAggregateInput
  }

  export type PriceReportScalarWhereWithAggregatesInput = {
    AND?: PriceReportScalarWhereWithAggregatesInput | PriceReportScalarWhereWithAggregatesInput[]
    OR?: PriceReportScalarWhereWithAggregatesInput[]
    NOT?: PriceReportScalarWhereWithAggregatesInput | PriceReportScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PriceReport"> | string
    variantId?: StringWithAggregatesFilter<"PriceReport"> | string
    price?: FloatWithAggregatesFilter<"PriceReport"> | number
    location?: StringWithAggregatesFilter<"PriceReport"> | string
    reportedBy?: StringWithAggregatesFilter<"PriceReport"> | string
    reportedAt?: DateTimeWithAggregatesFilter<"PriceReport"> | Date | string
    note?: StringNullableWithAggregatesFilter<"PriceReport"> | string | null
  }

  export type BaseProductCreateInput = {
    id?: string
    name: string
    category: string
    createdBy: string
    createdAt?: Date | string
    imageUrl?: string | null
    variants?: ProductVariantCreateNestedManyWithoutBaseProductInput
  }

  export type BaseProductUncheckedCreateInput = {
    id?: string
    name: string
    category: string
    createdBy: string
    createdAt?: Date | string
    imageUrl?: string | null
    variants?: ProductVariantUncheckedCreateNestedManyWithoutBaseProductInput
  }

  export type BaseProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    variants?: ProductVariantUpdateManyWithoutBaseProductNestedInput
  }

  export type BaseProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    variants?: ProductVariantUncheckedUpdateManyWithoutBaseProductNestedInput
  }

  export type BaseProductCreateManyInput = {
    id?: string
    name: string
    category: string
    createdBy: string
    createdAt?: Date | string
    imageUrl?: string | null
  }

  export type BaseProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BaseProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductVariantCreateInput = {
    id?: string
    variantName: string
    unit: string
    sizeValue?: number | null
    barcode?: string | null
    imageUrl?: string | null
    createdBy: string
    baseProduct: BaseProductCreateNestedOneWithoutVariantsInput
    priceReports?: PriceReportCreateNestedManyWithoutVariantInput
  }

  export type ProductVariantUncheckedCreateInput = {
    id?: string
    baseProductId: string
    variantName: string
    unit: string
    sizeValue?: number | null
    barcode?: string | null
    imageUrl?: string | null
    createdBy: string
    priceReports?: PriceReportUncheckedCreateNestedManyWithoutVariantInput
  }

  export type ProductVariantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    variantName?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    sizeValue?: NullableFloatFieldUpdateOperationsInput | number | null
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    baseProduct?: BaseProductUpdateOneRequiredWithoutVariantsNestedInput
    priceReports?: PriceReportUpdateManyWithoutVariantNestedInput
  }

  export type ProductVariantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    baseProductId?: StringFieldUpdateOperationsInput | string
    variantName?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    sizeValue?: NullableFloatFieldUpdateOperationsInput | number | null
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    priceReports?: PriceReportUncheckedUpdateManyWithoutVariantNestedInput
  }

  export type ProductVariantCreateManyInput = {
    id?: string
    baseProductId: string
    variantName: string
    unit: string
    sizeValue?: number | null
    barcode?: string | null
    imageUrl?: string | null
    createdBy: string
  }

  export type ProductVariantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    variantName?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    sizeValue?: NullableFloatFieldUpdateOperationsInput | number | null
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
  }

  export type ProductVariantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    baseProductId?: StringFieldUpdateOperationsInput | string
    variantName?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    sizeValue?: NullableFloatFieldUpdateOperationsInput | number | null
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
  }

  export type PriceReportCreateInput = {
    id?: string
    price: number
    location: string
    reportedBy: string
    reportedAt?: Date | string
    note?: string | null
    variant: ProductVariantCreateNestedOneWithoutPriceReportsInput
  }

  export type PriceReportUncheckedCreateInput = {
    id?: string
    variantId: string
    price: number
    location: string
    reportedBy: string
    reportedAt?: Date | string
    note?: string | null
  }

  export type PriceReportUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    reportedBy?: StringFieldUpdateOperationsInput | string
    reportedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    variant?: ProductVariantUpdateOneRequiredWithoutPriceReportsNestedInput
  }

  export type PriceReportUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    variantId?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    reportedBy?: StringFieldUpdateOperationsInput | string
    reportedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PriceReportCreateManyInput = {
    id?: string
    variantId: string
    price: number
    location: string
    reportedBy: string
    reportedAt?: Date | string
    note?: string | null
  }

  export type PriceReportUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    reportedBy?: StringFieldUpdateOperationsInput | string
    reportedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PriceReportUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    variantId?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    reportedBy?: StringFieldUpdateOperationsInput | string
    reportedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ProductVariantListRelationFilter = {
    every?: ProductVariantWhereInput
    some?: ProductVariantWhereInput
    none?: ProductVariantWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProductVariantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BaseProductCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    imageUrl?: SortOrder
  }

  export type BaseProductMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    imageUrl?: SortOrder
  }

  export type BaseProductMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    imageUrl?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type BaseProductScalarRelationFilter = {
    is?: BaseProductWhereInput
    isNot?: BaseProductWhereInput
  }

  export type PriceReportListRelationFilter = {
    every?: PriceReportWhereInput
    some?: PriceReportWhereInput
    none?: PriceReportWhereInput
  }

  export type PriceReportOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductVariantCountOrderByAggregateInput = {
    id?: SortOrder
    baseProductId?: SortOrder
    variantName?: SortOrder
    unit?: SortOrder
    sizeValue?: SortOrder
    barcode?: SortOrder
    imageUrl?: SortOrder
    createdBy?: SortOrder
  }

  export type ProductVariantAvgOrderByAggregateInput = {
    sizeValue?: SortOrder
  }

  export type ProductVariantMaxOrderByAggregateInput = {
    id?: SortOrder
    baseProductId?: SortOrder
    variantName?: SortOrder
    unit?: SortOrder
    sizeValue?: SortOrder
    barcode?: SortOrder
    imageUrl?: SortOrder
    createdBy?: SortOrder
  }

  export type ProductVariantMinOrderByAggregateInput = {
    id?: SortOrder
    baseProductId?: SortOrder
    variantName?: SortOrder
    unit?: SortOrder
    sizeValue?: SortOrder
    barcode?: SortOrder
    imageUrl?: SortOrder
    createdBy?: SortOrder
  }

  export type ProductVariantSumOrderByAggregateInput = {
    sizeValue?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ProductVariantScalarRelationFilter = {
    is?: ProductVariantWhereInput
    isNot?: ProductVariantWhereInput
  }

  export type PriceReportCountOrderByAggregateInput = {
    id?: SortOrder
    variantId?: SortOrder
    price?: SortOrder
    location?: SortOrder
    reportedBy?: SortOrder
    reportedAt?: SortOrder
    note?: SortOrder
  }

  export type PriceReportAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type PriceReportMaxOrderByAggregateInput = {
    id?: SortOrder
    variantId?: SortOrder
    price?: SortOrder
    location?: SortOrder
    reportedBy?: SortOrder
    reportedAt?: SortOrder
    note?: SortOrder
  }

  export type PriceReportMinOrderByAggregateInput = {
    id?: SortOrder
    variantId?: SortOrder
    price?: SortOrder
    location?: SortOrder
    reportedBy?: SortOrder
    reportedAt?: SortOrder
    note?: SortOrder
  }

  export type PriceReportSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type ProductVariantCreateNestedManyWithoutBaseProductInput = {
    create?: XOR<ProductVariantCreateWithoutBaseProductInput, ProductVariantUncheckedCreateWithoutBaseProductInput> | ProductVariantCreateWithoutBaseProductInput[] | ProductVariantUncheckedCreateWithoutBaseProductInput[]
    connectOrCreate?: ProductVariantCreateOrConnectWithoutBaseProductInput | ProductVariantCreateOrConnectWithoutBaseProductInput[]
    createMany?: ProductVariantCreateManyBaseProductInputEnvelope
    connect?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
  }

  export type ProductVariantUncheckedCreateNestedManyWithoutBaseProductInput = {
    create?: XOR<ProductVariantCreateWithoutBaseProductInput, ProductVariantUncheckedCreateWithoutBaseProductInput> | ProductVariantCreateWithoutBaseProductInput[] | ProductVariantUncheckedCreateWithoutBaseProductInput[]
    connectOrCreate?: ProductVariantCreateOrConnectWithoutBaseProductInput | ProductVariantCreateOrConnectWithoutBaseProductInput[]
    createMany?: ProductVariantCreateManyBaseProductInputEnvelope
    connect?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ProductVariantUpdateManyWithoutBaseProductNestedInput = {
    create?: XOR<ProductVariantCreateWithoutBaseProductInput, ProductVariantUncheckedCreateWithoutBaseProductInput> | ProductVariantCreateWithoutBaseProductInput[] | ProductVariantUncheckedCreateWithoutBaseProductInput[]
    connectOrCreate?: ProductVariantCreateOrConnectWithoutBaseProductInput | ProductVariantCreateOrConnectWithoutBaseProductInput[]
    upsert?: ProductVariantUpsertWithWhereUniqueWithoutBaseProductInput | ProductVariantUpsertWithWhereUniqueWithoutBaseProductInput[]
    createMany?: ProductVariantCreateManyBaseProductInputEnvelope
    set?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
    disconnect?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
    delete?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
    connect?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
    update?: ProductVariantUpdateWithWhereUniqueWithoutBaseProductInput | ProductVariantUpdateWithWhereUniqueWithoutBaseProductInput[]
    updateMany?: ProductVariantUpdateManyWithWhereWithoutBaseProductInput | ProductVariantUpdateManyWithWhereWithoutBaseProductInput[]
    deleteMany?: ProductVariantScalarWhereInput | ProductVariantScalarWhereInput[]
  }

  export type ProductVariantUncheckedUpdateManyWithoutBaseProductNestedInput = {
    create?: XOR<ProductVariantCreateWithoutBaseProductInput, ProductVariantUncheckedCreateWithoutBaseProductInput> | ProductVariantCreateWithoutBaseProductInput[] | ProductVariantUncheckedCreateWithoutBaseProductInput[]
    connectOrCreate?: ProductVariantCreateOrConnectWithoutBaseProductInput | ProductVariantCreateOrConnectWithoutBaseProductInput[]
    upsert?: ProductVariantUpsertWithWhereUniqueWithoutBaseProductInput | ProductVariantUpsertWithWhereUniqueWithoutBaseProductInput[]
    createMany?: ProductVariantCreateManyBaseProductInputEnvelope
    set?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
    disconnect?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
    delete?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
    connect?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
    update?: ProductVariantUpdateWithWhereUniqueWithoutBaseProductInput | ProductVariantUpdateWithWhereUniqueWithoutBaseProductInput[]
    updateMany?: ProductVariantUpdateManyWithWhereWithoutBaseProductInput | ProductVariantUpdateManyWithWhereWithoutBaseProductInput[]
    deleteMany?: ProductVariantScalarWhereInput | ProductVariantScalarWhereInput[]
  }

  export type BaseProductCreateNestedOneWithoutVariantsInput = {
    create?: XOR<BaseProductCreateWithoutVariantsInput, BaseProductUncheckedCreateWithoutVariantsInput>
    connectOrCreate?: BaseProductCreateOrConnectWithoutVariantsInput
    connect?: BaseProductWhereUniqueInput
  }

  export type PriceReportCreateNestedManyWithoutVariantInput = {
    create?: XOR<PriceReportCreateWithoutVariantInput, PriceReportUncheckedCreateWithoutVariantInput> | PriceReportCreateWithoutVariantInput[] | PriceReportUncheckedCreateWithoutVariantInput[]
    connectOrCreate?: PriceReportCreateOrConnectWithoutVariantInput | PriceReportCreateOrConnectWithoutVariantInput[]
    createMany?: PriceReportCreateManyVariantInputEnvelope
    connect?: PriceReportWhereUniqueInput | PriceReportWhereUniqueInput[]
  }

  export type PriceReportUncheckedCreateNestedManyWithoutVariantInput = {
    create?: XOR<PriceReportCreateWithoutVariantInput, PriceReportUncheckedCreateWithoutVariantInput> | PriceReportCreateWithoutVariantInput[] | PriceReportUncheckedCreateWithoutVariantInput[]
    connectOrCreate?: PriceReportCreateOrConnectWithoutVariantInput | PriceReportCreateOrConnectWithoutVariantInput[]
    createMany?: PriceReportCreateManyVariantInputEnvelope
    connect?: PriceReportWhereUniqueInput | PriceReportWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BaseProductUpdateOneRequiredWithoutVariantsNestedInput = {
    create?: XOR<BaseProductCreateWithoutVariantsInput, BaseProductUncheckedCreateWithoutVariantsInput>
    connectOrCreate?: BaseProductCreateOrConnectWithoutVariantsInput
    upsert?: BaseProductUpsertWithoutVariantsInput
    connect?: BaseProductWhereUniqueInput
    update?: XOR<XOR<BaseProductUpdateToOneWithWhereWithoutVariantsInput, BaseProductUpdateWithoutVariantsInput>, BaseProductUncheckedUpdateWithoutVariantsInput>
  }

  export type PriceReportUpdateManyWithoutVariantNestedInput = {
    create?: XOR<PriceReportCreateWithoutVariantInput, PriceReportUncheckedCreateWithoutVariantInput> | PriceReportCreateWithoutVariantInput[] | PriceReportUncheckedCreateWithoutVariantInput[]
    connectOrCreate?: PriceReportCreateOrConnectWithoutVariantInput | PriceReportCreateOrConnectWithoutVariantInput[]
    upsert?: PriceReportUpsertWithWhereUniqueWithoutVariantInput | PriceReportUpsertWithWhereUniqueWithoutVariantInput[]
    createMany?: PriceReportCreateManyVariantInputEnvelope
    set?: PriceReportWhereUniqueInput | PriceReportWhereUniqueInput[]
    disconnect?: PriceReportWhereUniqueInput | PriceReportWhereUniqueInput[]
    delete?: PriceReportWhereUniqueInput | PriceReportWhereUniqueInput[]
    connect?: PriceReportWhereUniqueInput | PriceReportWhereUniqueInput[]
    update?: PriceReportUpdateWithWhereUniqueWithoutVariantInput | PriceReportUpdateWithWhereUniqueWithoutVariantInput[]
    updateMany?: PriceReportUpdateManyWithWhereWithoutVariantInput | PriceReportUpdateManyWithWhereWithoutVariantInput[]
    deleteMany?: PriceReportScalarWhereInput | PriceReportScalarWhereInput[]
  }

  export type PriceReportUncheckedUpdateManyWithoutVariantNestedInput = {
    create?: XOR<PriceReportCreateWithoutVariantInput, PriceReportUncheckedCreateWithoutVariantInput> | PriceReportCreateWithoutVariantInput[] | PriceReportUncheckedCreateWithoutVariantInput[]
    connectOrCreate?: PriceReportCreateOrConnectWithoutVariantInput | PriceReportCreateOrConnectWithoutVariantInput[]
    upsert?: PriceReportUpsertWithWhereUniqueWithoutVariantInput | PriceReportUpsertWithWhereUniqueWithoutVariantInput[]
    createMany?: PriceReportCreateManyVariantInputEnvelope
    set?: PriceReportWhereUniqueInput | PriceReportWhereUniqueInput[]
    disconnect?: PriceReportWhereUniqueInput | PriceReportWhereUniqueInput[]
    delete?: PriceReportWhereUniqueInput | PriceReportWhereUniqueInput[]
    connect?: PriceReportWhereUniqueInput | PriceReportWhereUniqueInput[]
    update?: PriceReportUpdateWithWhereUniqueWithoutVariantInput | PriceReportUpdateWithWhereUniqueWithoutVariantInput[]
    updateMany?: PriceReportUpdateManyWithWhereWithoutVariantInput | PriceReportUpdateManyWithWhereWithoutVariantInput[]
    deleteMany?: PriceReportScalarWhereInput | PriceReportScalarWhereInput[]
  }

  export type ProductVariantCreateNestedOneWithoutPriceReportsInput = {
    create?: XOR<ProductVariantCreateWithoutPriceReportsInput, ProductVariantUncheckedCreateWithoutPriceReportsInput>
    connectOrCreate?: ProductVariantCreateOrConnectWithoutPriceReportsInput
    connect?: ProductVariantWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProductVariantUpdateOneRequiredWithoutPriceReportsNestedInput = {
    create?: XOR<ProductVariantCreateWithoutPriceReportsInput, ProductVariantUncheckedCreateWithoutPriceReportsInput>
    connectOrCreate?: ProductVariantCreateOrConnectWithoutPriceReportsInput
    upsert?: ProductVariantUpsertWithoutPriceReportsInput
    connect?: ProductVariantWhereUniqueInput
    update?: XOR<XOR<ProductVariantUpdateToOneWithWhereWithoutPriceReportsInput, ProductVariantUpdateWithoutPriceReportsInput>, ProductVariantUncheckedUpdateWithoutPriceReportsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type ProductVariantCreateWithoutBaseProductInput = {
    id?: string
    variantName: string
    unit: string
    sizeValue?: number | null
    barcode?: string | null
    imageUrl?: string | null
    createdBy: string
    priceReports?: PriceReportCreateNestedManyWithoutVariantInput
  }

  export type ProductVariantUncheckedCreateWithoutBaseProductInput = {
    id?: string
    variantName: string
    unit: string
    sizeValue?: number | null
    barcode?: string | null
    imageUrl?: string | null
    createdBy: string
    priceReports?: PriceReportUncheckedCreateNestedManyWithoutVariantInput
  }

  export type ProductVariantCreateOrConnectWithoutBaseProductInput = {
    where: ProductVariantWhereUniqueInput
    create: XOR<ProductVariantCreateWithoutBaseProductInput, ProductVariantUncheckedCreateWithoutBaseProductInput>
  }

  export type ProductVariantCreateManyBaseProductInputEnvelope = {
    data: ProductVariantCreateManyBaseProductInput | ProductVariantCreateManyBaseProductInput[]
    skipDuplicates?: boolean
  }

  export type ProductVariantUpsertWithWhereUniqueWithoutBaseProductInput = {
    where: ProductVariantWhereUniqueInput
    update: XOR<ProductVariantUpdateWithoutBaseProductInput, ProductVariantUncheckedUpdateWithoutBaseProductInput>
    create: XOR<ProductVariantCreateWithoutBaseProductInput, ProductVariantUncheckedCreateWithoutBaseProductInput>
  }

  export type ProductVariantUpdateWithWhereUniqueWithoutBaseProductInput = {
    where: ProductVariantWhereUniqueInput
    data: XOR<ProductVariantUpdateWithoutBaseProductInput, ProductVariantUncheckedUpdateWithoutBaseProductInput>
  }

  export type ProductVariantUpdateManyWithWhereWithoutBaseProductInput = {
    where: ProductVariantScalarWhereInput
    data: XOR<ProductVariantUpdateManyMutationInput, ProductVariantUncheckedUpdateManyWithoutBaseProductInput>
  }

  export type ProductVariantScalarWhereInput = {
    AND?: ProductVariantScalarWhereInput | ProductVariantScalarWhereInput[]
    OR?: ProductVariantScalarWhereInput[]
    NOT?: ProductVariantScalarWhereInput | ProductVariantScalarWhereInput[]
    id?: StringFilter<"ProductVariant"> | string
    baseProductId?: StringFilter<"ProductVariant"> | string
    variantName?: StringFilter<"ProductVariant"> | string
    unit?: StringFilter<"ProductVariant"> | string
    sizeValue?: FloatNullableFilter<"ProductVariant"> | number | null
    barcode?: StringNullableFilter<"ProductVariant"> | string | null
    imageUrl?: StringNullableFilter<"ProductVariant"> | string | null
    createdBy?: StringFilter<"ProductVariant"> | string
  }

  export type BaseProductCreateWithoutVariantsInput = {
    id?: string
    name: string
    category: string
    createdBy: string
    createdAt?: Date | string
    imageUrl?: string | null
  }

  export type BaseProductUncheckedCreateWithoutVariantsInput = {
    id?: string
    name: string
    category: string
    createdBy: string
    createdAt?: Date | string
    imageUrl?: string | null
  }

  export type BaseProductCreateOrConnectWithoutVariantsInput = {
    where: BaseProductWhereUniqueInput
    create: XOR<BaseProductCreateWithoutVariantsInput, BaseProductUncheckedCreateWithoutVariantsInput>
  }

  export type PriceReportCreateWithoutVariantInput = {
    id?: string
    price: number
    location: string
    reportedBy: string
    reportedAt?: Date | string
    note?: string | null
  }

  export type PriceReportUncheckedCreateWithoutVariantInput = {
    id?: string
    price: number
    location: string
    reportedBy: string
    reportedAt?: Date | string
    note?: string | null
  }

  export type PriceReportCreateOrConnectWithoutVariantInput = {
    where: PriceReportWhereUniqueInput
    create: XOR<PriceReportCreateWithoutVariantInput, PriceReportUncheckedCreateWithoutVariantInput>
  }

  export type PriceReportCreateManyVariantInputEnvelope = {
    data: PriceReportCreateManyVariantInput | PriceReportCreateManyVariantInput[]
    skipDuplicates?: boolean
  }

  export type BaseProductUpsertWithoutVariantsInput = {
    update: XOR<BaseProductUpdateWithoutVariantsInput, BaseProductUncheckedUpdateWithoutVariantsInput>
    create: XOR<BaseProductCreateWithoutVariantsInput, BaseProductUncheckedCreateWithoutVariantsInput>
    where?: BaseProductWhereInput
  }

  export type BaseProductUpdateToOneWithWhereWithoutVariantsInput = {
    where?: BaseProductWhereInput
    data: XOR<BaseProductUpdateWithoutVariantsInput, BaseProductUncheckedUpdateWithoutVariantsInput>
  }

  export type BaseProductUpdateWithoutVariantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BaseProductUncheckedUpdateWithoutVariantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PriceReportUpsertWithWhereUniqueWithoutVariantInput = {
    where: PriceReportWhereUniqueInput
    update: XOR<PriceReportUpdateWithoutVariantInput, PriceReportUncheckedUpdateWithoutVariantInput>
    create: XOR<PriceReportCreateWithoutVariantInput, PriceReportUncheckedCreateWithoutVariantInput>
  }

  export type PriceReportUpdateWithWhereUniqueWithoutVariantInput = {
    where: PriceReportWhereUniqueInput
    data: XOR<PriceReportUpdateWithoutVariantInput, PriceReportUncheckedUpdateWithoutVariantInput>
  }

  export type PriceReportUpdateManyWithWhereWithoutVariantInput = {
    where: PriceReportScalarWhereInput
    data: XOR<PriceReportUpdateManyMutationInput, PriceReportUncheckedUpdateManyWithoutVariantInput>
  }

  export type PriceReportScalarWhereInput = {
    AND?: PriceReportScalarWhereInput | PriceReportScalarWhereInput[]
    OR?: PriceReportScalarWhereInput[]
    NOT?: PriceReportScalarWhereInput | PriceReportScalarWhereInput[]
    id?: StringFilter<"PriceReport"> | string
    variantId?: StringFilter<"PriceReport"> | string
    price?: FloatFilter<"PriceReport"> | number
    location?: StringFilter<"PriceReport"> | string
    reportedBy?: StringFilter<"PriceReport"> | string
    reportedAt?: DateTimeFilter<"PriceReport"> | Date | string
    note?: StringNullableFilter<"PriceReport"> | string | null
  }

  export type ProductVariantCreateWithoutPriceReportsInput = {
    id?: string
    variantName: string
    unit: string
    sizeValue?: number | null
    barcode?: string | null
    imageUrl?: string | null
    createdBy: string
    baseProduct: BaseProductCreateNestedOneWithoutVariantsInput
  }

  export type ProductVariantUncheckedCreateWithoutPriceReportsInput = {
    id?: string
    baseProductId: string
    variantName: string
    unit: string
    sizeValue?: number | null
    barcode?: string | null
    imageUrl?: string | null
    createdBy: string
  }

  export type ProductVariantCreateOrConnectWithoutPriceReportsInput = {
    where: ProductVariantWhereUniqueInput
    create: XOR<ProductVariantCreateWithoutPriceReportsInput, ProductVariantUncheckedCreateWithoutPriceReportsInput>
  }

  export type ProductVariantUpsertWithoutPriceReportsInput = {
    update: XOR<ProductVariantUpdateWithoutPriceReportsInput, ProductVariantUncheckedUpdateWithoutPriceReportsInput>
    create: XOR<ProductVariantCreateWithoutPriceReportsInput, ProductVariantUncheckedCreateWithoutPriceReportsInput>
    where?: ProductVariantWhereInput
  }

  export type ProductVariantUpdateToOneWithWhereWithoutPriceReportsInput = {
    where?: ProductVariantWhereInput
    data: XOR<ProductVariantUpdateWithoutPriceReportsInput, ProductVariantUncheckedUpdateWithoutPriceReportsInput>
  }

  export type ProductVariantUpdateWithoutPriceReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    variantName?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    sizeValue?: NullableFloatFieldUpdateOperationsInput | number | null
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    baseProduct?: BaseProductUpdateOneRequiredWithoutVariantsNestedInput
  }

  export type ProductVariantUncheckedUpdateWithoutPriceReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    baseProductId?: StringFieldUpdateOperationsInput | string
    variantName?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    sizeValue?: NullableFloatFieldUpdateOperationsInput | number | null
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
  }

  export type ProductVariantCreateManyBaseProductInput = {
    id?: string
    variantName: string
    unit: string
    sizeValue?: number | null
    barcode?: string | null
    imageUrl?: string | null
    createdBy: string
  }

  export type ProductVariantUpdateWithoutBaseProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    variantName?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    sizeValue?: NullableFloatFieldUpdateOperationsInput | number | null
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    priceReports?: PriceReportUpdateManyWithoutVariantNestedInput
  }

  export type ProductVariantUncheckedUpdateWithoutBaseProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    variantName?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    sizeValue?: NullableFloatFieldUpdateOperationsInput | number | null
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    priceReports?: PriceReportUncheckedUpdateManyWithoutVariantNestedInput
  }

  export type ProductVariantUncheckedUpdateManyWithoutBaseProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    variantName?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    sizeValue?: NullableFloatFieldUpdateOperationsInput | number | null
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
  }

  export type PriceReportCreateManyVariantInput = {
    id?: string
    price: number
    location: string
    reportedBy: string
    reportedAt?: Date | string
    note?: string | null
  }

  export type PriceReportUpdateWithoutVariantInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    reportedBy?: StringFieldUpdateOperationsInput | string
    reportedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PriceReportUncheckedUpdateWithoutVariantInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    reportedBy?: StringFieldUpdateOperationsInput | string
    reportedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PriceReportUncheckedUpdateManyWithoutVariantInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    reportedBy?: StringFieldUpdateOperationsInput | string
    reportedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}