function findOccurance(str,word){
    var counter=0;
    str=str.split(" ");
    for(var i=0;i<str.length;i++){
        if(word == str[i]){
            counter++;

        }
    
    }
    console.log(counter);
}
findOccurance("hello how are you, how is it going on? how is your brother",'is');