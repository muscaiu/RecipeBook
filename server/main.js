import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  console.log(Meteor.settings.private.key)
});
