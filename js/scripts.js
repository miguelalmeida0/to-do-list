

$('#button').on('click', newItem);

function newItem(){
  let li = $('<li></li>');
  let list = $('#list');
  let input = $('#input');
  let inputValue = input.val();


  li.append(inputValue);

  if (inputValue === '') {
    alert("Please write something");
  } else {
    $('#list').append(li);
    $('#input').val('');
  }

  //2. Crossing out an item from the list of items:
  function crossOut() {
    li.toggleClass('strike');
  }

  li.on('dblclick', crossOut);


  //3(i). Adding the delete button "X":
  let crossOutButton = $('<crossOutButton></crossOutButton>');
  crossOutButton.append(document.createTextNode('X'));
  li.append(crossOutButton);

  crossOutButton.on('click', deleteListItem);

  //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
  function deleteListItem(){
    li.addClass('delete');
  }

  $('#list').sortable();
}
