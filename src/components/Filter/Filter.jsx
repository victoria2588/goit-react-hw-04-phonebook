import { LabelSearchContact, FilterInput } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <LabelSearchContact>
      Find contact by name
      <FilterInput
        type="text"
        value={value}
        onChange={evt => onChange(evt.target.value)}
        placeholder="Search Name"
      />
    </LabelSearchContact>
  );
};
