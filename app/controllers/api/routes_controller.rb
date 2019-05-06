class Api::RoutesController < ApplicationController

  def areaPath(parent_id)
    return [] if parent_id == nil 
    area=Area.find(parent_id)
    return areaPath(area.parent_id).concat([area])
  end

  def index
    @routes = Route.where(parent_id: nil)
  end

  def show
    @route = Route.includes(:author,:area, :neighbor_routes).find(params[:id])
    @area_path = areaPath(@route.area_id)
  end

  def create
    @route = Route.new(route_params)
 
    if @route.save
      render :show
    else
      render json: @route.errors.full_messages, status: 401
    end
  end

  def update    
    @route = Route.find(params[:id])

    if @route.update(route_params)
      render :show
    else
      render json: @route.errors.full_messages, status: 401
    end
  end

  def destroy
    @route = Route.find(params[:id])
  end

  private
  
  def route_params
    params.require(:route).permit(
      :name, 
      :route_type, 
      :author_id, 
      :area_id, 
      :grade, 
      :safety, 
      :first_ascensionist, 
      :first_ascent_date, 
      :length, 
      :pitches, 
      :protection, 
      :description, 
      :location,
      :toprope
    )
  end
end


