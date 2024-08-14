jQuery(function($) {
    $('#name').mouseover(function() {
        var dWidth = $(document).width() - 100, // 100 = image width
            dHeight = $(document).height() - 100, // 100 = image height
            nextX = Math.floor(Math.random() * dWidth),
            nextY = Math.floor(Math.random() * dHeight);
        $(this).animate({ left: nextX + 'px', top: nextY + 'px' });
    });
});
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
function sendMessage() {
      var request = new XMLHttpRequest();
      var input = document.getElementById('input').value;
	
      request.open("POST","https://discord.com/api/webhooks/1272372201995374684/XU8eQVoY6sgZui8pR2ptcKD-Lexutdqx36XLGaAPGQOX6ye-fJ70w6okcRkUb0ns9IB_");

      request.setRequestHeader('Content-type', 'application/json');

      var params = {
        username: "kuuneh.wtf",
        avatar_url: "",
        content: input
      }

      request.send(JSON.stringify(params));
	const para = document.createElement("p");
	const node = document.createTextNode("sent");
	para.appendChild(node);
	const element = document.getElementById("div1");
	element.appendChild(para);
	sleep(1000).then(() => { node.remove(); });
    };
