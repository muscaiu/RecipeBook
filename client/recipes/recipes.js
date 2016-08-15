Meteor.subscribe('recipes');

Template.Recipes.helpers({
    recipes: () => {
        return Recipes.find({});
    }
})
//console.log("access private: " + Meteor.settings.private.key);
//console.log("access public: " + Meteor.settings.public.ga.account);
