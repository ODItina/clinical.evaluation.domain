/**
 * Created by KP_TerminalUser2 on 02/10/2014.
 */
var clinicalSchema = require('../models/clinicalevaluation.model');

exports.getClinical = function(args, next){
    clinicalSchema.findOne({patient_id:args.patient_id}, function(err, result){
        if(err){
            return next(err, null);
        }
        if(result){
            return next(null, result);
        }
    });
};

exports.getAllClinical = function(args, next){
    clinicalSchema.find({}, function(err, result){
        if(err){
            return next(err, null);
        }
        if(result){
            return next(null, result);
        }
    });
};