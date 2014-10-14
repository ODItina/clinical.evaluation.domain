/**
 * Created by KP_TerminalUser2 on 02/10/2014.
 */

var Clinical = require('../models/clinicalevaluation.model');

exports.createPhysicalExam = function(args, next){
    Clinical.findOne({patient_id: args.patient_id}, function(err, doc){
        if(err){
            next(err, null);
        }
        if(doc){
            doc.physical_exam.push(args);
            doc.save(function(err,result){
                if(err){
                    next(err,null);
                }
                if(result){
                    next(null,result);
                }
            });
        }
    });
};

exports.updatePhysicalExam = function(args, next){
    Clinical.findOne({patient_id: args.patient_id}, function(err, doc){
        if(err){
            next(err, null);
        }
        if(doc){
            doc.physical_exam.id(args._id).set(args);
            doc.save(function(err,result){
                if(err){
                    next(err,null);
                }
                if(result){
                    next(null,result);
                }
            });
        }
    });
};

exports.removePhysicalExam = function(args, next){
    Clinical.findOne({patient_id:args.patient_id}, function(err, doc){
        if(err){
            return next(err, null);
        }
        if(doc){
            doc.physical_exam.id(args._id).remove();
            doc.save(function(err){
                if(err){
                    return next(err, null);
                }

            });

        }

    });
};