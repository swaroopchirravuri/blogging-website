
function editBody(){
    var blogTitle = document.getElementById('blogTitleNew');
    blogTitle.setAttribute('contenteditable',true);
    var blogBody = document.getElementById('blogBody');
    blogBody.setAttribute('contenteditable',true);
    blogTitle.setAttribute('class','editable');
    blogBody.setAttribute('class','editable'); 
    document.getElementsByClassName('savePost')[0].style.display = 'block';
    document.getElementsByClassName('editPost')[0].style.display = 'none';   
}

function saveBody(){
    var blogTitle = document.getElementById('blogTitleNew');
    blogTitle.setAttribute('contenteditable',false);
    var blogBody = document.getElementById('blogBody');
    blogBody.setAttribute('contenteditable',false);
    blogTitle.removeAttribute('class','editable');
    blogBody.removeAttribute('class','editable');
    document.getElementsByClassName('editPost')[0].style.display = 'block';
    document.getElementsByClassName('savePost')[0].style.display = 'none';
}

document.getElementById("commentButton").addEventListener("click", function(){
    var insertedComment = document.getElementsByClassName('commentText')[0].value;
    var commentDiv = document.getElementsByClassName("innerComments")[0];
    var comment = document.createElement("p");
    var commentNode = document.createTextNode(insertedComment);  
    comment.appendChild(commentNode);  
    commentDiv.insertBefore(comment, commentDiv.childNodes[0]);
    document.getElementsByClassName('commentText')[0].value = '';
});

document.getElementById("likeButton").addEventListener("click", function(){
    var likeCount = document.getElementsByClassName('likeButton')[0].getAttribute('data-count');
    likeCount = parseInt(likeCount) + 1;
    document.getElementsByClassName('likeButton')[0].innerHTML = "<i class='fa fa-thumbs-up'></i>Liked!";
    if(likeCount == 1){
        document.getElementsByClassName('likeCounter')[0].innerHTML = likeCount + ' person likes this!';
    }else if(likeCount == 1){
        document.getElementsByClassName('likeCounter')[0].innerHTML = likeCount + ' people have liked this!';
    }

    document.getElementsByClassName('likeButton')[0].setAttribute('data-count', likeCount);
});
