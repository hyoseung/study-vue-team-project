import TodoCard from '../components/draggableTodo/TodoCard';

export default {
  title: 'TodoCard',
  component: TodoCard,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { TodoCard },
  template:
    '<TodoCard :todoCard="$props.todoCard"/>',
});

export const TodoCardTemplate = Template.bind({});
TodoCardTemplate.args = {
  todoCard: {
    id: 1,
    title: 'test title',
    description: 'test description',
    createdBy: 'hyoseung',
    createdDate: new Date()
  }
};
