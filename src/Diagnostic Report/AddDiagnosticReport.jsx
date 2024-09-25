import { useFormik } from "formik";
import CustomSelect from "../CustomSelect";


const AddDiagnosticReport = () => {

    const name = [
        { value: 'Image', label: 'Image' },
        { value: 'DOC', label: 'DOC' },
        { value: 'PDF', label: 'PDF' },
        { value: 'Excel ', label: 'Excel ' },
        { value: 'Other ', label: 'Other ' },

      ]

      const rName = [
        { value: 'Blood Test', label: 'Blood Test' },
        { value: 'X-ray', label: 'X-ray' },
        { value: 'MRI', label: 'MRI' },
        { value: 'Ultrasound ', label: 'Ultrasound ' },
        { value: 'Ct-scan', label: 'Ct-scan' },
        { value: 'ECG', label: 'ECG' },
        { value: 'Urine Analysis', label: 'Urine Analysis' },
        { value: 'Other ', label: 'Other ' },

      ]

    const formik = useFormik({
        initialValues: {
            reportType: null,
            uploadDocument: '',
            description: '',
            documentType:null,
          
        },

        validate: (values) => {
            const errors = {};

            if (!values.reportType) {
                errors.reportType = 'Required';
            }
            if (!values.uploadDocument) {
                errors.uploadDocument = 'Required';
            }
            if (!values.description) {
                errors.description = 'Required'
            }
            if (!values.documentType) {
                errors.documentType = 'Required';
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


                    {/* reportType */}
                    <div className="form-control flex flex-row items-center mb-5 gap-4 ">
                    <label className="mb-2 w-40 text-right" htmlFor="reportType">
                    Report Type
                        </label>
                    <CustomSelect
                            id="reportType"
                            name="reportType"
                            onChange={(selectedOption) => formik.setFieldValue("reportType", selectedOption)}
                            value={formik.values.reportType}
                            options={rName}
                        />
                        </div>

                    {/* documentType */}
                    <div className="form-control flex flex-row items-center mb-5 gap-4  ">
                    <label className="mb-2 w-40 text-right" htmlFor="documentType">
                    Document Type
                        </label>
                    <CustomSelect
                            id="documentType"
                            name="documentType"
                            onChange={(selectedOption) => formik.setFieldValue("documentType", selectedOption)}
                            value={formik.values.documentType}
                            options={name}
                        />
                        </div>


                  {/* uploadDocument  */}
                  <div className="form-control flex flex-row items-center gap-4 mb-5">
                        <label className="mb-2 w-40 text-right" htmlFor="uploadDocument">
                        Upload Document
                        </label>
                        <input className="border-2 border-stone-300 px-2 py-3 w-[225px] rounded-lg " id="uploadDocument" name="uploadDocument" type="file" onChange={formik.handleChange} value={formik.values.uploadDocument} placeholder="Enter the bed number" />
                        {formik.errors.uploadDocument && formik.touched.uploadDocument && (
                            <div className="text-red-500">Document is required</div>
                        )}
                    </div>

                    
                    {/* description */}
                    <div className="form-control flex flex-row items-center gap-4  ">
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
                    <button type="submit" className=" px-5 py-3 rounded-md shadow-xl hover:bg-[#06ac3a] hover:scale-105 bg-[#099635] text-white font-bold">Add Diagnostic Report</button>
                </div>
            </form>
        </div>
    </div>
    );
};

export default AddDiagnosticReport;