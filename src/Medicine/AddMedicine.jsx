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
            productName: '',
            genericName: '',
            longDescription: '',
            shortDescription: '',
            productCompany: '',
            stripSize: '',
            price: '',
            productPower: '',
            productType :null,
          
        },

        validate: (values) => {
            const errors = {};

            if (!values.productName) {
                errors.productName = 'Required';
            }
            if (!values.genericName) {
                errors.genericName = 'Required';
            }
            if (!values.shortDescription) {
                errors.shortDescription = 'Required'
            }
            if (!values.longDescription) {
                errors.longDescription = 'Required'
            }
            if (!values.productPower) {
                errors.productPower = 'Required';
            }

            if (!values.productCompany) {
                errors.productCompany = 'Required';
            }
            if (!values.stripSize) {
                errors.stripSize = 'Required';
            }
            if (!values.price) {
                errors.price = 'Required';
            }
      
            if (!values.productType) {
                errors.productType = 'Required';
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
                  {/* productName */}
                    <div className="form-control flex flex-row items-center gap-4 mb-5  ">
                        <label className="mb-2 w-40 text-right" htmlFor="productName">
                        Product Name
                        </label>
                        <CustomInput id="productName" name="productName" type="text" onChange={formik.handleChange} value={formik.values.productName} placeholder="Enter product name" />
                        {formik.errors.productName && formik.touched.productName && (
                            <div className="text-red-500">Product name is required</div>
                        )}
                    </div>

                   {/* productCompany */}
                    <div className="form-control flex flex-row items-center gap-4 mb-5 ">
                        <label className="mb-2 w-40 text-right"  htmlFor="productCompany">
                        Product Company
                        </label>
                        <CustomInput id="productCompany" name="productCompany" type="text" onChange={formik.handleChange} value={formik.values.productCompany} placeholder=" Enter company name" />
                        {formik.errors.productCompany && formik.touched.productCompany && (
                            <div className="text-red-500">Product Company is required</div>
                        )}
                    </div>

                  {/* genericName */}
                  <div className="form-control flex flex-row items-center gap-4 mb-5  ">
                        <label className="mb-2 w-40 text-right" htmlFor="genericName">
                        Generic Name
                        </label>
                        <CustomInput id="genericName" name="genericName" type="text" onChange={formik.handleChange} value={formik.values.genericName} placeholder="Enter product name" />
                        {formik.errors.genericName && formik.touched.genericName && (
                            <div className="text-red-500">Generic Name is required</div>
                        )}
                    </div>

                {/* Medicine Category  */}
                <div className="form-control flex flex-row items-center gap-4 mb-5 ">
                    <label className="mb-2 w-40 text-right" htmlFor="productType">
                    Product Type 
                        </label>
                    <CustomSelect
                            id="productType"
                            name="productType"
                            onChange={(selectedOption) => formik.setFieldValue("productType", selectedOption)}
                            value={formik.values.productType}
                            options={blood}
                        />
                        </div>

                    
                  {/* productPower */}
                    <div className="form-control flex flex-row items-center gap-4 mb-5  ">
                        <label className="mb-2 w-40 text-right" htmlFor="productPower">
                        Product Power
                        </label>
                        <CustomInput id="productPower" name="productPower" type="text" onChange={formik.handleChange} value={formik.values.productPower} placeholder="Enter product name" />
                        {formik.errors.productPower && formik.touched.productPower && (
                            <div className="text-red-500">Product Power is required</div>
                        )}
                    </div>


                   {/* short Description */}
                    <div className="form-control flex flex-row items-center gap-4 mb-5  ">
                        <label className="mb-2 w-40 text-right" htmlFor="shortDescription">
                        Short Description
                        </label>
                        <textarea className="border-2 border-stone-300 p-3 w-[225px] rounded-lg " id="shortDescription" name="shortDescription" type="text" onChange={formik.handleChange} value={formik.values.shortDescription} placeholder="Write from here" />
                        {formik.errors.shortDescription && formik.touched.shortDescription && (
                            <div className="text-red-500"> description is required</div>
                        )}
                    </div>


                    {/* long Description */}
                    <div className="form-control flex flex-row items-center gap-4 mb-5 ">
                        <label className="mb-2 w-40 text-right" htmlFor="longDescription">
                            Long Description
                        </label>
                        <textarea className="border-2 border-stone-300 p-3 w-[225px] rounded-lg " id="longDescription" name="longDescription" type="text" onChange={formik.handleChange} value={formik.values.longDescription} placeholder="Write from here" />
                        {formik.errors.longDescription && formik.touched.longDescription && (
                            <div className="text-red-500">Description is required</div>
                        )}
                    </div>


                        {/* stripSize */}
                        <div className="form-control flex flex-row items-center gap-4 mb-5 ">
                        <label className="mb-2 w-40 text-right" htmlFor="stripSize">
                            Strip Size
                        </label>
                        <CustomInput id="stripSize" name="stripSize" type="number" onChange={formik.handleChange} value={formik.values.stripSize} placeholder="Enter the stripSize" />
                        {formik.errors.stripSize && formik.touched.stripSize && (
                            <div className="text-red-500">Strip Size is required</div>
                        )}
                    </div>

                        {/* Price */}
                        <div className="form-control flex flex-row items-center gap-4 mb-5 ">
                        <label className="mb-2 w-40 text-right" htmlFor="price">
                            Price
                        </label>
                        <CustomInput id="price" name="price" type="number" onChange={formik.handleChange} value={formik.values.price} placeholder="Enter the price" />
                        {formik.errors.price && formik.touched.price && (
                            <div className="text-red-500">price is required</div>
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