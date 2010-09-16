# By using the symbol ':user', we get Factory Girl to simulte the User model.
Factory.define :user do |user|
  user.name                   "Micheal Hartl"
  user.email                  "mhart1@example.com"
  user.password               "foobar"
  user.password_confirmation  "foobar"
end

Factory.sequence :email do |n|
  "person-#{n}@example.com"
end
