MovieList.destroy_all
Movie.destroy_all

list1 = MovieList.create({title: "Dramas", category: "Drama, Action", description: "Favorite list of action drama movies."})
list2 = MovieList.create({title: "Harry Potter Collection", category: "Action, Suspense", description: "Collection of Harry Potter Movies"})
list3 = MovieList.create({title: "Lord of the Rings Collection", category: "Adventure", description: "Collection of Lord of Rings and Hobbit Movies"})

list1.movies.create({original_title: "Good Will Hunting", genres: "Drama", overview: "Test test test"})
list1.movies.create({original_title: "Taxi Driver", genres: "Drama", overview: "Test test test"})
list1.movies.create({original_title: "NightCrawler", genres: "Drama", overview: "Test test test"})

list2.movies.create({original_title: "Harry Potter and the Sorceror's Stone", genres: "Drama", overview: "Test test test"})
list2.movies.create({original_title: "Harry Potter and the Chamber of Secrets", genres: "Drama", overview: "Test test test"})
list2.movies.create({original_title: "Harry Potter and the Prisoner of Azkaban", genres: "Drama", overview: "Test test test"})

list3.movies.create({original_title: "Lord of the Rings: The Fellowship of the Ring", genres: "Adventure", overview: "Test test test"})
list3.movies.create({original_title: "Lord of the Rings: The Twin Towers", genres: "Adventure", overview: "Test test test"})
list3.movies.create({original_title: "Lord of the Rings: The Return of the King", genres: "Adventure", overview: "Test test test"})