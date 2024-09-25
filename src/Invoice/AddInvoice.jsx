import { useFormik } from "formik";
import CustomSelect from "../CustomSelect";
import CustomInput from "../CustomInput";

const AddInvoice = () => {

    const name = [
        { value: 'Sakib', label: 'Sakib' },
        { value: 'Jamil', label: 'Jamil' },
        { value: 'Nahid', label: 'Nahid' },
        { value: 'Shariar', label: 'Shariar' },
        { value: 'Siam', label: 'Siam' }

      ]

    const type = [
        { value: 'Unpaid', label: 'Unpaid' },
        { value: 'Paid', label: 'Paid' }

      ]


    const formik = useFormik({
        initialValues: {
            title: '',
            amount: '',
            patient: null,
            discrimination: '',
            status:null,
          
        },

        validate: (values) => {
            const errors = {};

            if (!values.patient) {
                errors.patient = 'Required';
            }
            if (!values.title) {
                errors.title = 'Required';
            }
            if (!values.amount) {
                errors.amount = 'Required';
            }
            if (!values.discrimination) {
                errors.discrimination = 'Required'
            }
            if (!values.status) {
                errors.status = 'Required';
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

                        {/*patient*/}

                        <div className="form-control flex flex-row items-center gap-4 mb-5  ">
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

                  {/* title  */}
                    <div className="form-control flex flex-row items-center gap-4 mb-5 ">
                        <label className="mb-2 w-40 text-right" htmlFor="title">
                        Title
                        </label>
                        <CustomInput id="title" name="title" type="text" onChange={formik.handleChange} value={formik.values.title} placeholder="Enter the bed number" />
                        {formik.errors.title && formik.touched.title && (
                            <div className="text-red-500">Title is required</div>
                        )}
                    </div>
                  {/* amount  */}
                  <div className="form-control flex flex-row items-center gap-4 mb-5  ">
                        <label className="mb-2 w-40 text-right" htmlFor="amount">
                        Amount 
                        </label>
                        <CustomInput id="amount" name="amount" type="number" onChange={formik.handleChange} value={formik.values.amount} placeholder="Enter the bed number" />
                        {formik.errors.amount && formik.touched.amount && (
                            <div className="text-red-500">Amount is required</div>
                        )}
                    </div>
                    
                    {/* discrimination */}
                    <div className="form-control flex flex-row items-center gap-4 mb-5 ">
                        <label className="mb-2 w-40 text-right" htmlFor="discrimination">
                            Discrimination
                        </label>
                        <textarea className="border-2 border-stone-300 p-3 w-[225px] rounded-lg " id="discrimination" name="discrimination" type="text" onChange={formik.handleChange} value={formik.values.discrimination} placeholder="Write from here" />
                        {formik.errors.discrimination && formik.touched.discrimination && (
                            <div className="text-red-500">Discrimination is required</div>
                        )}
                    </div>

                    {/* status */}
                    <div className="form-control flex flex-row items-center  gap-4  ">
                    <label className="mb-2 w-40 text-right" htmlFor="status">
                    Status
                        </label>
                    <CustomSelect
                            id="status"
                            name="status"
                            onChange={(selectedOption) => formik.setFieldValue("status", selectedOption)}
                            value={formik.values.status}
                            options={type}
                        />
                        </div>

                </div>

                <div className=" pl-[190px] " >
                    <button type="submit" className=" px-5 py-3 rounded-md shadow-xl hover:bg-[#06ac3a] hover:scale-105 bg-[#099635] text-white font-bold">Add Invoice</button>
                </div>
            </form>
        </div>
    </div>
    );
};

export default AddInvoice;