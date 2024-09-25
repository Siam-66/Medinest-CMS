import { useFormik } from "formik";
import CustomInput from "../CustomInput";
import CustomSelect from "../CustomSelect";

const AddAppointment = () => {

    const name = [
        { value: 'Sakib', label: 'Sakib' },
        { value: 'Jamil', label: 'Jamil' },
        { value: 'Nahid', label: 'Nahid' },
        { value: 'Shariar', label: 'Shariar' },
        { value: 'Siam', label: 'Siam' },

      ]

  
    const formik = useFormik({
        initialValues: {

            date: '',
            doctor: '',
            patient :null,
          
        },

        validate: (values) => {
            const errors = {};


            if (!values.date) {
                errors.date = 'Required';
            }
            if (!values.doctor) {
                errors.doctor = 'Required';
            }       
            if (!values.patient) {
                errors.patient = 'Required';
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
                       {/* doctor */}
                       <div className="form-control flex flex-row items-center gap-4 mb-5 ">
                        <label className="mb-2 w-40 text-right" htmlFor="doctor">
                            Doctor
                        </label>
                        <CustomInput id="doctor" name="doctor" type="text" onChange={formik.handleChange} value={formik.values.doctor} placeholder="Enter your Name" />
                        {formik.errors.doctor && formik.touched.doctor && (
                            <div className="text-red-500">Doctor name  is required</div>
                        )}
                    </div>
                    {/* patient */}
                    <div className="form-control mb-5 flex flex-row items-center gap-4  ">
                    <label className="mb-2 w-40 text-right" htmlFor="patient">
                    Patient
                        </label>
                    <CustomSelect
                            id="patient"
                            name="patient"
                            onChange={(selectedOption) => formik.setFieldValue("patient", selectedOption)}
                            value={formik.values.patient}
                            options={name}
                        />
                        </div>

                      {/* Date */}
                    <div className="form-control flex flex-row items-center gap-4 ">
                        <label className="mb-2 w-40 text-right" htmlFor="date">
                        Date
                        </label>
                        
                        <input className="border-2 border-stone-300 p-3 w-[225px] rounded-lg  " id="date" name="date" type="date" onChange={formik.handleChange} value={formik.values.date} placeholder="Enter your Last Donation Date" />
                        {formik.errors.date && formik.touched.date && (
                            <div className="text-red-500">Date  is required</div>
                        )}
                    </div>

                </div>

                <div className=" pl-[95px] " >
                    <button type="submit" className=" px-5 py-3 rounded-md shadow-xl hover:bg-[#06ac3a] hover:scale-105 bg-[#099635] text-white font-bold">Add Appointment</button>
                </div>
            </form>
        </div>
    </div>
    );
};

export default AddAppointment;