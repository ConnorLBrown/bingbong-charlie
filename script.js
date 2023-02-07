$(function () {
  console.log("bring the wow");

  // $("#draggable").draggable();

  var $drag_counter = $("#event-drag"),
    counts = 0;

  $("#resetGame").click(function () {
    console.log("clicked button");
    counts = 0;
    $("span.count").text(counts);
    $("#gameOutput").text("");
  });

  $("#draggable").draggable({
    drag: function () {
      counts++;
      updateCounterStatus($drag_counter, counts);
    },
  });

  function updateCounterStatus($event_counter, new_count) {
   

    var game_msg = "";

    if (new_count < 200) {
      game_msg = "You gotta work harder than that!";
      $("img").attr(
        "src",
        "https://media.npr.org/assets/img/2016/03/29/ap_090911089838_sq-3271237f28995f6530d9634ff27228cae88e3440-s1100-c50.jpg"
      );
      } else if (new_count == 200 ) {
      game_msg = "Hes the GOAT!";
      $("img").attr(
        "src",
        "https://animalcorner.org/wp-content/uploads/2015/02/goat9-1.jpg"
      );
    } else {
      game_msg = "Michael is happy again!";
      $("img").attr(
        "src",
        "https://th.bing.com/th/id/OIP.-4EOjl6SkNsdt0DQ2kjyvQHaEK?pid=ImgDet&rs=1"
      );
    }

    $("#gameOutput").text(game_msg);
    $("span.count", $event_counter).text(new_count);
  }
});