class User < ApplicationRecord
    validates :email, :session_token, presence: true, uniqueness: true 
    validates :username, :password_digest, presence: true
    validates :password, length: { minimum: 6, allow_nil: true }

    attr_reader :password
    after_initialize :ensure_session_token

    has_many :uploaded_tracks,
        primary_key: :id,
        foreign_key: :uploader_id,
        class_name: :Track

    has_many :posted_comments,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :Comment

    has_one_attached :profile_photo

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        if user && user.is_password?(password)
            return user 
        else
            return nil 
        end
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def self.generate_session_token 
        SecureRandom.urlsafe_base64
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def ensure_session_token 
        self.session_token ||= User.generate_session_token
    end

    def reset_session_token!    
        self.session_token = User.generate_session_token
        self.save! 
        self.session_token 
    end

end