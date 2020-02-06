function addRandomSmiley() {
  $('div').removeClass();
  var randomIndex = Math.floor(Math.random() * 9);
  $('div').eq(randomIndex).addClass('smiley');
}

function handleClick() {

  if ($(this).hasClass('smiley')) {
    $(this).removeClass('smiley').addClass('win');
  }

}

$('div').click(handleClick);

setInterval(addRandomSmiley, 2000);

addRandomSmiley();

<p id="demo">JavaScript can change HTML content.</p>

<button type="button" onclick='document.getElementById("demo").innerHTML = "Hello JavaScript!"'>Click Me!</button>
