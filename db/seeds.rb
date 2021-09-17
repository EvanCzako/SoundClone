# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# seeds.rb
 
require 'open-uri'

User.delete_all

u1 = User.create!(
   username: 'demouser',
   password: '1234567',
   email: 'demouser@gmail.com',   
)

file = URI.open('https://soundclone-seeds.s3.amazonaws.com/demo_user_prof_pic.jpeg');
u1.profile_photo.attach(io: file, filename: "demo_user_prof_pic.jpeg");

u2 = User.create!(
   username: 'Doughy',
   password: '7654321',
   email: 'doughy@gmail.com',   
)
file2 = URI.open('https://soundclone-seeds.s3.amazonaws.com/dough_boi_prof_pic.png');
u2.profile_photo.attach(io: file2, filename: "dough_boi_prof_pic.png");

t1 =  Track.create!(
   uploader: u2,
   uploader_id: u2.id,
   title: "SOUNDOFTHECITY",
   description: "Toph and Dough at it againnnnn",
);
file3 = URI.open('https://soundclone-seeds.s3.amazonaws.com/SOUNDOFTHECITY.wav');
t1.song.attach(io: file3, filename: "SOUNDOFTHECITY.wav");
file4 = URI.open('https://soundclone-seeds.s3.amazonaws.com/SSOM_cover.png');
t1.photo.attach(io: file4, filename: "SSOM_cover.png");


t2 =  Track.create!(
   uploader: u2,
   uploader_id: u2.id,
   title: "'99 Benz",
   description: "Dough go skrrrrtttt",
);
file5 = URI.open("https://soundclone-seeds.s3.amazonaws.com/'99+Benz.wav");
t2.song.attach(io: file5, filename: "'99 Benz.wav");
file6 = URI.open('https://soundclone-seeds.s3.amazonaws.com/SSOM_cover.png');
t2.photo.attach(io: file6, filename: "SSOM_cover.png");


t3 =  Track.create!(
   uploader: u2,
   uploader_id: u2.id,
   title: "Stalactite",
   description: "2020 ish",
);
file7 = URI.open("https://soundclone-seeds.s3.amazonaws.com/Stalactite.wav");
t3.song.attach(io: file7, filename: "Stalactite.wav");
file8 = URI.open('https://soundclone-seeds.s3.amazonaws.com/TPWN_cover.png');
t3.photo.attach(io: file8, filename: "TPWN_cover.png");


t4 =  Track.create!(
   uploader: u2,
   uploader_id: u2.id,
   title: "Trappin In SoNo",
   description: "2020 ish",
);
file9 = URI.open("https://soundclone-seeds.s3.amazonaws.com/Trappin+In+SoNo.wav");
t4.song.attach(io: file9, filename: "Trappin In SoNo.wav");
file10 = URI.open('https://soundclone-seeds.s3.amazonaws.com/TPWN_cover.png');
t4.photo.attach(io: file10, filename: "TPWN_cover.png");

