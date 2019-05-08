class RmCatIdFrmBars < ActiveRecord::Migration[5.2]
  def change
    remove_reference :bars, :category, index: true, foreign_key: true
  end
end
