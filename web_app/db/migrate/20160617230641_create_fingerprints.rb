class CreateFingerprints < ActiveRecord::Migration
  def change
    create_table :fingerprints, id: :uuid do |t|
      t.integer :time_drift
      t.text :cpu_information
      t.text :gpu_information
      t.belongs_to :profile, index: true, foreign_key: true, type: :uuid

      t.timestamps null: false
    end
  end
end
