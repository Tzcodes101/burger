$(document).ready(function() {
    
  $(".devour-form").on("submit", function(event) {
    event.preventDefault();
    let burger_id = $(this).children(".burger_id").val();
    console.log(burger_id);
    $.ajax({
      method: "PUT",
      url: "/burgers/" + burger_id
    }).then(function(data) {
      // reload page to display devoured burger in correct part of page 
      location.reload();
    });

  });
});
