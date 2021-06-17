function findOccurance(str,character){
    var counter=0;
    str=str.toLowerCase();
    for(var i=0;i<str.length;i++){
        if(character == str[i]){
            counter++;

        }
    
    }
    console.log(counter);
}
findOccurance("hello how are HELLO you",'l');