import React from "react";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";

export function YupFormikUseField() {
  const MyTextInput = ({ label, ...props }) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // formik.getFieldProps() return => "onChange", "onBlur", "value", "checked"
    // formik.getFieldMeta() return => errorMessages, touched
    const [field, meta] = useField(props);

    return (
      <React.Fragment>
        <div className="form-group">
          <label htmlFor={props.name || props.id} className="form-label">
            {label}
          </label>

          <input className="form-control" {...field} {...props} />
        </div>

        {meta.touched && meta.error ? (
          <div className="text-danger">{meta.error}</div>
        ) : null}
      </React.Fragment>
    );
  };

  const initialValues = {
    firstName2: "",
    email4: ""
  };

  const validationSchema = Yup.object({
    firstName2: Yup.string()
      .max(15, "Ce champ doit contenir 15 caractére ou moins")
      .required("Ce champ doit etre remplis"),
    email4: Yup.string()
      .email("Invalid email")
      .required("Ce champ doit etre remplis")
  });

  const onSubmit = (values, onSubmitProps) => {
    console.log(values);
    onSubmitProps.resetForm();
  };

  return (
    <div>
      <h4>Yup with Component Formik "UseFeild"</h4>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <MyTextInput
            label="First Name"
            name="firstName2"
            id="firstName2"
            type="text"
            placeholder="First Name"
          />

          <MyTextInput
            label="Email"
            name="email4"
            id="email4"
            type="text"
            placeholder="Email"
          />

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </Form>
      </Formik>

      <hr></hr>
      <br></br>
      <br></br>
    </div>
  );
}
