
function editBody(){
    var blogTitle = document.getElementById('blogTitleNew');
    blogTitle.setAttribute('contenteditable',true);
    var blogBody = document.getElementById('blogBody');
    blogBody.setAttribute('contenteditable',true);
    blogTitle.setAttribute('class','editable');
    blogBody.setAttribute('class','editable');    
}

function saveBody(){
    var blogTitle = document.getElementById('blogTitleNew');
    blogTitle.setAttribute('contenteditable',false);
    var blogBody = document.getElementById('blogBody');
    blogBody.setAttribute('contenteditable',false);
    blogTitle.removeAttribute('class','editable');
    blogBody.removeAttribute('class','editable');
}

document.getElementById("commentButton").addEventListener("click", function(){
    var insertedComment = document.getElementsByClassName('commentText')[0].value;
    var commentDiv = document.getElementsByClassName("innerComments")[0];
    var comment = document.createElement("p");
    var commentNode = document.createTextNode(insertedComment);  
    comment.appendChild(commentNode);  
    commentDiv.appendChild(comment);
    document.getElementsByClassName('commentText')[0].value = '';
});

document.getElementById("likeButton").addEventListener("click", function(){
    var likeCount = document.getElementsByClassName('likeCounter')[0].textContent;
    likeCount = parseInt(likeCount) + 1;
    document.getElementsByClassName('likeCounter')[0].textContent = likeCount;
});
