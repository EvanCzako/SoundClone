class CreateTracks < ActiveRecord::Migration[6.1]
  def change
    create_table :tracks do |t|
      t.integer :uploader_id, null: false
      t.string :title, null: false
      t.string :description
      t.timestamps
    end

    add_index :tracks, :uploader_id
  end
end
