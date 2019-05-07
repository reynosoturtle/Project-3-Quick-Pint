class BarsAddColumnsForGmap < ActiveRecord::Migration[5.2]
  def change
    add_column :bars, :place_id, :string
    add_column :bars, :lat, :decimal, :precision => 10, :scale => 6
    add_column :bars, :long, :decimal, :precision => 10, :scale => 6
    #Ex:- add_column("admin_users", "username", :string, :limit =>25, :after => "email")
  end
end
