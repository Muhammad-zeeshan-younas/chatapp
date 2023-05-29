class CreateMessage < ActiveRecord::Migration[6.1]
  def change
    create_table :messages do |t|
      t.references :channel, foreign_key: true, null: false
      t.references :user, foreign_key: true, null: false
      t.text :content
      t.timestamps
    end
  end
end
