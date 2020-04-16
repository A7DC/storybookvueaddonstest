import { action } from "@storybook/addon-actions";

import ButtonComponent from "../src/components/Button";

export default {
  title: "Button",
  component: ButtonComponent,
};

export const ButtonDefault = () => ({
  components: { ButtonComponent },
  data: function () {
    return {
      label: "not updated",
    };
  },
  template: "<Button>{{label}}</Button>",
});
