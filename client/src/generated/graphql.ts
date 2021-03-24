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
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Query = {
  __typename?: 'Query';
  bestUser?: Maybe<User>;
  me?: Maybe<User>;
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


export type Mutation = {
  __typename?: 'Mutation';
  register: UserResponse;
  login: UserResponse;
  logout: Scalars['Boolean'];
  setRole: UserResponse;
  postDrawing: DrawingResponse;
  postSpatial: Scalars['Boolean'];
  postTrial: TrialResponse;
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


export type MutationPostDrawingArgs = {
  image: Scalars['Upload'];
  prompt: Scalars['String'];
};


export type MutationPostSpatialArgs = {
  answers: Array<Scalars['String']>;
};


export type MutationPostTrialArgs = {
  data: TrialInput;
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
};

export type PostSpatialMutationVariables = Exact<{
  answers: Array<Scalars['String']> | Scalars['String'];
}>;


export type PostSpatialMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'postSpatial'>
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