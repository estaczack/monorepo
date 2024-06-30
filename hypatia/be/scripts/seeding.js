const postData = async (oc, url, data) => {
  let fetchURL = `http://localhost:3000/api/${oc}/${url}`
  return await fetch(fetchURL, {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify(data)
  }).then(res => res.json())
}

seedData = async () => {
  let result = null
  let typeId = null

  let data = {
    languageName: 'English'
  }
  result = await postData('closed', 'languages', data)
  englishId = result.bookLanguage._id

  data = {
    languageName: 'Portuguese'
  }
  result = await postData('closed', 'languages', data)
  portugueseId = result.bookLanguage._id

  data = {
    languageName: 'German'
  }
  result = await postData('closed', 'languages', data)

  data = {
    languageName: 'French'
  }
  result = await postData('closed', 'languages', data)

  data = {
    typeName: 'Fiction'
  }
  result = await postData('closed', 'types', data)
  typeId = result.bookType._id
  fictionId = result.bookType._id

  data = {
    genreName: 'Mistery',
    typeId: typeId
  }
  result = await postData('closed', 'genres', data)
  misteryId = result.bookGenre._id

  data = {
    genreName: 'Terror',
    typeId: typeId
  }
  result = await postData('closed', 'genres', data)

  data = {
    genreName: 'Fairy Tale',
    typeId: typeId
  }
  result = await postData('closed', 'genres', data)

  data = {
    genreName: 'Historical',
    typeId: typeId
  }
  result = await postData('closed', 'genres', data)

  data = {
    typeName: 'Non-Fiction'
  }
  result = await postData('closed', 'types', data)
  typeId = result.bookType._id
  nonFinctionId = result.bookType._id

  data = {
    genreName: 'Journalist',
    typeId: typeId
  }
  result = await postData('closed', 'genres', data)

  data = {
    genreName: 'Historical',
    typeId: typeId
  }
  result = await postData('closed', 'genres', data)
  historicalId = result.bookGenre._id

  data = {
    typeName: 'Academic'
  }
  result = await postData('closed', 'types', data)
  typeId = result.bookType._id

  data = {
    genreName: 'Mathematics',
    typeId: typeId
  }
  result = await postData('closed', 'genres', data)

  data = {
    genreName: 'Biology',
    typeId: typeId
  }
  result = await postData('closed', 'genres', data)

  data = {
    genreName: 'Physics',
    typeId: typeId
  }
  result = await postData('closed', 'genres', data)

  data = {
    genreName: 'Medicine',
    typeId: typeId
  }
  result = await postData('closed', 'genres', data)

  data = {
    firstName: 'Ed',
    lastName: 'de Almeida',
    email: 'edvaldoajunior@gmail.com',
    password: '4lf483t0',
    roles: 'user|admin|superadmin'
  }
  result = await postData('open', 'users', data)
  edId = result.user._id
  edFullName = 'Ed de Almeida'

  data = {
    firstName: 'Dai',
    lastName: 'Fanchin',
    email: 'daifanchin@gmail.com',
    password: '4lf483t0',
    roles: 'user|admin'
  }
  result = await postData('open', 'users', data)

  data = {
    firstName: 'Dio',
    lastName: 'Fanchin',
    email: 'diofanchin@gmail.com',
    password: '4lf483t0',
    roles: 'user'
  }
  result = await postData('open', 'users', data)

  data = {
    title: 'Testing 01',
    content: 'This is a testing post to check my internal and external APIs',
    authorId: edId,
    authorFullName: edFullName,
    languageId: englishId,
    typeId: fictionId,
    genreId: misteryId,
    externalLink: 'https://www.linkedin.com/in/ed-de-almeida/'
  }
  result = await postData('closed', 'posts', data)

  data = {
    title: 'Testing 02',
    content:
      'This is my second testing post to check my internal and external APIs',
    authorId: edId,
    authorFullName: edFullName,
    languageId: englishId,
    typeId: fictionId,
    genreId: misteryId,
    externalLink: ''
  }
  result = await postData('closed', 'posts', data)

  data = {
    title: 'Testing 03',
    content:
      'This is my third testing post to check my internal and external APIs',
    authorId: edId,
    authorFullName: edFullName,
    languageId: englishId,
    typeId: fictionId,
    genreId: misteryId,
    externalLink: ''
  }
  result = await postData('closed', 'posts', data)

  data = {
    name: 'Friedrich Nietzsche'
  }
  result = await postData('closed', 'authors', data)
  nietzscheId = result.author._id

  data = {
    name: 'Immanuel Kant'
  }
  result = await postData('closed', 'authors', data)

  data = {
    name: 'Arthur Schopenhauer'
  }
  result = await postData('closed', 'authors', data)
  schopenhauerId = result.author._id

  data = {
    user: edId,
    title: 'Pessimismo em Gotas',
    subtitle: '',
    authorsList: [nietzscheId, schopenhauerId],
    bookLanguage: portugueseId,
    bookType: nonFinctionId,
    bookGenre: historicalId,
    edition: '1ª',
    editor: 'Zahar Editora',
    year: '1985',
    location: 'São Paulo',
    isbn: '123-4567891'
  }
  result = await postData('closed', 'books', data)

  data = {
    user: edId,
    title: 'A Genealogia da Moral',
    subtitle: '',
    authorsList: [nietzscheId],
    bookLanguage: portugueseId,
    bookType: nonFinctionId,
    bookGenre: historicalId,
    edition: '1ª',
    editor: 'Zahar Editora',
    year: '1984',
    location: 'São Paulo',
    isbn: '123-4567890'
  }
  result = await postData('closed', 'books', data)
}

seedData()
