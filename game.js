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

<p id="demo">A Paragraph.</p>
