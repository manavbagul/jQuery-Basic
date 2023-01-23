function clicked() {
  $("h1").addClass("Big-title");
  $(".Big-title")[0].textContent = "You did it";
}
$("h1").click(clicked);
