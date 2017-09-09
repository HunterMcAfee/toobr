class Api::MovieListsController < ApplicationController
    def index
        @movie_lists = MovieList.all
        render json: @movie_lists
    end
end
