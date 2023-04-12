import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export function YupFormikComponent() {
  const initialValues = {
    firstName1: "",
    email3: ""
  };

  const validationSchema = Yup.object({
    firstName1: Yup.string()
      .max(15, "Ce champ doit contenir 15 caractére ou moins")
      .required("Ce champ doit etre remplis"),
    email3: Yup.string()
      .email("Invalid email")
      .required("Ce champ doit etre remplis")
  });

  const onSubmit = (values, onSubmitProps) => {
    console.log(values);
    onSubmitProps.resetForm();
  };

  return (
    <div className="container">
      <h4>
        Yup with Component Formik "Formik", "Form", "Field", "ErrorMessage"
      </h4>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div className="form-group">
            <Field name="firstName1" type="text" className="form-control" />
          </div>
          <div className="text-danger">
            <ErrorMessage name="firstName1">
              {errorMessage => (
                <div className="text-danger">{errorMessage}</div>
              )}
            </ErrorMessage>
          </div>

          <div className="form-group">
            <Field name="email3" type="email" className="form-control" />
          </div>

          <ErrorMessage name="email3">
            {errorMessage => <div className="text-danger">{errorMessage}</div>}
          </ErrorMessage>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
}
