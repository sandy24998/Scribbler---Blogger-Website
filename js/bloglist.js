var delModal = document.getElementById("deleteModal");
function showDeleteModal(){
    delModal.style.display ="block";
}
function hideModal() {
    delModal.style.display ="none"; 
}
window.onclick = function(event) {
    if (event.target == delModal) {
      delModal.style.display = "none";
     }
}
