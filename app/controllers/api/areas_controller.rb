class Api::AreasController < ApplicationController

  def areaPath(parent_id)
    return [] if parent_id == nil 
    area=Area.find(parent_id)
    return areaPath(area.parent_id).concat([area])
  end

  def index
    @areas = Area.includes(:sub_areas).where(parent_id: nil)
  end

  def show
    @area = Area.includes(:author,:routes,:sub_areas).with_attached_photos.find(params[:id]) 
    @area_parents = areaPath(@area.parent_id)
  end

  def create
    @area = Area.new(area_params)
    @area_parents = areaPath(@area.parent_id)
    if @area.save
      render :show
    else
      render json: @area.errors.full_messages, status: 401
    end
  end

  def update
    
    @area = Area.find(params[:id])
    if @area.parent_id
      @parent_area = Area.find(@area.parent_id)
    else
      @parent_area = Area.find(params[:id])
    end
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
      :longitude,
      photos: []
    )
  end
end



