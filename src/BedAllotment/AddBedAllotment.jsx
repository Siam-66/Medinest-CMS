import { useFormik } from "formik";
import CustomSelect from "../CustomSelect";

const AddBedAllotment = () => {

    const name = [
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
            allotmentTime : '',
            patient :null,
            dischargeTime: '',
            doctor :null,
          
        },

        validate: (values) => {
            const errors = {};

 
            if (!values.allotmentTime ) {
                errors.allotmentTime  = 'Required';
            }

            if (!values.patient) {
                errors.patient = 'Required';
            }
            if (!values.dischargeTime) {
                errors.dischargeTime = 'Required';
            }
     
            if (!values.doctor) {
                errors.doctor = 'Required';
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

                    {/* Doctor */}
                    <div className="form-control flex flex-row items-center mb-5 gap-4 ">
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

                        {/*patient*/}

                        <div className="form-control flex flex-row items-center gap-4 mb-5 ">
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


                    {/* AllotmentTime */}
                    <div className="form-control flex flex-row items-center gap-4 mb-5 ">
                        <label className="mb-2 w-40 text-right" htmlFor="allotmentTime">
                            Allotment Time
                        </label>
                        <input className="border-2 border-stone-300 p-3 w-[225px] rounded-lg " id="allotmentTime" name="allotmentTime" type="date" onChange={formik.handleChange} value={formik.values.allotmentTime} placeholder="Enter your allotment time" />
                        {formik.errors.allotmentTime && formik.touched.allotmentTime && (
                            <div className="text-red-500">Allotment Time  is required</div>
                        )}
                    </div>



                    {/* dischargeTime */}
                    <div className="form-control flex flex-row items-center gap-4  ">
                        <label className="mb-2 w-40 text-right" htmlFor="dischargeTime">
                            Discharge Time
                        </label>
                        <input className="border-2 border-stone-300 p-3 w-[225px] rounded-lg  " id="dischargeTime" name="dischargeTime" type="date" onChange={formik.handleChange} value={formik.values.dischargeTime} placeholder="Enter your dischargeTime" />
                        {formik.errors.dischargeTime && formik.touched.dischargeTime && (
                            <div className="text-red-500">Discharge Time  is required</div>
                        )}
                    </div>

                </div>

                <div className=" pl-[170px] " >
                    <button type="submit" className=" px-5 py-3 rounded-md shadow-xl hover:bg-[#06ac3a] hover:scale-105 bg-[#099635] text-white font-bold">Add Allotment</button>
                </div>
            </form>
        </div>
    </div>
    );
};

export default AddBedAllotment;