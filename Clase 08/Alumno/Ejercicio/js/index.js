var texts = [ 'Ed', 'Edd', 'Eddy' ];

var mainList = document.getElementById('mainList');

for (i = 0; i < texts.length; i++) {
	var textLi = document.createElement('li');
	textLi.innerHTML = texts[i];
	textLi.className = 'list-group-item';

	mainList.appendChild(textLi);
}
