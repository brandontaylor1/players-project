import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import '../LoginPage/LoginPage.css';

const LoginPage = () => {

    const navigate = useNavigate();

    const handleSubmit = (values, {resetForm}) => {
        console.log('Form Values: ', values)
        console.log('In JSON Format: ', JSON.stringify(values))
        resetForm(); 
    }

    const handleTeamPageClick = () => {
        navigate('/teampage')
    }

    return (
        <section className="login-section">
                <Formik 
                    initialValues={{
                        email: '',
                        password: '',
                    }}
                    onSubmit={{handleSubmit}}
                >
                <div id="login-page-content">
                    <Form className="login-form">
                        <h1>OLYMPUS</h1>
                        <h2>TITANS SCOUTING</h2>
                        <label htmlFor="email" id="loginEmail">Email </label><br />
                        <Field type="email" id="email" name="email" /><br />
                        <ErrorMessage name="email" component="div" />

                        <label htmlFor="password" id="loginPassword">Password </label> <br />
                        <Field type="password" id="password" name="password" /> <br />
                        <ErrorMessage name="password" component="div" />

                        <button type="submit" onClick={handleTeamPageClick}>LOGIN</button> <br />
                        <button type="button">CREATE ACCOUNT</button>
                        <button type="button">FORGOT PASSWORD?</button>
                        <button type="button">VPN/HELP</button>
                    </Form>
                    <div className="login-image-container">
                        <img src="../../src/assets/National_Football_League_logo.png" id="loginNFL"/>
                        <img src="../../src/assets/Tennessee_Titans_logo.png" id="loginTitans"/>
                    </div>
                <footer>
                    <p><span id='footer-span'>Tennessee Titans</span> Football Club</p>
                    <p>Copyright 2024</p>
                </footer>
                </div>
            </Formik>    
        </section>
    )
}


export default LoginPage