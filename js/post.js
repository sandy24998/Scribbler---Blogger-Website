var noOFLikes = 0;
var like = document.getElementById("likebtn");
var likesOfPeople = document.getElementById("p2");
var editIcon = document.getElementById("editIcon");
var saveIcon = document.getElementById("saveIcon");
var editableParagraph = document.getElementById("blogBody");
var commentTemplate = document.getElementById("addComment");
var commentText = "";

function likeFunction() {
    noOFLikes++;
    if(noOFLikes==1) {
        like.innerHTML = "<i class='fa fa-thumbs-up'></i>Liked!";
        likesOfPeople.innerHTML = "1 person likes this!";
    }
    else{
        like.innerHTML = "<i class='fa fa-thumbs-up'></i>Liked!";
        likesOfPeople.innerHTML = noOFLikes+ " people have liked this!";
    }
}

function editAndSave() {
    if(editableParagraph.contentEditable == "false"){
        editableParagraph.contentEditable = "true";
        saveIcon.style.display = "block";
        editIcon.style.display = "none";
        editableParagraph.style.border ="1px solid grey";
    }
    else{
        editableParagraph.contentEditable = "false";
        saveIcon.style.display = "none";
        editIcon.style.display = "block";
        editableParagraph.style.border ="none";
        editableParagraph.defaultValue += editableParagraph.value;
    }
}
function addComments(id) {
    if(id.value == "") {
        return;
    }
    else{
    commentText = id.value +'<br>';
    commentTemplate.innerHTML += "<p class='p4'>"+commentText+"</p>";
    id.value = id.defaultValue;
    }
}