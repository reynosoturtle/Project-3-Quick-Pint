class BarsBizHourAsTextArray < ActiveRecord::Migration[5.2]
  def change
    remove_column :bars, :opening_hour
    remove_column :bars, :closing_hour
    add_column :bars, :business_hours, :text, array: true, default:[]
  end
end
