import { useFormik } from "formik";
import CustomInput from "../CustomInput";


const AddDepartment = () => {

  
    const formik = useFormik({
        initialValues: {
            departmentName: '',
            departmentDescription: '',
           
          
        },
        validate: (values) => {
            const errors = {};

            if (!values.departmentName) {
                errors.departmentName = 'Required';
            }
            
            if (!values.departmentDescription) {
                errors.departmentDescription = 'Required';
            }
        

  

            return errors;
        },
        onSubmit: async (values) => {
          console.log(values)
        },
    });

    return (
        <div className="p-6">
            <div className=" border-2 border-stone-400   ">

            <form className="card-body flex  " onSubmit={formik.handleSubmit}>

                <div className="mb-4">
                {/* Department Name*/}
                    <div className="form-control flex flex-row items-center gap-4 mb-5 ml-9 ">
                        <label className="mb-2 " htmlFor="departmentName">
                            Department Name
                        </label>
                        <CustomInput id="departmentName" name="departmentName" type="text" onChange={formik.handleChange} value={formik.values.departmentName} placeholder="Enter Department Name " />
                        {formik.errors.departmentName && formik.touched.departmentName && (
                            <div className="text-red-500">Department Name is required</div>
                        )}
                    </div>

                    {/* Department Description */}
                    <div className="form-control flex flex-row items-center gap-4 ">
                        <label className="mb-2" htmlFor="departmentDescription">
                            Department Description
                        </label>
                        <CustomInput id="departmentDescription" name="departmentDescription" type="text" onChange={formik.handleChange} value={formik.values.departmentDescription} placeholder=" Enter Description" />
                        {formik.errors.departmentDescription && formik.touched.departmentDescription && (
                            <div className="text-red-500">Department Description is required</div>
                        )}
                    </div>

                </div>
                
                <div className=" pl-[190px] " >
                    <button type="submit" className=" px-5 py-3 rounded-md shadow-xl hover:bg-[#06ac3a] hover:scale-105 bg-[#099635] text-white font-bold">Add Department</button>
                </div>

                
            </form>
            </div>
        </div>
    );
};

export default AddDepartment;