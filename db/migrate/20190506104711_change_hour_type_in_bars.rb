class ChangeHourTypeInBars < ActiveRecord::Migration[5.2]
  def change
    change_column :bars, :opening_hour, 'integer USING EXTRACT(EPOCH FROM opening_hour)::INT', :null => true
    change_column :bars, :closing_hour, 'integer USING EXTRACT(EPOCH FROM closing_hour)::INT', :null => true
    change_column :bars, :image, :text, :null => true
  end
end
