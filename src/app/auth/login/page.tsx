"use client";
import React, { useState } from "react";

import * as Yup from "yup";
import clsx from "clsx";
import { useFormik } from "formik";
import Link from "next/link";
import { Button, Card, Divider, Input } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Wrong email format")
    .min(3, "Minimum 3 symbols")
    .max(50, "Maximum 50 symbols")
    .required("Email is required"),
  password: Yup.string()
    .min(3, "Minimum 3 symbols")
    .max(50, "Maximum 50 symbols")
    .required("Password is required"),
});

const initialValues = {
  email: "admin@demo.com",
  password: "demo",
};

const Login = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  // const {saveAuth, setCurrentUser} = useAuth()

  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: async (values, { setStatus, setSubmitting }) => {
      setLoading(true);
      try {
        console.log(values);
        await localStorage.setItem("token", "token");
        await router.push("/dashboard");
        // const {data: auth} = await login(values.email, values.password)
        // saveAuth(auth)
        // const {data: user} = await getUserByToken(auth.api_token)
        // setCurrentUser(user)
        // setTimeout(() => {
        //   setLoading(false);
        // }, 3000);
      } catch (error) {
        console.error(error);
        // saveAuth(undefined)
        // setStatus('The login details are incorrect')
        setSubmitting(false);
        setLoading(false);
      }
    },
  });

  return (
    <form
      className="form w-100"
      // onSubmit={formik.handleSubmit}
      noValidate
      id="kt_login_signin_form"
    >
      {/* begin::Heading */}
      <div className="text-center mb-11">
        <h1 className="text-black font-bold mb-3">Sign In</h1>
        <div className="text-gray-500 fw-semibold fs-6">
          Your Social Campaigns
        </div>
      </div>
      {/* begin::Heading */}

      {/* begin::Login options */}
      {/* <div className="grid grid-cols-2 gap-4 mb-9">
        <Button
          icon={
            <Image
              alt="Logo"
              src="/media/svg/brand-logos/google-icon.svg"
              width={15}
              height={15}
            />
          }
        >
          Sign in with Google
        </Button>

        <Button
          icon={
            <>
              <Image
                alt="Logo"
                src="/media/svg/brand-logos/apple-black.svg"
                className="theme-light-show"
                width={15}
              height={15}
              />
            </>
          }
        >
          Sign in with Apple
        </Button>
      </div> */}
      {/* end::Login options */}

      {/* begin::Separator */}
      {/* <Divider plain>Or with email</Divider> */}
      {/* end::Separator */}

      {formik.status ? (
        <div className="mb-lg-15 alert alert-danger">
          <div className="alert-text font-weight-bold">{formik.status}</div>
        </div>
      ) : (
        <Card size="small" className="p-3 mb-10">
          Use account <strong>admin@demo.com</strong> and password{" "}
          <strong>demo</strong> to continue.
        </Card>
      )}

      {/* begin::Form group */}
      <div className="fv-row mb-3">
        <Input
          placeholder="Email"
          {...formik.getFieldProps("email")}
          className={clsx("", {
            error: formik.touched.email && formik.errors.email,
          })}
          disabled={loading}
        />
        {formik.touched.email && formik.errors.email && (
          <div className="fv-plugins-message-container">
            <span role="alert">{formik.errors.email}</span>
          </div>
        )}
      </div>
      {/* end::Form group */}

      {/* begin::Form group */}
      <div className="fv-row mb-3">
        <Input
          type="password"
          {...formik.getFieldProps("password")}
          // className={clsx("", {
          //   error: formik.touched.password && formik.errors.password,
          // })}
          disabled={loading}
        />
        {formik.touched.password && formik.errors.password && (
          <div className="fv-plugins-message-container">
            <div className="fv-help-block">
              <span role="alert">{formik.errors.password}</span>
            </div>
          </div>
        )}
      </div>
      {/* end::Form group */}

      {/* begin::Wrapper */}
      <div className="mb-8 text-end invisible">
        <Link href="/auth/forgot-password" className="text-blue-500 text-sm">
          Forgot Password ?
        </Link>
      </div>
      {/* end::Wrapper */}

      {/* begin::Action */}
      <div className="grid mb-10">
        <Button
          // type="primary"
          id="kt_sign_in_submit"
          size="large"
          disabled={formik.isSubmitting || !formik.isValid}
          onClick={() => formik.handleSubmit()}
          loading={loading}
        >
          {!loading ? "Continue" : "Please wait..."}
        </Button>
      </div>
      {/* end::Action */}

      <div className="text-gray-500 text-center fw-semibold fs-6 invisible">
        Not a Member yet?{" "}
        <Link href="/auth/registration" className="text-blue-500">
          Sign up
        </Link>
      </div>
    </form>
  );
};

export default Login;
