class CreateItems < ActiveRecord::Migration[5.1]
  def change
    create_table :items do |t|
      t.string :name, null: false
      t.float :price, null: false
      t.string :img_url
      t.boolean :star
      t.references :user, null: false
      t.references :category

      t.timestamps
    end
  end
end
