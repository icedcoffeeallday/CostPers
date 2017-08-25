class CreateUses < ActiveRecord::Migration[5.1]
  def change
    create_table :uses do |t|
      t.references :item, foreign_key: true, null: false, on_delete: :nullify

      t.timestamps
    end
  end
end
