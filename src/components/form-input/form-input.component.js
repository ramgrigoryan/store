import { InputLabel, Input, Group } from "./form-input.styles.jsx";
const FormInput = ({ label, ...otherprops }) => {
  return (
    <Group>
      <Input {...otherprops} />
      {label && (
        <InputLabel shrink={otherprops.value.length}>{label}</InputLabel>
      )}
    </Group>
  );
};
export default FormInput;
