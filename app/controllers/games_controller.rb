class GamesController < ApplicationController
  def index
  end

  def show
    @id = params[:id]

    @title = params[:id]
  end
end
