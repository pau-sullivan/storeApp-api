var Item = require('../models/item');

var fs = require('fs');

// Create endpoint /api/items2 for POSTS
  exports.postItems = function(req, res) {
    // var item = new Item(req.body);

    var item = new Item();
    item.description = req.body.description;
    item.category = req.body.category;
   // item.image = getImage(req.body.image);    
    
    item.save(function(err) {
      if (err){
        res.status(500).send(err);
        //res.send(err);
        //console.log(err);
      }
      else{
        Item.find(function(err,items){
          if(err)
            res.status(500).send(err);
          //res.json(items);
          res.status(201).json(item);
        });
      }
    });
  };

  exports.putItem= function(req,res){

      //var image = getImage(req.body.image);
      Item.update({ _id: req.params.item_id },
        {
          description:req.body.description,
          category:req.body.category,
         // image: req.body.image
        },
        function(err) {
            if (err)
              res.status(500).send(err);

            Item.find(function(err,items){
               if(err)
                   res.status(500).send(err);
                res.status(200).json(items);
            });
        });
  };

  exports.getItems =function(req,res){
    var conditions={};
    if(req.param('description')!=null)
      conditions ={'description': new RegExp(req.param('description'), 'i')}; //i= case insensitive
      // Item.find({'description': new RegExp(data, 'i'),function(err,itemss) {
        
      // }});
      // else
      Item.find(conditions, function(err,items){
          if(err)
              //res.send(err);
              res.status(500).send(err);

            //  items.forEach(function (item) {
            //   if(item.image.data)
            //   {
            //     item.image.src = item.image.data.toString('base64');
            //     console.log('src = ' + item.image.src);
            //  }
            // //   item.image.data = new Buffer(item.image.data).toString('base64');
            // //   console.log('get despues item.image.data = '+ item.image.data);
            //  });
          //es.json(items);
          res.status(200).json(items);
      });
  };
  
  exports.getItem= function(req,res){
      Item.findById(req.params.item_id,function(err,item){
          if(err)
            res.status(500).send(err);
          res.status(200).json(item);
      });
  };
  
  exports.deleteItem= function(req,res){
      Item.remove({ _id: req.params.item_id }, function(err) {
       if (err)
         res.status(500).send(err);

       Item.find(function(err,items){
          if(err)
              res.status(500).send(err);
          res.status(200).json(items);
      });
     });
  };