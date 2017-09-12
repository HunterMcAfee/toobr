class Api::ShowListsController < ApplicationController
    before_action :authenticate_user!
    def index
        @show_lists = ShowList.all
        render json: @show_lists
    end

    def show
        @show_list = ShowList.find(params[:id])
        @shows = @show_list.shows
        render json: {
            show_list: @show_list,
            shows: @shows
        }
    end

    def create
        @show_list = ShowList.create!(show_list_params)
    end

    def update
        @show_list = ShowList.find(params[:id])
        @show_list.update!(show_list_params)
    end

    def destroy
        @show_list = ShowList.find(params[:id])
        @show_list.destroy
    end

    private
    def show_list_params
        params.require(:show_list).permit(:title, :category, :description)
    end
end
