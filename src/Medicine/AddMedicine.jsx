import { useFormik } from "formik";
import CustomInput from "../CustomInput";
import CustomSelect from "../CustomSelect";


const AddMedicine = () => {

    const blood = [
        { value: 'Allergy Liquids', label: 'Allergy Liquids' },
        { value: 'Capsules', label: 'Capsules' },
        { value: 'Drops', label: 'Drops' },
        { value: 'Inhalers', label: 'Inhalers' },
        { value: 'Injections', label: 'Injections' },
        { value: 'Implants or patches', label: 'Implants or patches' },
        { value: 'Liquid', label: 'Liquid' },
        { value: 'Tablet', label: 'Tablet' },
        { value: 'Topical medicines', label: 'Topical medicines' },
        { value: 'Vitamins Tablets', label: 'Vitamins Tablets' }
        
        
      ]

  
    const formik = useFormik({
        initialValues: {
            name: '',
            description: '',
            medicineCategoryDescription: '',
            manufacturingCompany: '',
            status: '',
            Price: '',
            medicineCategory :null,
          
        },

        validate: (values) => {
            const errors = {};

            if (!values.name) {
                errors.name = 'Required';
            }
            if (!values.medicineCategoryDescription) {
                errors.medicineCategoryDescription = 'Required'
            }
            if (!values.description) {
                errors.description = 'Required'
            }

            if (!values.manufacturingCompany) {
                errors.manufacturingCompany = 'Required';
            }
            if (!values.status) {
                errors.status = 'Required';
            }
            if (!values.Price) {
                errors.Price = 'Required';
            }
      
            if (!values.medicineCategory) {
                errors.medicineCategory = 'Required';
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
                    <div className="form-control flex flex-row items-center gap-4 mb-5  ">
                        <label className="mb-2 w-40 text-right" htmlFor="name">
                        Medicine Name
                        </label>
                        <CustomInput id="name" name="name" type="text" onChange={formik.handleChange} value={formik.values.name} placeholder="Enter medicine name" />
                        {formik.errors.name && formik.touched.name && (
                            <div className="text-red-500">Medicine name is required</div>
                        )}
                    </div>
                    
                {/* Medicine Category  */}
                <div className="form-control flex flex-row items-center gap-4 mb-5 ">
                    <label className="mb-2 w-40 text-right" htmlFor="medicineCategory">
                    Medicine Category  
                        </label>
                    <CustomSelect
                            id="medicineCategory"
                            name="medicineCategory"
                            onChange={(selectedOption) => formik.setFieldValue("medicineCategory", selectedOption)}
                            value={formik.values.medicineCategory}
                            options={blood}
                        />
                        </div>

                    


                    {/* medicineCategoryDescription */}
                    <div className="form-control flex flex-row items-center gap-4 mb-5  ">
                        <label className="mb-2 w-40 text-right" htmlFor="medicineCategoryDescription">
                            Category Description
                        </label>
                        <textarea className="border-2 border-stone-300 p-3 w-[225px] rounded-lg " id="medicineCategoryDescription" name="medicineCategoryDescription" type="text" onChange={formik.handleChange} value={formik.values.medicineCategoryDescription} placeholder="Write from here" />
                        {formik.errors.medicineCategoryDescription && formik.touched.medicineCategoryDescription && (
                            <div className="text-red-500">Category description is required</div>
                        )}
                    </div>



                   {/* manufacturingCompany */}
                    <div className="form-control flex flex-row items-center gap-4 mb-5 ">
                        <label className="mb-2 w-40 text-right"  htmlFor="manufacturingCompany">
                            Manufacturing <br /> Company Name
                        </label>
                        <CustomInput id="manufacturingCompany" name="manufacturingCompany" type="text" onChange={formik.handleChange} value={formik.values.manufacturingCompany} placeholder=" Enter company name" />
                        {formik.errors.manufacturingCompany && formik.touched.manufacturingCompany && (
                            <div className="text-red-500">Manufacturing company nsame is required</div>
                        )}
                    </div>

                        {/* Price */}
                        <div className="form-control flex flex-row items-center gap-4 mb-5 ">
                        <label className="mb-2 w-40 text-right" htmlFor="Price">
                            Price
                        </label>
                        <CustomInput id="Price" name="Price" type="number" onChange={formik.handleChange} value={formik.values.Price} placeholder="Enter the price" />
                        {formik.errors.Price && formik.touched.Price && (
                            <div className="text-red-500">Price is required</div>
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
                    {/* status */}
                    <div className="form-control flex flex-row items-center gap-4  ">
                        <label className="mb-2 w-40 text-right" htmlFor="status">
                            Status
                        </label>
                        <textarea className="border-2 border-stone-300 p-3 w-[225px] rounded-lg " id="status" name="status" type="text" onChange={formik.handleChange} value={formik.values.status} placeholder="Write from here" />
                        {formik.errors.status && formik.touched.status && (
                            <div className="text-red-500">Status is required</div>
                        )}
                    </div>



                </div>

                <div className=" pl-[170px] " >
                    <button type="submit" className=" px-5 py-3 rounded-md shadow-xl hover:bg-[#06ac3a] hover:scale-105 bg-[#099635] text-white font-bold">Add Medicine</button>
                </div>
            </form>
        </div>
    </div>
    );
};

export default AddMedicine;