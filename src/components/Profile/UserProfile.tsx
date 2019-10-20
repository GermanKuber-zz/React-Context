import React, { useState, useEffect } from "react";
import { FormikProps, Field, Form, withFormik } from "formik";
import { UserDetail } from "../../services/models/UserDetail";
import * as yup from "yup";
import { getUserProfile } from "../../services/userServices";
import { ShareProfile } from "./ShareProfile";
interface FormValues {
  id: number;
  email: string;
  name: string;
  lastName: string;
  linkedin: string;
  twitter: string;
  github: string;
  instagram: string;
  biography: string;
}

const UserProfileForm = (props: FormikProps<FormValues>) => {
  const { touched, errors, isSubmitting } = props;
  return (
    <>
      <ShareProfile urlToShare={"www.google.com.ar"}></ShareProfile>
      <Form>
        <div className="form-group">
          <label>Nombre</label>
          <Field type="name" name="name" className="form-control" />
          {touched.name && errors.name && (
            <div className="form-error alert alert-danger">{errors.name}</div>
          )}
        </div>
        <div className="form-group">
          <label>Apellido</label>
          <Field type="name" name="lastName" className="form-control" />
          {touched.lastName && errors.lastName && (
            <div className="form-error alert alert-danger">
              {errors.lastName}
            </div>
          )}
        </div>
        <div className="form-group">
          <label>Email</label>
          <Field type="name" name="name" className="form-control" />
          {touched.email && errors.email && (
            <div className="form-error alert alert-danger">{errors.email}</div>
          )}
        </div>
        <div className="form-group">
          <label>Linkedin</label>
          <Field type="name" name="name" className="form-control" />
          {touched.linkedin && errors.linkedin && (
            <div className="form-error alert alert-danger">
              {errors.linkedin}
            </div>
          )}
        </div>
        <div className="form-group">
          <label>Biografía</label>
          <Field
            component="textarea"
            rows="4"
            type="lastName"
            name="lastName"
            className="form-control"
          />
          {touched.biography && errors.biography && (
            <div className="form-error alert alert-danger">
              {errors.biography}
            </div>
          )}
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn btn-primary"
        >
          Submit
        </button>
      </Form>
    </>
  );
};

interface MyFormProps extends UserDetail {
  saveUser: (user: UserDetail) => void;
}
const EditAllUserFormik = withFormik<MyFormProps, FormValues>({
  mapPropsToValues: props => {
    return {
      ...props
    };
  },
  validationSchema: yup.object<MyFormProps>().shape({
    email: yup
      .string()
      .email()
      .required("Email Requerido"),
    name: yup.string().required("Nombre Requerido"),
    lastName: yup.string().required("Nombre Requerido"),
    linkedin: yup.string(),
    twitter: yup.string(),
    github: yup.string(),
    instagram: yup.string()
  }),
  handleSubmit: (values: any, { props }) => {
    props.saveUser(values);
  }
})(UserProfileForm);

type EditAllSponsorProps = {};
const EditAllSponsor: React.SFC<EditAllSponsorProps> = props => {
  const [userDetail, setUserDetail] = useState({} as UserDetail);

  useEffect(() => {
    getUserProfile(0).then(u => setUserDetail(u));
  }, []);
  const saveUser = (user: UserDetail) => {};
  return (
    <>
      <EditAllUserFormik
        {...userDetail}
        saveUser={saveUser}
      ></EditAllUserFormik>
    </>
  );
};
export default EditAllSponsor;
