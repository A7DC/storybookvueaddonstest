import { withDesign } from 'storybook-addon-designs'
import { Button } from '../src/components/Button'

export default {
  title: 'My stories',
  component: Button,
  decorators: [withDesign]
}

export const myStory = () => <Button>Hello, World!</Button>

myStory.story = {
  name: 'My awesome story',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File'
    }
  }
}