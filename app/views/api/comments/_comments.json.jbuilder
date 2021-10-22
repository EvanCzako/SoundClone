json.array! @comments do |comment|
    json.extract! comment, :id, :body, :author
end