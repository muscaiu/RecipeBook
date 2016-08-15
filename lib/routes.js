//Adding a simpe route based on filename and template name
FlowRouter.route('/', {
    name: 'home',
    action(){
        GAnalytics.pageview();
        BlazeLayout.render('HomeLayout');
    }
});
//Adding a route based on filename that has multiple templates
FlowRouter.route('/recipe-book', {
    name: 'recipe-book',
    action(){
        GAnalytics.pageview();
        BlazeLayout.render('MainLayout', {main: 'Recipes'});
    }
});