class CaluculationsController < ApplicationController
  def index
    p params[:question_number]
    if params[:question_number].present?
      @question_number = params[:question_number].to_i
      p 'true'
    else
      @question_number = 1
      p 'false'
    end
  end

  def result
    @question_number = params[:question_number].to_i
    if @question_number == 2
      @result_level = '10級'
    elsif @question_number == 3
      @result_level = '8級'
    elsif @question_number == 4
      @result_level = '6級'
    elsif @question_number == 5
      @result_level = '4級'
    elsif @question_number == 6
      @result_level = '2級'
    elsif @question_number == 6
      @result_level = '1級'
    elsif @question_number >= 7
      @result_level ='免許皆伝'
    end
  end

  def answer
    answer = params[:answer]
    correct = params[:correct]
    
    if answer == correct
      redirect_to caluculation_url(question_number: params[:question_number])
    else
      redirect_to result_url(question_number: params[:question_number])
    end
  end
end
