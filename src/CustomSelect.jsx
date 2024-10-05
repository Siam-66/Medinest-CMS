/* eslint-disable react/prop-types */
import Select from 'react-select'


const CustomSelect = ({id,name,onChange,value,options}) => {
    return (
        <Select
        id={id}
        name={name}
        onChange={onChange}
        value={value}
        styles={{
            control: (provided) => ({
                ...provided,
                minHeight: '47px',
                width: '300px',
                borderRadius: '8px'
            }),
        }}
        options={options}
    />
    );
};

export default CustomSelect;