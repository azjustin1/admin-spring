import RichTextInput from "ra-input-rich-text";
import {
	Edit,
	NumberInput,
	ReferenceInput,
	SelectInput,
	SimpleForm,
	TextInput,
} from "react-admin";

export const ProductEdit = (props) => (
	<Edit {...props}>
		<SimpleForm>
			<TextInput source="name" />
			<ReferenceInput label="Type" source="id" reference="categories">
				<SelectInput optionText="name" />
			</ReferenceInput>
			<NumberInput source="quantity" />
			<TextInput source="price" />
			<TextInput source="fakePrice" />
			<RichTextInput source="description" />
		</SimpleForm>
	</Edit>
);
