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

u3 = User.create!(
   username: 'Toph',
   password: '7654321',
   email: 'toph@gmail.com',   
)
file11 = URI.open('https://soundclone-seeds.s3.amazonaws.com/toph_prof_pic.png');
u3.profile_photo.attach(io: file11, filename: "toph_prof_pic.png");

t1 =  Track.create!(
   uploader: u2,
   uploader_id: u2.id,
   title: "SOUNDOFTHECITY",
   description: "Toph and Dough at it again",
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
   description: "Emo-rap inspired, 2020.",
);
file7 = URI.open("https://soundclone-seeds.s3.amazonaws.com/Stalactite.wav");
t3.song.attach(io: file7, filename: "Stalactite.wav");
file8 = URI.open('https://soundclone-seeds.s3.amazonaws.com/TPWN_cover.png');
t3.photo.attach(io: file8, filename: "TPWN_cover.png");


t4 =  Track.create!(
   uploader: u2,
   uploader_id: u2.id,
   title: "Trappin In SoNo",
   description: "Shout out to Norwalk!",
);
file9 = URI.open("https://soundclone-seeds.s3.amazonaws.com/Trappin+In+SoNo.wav");
t4.song.attach(io: file9, filename: "Trappin In SoNo.wav");
file10 = URI.open('https://soundclone-seeds.s3.amazonaws.com/TPWN_cover.png');
t4.photo.attach(io: file10, filename: "TPWN_cover.png");

t5 =  Track.create!(
   uploader: u3,
   uploader_id: u3.id,
   title: "IDKU",
   description: "Toph and Looseleaf team up for this RnB jam.",
);
file12 = URI.open("https://soundclone-seeds.s3.amazonaws.com/idku.mp3");
t5.song.attach(io: file12, filename: "idku.mp3");
file13 = URI.open('https://soundclone-seeds.s3.amazonaws.com/idku_cover.png');
t5.photo.attach(io: file13, filename: "idku_cover.png");

t6 =  Track.create!(
   uploader: u3,
   uploader_id: u3.id,
   title: "Fransancisco",
   description: "Toph and Lupo team up for this Cali anthem.",
);
file14 = URI.open("https://soundclone-seeds.s3.amazonaws.com/fransancisco.mp3");
t6.song.attach(io: file14, filename: "fransancisco.mp3");
file15 = URI.open('https://soundclone-seeds.s3.amazonaws.com/fransancisco_cover.png');
t6.photo.attach(io: file15, filename: "fransancisco_cover.png");

