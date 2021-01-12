import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type Query = {
  __typename?: 'Query';
  experiment?: Maybe<Experiment>;
  findFirstExperiment?: Maybe<Experiment>;
  experiments: Array<Experiment>;
  aggregateExperiment: AggregateExperiment;
  response?: Maybe<Response>;
  findFirstResponse?: Maybe<Response>;
  responses: Array<Response>;
  aggregateResponse: AggregateResponse;
  user?: Maybe<User>;
  findFirstUser?: Maybe<User>;
  users: Array<User>;
  aggregateUser: AggregateUser;
};


export type QueryExperimentArgs = {
  where: ExperimentWhereUniqueInput;
};


export type QueryFindFirstExperimentArgs = {
  where?: Maybe<ExperimentWhereInput>;
  orderBy?: Maybe<Array<ExperimentOrderByInput>>;
  cursor?: Maybe<ExperimentWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<ExperimentScalarFieldEnum>>;
};


export type QueryExperimentsArgs = {
  where?: Maybe<ExperimentWhereInput>;
  orderBy?: Maybe<Array<ExperimentOrderByInput>>;
  cursor?: Maybe<ExperimentWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<ExperimentScalarFieldEnum>>;
};


export type QueryAggregateExperimentArgs = {
  where?: Maybe<ExperimentWhereInput>;
  orderBy?: Maybe<Array<ExperimentOrderByInput>>;
  cursor?: Maybe<ExperimentWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryResponseArgs = {
  where: ResponseWhereUniqueInput;
};


export type QueryFindFirstResponseArgs = {
  where?: Maybe<ResponseWhereInput>;
  orderBy?: Maybe<Array<ResponseOrderByInput>>;
  cursor?: Maybe<ResponseWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<ResponseScalarFieldEnum>>;
};


export type QueryResponsesArgs = {
  where?: Maybe<ResponseWhereInput>;
  orderBy?: Maybe<Array<ResponseOrderByInput>>;
  cursor?: Maybe<ResponseWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<ResponseScalarFieldEnum>>;
};


export type QueryAggregateResponseArgs = {
  where?: Maybe<ResponseWhereInput>;
  orderBy?: Maybe<Array<ResponseOrderByInput>>;
  cursor?: Maybe<ResponseWhereUniqueInput>;
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

export type Experiment = {
  __typename?: 'Experiment';
  id: Scalars['Int'];
  name: Scalars['String'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  responses?: Maybe<Array<Response>>;
};


export type ExperimentResponsesArgs = {
  where?: Maybe<ResponseWhereInput>;
  orderBy?: Maybe<Array<ResponseOrderByInput>>;
  cursor?: Maybe<ResponseWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<ResponseScalarFieldEnum>>;
};


export type Response = {
  __typename?: 'Response';
  id: Scalars['Int'];
  userId?: Maybe<Scalars['Int']>;
  experimentId: Scalars['Int'];
  responses?: Maybe<Array<Scalars['JSON']>>;
  created_at: Scalars['DateTime'];
  user?: Maybe<User>;
  experiment: Experiment;
};


export type User = {
  __typename?: 'User';
  id: Scalars['Int'];
  email: Scalars['String'];
  username: Scalars['String'];
  responses?: Maybe<Array<Response>>;
};


export type UserResponsesArgs = {
  where?: Maybe<ResponseWhereInput>;
  orderBy?: Maybe<Array<ResponseOrderByInput>>;
  cursor?: Maybe<ResponseWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<ResponseScalarFieldEnum>>;
};

export type ResponseWhereInput = {
  AND?: Maybe<Array<ResponseWhereInput>>;
  OR?: Maybe<Array<ResponseWhereInput>>;
  NOT?: Maybe<Array<ResponseWhereInput>>;
  id?: Maybe<IntFilter>;
  userId?: Maybe<IntNullableFilter>;
  user?: Maybe<UserRelationFilter>;
  experimentId?: Maybe<IntFilter>;
  experiment?: Maybe<ExperimentRelationFilter>;
  responses?: Maybe<JsonNullableListFilter>;
  created_at?: Maybe<DateTimeFilter>;
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

export type IntNullableFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableFilter>;
};

export type NestedIntNullableFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableFilter>;
};

export type UserRelationFilter = {
  is?: Maybe<UserWhereInput>;
  isNot?: Maybe<UserWhereInput>;
};

export type UserWhereInput = {
  AND?: Maybe<Array<UserWhereInput>>;
  OR?: Maybe<Array<UserWhereInput>>;
  NOT?: Maybe<Array<UserWhereInput>>;
  id?: Maybe<IntFilter>;
  email?: Maybe<StringFilter>;
  username?: Maybe<StringFilter>;
  password?: Maybe<StringFilter>;
  responses?: Maybe<ResponseListRelationFilter>;
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

export type ResponseListRelationFilter = {
  every?: Maybe<ResponseWhereInput>;
  some?: Maybe<ResponseWhereInput>;
  none?: Maybe<ResponseWhereInput>;
};

export type ExperimentRelationFilter = {
  is?: Maybe<ExperimentWhereInput>;
  isNot?: Maybe<ExperimentWhereInput>;
};

export type ExperimentWhereInput = {
  AND?: Maybe<Array<ExperimentWhereInput>>;
  OR?: Maybe<Array<ExperimentWhereInput>>;
  NOT?: Maybe<Array<ExperimentWhereInput>>;
  id?: Maybe<IntFilter>;
  name?: Maybe<StringFilter>;
  responses?: Maybe<ResponseListRelationFilter>;
  created_at?: Maybe<DateTimeFilter>;
  updated_at?: Maybe<DateTimeFilter>;
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

export type JsonNullableListFilter = {
  equals?: Maybe<Array<Scalars['JSON']>>;
};

export type ResponseOrderByInput = {
  id?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
  experimentId?: Maybe<SortOrder>;
  responses?: Maybe<SortOrder>;
  created_at?: Maybe<SortOrder>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type ResponseWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export enum ResponseScalarFieldEnum {
  Id = 'id',
  UserId = 'userId',
  ExperimentId = 'experimentId',
  Responses = 'responses',
  CreatedAt = 'created_at'
}

export type ExperimentWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type ExperimentOrderByInput = {
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  created_at?: Maybe<SortOrder>;
  updated_at?: Maybe<SortOrder>;
};

export enum ExperimentScalarFieldEnum {
  Id = 'id',
  Name = 'name',
  CreatedAt = 'created_at',
  UpdatedAt = 'updated_at'
}

export type AggregateExperiment = {
  __typename?: 'AggregateExperiment';
  count?: Maybe<Scalars['Int']>;
  avg?: Maybe<ExperimentAvgAggregate>;
  sum?: Maybe<ExperimentSumAggregate>;
  min?: Maybe<ExperimentMinAggregate>;
  max?: Maybe<ExperimentMaxAggregate>;
};

export type ExperimentAvgAggregate = {
  __typename?: 'ExperimentAvgAggregate';
  id: Scalars['Float'];
};

export type ExperimentSumAggregate = {
  __typename?: 'ExperimentSumAggregate';
  id: Scalars['Int'];
};

export type ExperimentMinAggregate = {
  __typename?: 'ExperimentMinAggregate';
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type ExperimentMaxAggregate = {
  __typename?: 'ExperimentMaxAggregate';
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type AggregateResponse = {
  __typename?: 'AggregateResponse';
  count?: Maybe<Scalars['Int']>;
  avg?: Maybe<ResponseAvgAggregate>;
  sum?: Maybe<ResponseSumAggregate>;
  min?: Maybe<ResponseMinAggregate>;
  max?: Maybe<ResponseMaxAggregate>;
};

export type ResponseAvgAggregate = {
  __typename?: 'ResponseAvgAggregate';
  id: Scalars['Float'];
  userId?: Maybe<Scalars['Float']>;
  experimentId: Scalars['Float'];
};

export type ResponseSumAggregate = {
  __typename?: 'ResponseSumAggregate';
  id: Scalars['Int'];
  userId?: Maybe<Scalars['Int']>;
  experimentId: Scalars['Int'];
};

export type ResponseMinAggregate = {
  __typename?: 'ResponseMinAggregate';
  id: Scalars['Int'];
  userId?: Maybe<Scalars['Int']>;
  experimentId: Scalars['Int'];
  created_at?: Maybe<Scalars['DateTime']>;
};

export type ResponseMaxAggregate = {
  __typename?: 'ResponseMaxAggregate';
  id: Scalars['Int'];
  userId?: Maybe<Scalars['Int']>;
  experimentId: Scalars['Int'];
  created_at?: Maybe<Scalars['DateTime']>;
};

export type UserWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
};

export type UserOrderByInput = {
  id?: Maybe<SortOrder>;
  email?: Maybe<SortOrder>;
  username?: Maybe<SortOrder>;
  password?: Maybe<SortOrder>;
};

export enum UserScalarFieldEnum {
  Id = 'id',
  Email = 'email',
  Username = 'username',
  Password = 'password'
}

export type AggregateUser = {
  __typename?: 'AggregateUser';
  count?: Maybe<Scalars['Int']>;
  avg?: Maybe<UserAvgAggregate>;
  sum?: Maybe<UserSumAggregate>;
  min?: Maybe<UserMinAggregate>;
  max?: Maybe<UserMaxAggregate>;
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
  password?: Maybe<Scalars['String']>;
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  id: Scalars['Int'];
  email?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createExperiment: Experiment;
  deleteExperiment?: Maybe<Experiment>;
  updateExperiment?: Maybe<Experiment>;
  deleteManyExperiment: BatchPayload;
  updateManyExperiment: BatchPayload;
  upsertExperiment: Experiment;
  createResponse: Response;
  deleteResponse?: Maybe<Response>;
  updateResponse?: Maybe<Response>;
  deleteManyResponse: BatchPayload;
  updateManyResponse: BatchPayload;
  upsertResponse: Response;
  createUser: User;
  deleteUser?: Maybe<User>;
  updateUser?: Maybe<User>;
  deleteManyUser: BatchPayload;
  updateManyUser: BatchPayload;
  upsertUser: User;
};


export type MutationCreateExperimentArgs = {
  data: ExperimentCreateInput;
};


export type MutationDeleteExperimentArgs = {
  where: ExperimentWhereUniqueInput;
};


export type MutationUpdateExperimentArgs = {
  data: ExperimentUpdateInput;
  where: ExperimentWhereUniqueInput;
};


export type MutationDeleteManyExperimentArgs = {
  where?: Maybe<ExperimentWhereInput>;
};


export type MutationUpdateManyExperimentArgs = {
  data: ExperimentUpdateManyMutationInput;
  where?: Maybe<ExperimentWhereInput>;
};


export type MutationUpsertExperimentArgs = {
  where: ExperimentWhereUniqueInput;
  create: ExperimentCreateInput;
  update: ExperimentUpdateInput;
};


export type MutationCreateResponseArgs = {
  data: ResponseCreateInput;
};


export type MutationDeleteResponseArgs = {
  where: ResponseWhereUniqueInput;
};


export type MutationUpdateResponseArgs = {
  data: ResponseUpdateInput;
  where: ResponseWhereUniqueInput;
};


export type MutationDeleteManyResponseArgs = {
  where?: Maybe<ResponseWhereInput>;
};


export type MutationUpdateManyResponseArgs = {
  data: ResponseUpdateManyMutationInput;
  where?: Maybe<ResponseWhereInput>;
};


export type MutationUpsertResponseArgs = {
  where: ResponseWhereUniqueInput;
  create: ResponseCreateInput;
  update: ResponseUpdateInput;
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

export type ExperimentCreateInput = {
  name: Scalars['String'];
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  responses?: Maybe<ResponseCreateManyWithoutExperimentInput>;
};

export type ResponseCreateManyWithoutExperimentInput = {
  create?: Maybe<Array<ResponseCreateWithoutExperimentInput>>;
  connect?: Maybe<Array<ResponseWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ResponseCreateOrConnectWithoutexperimentInput>>;
};

export type ResponseCreateWithoutExperimentInput = {
  created_at?: Maybe<Scalars['DateTime']>;
  responses?: Maybe<ResponseCreateresponsesInput>;
  user?: Maybe<UserCreateOneWithoutResponsesInput>;
};

export type ResponseCreateresponsesInput = {
  set: Array<Scalars['JSON']>;
};

export type UserCreateOneWithoutResponsesInput = {
  create?: Maybe<UserCreateWithoutResponsesInput>;
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutresponsesInput>;
};

export type UserCreateWithoutResponsesInput = {
  email: Scalars['String'];
  username: Scalars['String'];
  password: Scalars['String'];
};

export type UserCreateOrConnectWithoutresponsesInput = {
  where: UserWhereUniqueInput;
  create: UserCreateWithoutResponsesInput;
};

export type ResponseCreateOrConnectWithoutexperimentInput = {
  where: ResponseWhereUniqueInput;
  create: ResponseCreateWithoutExperimentInput;
};

export type ExperimentUpdateInput = {
  name?: Maybe<StringFieldUpdateOperationsInput>;
  created_at?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<DateTimeFieldUpdateOperationsInput>;
  responses?: Maybe<ResponseUpdateManyWithoutExperimentInput>;
};

export type StringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['DateTime']>;
};

export type ResponseUpdateManyWithoutExperimentInput = {
  create?: Maybe<Array<ResponseCreateWithoutExperimentInput>>;
  connect?: Maybe<Array<ResponseWhereUniqueInput>>;
  set?: Maybe<Array<ResponseWhereUniqueInput>>;
  disconnect?: Maybe<Array<ResponseWhereUniqueInput>>;
  delete?: Maybe<Array<ResponseWhereUniqueInput>>;
  update?: Maybe<Array<ResponseUpdateWithWhereUniqueWithoutExperimentInput>>;
  updateMany?: Maybe<Array<ResponseUpdateManyWithWhereWithoutExperimentInput>>;
  deleteMany?: Maybe<Array<ResponseScalarWhereInput>>;
  upsert?: Maybe<Array<ResponseUpsertWithWhereUniqueWithoutExperimentInput>>;
  connectOrCreate?: Maybe<Array<ResponseCreateOrConnectWithoutexperimentInput>>;
};

export type ResponseUpdateWithWhereUniqueWithoutExperimentInput = {
  where: ResponseWhereUniqueInput;
  data: ResponseUpdateWithoutExperimentInput;
};

export type ResponseUpdateWithoutExperimentInput = {
  created_at?: Maybe<DateTimeFieldUpdateOperationsInput>;
  responses?: Maybe<ResponseUpdateresponsesInput>;
  user?: Maybe<UserUpdateOneWithoutResponsesInput>;
};

export type ResponseUpdateresponsesInput = {
  set: Array<Scalars['JSON']>;
};

export type UserUpdateOneWithoutResponsesInput = {
  create?: Maybe<UserCreateWithoutResponsesInput>;
  connect?: Maybe<UserWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<UserUpdateWithoutResponsesInput>;
  upsert?: Maybe<UserUpsertWithoutResponsesInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutresponsesInput>;
};

export type UserUpdateWithoutResponsesInput = {
  email?: Maybe<StringFieldUpdateOperationsInput>;
  username?: Maybe<StringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
};

export type UserUpsertWithoutResponsesInput = {
  update: UserUpdateWithoutResponsesInput;
  create: UserCreateWithoutResponsesInput;
};

export type ResponseUpdateManyWithWhereWithoutExperimentInput = {
  where: ResponseScalarWhereInput;
  data: ResponseUpdateManyMutationInput;
};

export type ResponseScalarWhereInput = {
  AND?: Maybe<Array<ResponseScalarWhereInput>>;
  OR?: Maybe<Array<ResponseScalarWhereInput>>;
  NOT?: Maybe<Array<ResponseScalarWhereInput>>;
  id?: Maybe<IntFilter>;
  userId?: Maybe<IntNullableFilter>;
  experimentId?: Maybe<IntFilter>;
  responses?: Maybe<JsonNullableListFilter>;
  created_at?: Maybe<DateTimeFilter>;
};

export type ResponseUpdateManyMutationInput = {
  created_at?: Maybe<DateTimeFieldUpdateOperationsInput>;
  responses?: Maybe<ResponseUpdateresponsesInput>;
};

export type ResponseUpsertWithWhereUniqueWithoutExperimentInput = {
  where: ResponseWhereUniqueInput;
  update: ResponseUpdateWithoutExperimentInput;
  create: ResponseCreateWithoutExperimentInput;
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  count: Scalars['Int'];
};

export type ExperimentUpdateManyMutationInput = {
  name?: Maybe<StringFieldUpdateOperationsInput>;
  created_at?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ResponseCreateInput = {
  created_at?: Maybe<Scalars['DateTime']>;
  responses?: Maybe<ResponseCreateresponsesInput>;
  user?: Maybe<UserCreateOneWithoutResponsesInput>;
  experiment: ExperimentCreateOneWithoutResponsesInput;
};

export type ExperimentCreateOneWithoutResponsesInput = {
  create?: Maybe<ExperimentCreateWithoutResponsesInput>;
  connect?: Maybe<ExperimentWhereUniqueInput>;
  connectOrCreate?: Maybe<ExperimentCreateOrConnectWithoutresponsesInput>;
};

export type ExperimentCreateWithoutResponsesInput = {
  name: Scalars['String'];
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type ExperimentCreateOrConnectWithoutresponsesInput = {
  where: ExperimentWhereUniqueInput;
  create: ExperimentCreateWithoutResponsesInput;
};

export type ResponseUpdateInput = {
  created_at?: Maybe<DateTimeFieldUpdateOperationsInput>;
  responses?: Maybe<ResponseUpdateresponsesInput>;
  user?: Maybe<UserUpdateOneWithoutResponsesInput>;
  experiment?: Maybe<ExperimentUpdateOneRequiredWithoutResponsesInput>;
};

export type ExperimentUpdateOneRequiredWithoutResponsesInput = {
  create?: Maybe<ExperimentCreateWithoutResponsesInput>;
  connect?: Maybe<ExperimentWhereUniqueInput>;
  update?: Maybe<ExperimentUpdateWithoutResponsesInput>;
  upsert?: Maybe<ExperimentUpsertWithoutResponsesInput>;
  connectOrCreate?: Maybe<ExperimentCreateOrConnectWithoutresponsesInput>;
};

export type ExperimentUpdateWithoutResponsesInput = {
  name?: Maybe<StringFieldUpdateOperationsInput>;
  created_at?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ExperimentUpsertWithoutResponsesInput = {
  update: ExperimentUpdateWithoutResponsesInput;
  create: ExperimentCreateWithoutResponsesInput;
};

export type UserCreateInput = {
  email: Scalars['String'];
  username: Scalars['String'];
  password: Scalars['String'];
  responses?: Maybe<ResponseCreateManyWithoutUserInput>;
};

export type ResponseCreateManyWithoutUserInput = {
  create?: Maybe<Array<ResponseCreateWithoutUserInput>>;
  connect?: Maybe<Array<ResponseWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ResponseCreateOrConnectWithoutuserInput>>;
};

export type ResponseCreateWithoutUserInput = {
  created_at?: Maybe<Scalars['DateTime']>;
  responses?: Maybe<ResponseCreateresponsesInput>;
  experiment: ExperimentCreateOneWithoutResponsesInput;
};

export type ResponseCreateOrConnectWithoutuserInput = {
  where: ResponseWhereUniqueInput;
  create: ResponseCreateWithoutUserInput;
};

export type UserUpdateInput = {
  email?: Maybe<StringFieldUpdateOperationsInput>;
  username?: Maybe<StringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  responses?: Maybe<ResponseUpdateManyWithoutUserInput>;
};

export type ResponseUpdateManyWithoutUserInput = {
  create?: Maybe<Array<ResponseCreateWithoutUserInput>>;
  connect?: Maybe<Array<ResponseWhereUniqueInput>>;
  set?: Maybe<Array<ResponseWhereUniqueInput>>;
  disconnect?: Maybe<Array<ResponseWhereUniqueInput>>;
  delete?: Maybe<Array<ResponseWhereUniqueInput>>;
  update?: Maybe<Array<ResponseUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: Maybe<Array<ResponseUpdateManyWithWhereWithoutUserInput>>;
  deleteMany?: Maybe<Array<ResponseScalarWhereInput>>;
  upsert?: Maybe<Array<ResponseUpsertWithWhereUniqueWithoutUserInput>>;
  connectOrCreate?: Maybe<Array<ResponseCreateOrConnectWithoutuserInput>>;
};

export type ResponseUpdateWithWhereUniqueWithoutUserInput = {
  where: ResponseWhereUniqueInput;
  data: ResponseUpdateWithoutUserInput;
};

export type ResponseUpdateWithoutUserInput = {
  created_at?: Maybe<DateTimeFieldUpdateOperationsInput>;
  responses?: Maybe<ResponseUpdateresponsesInput>;
  experiment?: Maybe<ExperimentUpdateOneRequiredWithoutResponsesInput>;
};

export type ResponseUpdateManyWithWhereWithoutUserInput = {
  where: ResponseScalarWhereInput;
  data: ResponseUpdateManyMutationInput;
};

export type ResponseUpsertWithWhereUniqueWithoutUserInput = {
  where: ResponseWhereUniqueInput;
  update: ResponseUpdateWithoutUserInput;
  create: ResponseCreateWithoutUserInput;
};

export type UserUpdateManyMutationInput = {
  email?: Maybe<StringFieldUpdateOperationsInput>;
  username?: Maybe<StringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
};

export type CreateExperimentMutationVariables = Exact<{
  data: ExperimentCreateInput;
}>;


export type CreateExperimentMutation = (
  { __typename?: 'Mutation' }
  & { createExperiment: (
    { __typename?: 'Experiment' }
    & Pick<Experiment, 'id' | 'name' | 'created_at' | 'updated_at'>
  ) }
);

export type CreateResponseMutationVariables = Exact<{
  data: ResponseCreateInput;
}>;


export type CreateResponseMutation = (
  { __typename?: 'Mutation' }
  & { createResponse: (
    { __typename?: 'Response' }
    & Pick<Response, 'id' | 'responses' | 'created_at'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'email'>
    )>, experiment: (
      { __typename?: 'Experiment' }
      & Pick<Experiment, 'name'>
    ) }
  ) }
);

export type CreateUserMutationVariables = Exact<{
  data: UserCreateInput;
}>;


export type CreateUserMutation = (
  { __typename?: 'Mutation' }
  & { createUser: (
    { __typename?: 'User' }
    & Pick<User, 'id'>
  ) }
);


export const CreateExperimentDocument = gql`
    mutation createExperiment($data: ExperimentCreateInput!) {
  createExperiment(data: $data) {
    id
    name
    created_at
    updated_at
  }
}
    `;

export function useCreateExperimentMutation() {
  return Urql.useMutation<CreateExperimentMutation, CreateExperimentMutationVariables>(CreateExperimentDocument);
};
export const CreateResponseDocument = gql`
    mutation createResponse($data: ResponseCreateInput!) {
  createResponse(data: $data) {
    id
    responses
    created_at
    user {
      email
    }
    experiment {
      name
    }
  }
}
    `;

export function useCreateResponseMutation() {
  return Urql.useMutation<CreateResponseMutation, CreateResponseMutationVariables>(CreateResponseDocument);
};
export const CreateUserDocument = gql`
    mutation createUser($data: UserCreateInput!) {
  createUser(data: $data) {
    id
  }
}
    `;

export function useCreateUserMutation() {
  return Urql.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument);
};