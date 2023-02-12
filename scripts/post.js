const addcomment=(comment)=>{
    var com = comment.value +'<br>';
    var a = document.getElementById('comment');
    document.getElementById('commentsection').style.backgroundColor="#e2e4e6"
    document.getElementById('commentsection').innerHTML = '<p class = "p-3  mt-3 mb-3 bg-white">'+com+'</p>'+document.getElementById('commentsection').innerHTML;          
    a.value=a.defaultValue;
}
var likes=0
const postLike=()=>{
    likes++
    document.getElementById('like-btn').innerHTML='<i class="fa fa-thumbs-up"> </i> Liked '
    if(likes!=0){
    if(likes==1){
        document.getElementById('likecount').innerHTML=likes+' person likes this!'
    }
    else{
        document.getElementById('likecount').innerHTML=likes+' people have liked this!'
    }

}
}
const toggleEditSave =()=>{
if (document.getElementById('text').getAttribute("contentEditable") === "true") {
    document.getElementById('text').setAttribute("contentEditable", "false");
    document.getElementById('post-Title').setAttribute("contentEditable", "false");
    document.getElementById('text').style.border = "none";
    document.getElementById('post-Title').style.border = "none";
    document.getElementById('editPostButton').innerHTML = "Edit <i class='fa fa-edit'></i>";
} else {
    document.getElementById('text').setAttribute("contentEditable", "true");
    document.getElementById('post-Title').setAttribute("contentEditable", "true");
    document.getElementById('text').style.border = "2px solid pink";
    document.getElementById('post-Title').style.border = "2px solid pink";
    document.getElementById('editPostButton').innerHTML = "Save <i class='fa fa-save'></i>";
}
}