// Code generated by Prisma (prisma@1.32.2). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export type Maybe<T> = T | undefined | null;

export interface Exists {
  issue: (where?: IssueWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  issue: (where: IssueWhereUniqueInput) => IssueNullablePromise;
  issues: (args?: {
    where?: IssueWhereInput;
    orderBy?: IssueOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Issue>;
  issuesConnection: (args?: {
    where?: IssueWhereInput;
    orderBy?: IssueOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => IssueConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createIssue: (data: IssueCreateInput) => IssuePromise;
  updateIssue: (args: {
    data: IssueUpdateInput;
    where: IssueWhereUniqueInput;
  }) => IssuePromise;
  updateManyIssues: (args: {
    data: IssueUpdateManyMutationInput;
    where?: IssueWhereInput;
  }) => BatchPayloadPromise;
  upsertIssue: (args: {
    where: IssueWhereUniqueInput;
    create: IssueCreateInput;
    update: IssueUpdateInput;
  }) => IssuePromise;
  deleteIssue: (where: IssueWhereUniqueInput) => IssuePromise;
  deleteManyIssues: (where?: IssueWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  issue: (
    where?: IssueSubscriptionWhereInput
  ) => IssueSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type IssueOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "title_ASC"
  | "title_DESC"
  | "description_ASC"
  | "description_DESC"
  | "status_ASC"
  | "status_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC";

export type Status = "OPEN" | "PENDING" | "CLOSED";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface IssueCreateInput {
  id?: Maybe<ID_Input>;
  title: String;
  description: String;
  status?: Maybe<Status>;
}

export interface IssueUpdateInput {
  title?: Maybe<String>;
  description?: Maybe<String>;
  status?: Maybe<Status>;
}

export interface IssueWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  title?: Maybe<String>;
  title_not?: Maybe<String>;
  title_in?: Maybe<String[] | String>;
  title_not_in?: Maybe<String[] | String>;
  title_lt?: Maybe<String>;
  title_lte?: Maybe<String>;
  title_gt?: Maybe<String>;
  title_gte?: Maybe<String>;
  title_contains?: Maybe<String>;
  title_not_contains?: Maybe<String>;
  title_starts_with?: Maybe<String>;
  title_not_starts_with?: Maybe<String>;
  title_ends_with?: Maybe<String>;
  title_not_ends_with?: Maybe<String>;
  description?: Maybe<String>;
  description_not?: Maybe<String>;
  description_in?: Maybe<String[] | String>;
  description_not_in?: Maybe<String[] | String>;
  description_lt?: Maybe<String>;
  description_lte?: Maybe<String>;
  description_gt?: Maybe<String>;
  description_gte?: Maybe<String>;
  description_contains?: Maybe<String>;
  description_not_contains?: Maybe<String>;
  description_starts_with?: Maybe<String>;
  description_not_starts_with?: Maybe<String>;
  description_ends_with?: Maybe<String>;
  description_not_ends_with?: Maybe<String>;
  status?: Maybe<Status>;
  status_not?: Maybe<Status>;
  status_in?: Maybe<Status[] | Status>;
  status_not_in?: Maybe<Status[] | Status>;
  createdAt?: Maybe<DateTimeInput>;
  createdAt_not?: Maybe<DateTimeInput>;
  createdAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_lt?: Maybe<DateTimeInput>;
  createdAt_lte?: Maybe<DateTimeInput>;
  createdAt_gt?: Maybe<DateTimeInput>;
  createdAt_gte?: Maybe<DateTimeInput>;
  AND?: Maybe<IssueWhereInput[] | IssueWhereInput>;
  OR?: Maybe<IssueWhereInput[] | IssueWhereInput>;
  NOT?: Maybe<IssueWhereInput[] | IssueWhereInput>;
}

export interface IssueUpdateManyMutationInput {
  title?: Maybe<String>;
  description?: Maybe<String>;
  status?: Maybe<Status>;
}

export interface IssueSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<IssueWhereInput>;
  AND?: Maybe<IssueSubscriptionWhereInput[] | IssueSubscriptionWhereInput>;
  OR?: Maybe<IssueSubscriptionWhereInput[] | IssueSubscriptionWhereInput>;
  NOT?: Maybe<IssueSubscriptionWhereInput[] | IssueSubscriptionWhereInput>;
}

export type IssueWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface NodeNode {
  id: ID_Output;
}

export interface IssueEdge {
  node: Issue;
  cursor: String;
}

export interface IssueEdgePromise extends Promise<IssueEdge>, Fragmentable {
  node: <T = IssuePromise>() => T;
  cursor: () => Promise<String>;
}

export interface IssueEdgeSubscription
  extends Promise<AsyncIterator<IssueEdge>>,
    Fragmentable {
  node: <T = IssueSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface Issue {
  id: ID_Output;
  title: String;
  description: String;
  status: Status;
  createdAt: DateTimeOutput;
}

export interface IssuePromise extends Promise<Issue>, Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  description: () => Promise<String>;
  status: () => Promise<Status>;
  createdAt: () => Promise<DateTimeOutput>;
}

export interface IssueSubscription
  extends Promise<AsyncIterator<Issue>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  title: () => Promise<AsyncIterator<String>>;
  description: () => Promise<AsyncIterator<String>>;
  status: () => Promise<AsyncIterator<Status>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}

export interface IssueNullablePromise
  extends Promise<Issue | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  description: () => Promise<String>;
  status: () => Promise<Status>;
  createdAt: () => Promise<DateTimeOutput>;
}

export interface IssueSubscriptionPayload {
  mutation: MutationType;
  node: Issue;
  updatedFields: String[];
  previousValues: IssuePreviousValues;
}

export interface IssueSubscriptionPayloadPromise
  extends Promise<IssueSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = IssuePromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = IssuePreviousValuesPromise>() => T;
}

export interface IssueSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<IssueSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = IssueSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = IssuePreviousValuesSubscription>() => T;
}

export interface IssueConnection {
  pageInfo: PageInfo;
  edges: IssueEdge[];
}

export interface IssueConnectionPromise
  extends Promise<IssueConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<IssueEdge>>() => T;
  aggregate: <T = AggregateIssuePromise>() => T;
}

export interface IssueConnectionSubscription
  extends Promise<AsyncIterator<IssueConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<IssueEdgeSubscription>>>() => T;
  aggregate: <T = AggregateIssueSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateIssue {
  count: Int;
}

export interface AggregateIssuePromise
  extends Promise<AggregateIssue>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateIssueSubscription
  extends Promise<AsyncIterator<AggregateIssue>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface IssuePreviousValues {
  id: ID_Output;
  title: String;
  description: String;
  status: Status;
  createdAt: DateTimeOutput;
}

export interface IssuePreviousValuesPromise
  extends Promise<IssuePreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  description: () => Promise<String>;
  status: () => Promise<Status>;
  createdAt: () => Promise<DateTimeOutput>;
}

export interface IssuePreviousValuesSubscription
  extends Promise<AsyncIterator<IssuePreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  title: () => Promise<AsyncIterator<String>>;
  description: () => Promise<AsyncIterator<String>>;
  status: () => Promise<AsyncIterator<Status>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}

/*
DateTime scalar input type, allowing Date
*/
export type DateTimeInput = Date | string;

/*
DateTime scalar output type, which is always a string
*/
export type DateTimeOutput = string;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

export type Long = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "Status",
    embedded: false
  },
  {
    name: "Issue",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;
