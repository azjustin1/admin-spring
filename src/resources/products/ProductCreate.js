import RichTextInput from "ra-input-rich-text";
import {
	Create,
	NumberInput,
	SimpleForm,
	TextInput,
	ReferenceInput,
	SelectInput,
} from "react-admin";

export const ProductCreate = (props) => {
	return (
		<Create {...props}>
			<SimpleForm>
				<TextInput source="name" />
				<ReferenceInput label="Type" source="categoryID" reference="categories">
					<SelectInput optionText="name" />
				</ReferenceInput>
				<NumberInput source="quantity" />
				<TextInput source="price" />
				<TextInput source="fakePrice" />
				<RichTextInput source="description" />
			</SimpleForm>
		</Create>
	);
};
