import { useFormik } from "formik";

export function FormikTest() {
  // La logique de la validation de notre formulaire
  const validate = values => {
    let errors = {};

    if (!values.email) {
      errors.email = "Le champ email est obligatoire";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Email invalide";
    }

    if (!values.password) {
      errors.password = "Le champ password est obligatoire";
    } else if (values.password.length < 15) {
      errors.password = "Password doit contenir 15 caractères ou moins";
    }

    return errors;
  };

  //Pour gerer notre formulaire avec Formik
  const formik = useFormik({
    initialValues: {
      email: "", // on travaille soit avec "name" ou "id" du champ
      password: ""
    },
    validate,
    onSubmit: values => {
      console.log(values); // récupérer les valeurs de notre formulaire
    }
  });

  return (
    <div>
      <h4>Formik Test</h4>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <input
            id="email"
            name="email"
            type="email"
            className="form-control"
            onChange={formik.handleChange} //Pour récupérer la valeur du champ
            onBlur={formik.handleBlur}
            value={formik.values.email} // Our form’s current values
          ></input>

          {formik.errors.email && formik.touched.email ? (
            <div className="text-danger">{formik.errors.email}</div>
          ) : null}
        </div>

        <div className="form-group">
          <input
            id="password"
            name="password"
            type="password"
            className="form-control"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />

          {formik.errors.password && formik.touched.password ? (
            <div className="text-danger">{formik.errors.password}</div>
          ) : null}
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
