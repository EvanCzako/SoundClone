class Comment < ApplicationRecord

    validates :body, :author_id, :track_id, presence: true
    validates :body, length: { maximum: 500 }

    belongs_to :author,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :User

    belongs_to :parent_track,
        primary_key: :id,
        foreign_key: :track_id,
        class_name: :Track

end