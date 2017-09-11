class Api::MoviesController < ApplicationController
    def show
        @movie_list = MovieList.find(params[:id])
        @movies = @movie_list.movies
        render json: {
            movie_list: @movie_list,
            movies: @movies
        }
    end

    def create
        @movie_list = MovieList.find(params[:id])
        @movie = @movie_list.movies.create!(movie_params)
    end

    def destroy
        @movie_list = MovieList.find(params[:id])
        @movie_list.destroy
    end

    private
    def movie_params
        params.require(:movie_list).permit(:genres, :homepage, :movie_id, :original_title, :overview, :poster_path, :release_date, :runtime, :tagline, :video, :vote_average)
    end
end
