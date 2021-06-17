var employees=[
    {
    name:"vishal",
    currentCTC:"18LPA",
    revisedCTC:"22LPA",
    Designation:"SDE2",
    RM:"sapna sharma"
},
{
    name:"dheeraj",
    currentCTC:"2LPA",
    revisedCTC:"4LPA",
    Designation:"tron associate",
    RM:"sapna sharma"
},
{
    name:"rahul",
    currentCTC:"21LPA",
    revisedCTC:"30LPA",
    Designation:"TPM",
    RM:"sapna sharma"
},
{
     name:"chirag",
     currentCTC:"6LPA",
     revisedCTC:"10LPA",
     Designation:"Traning specialist",
     RM:"sapna sharma"
}
];
   employees.forEach(employee => {
       console.log(`
                     hello ${employee.name},

                     we are glad to announce you the hike for the year 2021-22.

                     Your current ctc is ${employee.currentCTC} and after hike,
                     the revised CTC is ${employee.revisedCTC}.

                     you are promoted and your designation is ${employee.Designation}
 
            Thanks and Regards,
            ${employee.RM}
       
          `);
   })