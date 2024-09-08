import { useFormik } from "formik";
import CustomInput from "../CustomInput";
import CustomSelect from "../CustomSelect";


const Addpatient = () => {

    const gender = [
        { value: 'Male ', label: 'Male ' },
        { value: 'Female ', label: 'Female ' },
        { value: 'Others', label: 'Others' }
    ]

    const blood = [
        { value: 'A+', label: 'A+' },
        { value: 'A-', label: 'A-' },
        { value: 'B+', label: 'B+' },
        { value: 'B-', label: 'B-' },
        { value: 'AB+', label: 'AB+' },
        { value: 'AB-', label: 'AB-' },
        { value: 'O+', label: 'O+' },
        { value: 'O-', label: 'O-' }
      ]

  
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            address: '',
            phone: '',
            sex :null,
            birthDate: '',
            age: '',
            bloodGroup :null,
          
        },

        validate: (values) => {
            const errors = {};

            if (!values.name) {
                errors.name = 'Required';
            }
            if (!values.email) {
                errors.email = 'Required'
            }

            if (!values.password) {
                errors.password = 'Required';
            }
            if (!values.address) {
                errors.address = 'Required';
            }
            if (!values.phone) {
                errors.phone = 'Required';
            }
            if (!values.sex) {
                errors.sex = 'Required';
            }
            if (!values.birthDate) {
                errors.birthDate = 'Required';
            }
            if (!values.age) {
                errors.age = 'Required';
            }       
            if (!values.bloodGroup) {
                errors.bloodGroup = 'Required';
            }
            return errors;
        },
        
        onSubmit: async (values) => {
          console.log(values)
        },
    });

    return (

    <div className="p-6">
       
        <div className=" border-2 border-stone-400   " >
            <form className="card-body " onSubmit={formik.handleSubmit}>

                <div className="mb-4">
                  {/* Name */}
                    <div className="form-control flex flex-row items-center gap-4 mb-5 ml-14">
                        <label className="mb-2" htmlFor="name">
                            Name
                        </label>
                        <CustomInput id="name" name="name" type="text" onChange={formik.handleChange} value={formik.values.name} placeholder="Enter your name" />
                        {formik.errors.name && formik.touched.name && (
                            <div className="text-red-500">Name is required</div>
                        )}
                    </div>
                    
                    {/* Email */}
                    <div className="form-control flex flex-row items-center gap-4 mb-5 ml-16">
                        <label className="mb-2" htmlFor="email">
                            Email
                        </label>
                        <CustomInput id="email" name="email" type="email" onChange={formik.handleChange} value={formik.values.email} placeholder="Enter your email" />
                        {formik.errors.email && formik.touched.email && (
                            <div className="text-red-500">Email is required</div>
                        )}
                    </div>

                   {/* Password */}
                    <div className="form-control flex flex-row items-center gap-4 mb-5 ml-9">
                        <label className="mb-2" htmlFor="password">
                            Password
                        </label>
                        <CustomInput id="password" name="password" type="password" onChange={formik.handleChange} value={formik.values.password} placeholder=" Enter your password" />
                        {formik.errors.password && formik.touched.password && (
                            <div className="text-red-500">Password is required</div>
                        )}
                    </div>

                        {/* Address */}
                        <div className="form-control flex flex-row items-center gap-4 mb-5 ml-12">
                        <label className="mb-2" htmlFor="address">
                            Address
                        </label>
                        <CustomInput id="address" name="address" type="text" onChange={formik.handleChange} value={formik.values.address} placeholder="Enter your address" />
                        {formik.errors.address && formik.touched.address && (
                            <div className="text-red-500">Address is required</div>
                        )}
                    </div>

                        {/* Phone */}
                        <div className="form-control flex flex-row items-center gap-4 mb-5 ml-[63px] ">
                        <label className="mb-2" htmlFor="phone">
                            Phone
                        </label>
                        <CustomInput id="phone" name="phone" type="number" onChange={formik.handleChange} value={formik.values.phone} placeholder="Enter your phone" />
                        {formik.errors.phone && formik.touched.phone && (
                            <div className="text-red-500">Phone is required</div>
                        )}
                    </div>

                        {/*Sex*/}

                    <div className="form-control flex flex-row items-center gap-4 mb-5 ml-[84px] ">
                    <label className="mb-2" htmlFor="sex">
                        Sex
                        </label>
                    <CustomSelect
                            id="sex"
                            name="sex"
                            onChange={(selectedOption) => formik.setFieldValue("sex", selectedOption)}
                            value={formik.values.sex}
                            options={gender}
                        />
                        </div>

                    {/* Birth Date */}
                    <div className="form-control flex flex-row items-center gap-4 mb-5 ml-10">
                        <label className="mb-2" htmlFor="birthDate">
                            Birth Date
                        </label>
                        <input className="border-2 border-stone-300 p-3 w-[225px] rounded-lg  " id="birthDate" name="birthDate" type="date" onChange={formik.handleChange} value={formik.values.birthDate} placeholder="Enter your birth date" />
                        {formik.errors.birthDate && formik.touched.birthDate && (
                            <div className="text-red-500">Birth Date  is required</div>
                        )}
                    </div>

                       {/* Age */}
                       <div className="form-control flex flex-row items-center gap-4 mb-5 ml-[83px] ">
                        <label className="mb-2" htmlFor="age">
                            Age
                        </label>
                        <CustomInput id="age" name="age" type="number" onChange={formik.handleChange} value={formik.values.age} placeholder="Enter your age" />
                        {formik.errors.age && formik.touched.age && (
                            <div className="text-red-500">Age is required</div>
                        )}
                    </div>
                    {/* Blood Group */}
                    <div className="form-control flex flex-row items-center gap-4 ml-[25px] ">
                    <label className="mb-2" htmlFor="bloodGroup">
                        Blood Group 
                        </label>
                    <CustomSelect
                            id="bloodGroup"
                            name="bloodGroup"
                            onChange={(selectedOption) => formik.setFieldValue("bloodGroup", selectedOption)}
                            value={formik.values.bloodGroup}
                            options={blood}
                        />
                        </div>

                </div>

                <div className=" pl-32" >
                    <button type="submit" className=" px-5 py-3 rounded-md shadow-xl hover:bg-[#06ac3a] hover:scale-105 bg-[#099635] text-white font-bold">Add Patient</button>
                </div>
            </form>
        </div>
    </div>
    );
};

export default Addpatient;

