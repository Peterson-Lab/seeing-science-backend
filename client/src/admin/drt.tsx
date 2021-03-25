import React from 'react'
import {
  List,
  Datagrid,
  DateField,
  NumberField,
  BooleanField,
  TextField,
} from 'react-admin'

export const drtList = (props: any) => (
  <List {...props}>
    <Datagrid>
      <NumberField source="id" />
      <NumberField source="participant_id" />
      <NumberField source="question" />
      <NumberField source="answer" />
      <NumberField source="time" />
      <BooleanField source="correct" />
      <TextField source="targetFile" />
      <TextField source="responseFile_1" />
      <TextField source="responseFile_2" />
      <TextField source="responseFile_3" />
      <TextField source="responseFile_4" />
      <DateField source="created_at" />
      <DateField source="updated_at" />
    </Datagrid>
  </List>
)
