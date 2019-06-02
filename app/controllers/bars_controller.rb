# frozen_string_literal: true

class BarsController < ApplicationController

  #doing the set bar allows it to universally adopt the private properties for the crud + fav for the setbar.
  before_action :set_bar, only: [:show, :edit, :update, :destroy, :favorite, :unfavorite]
  before_action :authenticate_user!, except: [:show, :index]
  protect_from_forgery except: [:getdistance]

  # GET /bars
  # GET /bars.json
  def index
    @bars = Bar.all.order(created_at: :desc)
    @users = User.all
    @page_title = 'Bars'
    #make the header dynamic
  end

  # GET /bars/1
  # GET /bars/1.json
  def show
    @promos = @bar.promos
    # @category = Category.all

  end

  # GET /bars/new
  def new
    @bar = Bar.new
    @categories = Category.all
    @owners = Owner.all
  end

  # GET /bars/1/edit
  def edit
    @bar = Bar.find(params[:id])
    @categories = Category.all
    @owners = Owner.all
  end

  # POST /bars
  # POST /bars.json
  def create

    @bar = Bar.new(bar_params)
    uploaded_file = params[:bar][:image].path
    cloudinary_file = Cloudinary::Uploader.upload(uploaded_file, :folder => "quick-pint")
    @bar.attributes = {:image => cloudinary_file["public_id"]}

    if @bar.save == true
      redirect_to @bar
    else
      render 'new'
    end

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

      @bar = Bar.find(params[:id])
      if params[:bar][:image] #insert this into quickpint
        uploaded_file = params[:bar][:image].path
        cloudinary_file = Cloudinary::Uploader.upload(uploaded_file, :folder => "quick-pint")
        puts cloudinary_file["public_id"]
        @bar.attributes = {:image => cloudinary_file["public_id"]}
        p @bar
      else
        bar_params[:image] = @bar.image #insert this into quickpint
      end
    respond_to do |format|
      if @bar.update(bar_params)
        if params[:bar][:image]
          @bar.update(image: cloudinary_file["public_id"])
          format.html { redirect_to @bar, notice: 'Bar was successfully updated.' }
          format.json { render :show, status: :ok, location: @bar }
        else
          bar_params[:image] = @bar.image #insert this into quickpint
          format.html { redirect_to @bar, notice: 'Bar was successfully updated.' }
          format.json { render :show, status: :ok, location: @bar }
        end
      else
        format.html { render :edit }
        format.json { render json: @bar.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /bars/1
  # DELETE /bars/1.json
  def destroy
    @bar.destroy
    respond_to do |format|
      format.html { redirect_to bars_url, notice: 'Bar was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  def favorite
    current_user.favorite(@bar)
    redirect_back(fallback_location:root_path)
  end

  def unfavorite
    current_user.unfavorite(@bar)
    #write conditions to find which page i'm on and redirect me to favorites page instead of returning back to index
    redirect_back(fallback_location:root_path)

  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_bar
    @bar = Bar.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def bar_params
    params.require(:bar).permit(:name, :image, :address, :business_hours, :place_id, :lat, :long, :avg_price, :owner_id, :category_ids => [])
  end
end