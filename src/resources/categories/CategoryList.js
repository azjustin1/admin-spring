// in src/users.js
import * as React from "react";
import {
	List,
	Datagrid,
	TextField,
	DateField,
	ShowButton,
	EditButton,
	DeleteButton,
	NumberField,
	Filter,
} from "react-admin";

export const CategoryList = (props) => {
	return (
		<List {...props}>
			<Datagrid rowClick="show">
				<TextField source="id" />
				<TextField source="name" />
				<DateField source="createdAt" />
				<ShowButton basePath="categories" />
				<EditButton basePath="categories" />
				<DeleteButton basePath="categories" />
			</Datagrid>
		</List>
	);
};
