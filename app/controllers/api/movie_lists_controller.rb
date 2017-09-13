class Api::MovieListsController < ApplicationController
    before_action :authenticate_user!
    def index
        @user = User.find(current_user.id)
        @movie_lists = @user.movie_lists
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

    def create
        @user = User.find(current_user.id)
        @user.movie_lists.create!(movie_list_params)
    end

    def update
        @movie_list = MovieList.find(params[:id])
        @movie_list.update!(movie_list_params)
    end

    def destroy
        @movie_list = MovieList.find(params[:id])
        @movie_list.destroy
    end

    private
    def movie_list_params
        params.require(:movie_list).permit(:title, :category, :description, :user_id)
    end
end
