LOCAL_KEY = 'studentList';

var studentsList = getLocalList(LOCAL_KEY);

// FUNCION QUE TRAE UNA LOCAL LIST
function getLocalList(key) {
	if (typeof key === 'string') {
		var localList = localStorage.getItem(key);
		if (localList) {
			var parsedList = JSON.parse(localList);
			return parsedList;
		} else {
			return [];
		}
	}
}

console.log(studentsList);
