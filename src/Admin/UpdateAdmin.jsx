import { useFormik } from "formik";
import CustomInput from "../CustomInput";
import CustomSelect from "../CustomSelect";

const UpdateAdmin = () => {

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
            image: '',
            address: '',
            phoneNumber: '',
            sex :null,
            birthDate: '',
            age: '',
            bloodGroup :null,
            user :null,
            clinicName :null,
          
        },

        validate: (values) => {
            const errors = {};

            if (!values.name) {
                errors.name = 'Required';
            }
            if (!values.email) {
                errors.email = 'Required'
            }

            if (!values.image) {
                errors.image = 'Required';
            }
            if (!values.address) {
                errors.address = 'Required';
            }
            if (!values.phoneNumber) {
                errors.phoneNumber = 'Required';
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
            if (!values.user) {
                errors.user = 'Required';
            }
            if (!values.clinicName) {
                errors.clinicName = 'Required';
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

                        {/* user*/}

                        <div className="form-control flex flex-row items-center  gap-4 mb-5">
                    <label className="mb-2 w-40 text-right" htmlFor=" user">
                        User
                        </label>
                    <CustomSelect
                            id=" user"
                            name=" user"
                            onChange={(selectedOption) => formik.setFieldValue(" user", selectedOption)}
                            value={formik.values. user}
                            options={gender}
                        />
                        </div>

                        {/* clinicName*/}

                        <div className="form-control flex flex-row items-center  gap-4 mb-5">
                    <label className="mb-2 w-40 text-right" htmlFor=" clinicName">
                        Clinic Name
                        </label>
                    <CustomSelect
                            id=" clinicName"
                            name=" clinicName"
                            onChange={(selectedOption) => formik.setFieldValue(" clinicName", selectedOption)}
                            value={formik.values. clinicName}
                            options={gender}
                        />
                        </div>

                  {/* Name */}
                    <div className="form-control flex flex-row items-center gap-4 mb-5">
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

                   {/* Image */}
                    <div className="form-control flex flex-row items-center gap-4 mb-5">
                        <label className="mb-2 w-40 text-right" htmlFor="image">
                            Image
                        </label>
                        <CustomInput id="image" name="image" type="text" onChange={formik.handleChange} value={formik.values.image} placeholder=" Enter your image" />
                        {formik.errors.image && formik.touched.image && (
                            <div className="text-red-500">image is required</div>
                        )}
                    </div>

                        {/* phoneNumber */}
                        <div className="form-control flex flex-row items-center gap-4 mb-5 ">
                        <label className="mb-2 w-40 text-right" htmlFor="phoneNumber">
                            Phone Number
                        </label>
                        <CustomInput id="phoneNumber" name="phoneNumber" type="number" onChange={formik.handleChange} value={formik.values.phoneNumber} placeholder="Enter your phoneNumber" />
                        {formik.errors.phoneNumber && formik.touched.phoneNumber && (
                            <div className="text-red-500">phoneNumber is required</div>
                        )}
                    </div>

                        {/*Sex*/}

                    <div className="form-control flex flex-row items-center  gap-4 mb-5">
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
                    {/* Blood Group */}
                    <div className="form-control flex flex-row items-center gap-4 ml-[25px] ">
                    <label className="mb-2 w-40 text-right" htmlFor="bloodGroup">
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

export default UpdateAdmin;