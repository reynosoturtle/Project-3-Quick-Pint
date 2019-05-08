class CategoryController < ApplicationController
  private

  # Never trust parameters from the scary internet, only allow the white list through.
  def bar_params
    params.require(:category).permit(:name, bar_ids => [])
  end
end
