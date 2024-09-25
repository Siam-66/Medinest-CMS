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
        className=" w-full p-3 border bg-slate-200 border-gray-300 rounded-md focus:outline-blue-300 "
    />
    );
};

export default CustomInput;