class Track < ApplicationRecord

    validates :title, :uploader_id, presence: true

    has_one_attached :song

    has_one_attached :photo

    belongs_to :uploader,
        primary_key: :id,
        foreign_key: :uploader_id,
        class_name: :User
        
end