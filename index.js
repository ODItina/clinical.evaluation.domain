/**
 * Created by KP_TerminalUser2 on 02/10/2014.
 */
var _ = require('lodash');

var clinical = require('./dtos/clinicalevaluation'),
    physicalExam = require('./dtos/physicalexam');


module.exports.dto  = {
    clinical: clinical,
    physicalExam:physicalExam
};

module.exports.read  = _.extend(
    require('./read.services/clinical.read.service')
);


module.exports.write = _.extend(
    require('./write.services/clinical.write.service'),
    require('./write.services/physicalexam.write.service')
);

