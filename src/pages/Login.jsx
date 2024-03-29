import { Link } from "react-router-dom";
import { Formik } from 'formik';
import "../index.css";
function Login() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center bg-[#272727]">
      <div className="left-bar hidden md:hidden lg:block border-r-4 border-r-[#6EEB83]">
        <div className="left-bar-shadow flex justify-center items-center">
          <h1 className="text-[64px] text-white text-center font-[700] -rotate-90">
            Login
          </h1>
        </div>
      </div>

      <div className="signUp-forms w-full md:w-[80%] lg:w-[70%] md:h-auto lg:h-screen md:flex md:flex-col md:justify-center p-[20px] md:p-[40px] lg:p-[130px]">
        <div>
          <h1 className="text-white text-[48px] font-[400] leading-normal">
            Welcome
          </h1>
          <p className="text-[#A5A5A5] text-[24px] font-[300] leading-normal">
            Let’s sign you up quickly
          </p>
        </div>

     <Formik
       initialValues={{ email: '', password: '' }}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
        <form onSubmit={handleSubmit} className="inputs flex flex-col space-y-[25px] mt-[40px] md:mt-[30px]">
          <input
            className="w-full md:w-[70%] lg:w-[600px] h-[60px] text-[16px] font-[400] text-[#A5A5A5] py-[20px] pl-[30px] border-2 border-[#6EEB83] bg-[#272727] focus:outline-none transition duration-300 ease-in-out transform hover:scale-105"
            type="email"
             name="email"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}
            placeholder="Enter your email"
          />
        {errors.email && touched.email && errors.email}
          <input
            className="w-full md:w-[70%] lg:w-[600px] h-[60px] text-[16px] font-[400] text-[#A5A5A5] py-[20px] pl-[30px] border-2 border-[#6EEB83] bg-[#272727] focus:outline-none transition duration-300 ease-in-out transform hover:scale-105"
            type="password"
             name="password"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.password}
            placeholder="Enter password"
          />
        {errors.password && touched.password && errors.password}

        <div className="buttons flex flex-col md:flex-row justify-between mt-[22px]">
        <button className = "text-center text-[20px] w-full md:w-[40%] lg:w-[auto] bg-[#6EEB83] py-[18px] px-[48px] font-[600] active:scale-95 duration-200 uppercase hover:bg-green-500 hover:text-white hover:rounded-5 hover:shadow-md hover:shadow-lg hover:shadow-xl hover:shadow-2xl md:w-auto md:mr-[20px] transition duration-300 ease-in-out transform hover:scale-105" type="submit" disabled={isSubmitting}>
             LOGIN
           </button>
          <div className="mt-[20px] md:mt-0">
            <Link to={'/signUp'} className="text-[20px] font-[400] leading-normal text-white cursor-pointer">
              don’t have an account?
            </Link>
            <br />
            <Link to={'/signUp'} className="text-[20px] font-[400] leading-normal text-[#6EEB83] cursor-pointer ">
              sign-up
            </Link>
          </div>
        </div>
        </form>
       )}
     </Formik>
     
      </div>
    </div>
  );
}

export default Login;
