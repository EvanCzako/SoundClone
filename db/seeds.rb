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
file = URI.open('https://s3.console.aws.amazon.com/s3/object/soundclone-seeds?region=us-east-1&prefix=demo_user_prof_pic.jpeg')
file = URI.open('https://soundclone-seeds.s3.amazonaws.com/demo_user_prof_pic.jpeg');
# file = URI.open('/Users/evanczako/Documents/App Academy/FullStack Project/Files for seeding/demo_user_prof_pic.jpeg');
u1.profile_photo.attach(io: file, filename: "demo_user_prof_pic.jpeg");

# u2 = User.create!(
#    username: 'Doughy',
#    password: '7654321',
#    email: 'doughy@gmail.com',   
# )
# u2.profile_photo.attach(io: File.open("/Users/evanczako/Documents/App Academy/FullStack Project/Files for seeding/dough_boi_prof_pic.png"), filename: "dough_boi_prof_pic.png");
# file2 = URI.open("/Users/evanczako/Documents/App Academy/FullStack Project/Files for seeding/dough_boi_prof_pic.png");
# file2 = URI.open('https://s3.console.aws.amazon.com/s3/object/soundclone-seeds?region=us-east-1&prefix=dough_boi_prof_pic.png');
# u2.profile_photo.attach(io: file2, filename: "dough_boi_prof_pic.png");

# t1 =  Track.create!(
#    uploader: u2,
#    uploader_id: u2.id,
#    title: "SOUNDOFTHECITY",
#    description: "Toph and Dough at it againnnnn",
# );
# t1.song.attach(io: File.open("/Users/evanczako/Documents/App Academy/FullStack Project/Files for seeding/SOUNDOFTHECITY.wav"), filename: "SOUNDOFTHECITY.wav");
# t1.photo.attach(io: File.open("/Users/evanczako/Documents/App Academy/FullStack Project/Files for seeding/SSOM_cover.png"), filename: "SSOM_cover.png");


# t2 =  Track.create!(
#    uploader: u2,
#    uploader_id: u2.id,
#    title: "'99 Benz",
#    description: "Dough at it againnnnn",
# );
# t2.song.attach(io: File.open("/Users/evanczako/Documents/App Academy/FullStack Project/Files for seeding/'99 Benz.wav"), filename: "'99 Benz.wav");
# t2.photo.attach(io: File.open("/Users/evanczako/Documents/App Academy/FullStack Project/Files for seeding/SSOM_cover.png"), filename: "SSOM_cover.png");


# t3 =  Track.create!(
#    uploader: u2,
#    uploader_id: u2.id,
#    title: "Stalactite",
#    description: "2020 ish",
# );
# t3.song.attach(io: File.open("/Users/evanczako/Documents/App Academy/FullStack Project/Files for seeding/Stalactite.wav"), filename: "Stalactite.wav");
# t3.photo.attach(io: File.open("/Users/evanczako/Documents/App Academy/FullStack Project/Files for seeding/TPWN_cover.png"), filename: "TPWN_cover.png");

# t4 =  Track.create!(
#    uploader: u2,
#    uploader_id: u2.id,
#    title: "Trappin In SoNo",
#    description: "2020 ish",
# );
# t4.song.attach(io: File.open("/Users/evanczako/Documents/App Academy/FullStack Project/Files for seeding/Trappin In SoNo.wav"), filename: "Trappin In SoNo.wav");
# t4.photo.attach(io: File.open("/Users/evanczako/Documents/App Academy/FullStack Project/Files for seeding/TPWN_cover.png"), filename: "TPWN_cover.png");