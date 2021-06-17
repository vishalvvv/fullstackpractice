try{
    var a=10;
    console.log(a);
    console.log("opening a file");
    throw new Error("something went wrong");
} catch (error) {
    console.log(error.message);
    console.log(err);
}
finally{
    console.log("closed the file");
}