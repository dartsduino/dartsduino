class GamesController < ApplicationController
  def x01
    @title = '301'

    @scores = []
    12.times do
      @scores.push(0)
    end

    @total_score = 301
  end
end
