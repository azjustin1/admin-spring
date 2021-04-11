// in src/users.js
import * as React from "react";
import {
	Datagrid,
	DateField,
	DeleteButton,
	EditButton,
	List,
	NumberField,
	ReferenceField,
	ShowButton,
	TextField,
	ChipField,
	ArrayField,
	SingleFieldList,
} from "react-admin";
import { ProductFilter } from "./ProductFilter";

export const ProductList = (props) => (
	<List filters={<ProductFilter />} {...props}>
		<Datagrid rowClick="show">
			<TextField source="id" />
			<TextField source="name" />
			<ArrayField source="productCategories">
				<SingleFieldList>
					<ReferenceField label="Type" source="id" reference="categories">
						<ChipField source="name" />
					</ReferenceField>
				</SingleFieldList>
			</ArrayField>
			<TextField source="quantity" />
			<NumberField source="price" />
			<NumberField source="fakePrice" />
			<DateField source="createdAt" />
			<DateField source="updatedAt" />
			<ShowButton basePath="products" />
			<EditButton basePath="products" />
			<DeleteButton basePath="products" />
		</Datagrid>
	</List>
);
