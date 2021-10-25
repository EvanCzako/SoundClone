class Like < ApplicationRecord

    validates :track_id, :liker_id, presence: true

    belongs_to :liker,
        primary_key: :id,
        foreign_key: :liker_id,
        class_name: :User

    belongs_to :parent_track,
        primary_key: :id,
        foreign_key: :track_id,
        class_name: :Track

end