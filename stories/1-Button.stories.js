import { action } from '@storybook/addon-actions';

import Button from '../src/components/Button';

export default {
  title: 'Button',
  component: Button,
};

export const ButtonDefault = () => ({
  components: { Button },
  data: function () {
    return {
      label: 'not updated'
    }
  },
  template: '<button>{{label}}</button>',
});
