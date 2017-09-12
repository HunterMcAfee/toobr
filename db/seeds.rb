MovieList.destroy_all
ShowList.destroy_all
Movie.destroy_all
Show.destroy_all

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

list1 = ShowList.create({title: "Drama", category: "Drama, Action", description: "Favorite list of action drama shows."})
list2 = ShowList.create({title: "Doctor Shows", category: "Action, Suspense", description: "People playing doctor"})
list3 = ShowList.create({title: "Marvel Shows", category: "Adventure", description: "Collection of Marvel Shows"})

list1.shows.create({original_name: "Mr. Robot", overview: "Test test test"})
list1.shows.create({original_name: "The Walking Dead", overview: "Test test test"})
list1.shows.create({original_name: "Game of Thrones", overview: "Test test test"})

list2.shows.create({original_name: "Scrubs", overview: "Test test test"})
list2.shows.create({original_name: "Grey's Anatomy", overview: "Test test test"})
list2.shows.create({original_name: "House", overview: "Test test test"})

list3.shows.create({original_name: "The Punisher", overview: "Test test test"})
list3.shows.create({original_name: "Daredevil", overview: "Test test test"})
list3.shows.create({original_name: "Agents of Shield", overview: "Test test test"})