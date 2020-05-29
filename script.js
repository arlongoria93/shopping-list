$(document).ready(function () {
  $("#js-shopping-list-form").on("submit", function (e) {
    let text = $("#shopping-list-entry").val();
    $(".shopping-list").prepend(
      '<li><span class="shopping-item">' +
        text +
        '</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">' +
        "delete" +
        "</span></button></div></li>"
    );
    e.preventDefault();
    $("shopping-list-entry").val();
    $("shopping-list-entry").val();
  });

  $(".shopping-item-delete").click(function () {
    let p = $(this).parent();
    p.parent().fadeOut(function () {
      p.remove();
    });
  });

  $(".shopping-item-toggle").click(function () {
    $(this).closest(".shopping-item-toggle").addClass("shopping-item__checked");
  });
});
