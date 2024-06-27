import React from "react";
// TODO: import useFormik from formik library
import {useFormik} from "formik";

function App() {
  // TODO: add a const called formik assigned to useFormik()
    const regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    const formik = useFormik({
        initialValues:{
            email : '',
            password : ''
        },
        onSubmit: values => {
            alert("Login Successful");
        },
        validate: values => {
            let errors ={};
            if(!values.email) errors.email = "Field required";
            if(!values.password) errors.password = "Field required";
            if(values.email && !regex.test(String(values.email).toLowerCase())) errors.email = "Username should be an email";
            return errors;
        }
    })

  return (
    <div>
        <form onSubmit={formik.handleSubmit}>
            <div>Email</div>
            <input name="email" id="emailField" type="text" onChange={formik.handleChange}/>
            {formik.errors.email ? <div style={{color: 'red'}} id="emailError">{formik.errors.email}</div> : null}

            <div>Password</div>
            <input name="password" id="pswField" type="text" onChange={formik.handleChange}/>
            {formik.errors.password ? <div style={{color: 'red'}} id="pswError">{formik.errors.password}</div> : null}

            <button type="submit" id="submitBtn">Submit</button>
        </form>
    </div>
  );
}

export default App;
