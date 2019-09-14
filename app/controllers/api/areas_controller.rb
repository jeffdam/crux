class Api::AreasController < ApplicationController

  def areaPath(parent_id)
    return [] if parent_id == nil 
    area=Area.find(parent_id)
    return areaPath(area.parent_id).concat([area])
  end

  def index
    @areas = Area.includes(:sub_areas).with_attached_photos.where(parent_id: nil)
    areas_photos = []
    @areas.each { |area| areas_photos.concat(area.photos) }
    @photos = areas_photos.sample(5)
    @routes = Route.all.sample(10)
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
    @area_parents = areaPath(@area.parent_id)
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
      :route_count,
      photos: []
    )
  end
end



