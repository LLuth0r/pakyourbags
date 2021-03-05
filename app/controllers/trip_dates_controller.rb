class TripDatesController < ApplicationController
  before_action :set_trip_date, only: [:show, :update, :destroy]

  # GET /trip_dates
  def index
    @trip_dates = TripDate.all

    render json: @trip_dates
  end

  # GET /trip_dates/1
  def show
    render json: @trip_date
  end

  # POST /trip_dates
  def create
    @trip_date = TripDate.new(trip_date_params)

    if @trip_date.save
      render json: @trip_date, status: :created, location: @trip_date
    else
      render json: @trip_date.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /trip_dates/1
  def update
    if @trip_date.update(trip_date_params)
      render json: @trip_date
    else
      render json: @trip_date.errors, status: :unprocessable_entity
    end
  end

  # DELETE /trip_dates/1
  def destroy
    @trip_date.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_trip_date
      @trip_date = TripDate.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def trip_date_params
      params.require(:trip_date).permit(:start_date, :end_date)
    end
end
