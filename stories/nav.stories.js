import { action } from "@storybook/addon-actions";
import { Nav } from "../src/index";

export default {
  title: "Navigation",
  component: Nav,
};

export const Basic = () => ({
  Component: Nav,
  props: {
    links: [
      {
        url: "#blank",
        text: "Foo",
      },
      {
        url: "#blank",
        text: "Doo",
      },
    ],
  },
});
