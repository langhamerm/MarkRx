import axios from "axios";

export default {
    // Gets all doctors
    getDoctors: function() {
        return axios.get("/api/doctors");
    },
    // Gets all patient details
    getPatientDetails: function() {
        return axios.get("/api/patients");
    },
    // Saves a patient to the database
    savePatients: function(patientData){
        return axios.post("/api/patients", patientData);
    },
    // Saves a Doctor to the database
    saveDoctor: function(doctorData){
        return axios.post("/api/doctors", doctorData);
    }    
    
}