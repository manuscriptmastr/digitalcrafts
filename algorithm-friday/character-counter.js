var getCharactersFromUrl = url => {

  var getFile = url => {
    return fetch(url).then(data => data.text());
  }

  var stripTags = string => {

    return string;
  }

  var getChars = string => {
    var obj = {};

    return string;
  }

  return getFile(url).then(stripTags).then(getChars);

}

getCharactersFromUrl('url').then(data => console.log(data));