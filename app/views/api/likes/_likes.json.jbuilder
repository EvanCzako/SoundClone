json.array! @likes do |like|
    json.extract! like, :id
end