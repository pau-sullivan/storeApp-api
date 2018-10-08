var ItemCategory = require('../models/ItemCategory');

var fs = require('fs');


  exports.postItemCategories = function(req, res) {
    
    var category = new ItemCategory();
    category.name = req.body.name;
    
    category.save(function(err) {
      if (err){
        res.send(err);
        console.log(err);
      }
      else{
        ItemCategory.find(function(err,categories){
          if(err)
              res.send(err);
          res.json(categories);
        });
      }
    });
  };

  exports.putItemCategory= function(req,res){

      ItemCategory.update({ _id: req.params.itemCategory_id },
        {
          name:req.body.name
        },
        function(err) {
            if (err)
              res.send(err);

            ItemCategory.find(function(err,categories){
               if(err)
                   res.send(err);
                res.json(categories);
            });
        });
  };

  exports.getItemCategories =function(req,res){
      ItemCategory.find(function(err,categories){
          if(err)
              res.send(err);
          res.json(categories);
      });
  };
  
  exports.getItemCategory= function(req,res){
      ItemCategory.findById(req.params.itemCategory_id,function(err,category){
          if(err)
              res.send(err);
          res.json(category);
      });
  };
  
  exports.deleteItemCategory= function(req,res){
      ItemCategory.remove({ _id: req.params.itemCategory_id }, function(err) {
       if (err)
         res.send(err);

       ItemCategory.find(function(err,categories){
          if(err)
              res.send(err);
          res.json(categories);
      });
     });
  };