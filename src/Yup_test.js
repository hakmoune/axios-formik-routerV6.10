import { useFormik } from "formik";
import * as Yup from "yup";

export function YupTest() {
  // La logique de la validation de notre formulaire avec Yup
  const validationSchema = Yup.object({
    firstName: Yup.string()
      .max(15, "Ce champ doit contenir 15 caractére ou moins")
      .required("Ce champ doit etre remplis"),
    email2: Yup.string()
      .email("Invalid email")
      .required("Ce champ doit etre remplis")
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email2: ""
    },
    validationSchema,
    onSubmit: values => console.log(values)
  });

  return (
    <div className="container">
      <h4>Yup Test</h4>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <input
            id="firstName"
            name="firstName"
            type="text"
            className="form-control"
            {...formik.getFieldProps("firstName")}
          ></input>

          {formik.errors.firstName && formik.touched.firstName ? (
            <div className="text-danger">{formik.errors.firstName}</div>
          ) : null}
        </div>

        <div className="form-group">
          <input
            id="email2"
            name="email2"
            type="email"
            className="form-control"
            {...formik.getFieldProps("email2")}
          />

          {formik.errors.email2 && formik.touched.email2 ? (
            <div className="text-danger">{formik.errors.email2}</div>
          ) : null}
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
