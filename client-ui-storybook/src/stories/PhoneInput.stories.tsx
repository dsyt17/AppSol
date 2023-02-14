import PhoneInput from "../aqua-delivery-web-client-ui/components/ui/inputs/PhoneInput";
import React from "react";

export default {
  title: "Aqua/PhoneInput",
  component: PhoneInput,
};

export const Default = () => <PhoneInput value="" onChange={() => {}} />;

const Template = (props) => <PhoneInput {...props} />;

export const Custom = Template.bind({});
Custom.props = {};
