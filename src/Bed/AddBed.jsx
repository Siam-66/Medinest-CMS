import { useFormik } from "formik";
import CustomSelect from "../CustomSelect";
import CustomInput from "../CustomInput";

const AddBed = () => {

    const name = [
        { value: 'Ward', label: 'Ward' },
        { value: 'Cabin', label: 'Cabin' },
        { value: 'Icu', label: 'Icu' },
        { value: 'Other ', label: 'Other ' },

      ]


    const formik = useFormik({
        initialValues: {
            bedNumber: '',
            description: '',
            type :null,
          
        },

        validate: (values) => {
            const errors = {};

            if (!values.bedNumber) {
                errors.bedNumber = 'Required';
            }
            if (!values.description) {
                errors.description = 'Required'
            }
            if (!values.type) {
                errors.type = 'Required';
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

                  {/* bedNumber  */}
                    <div className="form-control flex flex-row items-center gap-4 mb-5 ">
                        <label className="mb-2 w-40 text-right" htmlFor="bedNumber">
                        Bed Number  
                        </label>
                        <CustomInput id="bedNumber" name="bedNumber" type="text" onChange={formik.handleChange} value={formik.values.bedNumber} placeholder="Enter the bed number" />
                        {formik.errors.bedNumber && formik.touched.bedNumber && (
                            <div className="text-red-500">Bed Number is required</div>
                        )}
                    </div>

                    {/* type */}
                    <div className="form-control flex flex-row items-center mb-5 gap-4 ">
                    <label className="mb-2 w-40 text-right" htmlFor="type">
                    Type
                        </label>
                    <CustomSelect
                            id="type"
                            name="type"
                            onChange={(selectedOption) => formik.setFieldValue("type", selectedOption)}
                            value={formik.values.type}
                            options={name}
                        />
                        </div>




                    
                    {/* description */}
                    <div className="form-control flex flex-row items-center gap-4 ">
                        <label className="mb-2 w-40 text-right" htmlFor="description">
                            Description
                        </label>
                        <textarea className="border-2 border-stone-300 p-3 w-[225px] rounded-lg " id="description" name="description" type="text" onChange={formik.handleChange} value={formik.values.description} placeholder="Write from here" />
                        {formik.errors.description && formik.touched.description && (
                            <div className="text-red-500">Description is required</div>
                        )}
                    </div>


                </div>

                <div className=" pl-[180px] " >
                    <button type="submit" className=" px-5 py-3 rounded-md shadow-xl hover:bg-[#06ac3a] hover:scale-105 bg-[#099635] text-white font-bold">Add Bed</button>
                </div>
            </form>
        </div>
    </div>
    );
};

export default AddBed;