import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function LoginPage() {
  return (
    
    <div>

      <div style={{ padding: '50px 0', marginTop: "80px"  }}>
        <div style={{ maxWidth: '350px', margin: '0 auto', padding: '20px', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" style={{ width: '300px', height: 'auto' }} alt="Sample image" />
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '30px' }}>
          </div>
          <Formik
            initialValues={{ email: '', password: '', rememberMe: false }}
            validationSchema={Yup.object().shape({
              email: Yup.string().email('Invalid email').required('Email is required'),
              password: Yup.string().required('Password is required'),
            })}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <div style={{ padding: '0 20px', marginBottom: '20px' }}>
                  <Field type="email" name="email" placeholder="Email address" style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', marginBottom: '10px' }} />
                  <ErrorMessage name="email" component="div" style={{ color: 'red', marginBottom: '5px' }} />

                  <Field type="password" name="password" placeholder="Password" style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', marginBottom: '10px' }} />
                  <ErrorMessage name="password" component="div" style={{ color: 'red', marginBottom: '5px' }} />

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                    <label style={{ cursor: 'pointer' }}>
                      <Field type="checkbox" name="rememberMe" />
                      Remember me
                    </label>
                    <a href="#!" style={{ textDecoration: 'none', color: '#007bff', fontWeight: 'bold' }}>Forgot password?</a>
                  </div>
                  <button type="submit" disabled={isSubmitting} style={{ backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', padding: '10px 20px', width: '100%', cursor: 'pointer', fontWeight: 'bold', marginBottom: '10px' }}>Login</button>
                  <p style={{ textAlign: 'center', marginBottom: '0', fontWeight: 'bold' }}>Don't have an account? <a href="/register     " style={{ textDecoration: 'none', color: '#dc3545' }}>Register</a></p>
                </div>
              </Form>
            )}
          </Formik>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>

          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
