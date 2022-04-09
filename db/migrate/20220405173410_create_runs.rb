class CreateRuns < ActiveRecord::Migration[6.1]
  def change
    create_table :runs do |t|
      t.date :date
      t.float :distance, precision: 2
      t.float :total_time, precision: 2
      t.integer :calories
      t.integer :elevation
      t.integer :average_heartrate
      t.float :average_pace, precision: 2
      t.float :fastest_split, precision: 2
      t.boolean :favorite
      t.integer :user_id

      t.timestamps
    end
  end
end
