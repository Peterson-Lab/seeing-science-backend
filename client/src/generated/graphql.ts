import { GraphQLClient } from 'graphql-request';
import { useMutation, UseMutationOptions, useQuery, UseQueryOptions } from 'react-query';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(client: GraphQLClient, query: string, variables?: TVariables) {
  return async (): Promise<TData> => client.request<TData, TVariables>(query, variables);
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Byte` scalar type represents byte value as a Buffer */
  Byte: any;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Query = {
  __typename?: 'Query';
  drawing?: Maybe<Drawing>;
  findFirstDrawing?: Maybe<Drawing>;
  drawings: Array<Drawing>;
  aggregateDrawing: AggregateDrawing;
  drtTrialResponse?: Maybe<DrtTrialResponse>;
  findFirstDrtTrialResponse?: Maybe<DrtTrialResponse>;
  drtTrialResponses: Array<DrtTrialResponse>;
  aggregateDrtTrialResponse: AggregateDrtTrialResponse;
  spatialActivity?: Maybe<SpatialActivity>;
  findFirstSpatialActivity?: Maybe<SpatialActivity>;
  spatialActivities: Array<SpatialActivity>;
  aggregateSpatialActivity: AggregateSpatialActivity;
  user?: Maybe<User>;
  findFirstUser?: Maybe<User>;
  users: Array<User>;
  aggregateUser: AggregateUser;
  bestUser?: Maybe<User>;
  me?: Maybe<User>;
};


export type QueryDrawingArgs = {
  where: DrawingWhereUniqueInput;
};


export type QueryFindFirstDrawingArgs = {
  where?: Maybe<DrawingWhereInput>;
  orderBy?: Maybe<Array<DrawingOrderByInput>>;
  cursor?: Maybe<DrawingWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<DrawingScalarFieldEnum>>;
};


export type QueryDrawingsArgs = {
  where?: Maybe<DrawingWhereInput>;
  orderBy?: Maybe<Array<DrawingOrderByInput>>;
  cursor?: Maybe<DrawingWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<DrawingScalarFieldEnum>>;
};


export type QueryAggregateDrawingArgs = {
  where?: Maybe<DrawingWhereInput>;
  orderBy?: Maybe<Array<DrawingOrderByInput>>;
  cursor?: Maybe<DrawingWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryDrtTrialResponseArgs = {
  where: DrtTrialResponseWhereUniqueInput;
};


export type QueryFindFirstDrtTrialResponseArgs = {
  where?: Maybe<DrtTrialResponseWhereInput>;
  orderBy?: Maybe<Array<DrtTrialResponseOrderByInput>>;
  cursor?: Maybe<DrtTrialResponseWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<DrtTrialResponseScalarFieldEnum>>;
};


export type QueryDrtTrialResponsesArgs = {
  where?: Maybe<DrtTrialResponseWhereInput>;
  orderBy?: Maybe<Array<DrtTrialResponseOrderByInput>>;
  cursor?: Maybe<DrtTrialResponseWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<DrtTrialResponseScalarFieldEnum>>;
};


export type QueryAggregateDrtTrialResponseArgs = {
  where?: Maybe<DrtTrialResponseWhereInput>;
  orderBy?: Maybe<Array<DrtTrialResponseOrderByInput>>;
  cursor?: Maybe<DrtTrialResponseWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QuerySpatialActivityArgs = {
  where: SpatialActivityWhereUniqueInput;
};


export type QueryFindFirstSpatialActivityArgs = {
  where?: Maybe<SpatialActivityWhereInput>;
  orderBy?: Maybe<Array<SpatialActivityOrderByInput>>;
  cursor?: Maybe<SpatialActivityWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<SpatialActivityScalarFieldEnum>>;
};


export type QuerySpatialActivitiesArgs = {
  where?: Maybe<SpatialActivityWhereInput>;
  orderBy?: Maybe<Array<SpatialActivityOrderByInput>>;
  cursor?: Maybe<SpatialActivityWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<SpatialActivityScalarFieldEnum>>;
};


export type QueryAggregateSpatialActivityArgs = {
  where?: Maybe<SpatialActivityWhereInput>;
  orderBy?: Maybe<Array<SpatialActivityOrderByInput>>;
  cursor?: Maybe<SpatialActivityWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryFindFirstUserArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<Array<UserOrderByInput>>;
  cursor?: Maybe<UserWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<UserScalarFieldEnum>>;
};


export type QueryUsersArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<Array<UserOrderByInput>>;
  cursor?: Maybe<UserWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<UserScalarFieldEnum>>;
};


export type QueryAggregateUserArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<Array<UserOrderByInput>>;
  cursor?: Maybe<UserWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type Drawing = {
  __typename?: 'Drawing';
  id: Scalars['Int'];
  prompt: Scalars['String'];
  image: Scalars['Byte'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
};



export type DrawingWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type DrawingWhereInput = {
  AND?: Maybe<Array<DrawingWhereInput>>;
  OR?: Maybe<Array<DrawingWhereInput>>;
  NOT?: Maybe<Array<DrawingWhereInput>>;
  id?: Maybe<IntFilter>;
  prompt?: Maybe<StringFilter>;
  image?: Maybe<BytesFilter>;
  created_at?: Maybe<DateTimeFilter>;
  updated_at?: Maybe<DateTimeFilter>;
};

export type IntFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
};

export type NestedIntFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
};

export type StringFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringFilter>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type NestedStringFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
};

export type BytesFilter = {
  equals?: Maybe<Scalars['Byte']>;
  not?: Maybe<NestedBytesFilter>;
};

export type NestedBytesFilter = {
  equals?: Maybe<Scalars['Byte']>;
  not?: Maybe<NestedBytesFilter>;
};

export type DateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
};

export type NestedDateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
};

export type DrawingOrderByInput = {
  id?: Maybe<SortOrder>;
  prompt?: Maybe<SortOrder>;
  image?: Maybe<SortOrder>;
  created_at?: Maybe<SortOrder>;
  updated_at?: Maybe<SortOrder>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export enum DrawingScalarFieldEnum {
  Id = 'id',
  Prompt = 'prompt',
  Image = 'image',
  CreatedAt = 'created_at',
  UpdatedAt = 'updated_at'
}

export type AggregateDrawing = {
  __typename?: 'AggregateDrawing';
  count?: Maybe<DrawingCountAggregate>;
  avg?: Maybe<DrawingAvgAggregate>;
  sum?: Maybe<DrawingSumAggregate>;
  min?: Maybe<DrawingMinAggregate>;
  max?: Maybe<DrawingMaxAggregate>;
};

export type DrawingCountAggregate = {
  __typename?: 'DrawingCountAggregate';
  id: Scalars['Int'];
  prompt?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['Int']>;
  _all: Scalars['Int'];
};

export type DrawingAvgAggregate = {
  __typename?: 'DrawingAvgAggregate';
  id: Scalars['Float'];
};

export type DrawingSumAggregate = {
  __typename?: 'DrawingSumAggregate';
  id: Scalars['Int'];
};

export type DrawingMinAggregate = {
  __typename?: 'DrawingMinAggregate';
  id: Scalars['Int'];
  prompt?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['Byte']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type DrawingMaxAggregate = {
  __typename?: 'DrawingMaxAggregate';
  id: Scalars['Int'];
  prompt?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['Byte']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type DrtTrialResponse = {
  __typename?: 'DrtTrialResponse';
  id: Scalars['Int'];
  participant_id: Scalars['Int'];
  question: Scalars['Int'];
  target: Scalars['String'];
  answer: Scalars['Int'];
  response_1: Scalars['String'];
  response_2: Scalars['String'];
  response_3: Scalars['String'];
  response_4: Scalars['String'];
  time: Scalars['Int'];
  correct: Scalars['Boolean'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
};

export type DrtTrialResponseWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type DrtTrialResponseWhereInput = {
  AND?: Maybe<Array<DrtTrialResponseWhereInput>>;
  OR?: Maybe<Array<DrtTrialResponseWhereInput>>;
  NOT?: Maybe<Array<DrtTrialResponseWhereInput>>;
  id?: Maybe<IntFilter>;
  participant_id?: Maybe<IntFilter>;
  question?: Maybe<IntFilter>;
  target?: Maybe<StringFilter>;
  answer?: Maybe<IntFilter>;
  response_1?: Maybe<StringFilter>;
  response_2?: Maybe<StringFilter>;
  response_3?: Maybe<StringFilter>;
  response_4?: Maybe<StringFilter>;
  time?: Maybe<IntFilter>;
  correct?: Maybe<BoolFilter>;
  created_at?: Maybe<DateTimeFilter>;
  updated_at?: Maybe<DateTimeFilter>;
};

export type BoolFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolFilter>;
};

export type NestedBoolFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolFilter>;
};

export type DrtTrialResponseOrderByInput = {
  id?: Maybe<SortOrder>;
  participant_id?: Maybe<SortOrder>;
  question?: Maybe<SortOrder>;
  target?: Maybe<SortOrder>;
  answer?: Maybe<SortOrder>;
  response_1?: Maybe<SortOrder>;
  response_2?: Maybe<SortOrder>;
  response_3?: Maybe<SortOrder>;
  response_4?: Maybe<SortOrder>;
  time?: Maybe<SortOrder>;
  correct?: Maybe<SortOrder>;
  created_at?: Maybe<SortOrder>;
  updated_at?: Maybe<SortOrder>;
};

export enum DrtTrialResponseScalarFieldEnum {
  Id = 'id',
  ParticipantId = 'participant_id',
  Question = 'question',
  Target = 'target',
  Answer = 'answer',
  Response_1 = 'response_1',
  Response_2 = 'response_2',
  Response_3 = 'response_3',
  Response_4 = 'response_4',
  Time = 'time',
  Correct = 'correct',
  CreatedAt = 'created_at',
  UpdatedAt = 'updated_at'
}

export type AggregateDrtTrialResponse = {
  __typename?: 'AggregateDrtTrialResponse';
  count?: Maybe<DrtTrialResponseCountAggregate>;
  avg?: Maybe<DrtTrialResponseAvgAggregate>;
  sum?: Maybe<DrtTrialResponseSumAggregate>;
  min?: Maybe<DrtTrialResponseMinAggregate>;
  max?: Maybe<DrtTrialResponseMaxAggregate>;
};

export type DrtTrialResponseCountAggregate = {
  __typename?: 'DrtTrialResponseCountAggregate';
  id: Scalars['Int'];
  participant_id: Scalars['Int'];
  question: Scalars['Int'];
  target?: Maybe<Scalars['Int']>;
  answer: Scalars['Int'];
  response_1?: Maybe<Scalars['Int']>;
  response_2?: Maybe<Scalars['Int']>;
  response_3?: Maybe<Scalars['Int']>;
  response_4?: Maybe<Scalars['Int']>;
  time: Scalars['Int'];
  correct?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['Int']>;
  _all: Scalars['Int'];
};

export type DrtTrialResponseAvgAggregate = {
  __typename?: 'DrtTrialResponseAvgAggregate';
  id: Scalars['Float'];
  participant_id: Scalars['Float'];
  question: Scalars['Float'];
  answer: Scalars['Float'];
  time: Scalars['Float'];
};

export type DrtTrialResponseSumAggregate = {
  __typename?: 'DrtTrialResponseSumAggregate';
  id: Scalars['Int'];
  participant_id: Scalars['Int'];
  question: Scalars['Int'];
  answer: Scalars['Int'];
  time: Scalars['Int'];
};

export type DrtTrialResponseMinAggregate = {
  __typename?: 'DrtTrialResponseMinAggregate';
  id: Scalars['Int'];
  participant_id: Scalars['Int'];
  question: Scalars['Int'];
  target?: Maybe<Scalars['String']>;
  answer: Scalars['Int'];
  response_1?: Maybe<Scalars['String']>;
  response_2?: Maybe<Scalars['String']>;
  response_3?: Maybe<Scalars['String']>;
  response_4?: Maybe<Scalars['String']>;
  time: Scalars['Int'];
  correct?: Maybe<Scalars['Boolean']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type DrtTrialResponseMaxAggregate = {
  __typename?: 'DrtTrialResponseMaxAggregate';
  id: Scalars['Int'];
  participant_id: Scalars['Int'];
  question: Scalars['Int'];
  target?: Maybe<Scalars['String']>;
  answer: Scalars['Int'];
  response_1?: Maybe<Scalars['String']>;
  response_2?: Maybe<Scalars['String']>;
  response_3?: Maybe<Scalars['String']>;
  response_4?: Maybe<Scalars['String']>;
  time: Scalars['Int'];
  correct?: Maybe<Scalars['Boolean']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type SpatialActivity = {
  __typename?: 'SpatialActivity';
  id: Scalars['Int'];
  answers: Array<Scalars['String']>;
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
};

export type SpatialActivityWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type SpatialActivityWhereInput = {
  AND?: Maybe<Array<SpatialActivityWhereInput>>;
  OR?: Maybe<Array<SpatialActivityWhereInput>>;
  NOT?: Maybe<Array<SpatialActivityWhereInput>>;
  id?: Maybe<IntFilter>;
  answers?: Maybe<StringNullableListFilter>;
  created_at?: Maybe<DateTimeFilter>;
  updated_at?: Maybe<DateTimeFilter>;
};

export type StringNullableListFilter = {
  equals?: Maybe<Array<Scalars['String']>>;
  has?: Maybe<Scalars['String']>;
  hasEvery?: Maybe<Array<Scalars['String']>>;
  hasSome?: Maybe<Array<Scalars['String']>>;
  isEmpty?: Maybe<Scalars['Boolean']>;
};

export type SpatialActivityOrderByInput = {
  id?: Maybe<SortOrder>;
  answers?: Maybe<SortOrder>;
  created_at?: Maybe<SortOrder>;
  updated_at?: Maybe<SortOrder>;
};

export enum SpatialActivityScalarFieldEnum {
  Id = 'id',
  Answers = 'answers',
  CreatedAt = 'created_at',
  UpdatedAt = 'updated_at'
}

export type AggregateSpatialActivity = {
  __typename?: 'AggregateSpatialActivity';
  count?: Maybe<SpatialActivityCountAggregate>;
  avg?: Maybe<SpatialActivityAvgAggregate>;
  sum?: Maybe<SpatialActivitySumAggregate>;
  min?: Maybe<SpatialActivityMinAggregate>;
  max?: Maybe<SpatialActivityMaxAggregate>;
};

export type SpatialActivityCountAggregate = {
  __typename?: 'SpatialActivityCountAggregate';
  id: Scalars['Int'];
  answers?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['Int']>;
  _all: Scalars['Int'];
};

export type SpatialActivityAvgAggregate = {
  __typename?: 'SpatialActivityAvgAggregate';
  id: Scalars['Float'];
};

export type SpatialActivitySumAggregate = {
  __typename?: 'SpatialActivitySumAggregate';
  id: Scalars['Int'];
};

export type SpatialActivityMinAggregate = {
  __typename?: 'SpatialActivityMinAggregate';
  id: Scalars['Int'];
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type SpatialActivityMaxAggregate = {
  __typename?: 'SpatialActivityMaxAggregate';
  id: Scalars['Int'];
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['Int'];
  email: Scalars['String'];
  username: Scalars['String'];
  role: Role;
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
};

export enum Role {
  User = 'USER',
  Admin = 'ADMIN'
}

export type UserWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

export type UserWhereInput = {
  AND?: Maybe<Array<UserWhereInput>>;
  OR?: Maybe<Array<UserWhereInput>>;
  NOT?: Maybe<Array<UserWhereInput>>;
  id?: Maybe<IntFilter>;
  email?: Maybe<StringFilter>;
  username?: Maybe<StringFilter>;
  role?: Maybe<EnumRoleFilter>;
  password?: Maybe<StringFilter>;
  created_at?: Maybe<DateTimeFilter>;
  updated_at?: Maybe<DateTimeFilter>;
};

export type EnumRoleFilter = {
  equals?: Maybe<Role>;
  in?: Maybe<Array<Role>>;
  notIn?: Maybe<Array<Role>>;
  not?: Maybe<NestedEnumRoleFilter>;
};

export type NestedEnumRoleFilter = {
  equals?: Maybe<Role>;
  in?: Maybe<Array<Role>>;
  notIn?: Maybe<Array<Role>>;
  not?: Maybe<NestedEnumRoleFilter>;
};

export type UserOrderByInput = {
  id?: Maybe<SortOrder>;
  email?: Maybe<SortOrder>;
  username?: Maybe<SortOrder>;
  role?: Maybe<SortOrder>;
  password?: Maybe<SortOrder>;
  created_at?: Maybe<SortOrder>;
  updated_at?: Maybe<SortOrder>;
};

export enum UserScalarFieldEnum {
  Id = 'id',
  Email = 'email',
  Username = 'username',
  Role = 'role',
  Password = 'password',
  CreatedAt = 'created_at',
  UpdatedAt = 'updated_at'
}

export type AggregateUser = {
  __typename?: 'AggregateUser';
  count?: Maybe<UserCountAggregate>;
  avg?: Maybe<UserAvgAggregate>;
  sum?: Maybe<UserSumAggregate>;
  min?: Maybe<UserMinAggregate>;
  max?: Maybe<UserMaxAggregate>;
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  id: Scalars['Int'];
  email?: Maybe<Scalars['Int']>;
  username?: Maybe<Scalars['Int']>;
  role?: Maybe<Scalars['Int']>;
  password?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['Int']>;
  _all: Scalars['Int'];
};

export type UserAvgAggregate = {
  __typename?: 'UserAvgAggregate';
  id: Scalars['Float'];
};

export type UserSumAggregate = {
  __typename?: 'UserSumAggregate';
  id: Scalars['Int'];
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  id: Scalars['Int'];
  email?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  role?: Maybe<Role>;
  password?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  id: Scalars['Int'];
  email?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  role?: Maybe<Role>;
  password?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createDrawing: Drawing;
  deleteDrawing?: Maybe<Drawing>;
  updateDrawing?: Maybe<Drawing>;
  deleteManyDrawing: AffectedRowsOutput;
  updateManyDrawing: AffectedRowsOutput;
  upsertDrawing: Drawing;
  createDrtTrialResponse: DrtTrialResponse;
  deleteDrtTrialResponse?: Maybe<DrtTrialResponse>;
  updateDrtTrialResponse?: Maybe<DrtTrialResponse>;
  deleteManyDrtTrialResponse: AffectedRowsOutput;
  updateManyDrtTrialResponse: AffectedRowsOutput;
  upsertDrtTrialResponse: DrtTrialResponse;
  createSpatialActivity: SpatialActivity;
  deleteSpatialActivity?: Maybe<SpatialActivity>;
  updateSpatialActivity?: Maybe<SpatialActivity>;
  deleteManySpatialActivity: AffectedRowsOutput;
  updateManySpatialActivity: AffectedRowsOutput;
  upsertSpatialActivity: SpatialActivity;
  createUser: User;
  deleteUser?: Maybe<User>;
  updateUser?: Maybe<User>;
  deleteManyUser: AffectedRowsOutput;
  updateManyUser: AffectedRowsOutput;
  upsertUser: User;
  postDrawing: DrawingResponse;
  postTrial: TrialResponse;
  postSpatial: Scalars['Boolean'];
  register: UserResponse;
  login: UserResponse;
  logout: Scalars['Boolean'];
  setRole: UserResponse;
};


export type MutationCreateDrawingArgs = {
  data: DrawingCreateInput;
};


export type MutationDeleteDrawingArgs = {
  where: DrawingWhereUniqueInput;
};


export type MutationUpdateDrawingArgs = {
  data: DrawingUpdateInput;
  where: DrawingWhereUniqueInput;
};


export type MutationDeleteManyDrawingArgs = {
  where?: Maybe<DrawingWhereInput>;
};


export type MutationUpdateManyDrawingArgs = {
  data: DrawingUpdateManyMutationInput;
  where?: Maybe<DrawingWhereInput>;
};


export type MutationUpsertDrawingArgs = {
  where: DrawingWhereUniqueInput;
  create: DrawingCreateInput;
  update: DrawingUpdateInput;
};


export type MutationCreateDrtTrialResponseArgs = {
  data: DrtTrialResponseCreateInput;
};


export type MutationDeleteDrtTrialResponseArgs = {
  where: DrtTrialResponseWhereUniqueInput;
};


export type MutationUpdateDrtTrialResponseArgs = {
  data: DrtTrialResponseUpdateInput;
  where: DrtTrialResponseWhereUniqueInput;
};


export type MutationDeleteManyDrtTrialResponseArgs = {
  where?: Maybe<DrtTrialResponseWhereInput>;
};


export type MutationUpdateManyDrtTrialResponseArgs = {
  data: DrtTrialResponseUpdateManyMutationInput;
  where?: Maybe<DrtTrialResponseWhereInput>;
};


export type MutationUpsertDrtTrialResponseArgs = {
  where: DrtTrialResponseWhereUniqueInput;
  create: DrtTrialResponseCreateInput;
  update: DrtTrialResponseUpdateInput;
};


export type MutationCreateSpatialActivityArgs = {
  data: SpatialActivityCreateInput;
};


export type MutationDeleteSpatialActivityArgs = {
  where: SpatialActivityWhereUniqueInput;
};


export type MutationUpdateSpatialActivityArgs = {
  data: SpatialActivityUpdateInput;
  where: SpatialActivityWhereUniqueInput;
};


export type MutationDeleteManySpatialActivityArgs = {
  where?: Maybe<SpatialActivityWhereInput>;
};


export type MutationUpdateManySpatialActivityArgs = {
  data: SpatialActivityUpdateManyMutationInput;
  where?: Maybe<SpatialActivityWhereInput>;
};


export type MutationUpsertSpatialActivityArgs = {
  where: SpatialActivityWhereUniqueInput;
  create: SpatialActivityCreateInput;
  update: SpatialActivityUpdateInput;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationDeleteManyUserArgs = {
  where?: Maybe<UserWhereInput>;
};


export type MutationUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput;
  where?: Maybe<UserWhereInput>;
};


export type MutationUpsertUserArgs = {
  where: UserWhereUniqueInput;
  create: UserCreateInput;
  update: UserUpdateInput;
};


export type MutationPostDrawingArgs = {
  image: Scalars['Upload'];
  prompt: Scalars['String'];
};


export type MutationPostTrialArgs = {
  data: TrialInput;
};


export type MutationPostSpatialArgs = {
  answers: Array<Scalars['String']>;
};


export type MutationRegisterArgs = {
  input: RegisterInput;
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationSetRoleArgs = {
  input: RoleInput;
};

export type DrawingCreateInput = {
  prompt: Scalars['String'];
  image: Scalars['Byte'];
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type DrawingUpdateInput = {
  prompt?: Maybe<StringFieldUpdateOperationsInput>;
  image?: Maybe<BytesFieldUpdateOperationsInput>;
  created_at?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type StringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type BytesFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['Byte']>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['DateTime']>;
};

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int'];
};

export type DrawingUpdateManyMutationInput = {
  prompt?: Maybe<StringFieldUpdateOperationsInput>;
  image?: Maybe<BytesFieldUpdateOperationsInput>;
  created_at?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type DrtTrialResponseCreateInput = {
  participant_id: Scalars['Int'];
  question: Scalars['Int'];
  target: Scalars['String'];
  answer: Scalars['Int'];
  response_1: Scalars['String'];
  response_2: Scalars['String'];
  response_3: Scalars['String'];
  response_4: Scalars['String'];
  time: Scalars['Int'];
  correct: Scalars['Boolean'];
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type DrtTrialResponseUpdateInput = {
  participant_id?: Maybe<IntFieldUpdateOperationsInput>;
  question?: Maybe<IntFieldUpdateOperationsInput>;
  target?: Maybe<StringFieldUpdateOperationsInput>;
  answer?: Maybe<IntFieldUpdateOperationsInput>;
  response_1?: Maybe<StringFieldUpdateOperationsInput>;
  response_2?: Maybe<StringFieldUpdateOperationsInput>;
  response_3?: Maybe<StringFieldUpdateOperationsInput>;
  response_4?: Maybe<StringFieldUpdateOperationsInput>;
  time?: Maybe<IntFieldUpdateOperationsInput>;
  correct?: Maybe<BoolFieldUpdateOperationsInput>;
  created_at?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type IntFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['Int']>;
  increment?: Maybe<Scalars['Int']>;
  decrement?: Maybe<Scalars['Int']>;
  multiply?: Maybe<Scalars['Int']>;
  divide?: Maybe<Scalars['Int']>;
};

export type BoolFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['Boolean']>;
};

export type DrtTrialResponseUpdateManyMutationInput = {
  participant_id?: Maybe<IntFieldUpdateOperationsInput>;
  question?: Maybe<IntFieldUpdateOperationsInput>;
  target?: Maybe<StringFieldUpdateOperationsInput>;
  answer?: Maybe<IntFieldUpdateOperationsInput>;
  response_1?: Maybe<StringFieldUpdateOperationsInput>;
  response_2?: Maybe<StringFieldUpdateOperationsInput>;
  response_3?: Maybe<StringFieldUpdateOperationsInput>;
  response_4?: Maybe<StringFieldUpdateOperationsInput>;
  time?: Maybe<IntFieldUpdateOperationsInput>;
  correct?: Maybe<BoolFieldUpdateOperationsInput>;
  created_at?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type SpatialActivityCreateInput = {
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  answers?: Maybe<SpatialActivityCreateanswersInput>;
};

export type SpatialActivityCreateanswersInput = {
  set: Array<Scalars['String']>;
};

export type SpatialActivityUpdateInput = {
  created_at?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<DateTimeFieldUpdateOperationsInput>;
  answers?: Maybe<SpatialActivityUpdateanswersInput>;
};

export type SpatialActivityUpdateanswersInput = {
  set: Array<Scalars['String']>;
};

export type SpatialActivityUpdateManyMutationInput = {
  created_at?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<DateTimeFieldUpdateOperationsInput>;
  answers?: Maybe<SpatialActivityUpdateanswersInput>;
};

export type UserCreateInput = {
  email: Scalars['String'];
  username: Scalars['String'];
  role?: Maybe<Role>;
  password: Scalars['String'];
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type UserUpdateInput = {
  email?: Maybe<StringFieldUpdateOperationsInput>;
  username?: Maybe<StringFieldUpdateOperationsInput>;
  role?: Maybe<EnumRoleFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  created_at?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type EnumRoleFieldUpdateOperationsInput = {
  set?: Maybe<Role>;
};

export type UserUpdateManyMutationInput = {
  email?: Maybe<StringFieldUpdateOperationsInput>;
  username?: Maybe<StringFieldUpdateOperationsInput>;
  role?: Maybe<EnumRoleFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  created_at?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type DrawingResponse = {
  __typename?: 'DrawingResponse';
  errors?: Maybe<Array<DrawingError>>;
  success?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
};

export type DrawingError = {
  __typename?: 'DrawingError';
  error: Scalars['String'];
  message: Scalars['String'];
};


export type TrialResponse = {
  __typename?: 'TrialResponse';
  errors?: Maybe<Array<TrialError>>;
  success?: Maybe<Scalars['Boolean']>;
};

export type TrialError = {
  __typename?: 'TrialError';
  error: Scalars['String'];
  message: Scalars['String'];
};

export type TrialInput = {
  answer: Scalars['Float'];
  correct: Scalars['Boolean'];
  time: Scalars['Float'];
  questionId: Scalars['Float'];
  participantId: Scalars['Float'];
  target: Scalars['String'];
  response_1: Scalars['String'];
  response_2: Scalars['String'];
  response_3: Scalars['String'];
  response_4: Scalars['String'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<User>;
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type RegisterInput = {
  email: Scalars['String'];
  username: Scalars['String'];
  password: Scalars['String'];
};

export type LoginInput = {
  usernameOrEmail: Scalars['String'];
  password: Scalars['String'];
};

export type RoleInput = {
  email: Scalars['String'];
  role: RoleEnum;
};

/** User Role */
export enum RoleEnum {
  User = 'USER',
  Admin = 'ADMIN'
}

export type PostSpatialMutationVariables = Exact<{
  answers: Array<Scalars['String']> | Scalars['String'];
}>;


export type PostSpatialMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'postSpatial'>
);

export type DrtsQueryVariables = Exact<{
  cursor?: Maybe<DrtTrialResponseWhereUniqueInput>;
  limit: Scalars['Int'];
}>;


export type DrtsQuery = (
  { __typename?: 'Query' }
  & { drtTrialResponses: Array<(
    { __typename?: 'DrtTrialResponse' }
    & Pick<DrtTrialResponse, 'id' | 'participant_id' | 'question' | 'target' | 'answer' | 'response_1' | 'response_2' | 'response_3' | 'response_4' | 'time' | 'correct' | 'created_at' | 'updated_at'>
  )> }
);

export type PostTrialMutationVariables = Exact<{
  data: TrialInput;
}>;


export type PostTrialMutation = (
  { __typename?: 'Mutation' }
  & { postTrial: (
    { __typename?: 'TrialResponse' }
    & Pick<TrialResponse, 'success'>
    & { errors?: Maybe<Array<(
      { __typename?: 'TrialError' }
      & Pick<TrialError, 'error' | 'message'>
    )>> }
  ) }
);

export type FindUserByIdQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type FindUserByIdQuery = (
  { __typename?: 'Query' }
  & { findFirstUser?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username' | 'email' | 'role' | 'created_at' | 'updated_at'>
  )> }
);

export type LoginMutationVariables = Exact<{
  input: LoginInput;
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'UserResponse' }
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'email' | 'username' | 'role'>
    )>, errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'field' | 'message'>
    )>> }
  ) }
);

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'email' | 'username' | 'role'>
  )> }
);

export type RegisterMutationVariables = Exact<{
  input: RegisterInput;
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { register: (
    { __typename?: 'UserResponse' }
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'email' | 'username' | 'role'>
    )>, errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'field' | 'message'>
    )>> }
  ) }
);

export type SetRoleMutationVariables = Exact<{
  input: RoleInput;
}>;


export type SetRoleMutation = (
  { __typename?: 'Mutation' }
  & { setRole: (
    { __typename?: 'UserResponse' }
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'email' | 'username' | 'role'>
    )>, errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'field' | 'message'>
    )>> }
  ) }
);

export type UpdateUserRoleMutationVariables = Exact<{
  id: Scalars['Int'];
  role?: Maybe<Role>;
}>;


export type UpdateUserRoleMutation = (
  { __typename?: 'Mutation' }
  & { updateUser?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'role'>
  )> }
);

export type UsersQueryVariables = Exact<{
  cursor?: Maybe<UserWhereUniqueInput>;
  limit: Scalars['Int'];
}>;


export type UsersQuery = (
  { __typename?: 'Query' }
  & { users: Array<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'email' | 'username' | 'role' | 'created_at' | 'updated_at'>
  )> }
);


export const PostSpatialDocument = `
    mutation postSpatial($answers: [String!]!) {
  postSpatial(answers: $answers)
}
    `;
export const usePostSpatialMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient, 
      options?: UseMutationOptions<PostSpatialMutation, TError, PostSpatialMutationVariables, TContext>
    ) => 
    useMutation<PostSpatialMutation, TError, PostSpatialMutationVariables, TContext>(
      (variables?: PostSpatialMutationVariables) => fetcher<PostSpatialMutation, PostSpatialMutationVariables>(client, PostSpatialDocument, variables)(),
      options
    );
export const DrtsDocument = `
    query Drts($cursor: DrtTrialResponseWhereUniqueInput, $limit: Int!) {
  drtTrialResponses(orderBy: {id: asc}, take: $limit, cursor: $cursor) {
    id
    participant_id
    question
    target
    answer
    response_1
    response_2
    response_3
    response_4
    time
    correct
    created_at
    updated_at
  }
}
    `;
export const useDrtsQuery = <
      TData = DrtsQuery,
      TError = unknown
    >(
      client: GraphQLClient, 
      variables: DrtsQueryVariables, 
      options?: UseQueryOptions<DrtsQuery, TError, TData>
    ) => 
    useQuery<DrtsQuery, TError, TData>(
      ['Drts', variables],
      fetcher<DrtsQuery, DrtsQueryVariables>(client, DrtsDocument, variables),
      options
    );
export const PostTrialDocument = `
    mutation postTrial($data: TrialInput!) {
  postTrial(data: $data) {
    success
    errors {
      error
      message
    }
  }
}
    `;
export const usePostTrialMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient, 
      options?: UseMutationOptions<PostTrialMutation, TError, PostTrialMutationVariables, TContext>
    ) => 
    useMutation<PostTrialMutation, TError, PostTrialMutationVariables, TContext>(
      (variables?: PostTrialMutationVariables) => fetcher<PostTrialMutation, PostTrialMutationVariables>(client, PostTrialDocument, variables)(),
      options
    );
export const FindUserByIdDocument = `
    query FindUserById($id: Int!) {
  findFirstUser(where: {id: {equals: $id}}) {
    id
    username
    email
    role
    created_at
    updated_at
  }
}
    `;
export const useFindUserByIdQuery = <
      TData = FindUserByIdQuery,
      TError = unknown
    >(
      client: GraphQLClient, 
      variables: FindUserByIdQueryVariables, 
      options?: UseQueryOptions<FindUserByIdQuery, TError, TData>
    ) => 
    useQuery<FindUserByIdQuery, TError, TData>(
      ['FindUserById', variables],
      fetcher<FindUserByIdQuery, FindUserByIdQueryVariables>(client, FindUserByIdDocument, variables),
      options
    );
export const LoginDocument = `
    mutation Login($input: LoginInput!) {
  login(input: $input) {
    user {
      id
      email
      username
      role
    }
    errors {
      field
      message
    }
  }
}
    `;
export const useLoginMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient, 
      options?: UseMutationOptions<LoginMutation, TError, LoginMutationVariables, TContext>
    ) => 
    useMutation<LoginMutation, TError, LoginMutationVariables, TContext>(
      (variables?: LoginMutationVariables) => fetcher<LoginMutation, LoginMutationVariables>(client, LoginDocument, variables)(),
      options
    );
export const LogoutDocument = `
    mutation Logout {
  logout
}
    `;
export const useLogoutMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient, 
      options?: UseMutationOptions<LogoutMutation, TError, LogoutMutationVariables, TContext>
    ) => 
    useMutation<LogoutMutation, TError, LogoutMutationVariables, TContext>(
      (variables?: LogoutMutationVariables) => fetcher<LogoutMutation, LogoutMutationVariables>(client, LogoutDocument, variables)(),
      options
    );
export const MeDocument = `
    query Me {
  me {
    id
    email
    username
    role
  }
}
    `;
export const useMeQuery = <
      TData = MeQuery,
      TError = unknown
    >(
      client: GraphQLClient, 
      variables?: MeQueryVariables, 
      options?: UseQueryOptions<MeQuery, TError, TData>
    ) => 
    useQuery<MeQuery, TError, TData>(
      ['Me', variables],
      fetcher<MeQuery, MeQueryVariables>(client, MeDocument, variables),
      options
    );
export const RegisterDocument = `
    mutation Register($input: RegisterInput!) {
  register(input: $input) {
    user {
      id
      email
      username
      role
    }
    errors {
      field
      message
    }
  }
}
    `;
export const useRegisterMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient, 
      options?: UseMutationOptions<RegisterMutation, TError, RegisterMutationVariables, TContext>
    ) => 
    useMutation<RegisterMutation, TError, RegisterMutationVariables, TContext>(
      (variables?: RegisterMutationVariables) => fetcher<RegisterMutation, RegisterMutationVariables>(client, RegisterDocument, variables)(),
      options
    );
export const SetRoleDocument = `
    mutation setRole($input: RoleInput!) {
  setRole(input: $input) {
    user {
      id
      email
      username
      role
    }
    errors {
      field
      message
    }
  }
}
    `;
export const useSetRoleMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient, 
      options?: UseMutationOptions<SetRoleMutation, TError, SetRoleMutationVariables, TContext>
    ) => 
    useMutation<SetRoleMutation, TError, SetRoleMutationVariables, TContext>(
      (variables?: SetRoleMutationVariables) => fetcher<SetRoleMutation, SetRoleMutationVariables>(client, SetRoleDocument, variables)(),
      options
    );
export const UpdateUserRoleDocument = `
    mutation updateUserRole($id: Int!, $role: Role) {
  updateUser(where: {id: $id}, data: {role: {set: $role}}) {
    id
    role
  }
}
    `;
export const useUpdateUserRoleMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient, 
      options?: UseMutationOptions<UpdateUserRoleMutation, TError, UpdateUserRoleMutationVariables, TContext>
    ) => 
    useMutation<UpdateUserRoleMutation, TError, UpdateUserRoleMutationVariables, TContext>(
      (variables?: UpdateUserRoleMutationVariables) => fetcher<UpdateUserRoleMutation, UpdateUserRoleMutationVariables>(client, UpdateUserRoleDocument, variables)(),
      options
    );
export const UsersDocument = `
    query Users($cursor: UserWhereUniqueInput, $limit: Int!) {
  users(orderBy: {id: asc}, take: $limit, cursor: $cursor) {
    id
    email
    username
    role
    created_at
    updated_at
  }
}
    `;
export const useUsersQuery = <
      TData = UsersQuery,
      TError = unknown
    >(
      client: GraphQLClient, 
      variables: UsersQueryVariables, 
      options?: UseQueryOptions<UsersQuery, TError, TData>
    ) => 
    useQuery<UsersQuery, TError, TData>(
      ['Users', variables],
      fetcher<UsersQuery, UsersQueryVariables>(client, UsersDocument, variables),
      options
    );