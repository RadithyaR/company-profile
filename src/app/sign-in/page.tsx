import Layout from "@/components/layout";
import SignInView from "@/views/Sign/SignIn";
import React from "react";

const SignIn = () => {
  return (
    <Layout disabledNavbar>
      <SignInView />
    </Layout>
  );
};

export default SignIn;
