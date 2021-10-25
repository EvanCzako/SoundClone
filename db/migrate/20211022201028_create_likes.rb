class CreateLikes < ActiveRecord::Migration[6.1]
  def change
    create_table :likes do |t|
      t.integer :track_id, null: false
      t.integer :liker_id, null: false
      t.timestamps
    end

    add_index :likes, :track_id
    add_index :likes, :liker_id
  end
end
