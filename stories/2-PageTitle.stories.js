import PageTitle from '../src/components/PageTitle';

export default {
  title: 'PageTitle',
  component: PageTitle,
};

export const PageTitleDefault = () => ({
  components: { PageTitle },
  data: function () {
    return {
      title: 'title'
    }
  },
  template: '<PageTitle :title="title" />',
});

export const PageTitleWithIcon = () => ({
  components: { PageTitle },
  data: function () {
    return {
      title: 'title'
    }
  },
  template: '<PageTitle :title="title" icon="true" />',
});
