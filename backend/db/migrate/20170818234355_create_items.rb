class CreateItems < ActiveRecord::Migration[5.1]
  def change
    create_table :items do |t|
      t.string :name, null: false
      t.float :price, null: false
      t.string :img_url
      t.boolean :star
      t.references :user, foreign_key: true, null: false
      t.references :category, foreign_key: true

      t.timestamps
    end
    add_index :items, :user
    add_index :items, :cateogory
  end
end
