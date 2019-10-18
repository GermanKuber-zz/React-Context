import React from "react";
import { Sponsor } from "../../../services/models/sponsor";
import { withFormik, FormikProps, Form, Field } from "formik";
import * as yup from "yup"; // for everything
// Shape of form values
interface FormValues {
  id: number;
  name: string;
  description: string;
  picture: string;
}

const EditSponsorForm = (props: FormikProps<FormValues>) => {
  const { touched, errors, isSubmitting } = props;
  return (
    <Form>
      <div className="form-group">
        <label>Nombre</label>
        <Field type="name" name="name" className="form-control" />
        {touched.name && errors.name && (
          <div className="form-error">{errors.name}</div>
        )}
      </div>
      <div className="form-group">
        <label>Descripción</label>
        <Field
          component="textarea"
          rows="4"
          type="description"
          name="description"
          className="form-control"
        />
        {touched.description && errors.description && (
          <div className="form-error">{errors.description}</div>
        )}
      </div>
      <div className="form-group">
        <label>Logo</label>
        <Field type="picture" name="picture" className="form-control" />
        {touched.picture && errors.picture && (
          <div className="form-error">{errors.picture}</div>
        )}
      </div>
      <button type="submit" disabled={isSubmitting} className="btn btn-primary">
        Submit
      </button>
    </Form>
  );
};

interface MyFormProps {
  id: number;
  name: string;
  description: string;
  picture: string;
  saveSponsor: (sponsor: Sponsor) => void;
}
const EditAllSponsorFormik = withFormik<MyFormProps, FormValues>({
  mapPropsToValues: props => {
    return {
      ...props
    };
  },
  validationSchema: yup.object<MyFormProps>().shape({
    name: yup.string().required("Nombre Requerido"),
    picture: yup.string().required("Logo Requerido")
  }),

  handleSubmit: (values: any, { props }) => {
    props.saveSponsor(values);
  }
})(EditSponsorForm);

type EditAllSponsorProps = {
  id: number;
  name: string;
  description: string;
  picture: string;
  saveSponsor: (sponsor: Sponsor) => void;
};
const EditAllSponsor: React.SFC<EditAllSponsorProps> = props => {
  return (
    <>
      <h1>{props.name}</h1>
      <EditAllSponsorFormik {...props}></EditAllSponsorFormik>
    </>
  );
};
export default EditAllSponsor;
