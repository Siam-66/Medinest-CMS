import { useFormik } from "formik";
import CustomInput from "../CustomInput";
import CustomSelect from "../CustomSelect";

const AddDoctor = () => {


    const category = [
        { value: 'Allergists', label: 'Allergists' },
        { value: 'Anesthesiology', label: 'Anesthesiology' },
        { value: 'Bacteriological Laboratory', label: 'Bacteriological Laboratory' },
        { value: 'Cardiac Surgeons', label: 'Cardiac Surgeons' },
        { value: 'Cardiologists', label: 'Cardiologists' },
        { value: 'Dermatologists', label: 'Dermatologists' },
        { value: 'Endocrinologists', label: 'Endocrinologists' },
        { value: 'Gastroenterologists', label: 'Gastroenterologists' },
        { value: 'General Surgeons', label: 'General Surgeons' },
        { value: 'Infectious disease doctors', label: 'Infectious disease doctors' },
        { value: 'Nephrologists', label: 'Nephrologists' },
        { value: 'Neurologists', label: 'Neurologists' },
        { value: 'Obstetrician/Gynecologists', label: 'Obstetrician/Gynecologists' },
        { value: 'Oncologists', label: 'Oncologists' },
        { value: 'Ophthalmologists', label: 'Ophthalmologists' },
        { value: 'Orthopedic surgeons ', label: 'Orthopedic surgeons ' },
        { value: 'Otolaryngologists', label: 'Otolaryngologists' },
        { value: 'Physical Therapy', label: 'Physical Therapy' },
        { value: 'Plastic Surgery', label: 'Plastic Surgery' },
        { value: 'Psychiatrists', label: 'Psychiatrists' },
        { value: 'Pulmonologists', label: 'Pulmonologists' },
        { value: 'Radiologists', label: 'Radiologists' },
        { value: 'Urologists', label: 'Urologists' }
      ]

  
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            address: '',
            phone: '',
            department :null,
            profile: '',

          
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

            if (!values.profile) {
                errors.profile = 'Required';
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

                        {/*department*/}

                    <div className="form-control flex flex-row items-center gap-4 mb-5 ml-[25px] ">
                    <label className="mb-2" htmlFor="department">
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

                       {/* Profile */}
                       <div className="form-control flex flex-row items-center gap-4 mb-5 ml-[65px] ">
                        <label className="mb-2" htmlFor="profile">
                            Profile
                        </label>
                        <CustomInput id="profile" name="profile" type="text" onChange={formik.handleChange} value={formik.values.profile} placeholder="Enter your Profile" />
                        {formik.errors.profile && formik.touched.profile && (
                            <div className="text-red-500">Profile is required</div>
                        )}
                    </div>

                </div>

                <div className=" pl-32" >
                    <button type="submit" className=" px-5 py-3 rounded-md shadow-xl hover:bg-[#06ac3a] hover:scale-105 bg-[#099635] text-white font-bold">Add Doctor</button>
                </div>
            </form>
        </div>
    </div>
    );
};

export default AddDoctor;