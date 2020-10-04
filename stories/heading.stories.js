import { action } from "@storybook/addon-actions";
import Heading from './views/HeadingView.svelte';

export default {
  title: "Heading",
  component: Heading,
};

const Template = ({ ...args }) => ({
  Component: Heading,
  props: args,

});

export const Regular = Template.bind({});
