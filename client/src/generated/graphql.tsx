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
  /** The `Byte` scalar type represents byte value as a Buffer */
  Byte: any;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Query = {
  __typename?: 'Query';
  drawings: Array<Drawing>;
  bestUser?: Maybe<User>;
  me?: Maybe<User>;
};


export type QueryDrawingsArgs = {
  where?: Maybe<DrawingWhereInput>;
  orderBy?: Maybe<Array<DrawingOrderByInput>>;
  cursor?: Maybe<DrawingWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<DrawingScalarFieldEnum>>;
};

export type Drawing = {
  __typename?: 'Drawing';
  id: Scalars['Int'];
  prompt: Scalars['String'];
  image: Scalars['Byte'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
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

export type DrawingWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export enum DrawingScalarFieldEnum {
  Id = 'id',
  Prompt = 'prompt',
  Image = 'image',
  CreatedAt = 'created_at',
  UpdatedAt = 'updated_at'
}

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

export type Mutation = {
  __typename?: 'Mutation';
  createExperiment: Experiment;
  deleteExperiment?: Maybe<Experiment>;
  deleteTrial?: Maybe<Trial>;
  updateUser?: Maybe<User>;
  register: UserResponse;
  login: UserResponse;
  logout: Scalars['Boolean'];
  setRole: UserResponse;
  postTrial: TrialResponse;
  postDrawing: DrawingResponse;
};


export type MutationCreateExperimentArgs = {
  data: ExperimentCreateInput;
};


export type MutationDeleteExperimentArgs = {
  where: ExperimentWhereUniqueInput;
};


export type MutationDeleteTrialArgs = {
  where: TrialWhereUniqueInput;
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
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


export type MutationPostTrialArgs = {
  data: TrialInput;
};


export type MutationPostDrawingArgs = {
  image: Scalars['Upload'];
  prompt: Scalars['String'];
};

export type Experiment = {
  __typename?: 'Experiment';
  id: Scalars['Int'];
  name: Scalars['String'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
};

export type ExperimentCreateInput = {
  name: Scalars['String'];
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  trials?: Maybe<TrialCreateNestedManyWithoutExperimentInput>;
};

export type TrialCreateNestedManyWithoutExperimentInput = {
  create?: Maybe<Array<TrialCreateWithoutExperimentInput>>;
  connectOrCreate?: Maybe<Array<TrialCreateOrConnectWithoutExperimentInput>>;
  connect?: Maybe<Array<TrialWhereUniqueInput>>;
};

export type TrialCreateWithoutExperimentInput = {
  created_at?: Maybe<Scalars['DateTime']>;
  responses?: Maybe<TrialCreateresponsesInput>;
  user?: Maybe<UserCreateNestedOneWithoutTrialsInput>;
};

export type TrialCreateresponsesInput = {
  set: Array<Scalars['JSON']>;
};


export type UserCreateNestedOneWithoutTrialsInput = {
  create?: Maybe<UserCreateWithoutTrialsInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutTrialsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserCreateWithoutTrialsInput = {
  email: Scalars['String'];
  username: Scalars['String'];
  role?: Maybe<Role>;
  password: Scalars['String'];
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type UserCreateOrConnectWithoutTrialsInput = {
  where: UserWhereUniqueInput;
  create: UserCreateWithoutTrialsInput;
};

export type UserWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

export type TrialCreateOrConnectWithoutExperimentInput = {
  where: TrialWhereUniqueInput;
  create: TrialCreateWithoutExperimentInput;
};

export type TrialWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type ExperimentWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type Trial = {
  __typename?: 'Trial';
  id: Scalars['Int'];
  user_id?: Maybe<Scalars['Int']>;
  experiment_id: Scalars['Int'];
  responses: Array<Scalars['JSON']>;
  created_at: Scalars['DateTime'];
};

export type UserUpdateInput = {
  email?: Maybe<StringFieldUpdateOperationsInput>;
  username?: Maybe<StringFieldUpdateOperationsInput>;
  role?: Maybe<EnumRoleFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  created_at?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<DateTimeFieldUpdateOperationsInput>;
  trials?: Maybe<TrialUpdateManyWithoutUserInput>;
};

export type StringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type EnumRoleFieldUpdateOperationsInput = {
  set?: Maybe<Role>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['DateTime']>;
};

export type TrialUpdateManyWithoutUserInput = {
  create?: Maybe<Array<TrialCreateWithoutUserInput>>;
  connectOrCreate?: Maybe<Array<TrialCreateOrConnectWithoutUserInput>>;
  upsert?: Maybe<Array<TrialUpsertWithWhereUniqueWithoutUserInput>>;
  connect?: Maybe<Array<TrialWhereUniqueInput>>;
  set?: Maybe<Array<TrialWhereUniqueInput>>;
  disconnect?: Maybe<Array<TrialWhereUniqueInput>>;
  delete?: Maybe<Array<TrialWhereUniqueInput>>;
  update?: Maybe<Array<TrialUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: Maybe<Array<TrialUpdateManyWithWhereWithoutUserInput>>;
  deleteMany?: Maybe<Array<TrialScalarWhereInput>>;
};

export type TrialCreateWithoutUserInput = {
  created_at?: Maybe<Scalars['DateTime']>;
  responses?: Maybe<TrialCreateresponsesInput>;
  experiment: ExperimentCreateNestedOneWithoutTrialsInput;
};

export type ExperimentCreateNestedOneWithoutTrialsInput = {
  create?: Maybe<ExperimentCreateWithoutTrialsInput>;
  connectOrCreate?: Maybe<ExperimentCreateOrConnectWithoutTrialsInput>;
  connect?: Maybe<ExperimentWhereUniqueInput>;
};

export type ExperimentCreateWithoutTrialsInput = {
  name: Scalars['String'];
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type ExperimentCreateOrConnectWithoutTrialsInput = {
  where: ExperimentWhereUniqueInput;
  create: ExperimentCreateWithoutTrialsInput;
};

export type TrialCreateOrConnectWithoutUserInput = {
  where: TrialWhereUniqueInput;
  create: TrialCreateWithoutUserInput;
};

export type TrialUpsertWithWhereUniqueWithoutUserInput = {
  where: TrialWhereUniqueInput;
  update: TrialUpdateWithoutUserInput;
  create: TrialCreateWithoutUserInput;
};

export type TrialUpdateWithoutUserInput = {
  created_at?: Maybe<DateTimeFieldUpdateOperationsInput>;
  responses?: Maybe<TrialUpdateresponsesInput>;
  experiment?: Maybe<ExperimentUpdateOneRequiredWithoutTrialsInput>;
};

export type TrialUpdateresponsesInput = {
  set: Array<Scalars['JSON']>;
};

export type ExperimentUpdateOneRequiredWithoutTrialsInput = {
  create?: Maybe<ExperimentCreateWithoutTrialsInput>;
  connectOrCreate?: Maybe<ExperimentCreateOrConnectWithoutTrialsInput>;
  upsert?: Maybe<ExperimentUpsertWithoutTrialsInput>;
  connect?: Maybe<ExperimentWhereUniqueInput>;
  update?: Maybe<ExperimentUpdateWithoutTrialsInput>;
};

export type ExperimentUpsertWithoutTrialsInput = {
  update: ExperimentUpdateWithoutTrialsInput;
  create: ExperimentCreateWithoutTrialsInput;
};

export type ExperimentUpdateWithoutTrialsInput = {
  name?: Maybe<StringFieldUpdateOperationsInput>;
  created_at?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type TrialUpdateWithWhereUniqueWithoutUserInput = {
  where: TrialWhereUniqueInput;
  data: TrialUpdateWithoutUserInput;
};

export type TrialUpdateManyWithWhereWithoutUserInput = {
  where: TrialScalarWhereInput;
  data: TrialUpdateManyMutationInput;
};

export type TrialScalarWhereInput = {
  AND?: Maybe<Array<TrialScalarWhereInput>>;
  OR?: Maybe<Array<TrialScalarWhereInput>>;
  NOT?: Maybe<Array<TrialScalarWhereInput>>;
  id?: Maybe<IntFilter>;
  user_id?: Maybe<IntNullableFilter>;
  experiment_id?: Maybe<IntFilter>;
  responses?: Maybe<JsonNullableListFilter>;
  created_at?: Maybe<DateTimeFilter>;
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

export type JsonNullableListFilter = {
  equals?: Maybe<Array<Scalars['JSON']>>;
  has?: Maybe<Scalars['JSON']>;
  hasEvery?: Maybe<Array<Scalars['JSON']>>;
  hasSome?: Maybe<Array<Scalars['JSON']>>;
  isEmpty?: Maybe<Scalars['Boolean']>;
};

export type TrialUpdateManyMutationInput = {
  created_at?: Maybe<DateTimeFieldUpdateOperationsInput>;
  responses?: Maybe<TrialUpdateresponsesInput>;
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
  experiment: Scalars['String'];
  responses: Array<Scalars['JSONObject']>;
  participantId: Scalars['Float'];
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


export const PostTrialDocument = gql`
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

export function usePostTrialMutation() {
  return Urql.useMutation<PostTrialMutation, PostTrialMutationVariables>(PostTrialDocument);
};
export const LoginDocument = gql`
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

export function useLoginMutation() {
  return Urql.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument);
};
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;

export function useLogoutMutation() {
  return Urql.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument);
};
export const MeDocument = gql`
    query Me {
  me {
    id
    email
    username
    role
  }
}
    `;

export function useMeQuery(options: Omit<Urql.UseQueryArgs<MeQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<MeQuery>({ query: MeDocument, ...options });
};
export const RegisterDocument = gql`
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

export function useRegisterMutation() {
  return Urql.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument);
};
export const SetRoleDocument = gql`
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

export function useSetRoleMutation() {
  return Urql.useMutation<SetRoleMutation, SetRoleMutationVariables>(SetRoleDocument);
};