class CreateProfiles < ActiveRecord::Migration
  def change
    enable_extension 'uuid-ossp'

    create_table :profiles, id: :uuid do |t|
      t.timestamps null: false
    end
  end
end
