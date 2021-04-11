import StorageIcon from "@material-ui/icons/Storage";
import jsonServerProvider from "ra-data-json-server";
import * as React from "react";
import { Admin, fetchUtils, ListGuesser, Resource } from "react-admin";
import authProvider from "./auth/authProvider";
import Dashboard from "./Dashboard";

// Products
import { ProductCreate } from "./resources/products/ProductCreate";
import { ProductEdit } from "./resources/products/ProductEdit";
import { ProductFilter } from "./resources/products/ProductFilter";
import { ProductList } from "./resources/products/ProductList";
import { ProductShow } from "./resources/products/ProductShow";

// Category
import { CategoryList } from "./resources/categories/CategoryList";
import { CategoryCreate } from "./resources/categories/CategoryCreate";

import dataProvider from "./data/dataProvider";

const App = () => {
	return (
		<Admin
			dashboard={Dashboard}
			dataProvider={dataProvider}
			authProvider={authProvider}>
			<Resource
				name="products"
				filter={ProductFilter}
				list={ProductList}
				show={ProductShow}
				create={ProductCreate}
				edit={ProductEdit}
				icon={StorageIcon}
			/>
			<Resource name="categories" list={CategoryList} create={CategoryCreate} />
		</Admin>
	);
};

export default App;
