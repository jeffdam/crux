class Api::RoutesController < ApplicationController

  def areaPath(parent_id)
    return [] if parent_id == nil 
    area=Area.find(parent_id)
    return areaPath(area.parent_id).concat([area])
  end

  def index
    @routes = Route.includes(:area).all
  end

  def show
    @route = Route.includes(:author, :area, :neighbor_routes).with_attached_photos.find(params[:id])
    @area_path = areaPath(@route.area_id)
  end

  def create
    @route = Route.new(route_params)
    @area_path = areaPath(@route.area_id)
    if @route.save
      @area_path.each do |area|
        area.update({route_count: area.route_count + 1})
      end

      render :show
    else
      render json: @route.errors.full_messages, status: 401
    end
  end

  def update
    @route = Route.find(params[:id])
    @area_path = areaPath(@route.area_id)
    if @route.update(route_params)
      render :show
    else
      render json: @route.errors.full_messages, status: 401
    end
  end
  
  def destroy
    @route = Route.find(params[:id])
  end
  
  def route_finder 
    searchParams = {
      route_type: params["route_type"],
      rope_grade: params["r_grade_min"].to_i..params["r_grade_max"].to_i,
      boulder_grade: params["b_grade_min"].to_i..params["b_grade_max"].to_i,
      pitches: params["pitches"].to_i..100,
    }
    if params["toprope"]
      searchParams["toprope"] = params["toprope"]
    end

    @routes = Route.includes(:area).where(searchParams)
  end

  def recently_added_routes
    @routes = Route.includes(:area).last(10)
  end

  private
  
  def route_params
    params.require(:route).permit(
      :name, 
      :route_type, 
      :author_id, 
      :area_id, 
      :rope_grade, 
      :boulder_grade, 
      :safety, 
      :first_ascensionist, 
      :first_ascent_date, 
      :length, 
      :pitches, 
      :protection, 
      :description, 
      :location,
      :toprope,
      :r_grade_min,
      :r_grade_max,
      :b_grade_min,
      :b_grade_max,
      :sort_by,
      photos: []
    )
  end
end