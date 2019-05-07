class PromoColumnAmend < ActiveRecord::Migration[5.2]
  def change
    remove_column :promos, :from
    remove_column :promos, :till
    add_column :promos, :duration, :string
    #Ex:- add_column("admin_users", "username", :string, :limit =>25, :after => "email")
  end
end
