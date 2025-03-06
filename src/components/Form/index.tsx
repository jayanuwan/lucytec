import React from "react";
import ReactDOM from "react-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const validationSchema = yup.object({
  name: yup.string().required("Name is required"),
  age: yup
    .number()
    .min(2, "Age should be of minimum 2 characters length")
    .required("Age is required"),
  city: yup.string().required("City is required"),
});

const Form = ({ getFormData }: any) => {
  const formik = useFormik({
    initialValues: {
      id: "",
      name: "",
      age: 0,
      city: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      values.id = "id" + Math.random().toString(16).slice(2);
      values.age = Number(values.age);
      getFormData(values);
      formik.resetForm();
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="name"
          name="name"
          label="Name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
          margin="normal"
        />

        <TextField
          fullWidth
          id="age"
          name="age"
          label="Age"
          value={formik.values.age}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.age && Boolean(formik.errors.age)}
          helperText={formik.touched.age && formik.errors.age}
          margin="normal"
        />

        <TextField
          fullWidth
          id="city"
          name="city"
          label="City"
          value={formik.values.city}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.city && Boolean(formik.errors.city)}
          helperText={formik.touched.city && formik.errors.city}
          margin="normal"
        />

        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Form;
