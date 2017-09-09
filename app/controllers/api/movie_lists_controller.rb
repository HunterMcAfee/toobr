class Api::MovieListsController < ApplicationController
    def index
        @movie_lists = MovieList.all
        render json: @movie_lists
    end

    def show
        @movie_list = MovieList.find(params[:id])
        @movies = @movie_list.movies
        render json: {
            movie_list: @movie_list,
            movies: @movies
        }
    end
end
