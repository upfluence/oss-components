import Ember from 'ember';

export default Ember.Controller.extend({
  lorem: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed ' +
    'do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ' +
    ' ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ' +
    'aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit ' +
    'in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ' +
    'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui ' +
    'officia deserunt mollit anim id est laborum.',

  tableColumns: [
    {
      'propertyName': 'id',
      'title': 'ID'
    },
    {
      'propertyName': 'firstName',
      'title': 'First Name'
    },
    {
      'propertyName': 'lastName',
      'title': 'Last Name'
    },
    {
      'propertyName': 'city',
      'title': 'City'
    },
    {
      'propertyName': 'username',
      'title': 'Username'
    },
    {
      'propertyName': 'email',
      'title': 'Email'
    },
    {
      'propertyName': 'website',
      'title': 'Website'
    },
    {
      'propertyName': 'phone',
      'title': 'Phone'
    },
  ],
});
