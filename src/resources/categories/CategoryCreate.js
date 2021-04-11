import RichTextInput from "ra-input-rich-text";
import { Create, NumberInput, SimpleForm, TextInput } from "react-admin";

const configureQuill = (quill) =>
	quill.getModule("toolbar").addHandler("bold", function (value) {
		this.quill.format("bold", value);
	});

export const CategoryCreate = (props) => {
	return (
		<Create {...props}>
			<SimpleForm>
				<TextInput source="name" />
				<RichTextInput source="description" configureQuill={configureQuill} />
			</SimpleForm>
		</Create>
	);
};
