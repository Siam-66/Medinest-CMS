import { useFormik } from "formik";
import CustomInput from "../CustomInput";

const AddNoticeboard = () => {

    const formik = useFormik({
        initialValues: {
            title: '',
            notice: '',
            date: '',
          
        },

        validate: (values) => {
            const errors = {};

            if (!values.title) {
                errors.title = 'Required';
            }
            if (!values.notice) {
                errors.notice = 'Required'
            }
            if (!values.date) {
                errors.date = 'Required';
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

                  {/* title  */}
                    <div className="form-control flex flex-row items-center gap-4 mb-5 ml-[88px] ">
                        <label className="mb-2" htmlFor="title">
                        Title 
                        </label>
                        <CustomInput id="title" name="title" type="text" onChange={formik.handleChange} value={formik.values.title} placeholder="Enter the title" />
                        {formik.errors.title && formik.touched.title && (
                            <div className="text-red-500">Bed Number is required</div>
                        )}
                    </div>


                    
                    {/* notice */}
                    <div className="form-control flex flex-row items-center mb-5 gap-4  ml-[75px] ">
                        <label className="mb-2" htmlFor="notice">
                            Notice
                        </label>
                        <textarea className="border-2 border-stone-300 p-3 w-[225px] rounded-lg " id="notice" name="notice" type="text" onChange={formik.handleChange} value={formik.values.notice} placeholder="Write from here" />
                        {formik.errors.notice && formik.touched.notice && (
                            <div className="text-red-500">Notice is required</div>
                        )}
                    </div>

                    {/* date */}
                    <div className="form-control flex flex-row items-center gap-4  ml-[88px] ">
                        <label className="mb-2" htmlFor="date">
                        Date
                        </label>
                        <input className="border-2 border-stone-300 p-3 w-[225px] rounded-lg " id="date" name="date" type="date" onChange={formik.handleChange} value={formik.values.date} placeholder="Enter your allotment time" />
                        {formik.errors.date && formik.touched.date && (
                            <div className="text-red-500">Date  is required</div>
                        )}
                    </div>

                </div>

                <div className=" pl-[140px] " >
                    <button type="submit" className=" px-5 py-3 rounded-md shadow-xl hover:bg-[#06ac3a] hover:scale-105 bg-[#099635] text-white font-bold">Add Noticeboard</button>
                </div>
            </form>
        </div>
    </div>
    );
};

export default AddNoticeboard;