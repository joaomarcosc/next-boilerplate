import { Main } from './'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Main',
  component: Main
} as ComponentMeta<typeof Main>

export const Template: ComponentStory<typeof Main> = (args) => (
  <Main {...args} />
)

Template.args = {
  title: 'React Avançado',
  description: 'Storybook'
}
