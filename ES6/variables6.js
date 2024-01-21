
function x(a,b,c,...restparams){ //rest params
    console.log(a+b+c);
    console.log(restparams);
}

var arr=[1,2,3,4,5,6];
x(...arr); // spread operator


// string intipulation
var str=`

           line1

                  line2

                                line3
                                 
                                           line4

`;
console.log(str);


//
var line1="I am line 1";
var line2="I am line 2";
var str=`
                   ${line1}
                                     ${line2}

                            line3
                                           line4
`;
console.log(str);