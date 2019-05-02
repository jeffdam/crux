class Api::AreasController < ApplicationController

  def index
    @areas = Area.all
  end

  def show
    @area = Area.find(params[:id])
  end

  def create
    @area = Area.new(area_params)
    if @area.save
      render :show
    else
      render json: @area.errors.full_messages, status: 401
    end
  end

  def update
    @area = Area.find(params[:id])
    if @area.update(area_params)
      render :show
    else
      render json: @area.errors.full_messages, status: 401
    end
  end

  def destroy
    @area = Area.find(params[:id])
  end

  private
  
  def area_params
    params.require(:area).permit(
      :parent_id,
      :author_id,
      :name,
      :description,
      :getting_there,
      :latitude,
      :longitude
    )
  end
end
