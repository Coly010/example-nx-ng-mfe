module.exports = {
  name: 'todo',
  exposes: {
    './Module': 'apps/todo/src/app/remote-entry/entry.module.ts',
  },
};
