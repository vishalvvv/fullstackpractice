var i=0;
while(i<10){
    console.log(i);
    i++;
}


var users=["vishal","alekya","chirag","trishna","ria"];
var index=0;
while(index < users.length){
    console.log(users[index]);
    index++;
}


var allComments=[
    {
        name:"chirag",
        Comment:"take care,get well soon!"
    },

    {
        name:"ria",
        Comment:"stay home,stay safe"
    },

    {
        name:"trishna",
        Comment:"have a good amount of water"
    },

    {
        name:"alekya",
        Comment:"good morning"
    },
]

var index=0;
console.log("Name"+"\t\t\t\t\t"+"comment");
console.log("-------------------------------------------------------------------------------");
while(index < allComments.length){
    var currentComment=allComments[index];
    console.log(currentComment.name+"\t\t\t\t\t"+currentComment.Comment);
    index++;
}