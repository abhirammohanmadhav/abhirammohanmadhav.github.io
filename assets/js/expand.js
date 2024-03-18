function toggleDetails(button) {
    var article = button.closest('article'); // Find the closest parent article
    var details = article.querySelector('.details');
    details.classList.toggle('visible');
}

function openDetailsPopup() {
    // Open a new window with the details content
    var detailsContent = "Additional details about the project...";
    var popupWindow = window.open("", "DetailsPopup", "width=400,height=300");
    popupWindow.document.write('<html><head><title>Project Details</title></head><body><h2>Project Details</h2><p>' + detailsContent + '</p></body></html>');
}

function showDetails() {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
  
    // Close the modal when the user clicks anywhere outside of it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
}