var student_list=[];
function submit(){
var name_one=document.getElementById("student_one").value;
var name_two=document.getElementById("student_two").value;
var name_three=document.getElementById("student_three").value;
var name_four=document.getElementById("student_four").value;

student_list.push(name_one);
student_list.push(name_two);
student_list.push(name_three);
student_list.push(name_four);
console.log(student_list);
document.getElementById("display_name").innerHTML=student_list;
document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";
}
function sort(){
    student_list.sort();
    console.log(student_list);
    document.getElementById("display_name").innerHTML=student_list;
}
