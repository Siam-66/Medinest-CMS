import { useFormik } from "formik";
import CustomInput from "../CustomInput";
import CustomSelect from "../CustomSelect";

const AddNurse = () => {
    
    const category = [
        { value: 'Allergists', label: 'Allergists' },
      
       
      ]

      const dName = [
        { value: 'Sakib', label: 'Sakib' },
        { value: 'Jamil', label: 'Jamil' },
        { value: 'Nahid', label: 'Nahid' },
        { value: 'Shariar', label: 'Shariar' },
        { value: 'Siam', label: 'Siam' },

      ]
  
      const gender = [
        { value: 'Male ', label: 'Male ' },
        { value: 'Female ', label: 'Female ' },
        { value: 'Others', label: 'Others' }
    ]

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            address: '',
            phone: '',
            department :null,
            doctor :null,
            sex :null,

          
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
            
            if (!values.department) {
                errors.department = 'Required';
            }
            if (!values.doctor) {
                errors.doctor = 'Required';
            }
            if (!values.sex) {
                errors.sex = 'Required';
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
                    <div className="form-control flex flex-row items-center gap-4 mb-5 ">
                        <label className="mb-2 w-40 text-right" htmlFor="name">
                            Name
                        </label>
                        <CustomInput id="name" name="name" type="text" onChange={formik.handleChange} value={formik.values.name} placeholder="Enter your name" />
                        {formik.errors.name && formik.touched.name && (
                            <div className="text-red-500">Name is required</div>
                        )}
                    </div>
                    
                    {/* Email */}
                    <div className="form-control flex flex-row items-center gap-4 mb-5">
                        <label className="mb-2 w-40 text-right" htmlFor="email">
                            Email
                        </label>
                        <CustomInput id="email" name="email" type="email" onChange={formik.handleChange} value={formik.values.email} placeholder="Enter your email" />
                        {formik.errors.email && formik.touched.email && (
                            <div className="text-red-500">Email is required</div>
                        )}
                    </div>

                   {/* Password */}
                    <div className="form-control flex flex-row items-center gap-4 mb-5">
                        <label className="mb-2 w-40 text-right" htmlFor="password">
                            Password
                        </label>
                        <CustomInput id="password" name="password" type="password" onChange={formik.handleChange} value={formik.values.password} placeholder=" Enter your password" />
                        {formik.errors.password && formik.touched.password && (
                            <div className="text-red-500">Password is required</div>
                        )}
                    </div>

                        {/* Address */}
                        <div className="form-control flex flex-row items-center gap-4 mb-5 ">
                        <label className="mb-2 w-40 text-right" htmlFor="address">
                            Address
                        </label>
                        <CustomInput id="address" name="address" type="text" onChange={formik.handleChange} value={formik.values.address} placeholder="Enter your address" />
                        {formik.errors.address && formik.touched.address && (
                            <div className="text-red-500">Address is required</div>
                        )}
                    </div>

                        {/* Phone */}
                        <div className="form-control flex flex-row items-center gap-4 mb-5  ">
                        <label className="mb-2 w-40 text-right" htmlFor="phone">
                            Phone
                        </label>
                        <CustomInput id="phone" name="phone" type="number" onChange={formik.handleChange} value={formik.values.phone} placeholder="Enter your phone" />
                        {formik.errors.phone && formik.touched.phone && (
                            <div className="text-red-500">Phone is required</div>
                        )}
                    </div>

                        {/*Sex*/}

                        <div className="form-control flex flex-row items-center gap-4 mb-5">
                    <label className="mb-2 w-40 text-right" htmlFor="sex">
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

                        {/*department*/}

                        <div className="form-control flex flex-row items-center gap-4 mb-5">
                    <label className="mb-2 w-40 text-right" htmlFor="department">
                        Department
                        </label>
                    <CustomSelect
                            id="department"
                            name="department"
                            onChange={(selectedOption) => formik.setFieldValue("department", selectedOption)}
                            value={formik.values.department}
                            options={category}
                        />
                        </div>

                    {/* Doctor */}
                    <div className="form-control flex flex-row items-center mb-5 gap-4  ">
                    <label className="mb-2 w-40 text-right" htmlFor="doctor">
                    Doctor  
                        </label>
                    <CustomSelect
                            id="doctor"
                            name="doctor"
                            onChange={(selectedOption) => formik.setFieldValue("doctor", selectedOption)}
                            value={formik.values.doctor}
                            options={dName}
                        />
                        </div>



                </div>

                <div className=" pl-32" >
                    <button type="submit" className=" px-5 py-3 rounded-md shadow-xl hover:bg-[#06ac3a] hover:scale-105 bg-[#099635] text-white font-bold">Add Nurse</button>
                </div>
            </form>
        </div>
    </div>
    );
};

export default AddNurse;