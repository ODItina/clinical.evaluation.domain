/**
 * Created by KP_TerminalUser2 on 04/09/2014.
 */
    //Patient clinical physical examination
var mongoose = require('mongoose');
var physicalExamSchema = mongoose.Schema({
    type:{
        type:String
    },
    observation:{
        type:String
    }
});
module.exports = physicalExamSchema;
