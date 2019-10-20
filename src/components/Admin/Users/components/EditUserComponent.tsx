import React, { useState } from "react";
import { FormikProps, Field, Form, withFormik } from "formik";
import * as yup from "yup";
import { UserToEdit } from "../../../../services/models/User";
interface FormValues {
  id?: number;
  email: string;
  name: string;
  lastName: string;
}

const EditUserComponentForm = (props: FormikProps<FormValues>) => {
  const { touched, errors, isSubmitting } = props;
  return (
    <Form>
      {touched.id && (
        <div className="form-group">
          <label>Id</label>
          <Field type="name" name="id" disabled className="form-control" />
          {touched.id && errors.id && (
            <div className="form-error alert alert-danger">{errors.id}</div>
          )}
        </div>
      )}
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
          <div className="form-error alert alert-danger">{errors.lastName}</div>
        )}
      </div>
      <div className="form-group">
        <label>Email</label>
        <Field type="name" name="email" className="form-control" />
        {touched.email && errors.email && (
          <div className="form-error alert alert-danger">{errors.email}</div>
        )}
      </div>
      <button type="submit" disabled={isSubmitting} className="btn btn-primary">
        Guardar
      </button>
    </Form>
  );
};

interface MyFormProps {
  id: number;
  email: string;
  name: string;
  lastName: string;
  saveUser: (user: UserToEdit) => void;
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
    lastName: yup.string().required("Nombre Requerido")
  }),
  handleSubmit: (values: any, { props }) => {
    props.saveUser(values);
  }
})(EditUserComponentForm);

type EditUserComponentProps = {
  user: UserToEdit;
  saveUser: (user: UserToEdit) => void;
};
export const EditUserComponent: React.SFC<EditUserComponentProps> = ({
  user
}) => {
  const [userToEdit] = useState(user);
  const saveUser = () => {};
  return (
    <>
      <EditAllUserFormik
        {...userToEdit}
        saveUser={saveUser}
      ></EditAllUserFormik>
    </>
  );
};
