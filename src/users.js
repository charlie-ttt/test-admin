import React from 'react';
import { List, Datagrid, TextField, EmailField } from 'react-admin';
import MyUrlField from './MyUrlField';

export const UserList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <EmailField source="email" />
      <TextField source="phone" />
      <MyUrlField source="website" />
      å
      <TextField source="company.name" />
    </Datagrid>
  </List>
);
