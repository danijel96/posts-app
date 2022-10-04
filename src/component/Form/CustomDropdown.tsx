import { useEffect } from 'react';

export interface IData {
  label: string | JSX.Element | number;
  value: string | number;
}
interface ICustomDropdown {
  data: IData[];
  name: string;
  handleChange: (data: React.ChangeEvent<HTMLSelectElement>) => void;
  helloFrom: string;
  placeholder?: string;
  value?: string | number;
}
const CustomDropdown = ({
  data,
  name,
  handleChange,
  placeholder,
  value,
  helloFrom
}: ICustomDropdown) => {
  useEffect(() => {
    console.log(`${helloFrom} CustomDropdown component`);
  }, [helloFrom]);
  return (
    <div className="custom-dropdown">
      <select
        name={name}
        id={name}
        value={value}
        placeholder={placeholder}
        onChange={(e) => handleChange(e)}>
        <option key={0} value={0}>
          {''}
        </option>
        {data.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CustomDropdown;
