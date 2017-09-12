MovieList.destroy_all
ShowList.destroy_all
Movie.destroy_all
Show.destroy_all

list1 = MovieList.create({title: "Dramas", category: "Drama, Action", description: "Favorite list of action drama movies."})
list2 = MovieList.create({title: "Harry Potter Collection", category: "Action, Suspense", description: "Collection of Harry Potter Movies"})
list3 = MovieList.create({title: "Lord of the Rings Collection", category: "Adventure", description: "Collection of Lord of Rings and Hobbit Movies"})

list1 = ShowList.create({title: "Drama", category: "Drama, Action", description: "Favorite list of action drama shows."})
list2 = ShowList.create({title: "Doctor Shows", category: "Action, Suspense", description: "People playing doctor"})
list3 = ShowList.create({title: "Marvel Shows", category: "Adventure", description: "Collection of Marvel Shows"})

