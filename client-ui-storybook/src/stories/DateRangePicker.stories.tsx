import CountryPicker from "../aqua-delivery-web-client-ui/components/ui/inputs/CountryPicker";
import React from "react";
import { Alpha2Code } from "i18n-iso-countries";

export default {
  title: "Aqua/CountryPicker",
  component: CountryPicker,
  argTypes: {
    value: {
      type: "string",
      description: "Value",
      defaultValue: "Value",
    },
  },
};

type CountryPickerData = { value: Alpha2Code; label: string };

const value: Alpha2Code = "AF";

const props: CountryPickerData = {
  value,
  label: "Ru",
};

export const Default = () => <CountryPicker {...props} />;

const Template = (props) => <CountryPicker {...props} />;

export const ChangeSize = Template.bind({});
ChangeSize.props = {};
