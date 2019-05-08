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
    cloudinary_file = Cloudinary::Uploader.upload(uploaded_file)
    @bar.attributes = {:image => cloudinary_file["public_id"]}
    p cloudinary_file
    p cloudinary_file["public_id"]
    p @bar
    if @bar.save == true
      redirect_to @bar
    else
      render 'new'
      byebug
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
      uploaded_file = params[:bar][:image].path
      cloudinary_file = Cloudinary::Uploader.upload(uploaded_file)
      puts cloudinary_file["public_id"]
      @bar.attributes = {:image => cloudinary_file["public_id"]}
      p @bar

    if @bar.update(bar_params)
      if @bar.update(image: cloudinary_file["public_id"])
        redirect_to @bar
      else
        render 'edit'
      end
    else
      render 'edit'
    end

    # respond_to do |format|
    #   if @bar.update(bar_params)
    #     format.html { redirect_to @bar, notice: "Bar was successfully updated." }
    #     format.json { render :show, status: :ok, location: @bar }
    #   else
    #     format.html { render :edit }
    #     format.json { render json: @bar.errors, status: :unprocessable_entity }
    #   end
    # end
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
    params.require(:bar).permit(:name, :image, :address, :business_hours, :place_id, :lat, :long, :avg_price, :owner_id, :category_ids => [])
  end
end