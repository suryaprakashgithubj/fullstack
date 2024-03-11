import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import sign2 from "../../assets/images/sign2.jpg";

const SignUpPage = () => {
  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required'),
    mobile: Yup.string()
      .matches(/^[0-9]+$/, 'Mobile number must contain only digits')
      .min(10, 'Mobile number must be at least 10 digits')
      .max(12, 'Mobile number cannot exceed 10 digits')
      .required('Mobile number is required'),
    role: Yup.string().required('Role is required'),
  });

  return (
    <div style={styles.container}>
      <img src={sign2} alt="Logo" style={styles.logo} />
      <h2 style={styles.heading}>Sign Up</h2>
      <Formik
        initialValues={{
          username: '',
          email: '',
          password: '',
          confirmPassword: '',
          mobile: '',
          role: 'admin',
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="text" name="username" placeholder="Username" style={styles.input} />
            <ErrorMessage name="username" component="div" style={{ color: 'red' }} />
            <Field type="email" name="email" placeholder="Email" style={styles.input} />
            <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
            <Field type="password" name="password" placeholder="Password" style={styles.input} />
            <ErrorMessage name="password" component="div" style={{ color: 'red' }} />
            <Field type="password" name="confirmPassword" placeholder="Confirm Password" style={styles.input} />
            <ErrorMessage name="confirmPassword" component="div" style={{ color: 'red' }} />
            <Field type="text" name="mobile" placeholder="Mobile Number" style={styles.input} />
            <ErrorMessage name="mobile" component="div" style={{ color: 'red' }} />
            <Field as="select" name="role" style={styles.input}>
              <option value="admin">Admin</option>
              <option value="organiser">Organiser</option>
            </Field>
            <ErrorMessage name="role" component="div" style={{ color: 'red' }} />
            <button type="submit" disabled={isSubmitting} style={styles.submitBtn}>
              {isSubmitting ? 'Submitting...' : 'Sign Up'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '400px',
    margin: '50px auto',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  logo: {
    width: '400px', // Adjusted width
    height: '250px', // Adjusted height
    marginBottom: '20px',
  },
  heading: {
    color: '#333',
  },
  input: {
    width: 'calc(100% - 20px)',
    padding: '10px',
    margin: '10px 0',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxSizing: 'border-box',
  },
  submitBtn: {
    width: 'calc(100% - 20px)',
    padding: '10px',
    margin: '10px 0',
    backgroundColor: '#4caf50',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    boxSizing: 'border-box',
    transition: 'background-color 0.3s ease',
  },
};

export default SignUpPage;
