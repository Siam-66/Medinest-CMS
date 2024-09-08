import { useFormik } from "formik";
import CustomInput from "./CustomInput";
import CustomSelect from "./CustomSelect";


const Login = () => {


    const options = [
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' }
    ]
    const city = [
      { value: 'dhaka', label: 'dhaka' },
      { value: 'city', label: 'city' },
      { value: 'vanilla', label: 'Vanilla' }
    ]
 
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            name:'',
            message:'',
            category:null,
            cities:null
          
        },
        validate: (values) => {
            const errors = {};

            if (!values.email) {
                errors.email = 'Required';
            }
            if (!values.password) {
                errors.password = 'Required';
            }
            if (!values.name) {
                errors.name = 'Required';
            }
            if (!values.message) {
                errors.message = 'Required';
            }
            if (!values.category) {
                errors.category = 'Required';
            }

  


            return errors;
        },
        onSubmit: async (values) => {
          console.log(values)
        },
    });

    return (

        <div>
            <div className="font-italic text-center text-xl">
                About Us
            </div>

            <form className="card-body" onSubmit={formik.handleSubmit}>
                {/* row 1 */}
                <div className="grid lg:grid-cols-2 gap-2">
                  {/* email */}
                    <div className="form-control">
                        <label className="mb-2" htmlFor="email">
                            Email
                        </label>
                        <CustomInput id="email" name="email" type="email" onChange={formik.handleChange} value={formik.values.email} placeholder="Email enter" />
                        {formik.errors.email && formik.touched.email && (
                            <div className="text-red-500">Email is required</div>
                        )}
                    </div>
                    {/* password */}
                    <div className="form-control">
                        <label className="mb-2" htmlFor="password">
                            password
                        </label>
                        <CustomInput
                            id="password"
                            name="password"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.password}
                            placeholder="password enter"
                           
                        />
                        {formik.errors.password && formik.touched.password && (
                            <div className="text-red-500">password is required</div>
                        )}
                    </div>
                    {/* name */}
                    <div className="form-control">
                        <label className="mb-2" htmlFor="name">
                            name
                        </label>
                        <CustomInput
                            id="name"
                            name="name"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.name}
                            placeholder="name"
                            
                        />
                        {formik.errors.name && formik.touched.name && (
                            <div className="text-red-500">Name is required</div>
                        )}
                    </div>
                {/* message */}
                    <div className="form-control">
                        <label className="mb-2" htmlFor="message">
                            Message
                        </label>
                        <input
                            id="message"
                            name="message"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.message}
                            placeholder="message"
                            className="input input-bordered"
                        />
                        {formik.errors.message && formik.touched.message && (
                            <div className="text-red-500">Message is required</div>
                        )}
                    </div>

                    {/* select */}
                    <CustomSelect
                            id="category"
                            name="category"
                            onChange={(selectedOption) => formik.setFieldValue("category", selectedOption)}
                            value={formik.values.category}
                            
                            options={options}
                        />
                    <CustomSelect
                            id="cities"
                            name="cities"
                            onChange={(selectedOption) => formik.setFieldValue("cities", selectedOption)}
                            value={formik.values.cities}
                            
                            options={city}
                        />

                </div>
                

                <button type="submit" className="btn bg-[#1dc753] text-white font-bold">Submit</button>
            </form>
        </div>
    );
};

export default Login;