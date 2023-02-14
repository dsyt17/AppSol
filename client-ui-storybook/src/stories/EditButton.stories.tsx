import EditButton from "../aqua-delivery-web-client-ui/components/ui/buttons/EditButton";
import React from "react";

export default {
  title: "Aqua/EditButton",
  component: EditButton,
  argTypes: {
    size: {
      type: "number",
      description: "Button size",
      defaultValue: 14,
      options: [7, 14, 24, 64],
      control: {
        type: "radio",
      },
    },
  },
};

export const Default = () => (
  <EditButton onClick={() => console.log("click")} />
);

export const Size24 = () => (
  <EditButton onClick={() => console.log("click")} size={24} />
);

export const Size64 = () => (
  <EditButton onClick={() => console.log("click")} size={64} />
);

const Template = (props) => (
  <EditButton onClick={() => console.log("click")} {...props} />
);

export const ChangeSize = Template.bind({});
ChangeSize.props = {
  size: 20,
  nonPadding: true,
};
