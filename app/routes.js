var itemController = require('./controllers/itemController');
var itemCategoryController = require('./controllers/itemCategoryController');

// expose the routes to our app with module.exports
module.exports = function(app, router) {
    
    router.route('/items')
      .post(itemController.postItems)
      .get(itemController.getItems);

      router.route('/items/')
      .get(itemController.getItem)

    router.route('/items/:item_id')
       .get(itemController.getItem)
       .put(itemController.putItem)
       .delete(itemController.deleteItem);

    router.route('/itemCategories')
       .post(itemCategoryController.postItemCategories)
       .get(itemCategoryController.getItemCategories);
 
     router.route('/itemCategories/:itemCategory_id')
        .get(itemCategoryController.getItemCategory)
        .put(itemCategoryController.putItemCategory)
        .delete(itemCategoryController.deleteItemCategory);


    // Register all our routes with /api
    app.use('/api', router);

    //var path = require('path');

    // web -------------------------------------------------------------
    app.get('/', function(req, res) {
        res.sendFile(path.resolve('./public/index.html'));
    });

    // app.get('*',function(req,res){

    //     var dir= __dirname.toString().replace('app','');
    //     res.sendFile(dir + '/dist/storeApp/' + req.url);
    // });

}