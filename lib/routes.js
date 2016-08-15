//Adding a simpe route based on filename and template name
FlowRouter.route('/', {
    name: 'home',
    action(){
        BlazeLayout.render('HomeLayout');
    }
});
//Adding a route based on filename that has multiple templates
FlowRouter.route('/test', {
    name: 'test',
    action(){
        BlazeLayout.render('MainLayout', {main: 'Test'});
    }
});