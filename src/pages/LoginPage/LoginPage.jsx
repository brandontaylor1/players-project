import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import '../LoginPage/LoginPage.css';

const LoginPage = () => {

    const handleSubmit = (values, {resetForm}) => {
        console.log('Form Values: ', values)
        console.log('In JSON Format: ', JSON.stringify(values))
        resetForm(); 
    }

    return (
        <section>
                <Formik 
                    initialValues={{
                        email: '',
                        password: '',
                    }}
                    onSubmit={{handleSubmit}}
                >
                <div id="login-page-content">
                    <Form className="login-form">
                        <h1>OMNI</h1>
                        <h2>TITANS SCOUTING</h2>
                        <label htmlFor="email" id="loginEmail">Email </label><br />
                        <Field type="email" id="email" name="email" /><br />
                        <ErrorMessage name="email" component="div" />

                        <label htmlFor="password" id="loginPassword">Password </label> <br />
                        <Field type="password" id="password" name="password" /> <br />
                        <ErrorMessage name="password" component="div" />

                        <button type="submit">Login</button> <br />
                        <button type="submit">Create Account</button>
                    </Form>
                </div>
            </Formik>
                
        </section>
    )
}


export default LoginPage