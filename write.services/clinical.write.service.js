/**
 * Created by KP_TerminalUser2 on 02/10/2014.
 */
var Clinical = require('../models/clinicalevaluation.model'),
    _ = require('lodash');

exports.createClinical = function(args, next){
    var clinical = new Clinical(args);
    clinical.save( function(err, result){
        if(err){
            return next(err, null);
        }
        if(result){
            return next(null, result);
        }
    });
};

exports.updateClinical = function(args, next){
    Clinical.findOne({patient_id: args.patient_id}, args, function(err, doc){
        if(err){
            return next(err, null);
        }
        if(doc){
            doc = _.extend(doc, args);

            doc.save(function(err){
                if(!err){
                    return  next(null,doc);
                }
            });
        }
    });
};

exports.removeClinical = function(args, next){
    Clinical.remove({patient_id: args.patient_id}, function(err){
        if(err){
            return next(err, false);
        }
        return next(null, true);
    });
};
