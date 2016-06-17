class CreateTrackingTags < ActiveRecord::Migration
  def change
    create_table :tracking_tags, id: :uuid do |t|
      t.belongs_to :profile, index: true, foreign_key: true, type: :uuid
      t.string :tag_type
      t.string :tag
      t.string :path

      t.timestamps null: false
    end
  end
end
