import { action } from "@storybook/addon-actions";
import { List } from "../src/index";

export default {
  title: "List",
  component: List,
};

export const Basic = () => ({
  Component: List,
  props: { listItems: ["Item 1", "Item 2", "Another item", "Last item"] },
});
