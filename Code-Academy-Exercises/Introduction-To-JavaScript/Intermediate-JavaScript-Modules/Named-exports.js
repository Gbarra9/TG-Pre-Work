let availableAirplanes = [
  {
    name: 'AeroJet',
    fuelCapacity: 800,
    availableStaff: [
      'pilots'
    ,
      'flightAttendants'
    ,
      'engineers'
    ,
      'medicalAssistance'
    ,
      'sensorOperators'
    ]
  },
  {
    name: 'SkyJet',
    fuelCapacity: 500,
    availableStaff: ['pilots','flightAttendatnts']
  }
]

 let flightRequirements = {
   requiredStaff: 4
 }

const meetsStaffRequirements = function(availableStaff, requiredStaff) {
   if(availableStaff.length >= requiredStaff){
     return true
   } else {
     return false
   }
}

 export { availableAirplanes, flightRequirements, meetsStaffRequirements};

// ES6 second common approach to export modules
// named exports will export data through the use of variables

// use keyword export with curly braces, inside curly braces add variable names that will be exported
