let Output=document.getElementById("output")
function display(num){
    Output.value+=num;
}
function calculate(){
    try{
        Output.value=eval(Output.value)

    }
    catch(err){
        alert("Invalid")
    }
}
function Clear(){
    Output.value="";
}
function del(){
    Output.value=Output.value.slice(0,-1)
}
