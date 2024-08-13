jQuery(function($) {
    $('#name').mouseover(function() {
        var dWidth = $(document).width() - 100, // 100 = image width
            dHeight = $(document).height() - 100, // 100 = image height
            nextX = Math.floor(Math.random() * dWidth),
            nextY = Math.floor(Math.random() * dHeight);
        $(this).animate({ left: nextX + 'px', top: nextY + 'px' });
    });
});
function sendMessage() {
      var request = new XMLHttpRequest();
      var input = document.getElementById('input').value;
	
      request.open("POST","wat");

      request.setRequestHeader('Content-type', 'application/json');

      var params = {
        username: "kuuneh.wtf",
        avatar_url: "",
        content: input
      }

      request.send(JSON.stringify(params));
    };
