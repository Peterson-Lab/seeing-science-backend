import React from 'react'
import {
  List,
  Datagrid,
  DateField,
  NumberField,
  BooleanField,
} from 'react-admin'

export const dRTList = (props: any) => (
  <List {...props}>
    <Datagrid>
      <NumberField source="id" />
      <NumberField source="participant_id" />
      <NumberField source="question" />
      <NumberField source="answer" />
      <NumberField source="time" />
      <BooleanField source="correct" />
      <DateField source="created_at" />
      <DateField source="updated_at" />
    </Datagrid>
  </List>
)
