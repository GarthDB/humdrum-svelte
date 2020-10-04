import { action } from "@storybook/addon-actions";
import { Button } from "../src/index";

export default {
  title: "Button",
  component: Button,
};

export const Basic = () => ({
  Component: Button,
  props: { labelText: "Hello Button" },
});
