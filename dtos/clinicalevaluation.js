/**
 * Created by KP_TerminalUser2 on 04/09/2014.
 */
var ClinicalEvaluation = function(args){
    var evaluation = {};

    evaluation.hospital_Id = args.hospital_Id;
    evaluation.patient_id = args.patient_id;
    evaluation.date_of_visit = args.date_of_visit || Date.now();
    evaluation.date_next_appointment = args.date_next_appointment;
    evaluation.medical_history = args.medical_history;
    evaluation.drug_allergy = args.drug_allergy;
    evaluation.pregnancy_info = args.pregnancy_info;
    evaluation.virus_level = args.virus_level;
    evaluation.arv_info = args.arv_info;
    evaluation.physical_exam = args.physical_exam;
    evaluation.assessment_of_patient = args.assessment_of_patient;
    evaluation.who_stage = args.who_stage;

    return evaluation;
};
module.exports = ClinicalEvaluation;
