/**
 * Created by KP_TerminalUser2 on 04/09/2014.
 */
var mongoose = require('mongoose');
var physicalExamSchema = require('./physicalexam.model'),
    Schema = mongoose.Schema;

var clinicalEvaluationSchema = new Schema({
    hospital_Id:{
        type:String
    },

    date_of_visit:{
        type:Date
    },

    date_next_appointment:{
        type:Date
    },

    physical_exam:[physicalExamSchema],

    assessment_of_patient:{
        type:String
    },

    who_stage:{
        type:String,
        enum:[
            'Stage 1',
            'Stage 2',
            'Stage 3',
            'Stage 4']
    },

    patientId:{
        type:Schema.Types.ObjectId,
        ref:'patient',
        required:true
    }
});
var ClinicalEvaluation = mongoose.model('clinical',clinicalEvaluationSchema);
module.exports = ClinicalEvaluation;
