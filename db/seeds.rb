# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all


u1 = User.create!(
   username: 'demouser',
   password: '1234567',
   email: 'demouser@gmail.com',   
)

t1 =  Track.create!(
   uploader: u1,
   uploader_id: u1.id,
   title: "SOUNDOFTHECITY",
   description: "Toph and Dough at it againnnnn",
);
t1.song.attach(io: File.open("/Users/evanczako/Desktop/SOUNDOFTHECITY.wav"), filename: "SOUNDOFTHECITY.wav");