import {
	ChipField,
	NumberField,
	ReferenceField,
	Show,
	SimpleFormView,
	TextField,
	ArrayField,
	SingleFieldList,
	Datagrid,
} from "react-admin";

export const ProductShow = (props) => {
	return (
		<Show {...props}>
			<SimpleFormView>
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
				<TextField source="description" />
			</SimpleFormView>
		</Show>
	);
};
