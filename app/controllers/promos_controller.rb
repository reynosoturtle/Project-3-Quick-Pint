class PromosController < ApplicationController
  before_action :set_bar, only: [:new, :edit, :create, :update, :destroy]
  before_action :set_promo, only: [:edit, :update, :destroy]

  def new
    @promo = @bar.promos.new
  end

  def edit
  end

  def create
    @promo = @bar.promos.build(promo_params)

    respond_to do |format|
      if @promo.save
        format.html { redirect_to @bar, notice: "Promo was successfully created." }
        format.json { render :show, status: :created, location: @promo }
      else
        format.html { render :new }
        format.json { render json: @promo.errors}
      end
    end
  end

  def update
    respond_to do |format|
      if @promo.update(promo_params)
        format.html { redirect_to @bar, notice: "Promo was successfully updated." }
        format.json { render :show}
      else
        format.html { render :edit }
        format.json { render json: @promo.errors}
      end
    end
  end

  def destroy
    @promo.destroy
    respond_to do |format|
      format.html { redirect_to @bar, notice: 'Promo was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private

  def set_promo
    @promo = Promo.find(params[:id])
  end

  def set_bar
    @bar = Bar.find(params[:bar_id])
  end

  def promo_params
    params.require(:promo).permit(:name, :detail, :duration, :bar_id)
  end

end
