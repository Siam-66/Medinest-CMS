/* eslint-disable react/prop-types */


const CustomInput = ({id,name,type,onChange,value,placeholder}) => {
    return (
        <input
        id={id}
        name={name}
        type={type}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        className="input input-bordered "
    />
    );
};

export default CustomInput;