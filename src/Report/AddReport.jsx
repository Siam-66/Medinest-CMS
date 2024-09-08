import { useFormik } from "formik";
import CustomSelect from "../CustomSelect";


const AddReport = () => {

    const name = [
        { value: 'Operation', label: 'Operation' },
        { value: 'Birth', label: 'Birth' },
        { value: 'Death', label: 'Death' },
        { value: 'Other ', label: 'Other ' },

      ]

      const pName = [
        { value: 'Sakib', label: 'Sakib' },
        { value: 'Jamil', label: 'Jamil' },
        { value: 'Nahid', label: 'Nahid' },
        { value: 'Shariar', label: 'Shariar' },
        { value: 'Siam', label: 'Siam' },

      ]

      const dName = [
        { value: 'Sakib', label: 'Sakib' },
        { value: 'Jamil', label: 'Jamil' },
        { value: 'Nahid', label: 'Nahid' },
        { value: 'Shariar', label: 'Shariar' },
        { value: 'Siam', label: 'Siam' },

      ]

    const formik = useFormik({
        initialValues: {
            Date : '',
            patient :null,
            doctor :null,
            description: '',
            type :null,
          
        },

        validate: (values) => {
            const errors = {};

            if (!values.Date ) {
                errors.Date  = 'Required';
            }

            if (!values.patient) {
                errors.patient = 'Required';
            }
            if (!values.doctor) {
                errors.doctor = 'Required';
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
                    {/* type */}
                    <div className="form-control flex flex-row items-center mb-5 gap-4 ml-[123px] ">
                    <label className="mb-2" htmlFor="type">
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
                    <div className="form-control flex flex-row items-center gap-4 mb-5 ml-[75px] ">
                        <label className="mb-2" htmlFor="description">
                            Description
                        </label>
                        <textarea className="border-2 border-stone-300 p-3 w-[225px] rounded-lg " id="description" name="description" type="text" onChange={formik.handleChange} value={formik.values.description} placeholder="Write from here" />
                        {formik.errors.description && formik.touched.description && (
                            <div className="text-red-500">Description is required</div>
                        )}
                    </div>


                    {/* Date */}
                    <div className="form-control flex flex-row items-center gap-4 mb-5 ml-[125px] ">
                        <label className="mb-2" htmlFor="Date">
                        Date
                        </label>
                        <input className="border-2 border-stone-300 p-3 w-[225px] rounded-lg  " id="Date" name="Date" type="date" onChange={formik.handleChange} value={formik.values.Date} placeholder="Enter your allotment time" />
                        {formik.errors.Date && formik.touched.Date && (
                            <div className="text-red-500">Date is required</div>
                        )}
                    </div>


                    {/* Doctor */}
                    <div className="form-control flex flex-row items-center mb-5 gap-4 ml-[112px] ">
                    <label className="mb-2" htmlFor="doctor">
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

                        {/*patient*/}

                        <div className="form-control flex flex-row items-center gap-4  ml-[112px] ">
                    <label className="mb-2" htmlFor="patient">
                        Patient
                        </label>
                    <CustomSelect
                            id="patient"
                            name="patient"
                            onChange={(selectedOption) => formik.setFieldValue("patient", selectedOption)}
                            value={formik.values.patient}
                            options={pName}
                        />
                        </div>


                </div>

                <div className=" pl-[180px] " >
                    <button type="submit" className=" px-5 py-3 rounded-md shadow-xl hover:bg-[#06ac3a] hover:scale-105 bg-[#099635] text-white font-bold">Add Report</button>
                </div>
            </form>
        </div>
    </div>
    );
};

export default AddReport;