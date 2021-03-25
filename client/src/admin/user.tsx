import React from 'react'
import {
  Create,
  Datagrid,
  DateField,
  List,
  SimpleForm,
  TextField,
  TextInput,
} from 'react-admin'

export const UserList = (props: any) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="email" />
      <TextField source="username" />
      <TextField source="role" />
      <DateField source="created_at" />
      <DateField source="updated_at" />
    </Datagrid>
  </List>
)

export const UserCreate = (props: any) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="email" />
      <TextInput source="username" />
      <TextInput source="password" />
    </SimpleForm>
  </Create>
)
