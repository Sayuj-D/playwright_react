import React from "react";
// import Form from "@/components/form";
import Count from "@/components/count";
import Toggle from "@/components/toggle";
import Revised_form from "@/components/revised_form";
import ThemeToggle from "@/components/useref_toggle";

const page = () => {
  return (
    <div>
      {/* <Form /> */}
      <Count />
      <ThemeToggle />
      <Toggle />
      <Revised_form />
    </div>
  );
};

export default page;
