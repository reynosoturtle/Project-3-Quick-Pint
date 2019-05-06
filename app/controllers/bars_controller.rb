class BarsController < ApplicationController
  # before_action :set_bar, only: [:show, :edit, :update, :destroy]
  before_action :authenticate_user!, :except => [ :show, :index ]

  # GET /bars
  # GET /bars.json
  def index
    @bars = Bar.all
    @users = User.all
  end

  # GET /bars/1
  # GET /bars/1.json
  def show
    @bar = Bar.find(params[:id])

  end

  # GET /bars/new
  def new
    @bar = Bar.new
  end

  # GET /bars/1/edit
  def edit
    @bar = Bar.find(params[:id])
  end

  # POST /bars
  # POST /bars.json
  def create
    @bar = Bar.new(bar_params)
    p @bar
    @bar.save
    # @bar.save == true
    redirect_to @bar

    # respond_to do |format|
    #   if @bar.save
    #     format.html { redirect_to @bar, notice: "Bar was successfully created." }
    #     format.json { render :show, status: :created, location: @bar }
    #   else
    #     format.html { render :new }
    #     format.json { render json: @bar.errors, status: :unprocessable_entity }
    #   end
    # end
  end

  # PATCH/PUT /bars/1
  # PATCH/PUT /bars/1.json
  def update
    respond_to do |format|
      @bar = Bar.find(params[:id])
      if @bar.update(bar_params)
        format.html { redirect_to @bar, notice: "Bar was successfully updated." }
        format.json { render :show, status: :ok, location: @bar }
      else
        format.html { render :edit }
        format.json { render json: @bar.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /bars/1
  # DELETE /bars/1.json
  def destroy
    @bar = Bar.find(params[:id])
    @bar.destroy
    respond_to do |format|
      format.html { redirect_to bars_url, notice: "Bar was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_bar
    @bar = Bar.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def bar_params
    # params.require(:bar).permit(:name, :opening_hour, :closing_hour, :image, :address, :category, :owner_id)
    params.require(:bar).permit(:name, :address, :category, :opening_hour, :closing_hour, :image)
  end
end
