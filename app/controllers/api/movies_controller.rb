class Api::MoviesController < ApplicationController
    def show
        @movie = Movie.find(params[:id])
        render json: @movie
    end

    def create
        @movie_list = MovieList.find(params[:movie_list_id])
        @movie_list.movies.create(movie_params)
    end

    def destroy
        @movie = Movie.find(params[:id])
        @movie.destroy
    end

    private
    def movie_params
        params.require(:movie).permit(:genres, :homepage, :movie_id, :original_title, :overview, :poster_path, :release_date, :runtime, :tagline, :video, :vote_average)
    end
end
