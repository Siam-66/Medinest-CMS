import { useFormik } from "formik";
import CustomSelect from "../CustomSelect";

const AddPrescription = () => {

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
            caseHistory: '',
            medication: '',
            medicationFormPharmacist: '',
            description : '',
            patient :null,
            date: '',
            doctor :null,
          
        },

        validate: (values) => {
            const errors = {};

            if (!values.caseHistory) {
                errors.caseHistory = 'Required';
            }
            if (!values.medication) {
                errors.medication = 'Required'
            }

            if (!values.medicationFormPharmacist) {
                errors.medicationFormPharmacist = 'Required';
            }
            if (!values.description ) {
                errors.description  = 'Required';
            }

            if (!values.patient) {
                errors.patient = 'Required';
            }
            if (!values.date) {
                errors.date = 'Required';
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

                  {/* caseHistory  */}
                    <div className="form-control flex flex-row items-center gap-4 mb-5 ">
                        <label className="mb-2 w-40 text-right" htmlFor="caseHistory">
                        Case History 
                        </label>
                        <textarea className="border-2 border-stone-300 p-3 w-[225px] rounded-lg " id="caseHistory" name="caseHistory" type="text" onChange={formik.handleChange} value={formik.values.caseHistory} placeholder="Write from here" />
                        {formik.errors.caseHistory && formik.touched.caseHistory && (
                            <div className="text-red-500">Case History  is required</div>
                        )}
                    </div>
                    
                    {/* medication */}
                    <div className="form-control flex flex-row items-center gap-4 mb-5 ">
                        <label className="mb-2 w-40 text-right" htmlFor="medication">
                            Medication
                        </label>
                        <textarea className="border-2 border-stone-300 p-3 w-[225px] rounded-lg " id="medication" name="medication" type="text" onChange={formik.handleChange} value={formik.values.medication} placeholder="Write from here" />
                        {formik.errors.medication && formik.touched.medication && (
                            <div className="text-red-500">Medication is required</div>
                        )}
                    </div>

                   {/* medicationFormPharmacist */}
                    <div className="form-control flex flex-row items-center gap-4 mb-5 ">
                        <label className="mb-2 w-40 text-right" htmlFor="medicationFormPharmacist">
                            Medication Form <br /> Pharmacist
                        </label>
                        <textarea className="border-2 border-stone-300 p-3 w-[225px] rounded-lg " id="medicationFormPharmacist" name="medicationFormPharmacist" type="text" onChange={formik.handleChange} value={formik.values.medicationFormPharmacist} placeholder="Write from here" />
                        {formik.errors.medicationFormPharmacist && formik.touched.medicationFormPharmacist && (
                            <div className="text-red-500">Medication is required</div>
                        )}
                    </div>

                     {/* description */}
                        <div className="form-control flex flex-row items-center gap-4 mb-5 ">
                        <label className="mb-2 w-40 text-right" htmlFor="description">
                        Description
                        </label>
                        <textarea className="border-2 border-stone-300 p-3 w-[225px] rounded-lg " id="description" name="description" type="text" onChange={formik.handleChange} value={formik.values.description} placeholder="Write from here" />
                        {formik.errors.description && formik.touched.description && (
                            <div className="text-red-500">Description is required</div>
                        )}
                    </div>




                    {/* Birth Date */}
                    <div className="form-control flex flex-row items-center gap-4 ">
                        <label className="mb-2 w-40 text-right" htmlFor="date">
                            Date
                        </label>
                        <input className="border-2 border-stone-300 p-3 w-[225px] rounded-lg  " id="date" name="date" type="date" onChange={formik.handleChange} value={formik.values.date} placeholder="Enter your date" />
                        {formik.errors.date && formik.touched.date && (
                            <div className="text-red-500">Date  is required</div>
                        )}
                    </div>

                </div>

                <div className=" pl-[180px] " >
                    <button type="submit" className=" px-5 py-3 rounded-md shadow-xl hover:bg-[#06ac3a] hover:scale-105 bg-[#099635] text-white font-bold">Add Prescription</button>
                </div>
            </form>
        </div>
    </div>
    );
};

export default AddPrescription;