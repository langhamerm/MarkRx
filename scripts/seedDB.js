const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/MaRx"
);

// Seed Patient Info to MongoDB
const patient = [
  {
    name: "Blake Blakington",
    age: 21,
    gender: "Male",
    birthDate: "01/01/1997",

    medications: [
      {Zolpidem: [{
        dosage: "10mg",
        sig: "Take one tablet by mouth at bedtime.",
        quantity: 30,
        refills: 3,
        writtenDate: "04/01/2019",
        prescriber: "Mark Jacobs"
      }
      ]},
      {Lisinopril: [{
        dosage: "10mg",
        sig: "Take one tablet by mouth daily.",
        quantity: 30,
        refills: 11,
        writtenDate: "04/01/2019",
        prescriber: "Mark Jacobs"
      }
      ]}
      
    ],

    conditions: [
      "Insomnia",
      "Hypertension"
    ],

    allergies: [
      "Shellfish"
    ],

    surgeries: [
      "Brain Surgery"
    ],

    address: "24 Blake St. Blake, IL 60000",

    email: "mbe083@gmail.com",

    phone: 8473129335,

    insurance: [
      {
        BIN: 610279,
        PCN: 9999,
        ID: 12345678,
        RxGroup: "BAMF1347"
      }
    ]
  },
  {
    name: "Mike Michaels",
    age: 19,
    gender: "Male",
    birthDate: "05/30/2000",

    medications: [
      {Methylphenidate: [{
        dosage: "20mg",
        sig: "Take one tablet by mouth twice daily.",
        quantity: 60,
        refills: 0,
        writtenDate: "04/01/2019",
        prescriber: "Arshad Gazi"
      }
      ]}
    ],

    conditions: [
      "ADHD"
    ],

    allergies: [
      "Sulfa Drugs"
    ],

    surgeries: [
      "Brain Surgery"
    ],

    address: "13 Mike St. Mike, IL 60001",

    email: "mikemichaels00@gmail.com",
    
    phone: 8473129333,

    insurance: [
      {
        BIN: 610279,
        PCN: 9999,
        ID: 12345678,
        RxGroup: "SAMF2019"
      }
    ]
  },
  
];
// console.log(db);
db.Patient
  .remove({})
  .then(() => db.Patient.collection.insertMany(patient))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });


// Seed Doctor Info to MongoDB
const doctor = [
  {
  name: "Arshad Gazi",
  phone: 8474460032,
  email: "conneyspharmacy@gmail.com",
  office: "736 Elm St Winnetka IL 60093"
},
{
  name: "Mark Jacobs",
  phone: 8474460032,
  email: "conneyspharmacy@gmail.com",
  office: "736 Elm St Winnetka IL 60093"
}
];
//console.log(db);
db.Doctor
.remove({})
.then(() => db.Doctor.collection.insertMany(doctor))
.then(data => {
  console.log(data.result.n + " records inserted!");
  process.exit(0);
})
.catch(err => {
  console.error(err);
  process.exit(1);
});
