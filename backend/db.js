const mongoose = require('mongoose');
const { jwtSecret,mongoURI} = require('./config/keys')
mongoURI : 'mongodb://asinghchauhan25:mern123@ac-kv0we9v-shard-00-00.ozgmxvb.mongodb.net:27017,ac-kv0we9v-shard-00-01.ozgmxvb.mongodb.net:27017,ac-kv0we9v-shard-00-02.ozgmxvb.mongodb.net:27017/gofoodmern?ssl=true&replicaSet=atlas-ypob91-shard-0&authSource=admin&retryWrites=true&w=majority'
const mongoDB =async()=>{
   await mongoose.connect(mongoURI,{useNewUrlParser : true},async (err,result)=>{
    if(err) console.log("---",err);
     else { console.log("Connected");
     const fetched_data = await mongoose.connection.db.collection("food_items");
     fetched_data.find({}).toArray(async function(err,data){
      const foodCategory = await mongoose.connection.db.collection("foodCategory");
      foodCategory.find({}).toArray(function(err,catData){
       if(err) console.log(err);
       else {
        global.food_items = data;
        global.foodCategory = catData;
       }
      })
     })
   }
    });
}
module.exports = mongoDB;
