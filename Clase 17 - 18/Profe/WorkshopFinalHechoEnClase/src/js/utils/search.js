function searchPeopleIndexByUrl (url, peopleList) {
  var person

  for (var i = 0; i < peopleList.length; i++) {
    person = peopleList[i]
    if (url === person.url) {
      return i
    }
  }

  return -1
}

export { searchPeopleIndexByUrl }
