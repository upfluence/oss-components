import Controller from '@ember/controller';

export default Controller.extend({
  columns: [
    {
      title: 'Plan Name',
      property: 'name'
    },
    {
      title: 'Plan Price',
      property: 'price'
    },
    {
      title: 'Users Count',
      property: 'usersCount'
    },
    {
      title: 'Bulk Emails',
      property: 'bulkEmailsCount'
    }
  ]
});
