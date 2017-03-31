let v = {
  "results": [
    {
      "gender": "female",
      "name": {
        "title": "ms",
        "first": "mila",
        "last": "olivier"
      },
      "location": {
        "street": "2069 rue de la baleine",
        "city": "saint-denis",
        "state": "seine-maritime",
        "postcode": 40710
      },
      "email": "mila.olivier@example.com",
      "login": {
        "username": "beautifulgoose667",
        "password": "cccccccc",
        "salt": "JdcX9qPG",
        "md5": "8fc80a2ac22fd255a316737809f5a38b",
        "sha1": "79eb097ef268c6f4c3ec306d2199fb79041ca98c",
        "sha256": "719ddf5a6f8df4facff0a14003236d785392c275c0a6e957655ddcc44128e398"
      },
      "dob": "1977-10-17 07:11:23",
      "registered": "2014-01-31 08:25:28",
      "phone": "01-39-27-08-50",
      "cell": "06-13-50-56-78",
      "id": {
        "name": "INSEE",
        "value": "277944300463 54"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/1.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/1.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/1.jpg"
      },
      "nat": "FR"
    }
  ],
  "info": {
    "seed": "a46c444041ce143b",
    "results": 1,
    "page": 1,
    "version": "1.1"
  }
}
console.log(v.results.login.username)
