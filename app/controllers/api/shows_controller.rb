class Api::ShowsController < ApplicationController
    before_action :authenticate_user!
    def show
        @show = Show.find(params[:id])
        render json: @show
    end

    def create
        @show_list = ShowList.find(params[:show_list_id])
        @show_list.shows.create(show_params)
    end

    def destroy
        @show = Show.find(params[:id])
        @show.destroy
    end

    private
    def show_params
        params.require(:show).permit(:show_id, :original_name, :overview, :poster_path, :backdrop_path, :vote_average)
    end
end