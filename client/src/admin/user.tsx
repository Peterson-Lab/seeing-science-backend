import React from 'react'
import {
  Create,
  Datagrid,
  DateField,
  DateInput,
  Edit,
  List,
  NumberInput,
  SelectInput,
  Show,
  SimpleForm,
  SimpleShowLayout,
  TextField,
  TextInput,
} from 'react-admin'

export const UserList = (props: any) => (
  <List {...props}>
    <Datagrid rowClick="edit">
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
      <SelectInput
        source="role"
        choices={[
          { id: 'USER', name: 'user' },
          { id: 'ADMIN', name: 'admin' },
        ]}
      />
    </SimpleForm>
  </Create>
)

export const UserEdit = (props: any) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled label="Id" source="id" />
      <TextInput source="email" />
      <TextInput source="username" />
      <SelectInput
        source="role"
        choices={[
          { id: 'USER', name: 'USER' },
          { id: 'ADMIN', name: 'ADMIN' },
        ]}
      />
      <NumberInput disabled source="created_at" />
      <NumberInput disabled source="updated_at" />
    </SimpleForm>
  </Edit>
)

export const UserShow = (props: any) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="email" />
      <TextField source="username" />
      <TextField source="role" />
      <DateField source="created_at" />
      <DateField source="updated_at" />
    </SimpleShowLayout>
  </Show>
)
