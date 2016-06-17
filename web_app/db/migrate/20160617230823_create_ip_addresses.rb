class CreateIpAddresses < ActiveRecord::Migration
  def change
    create_table :ip_addresses, id: :uuid do |t|
      t.belongs_to :profile, index: true, foreign_key: true, type: :uuid
      t.string :address_type
      t.string :address

      t.timestamps null: false
    end
  end
end
