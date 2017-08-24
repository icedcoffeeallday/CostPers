  Item.destroy_all
  Use.destroy_all
  User.destroy_all


  User.create!({first_name: "Faye", last_name: "Hayes", email: "faye@mail.com", password: "password"})
  User.create!({first_name: "Andrea", last_name: "Scott", email: "andrea@mail.com", password: "password"})
  User.create!({first_name: "Tyler", last_name: "Kawabata", email: "tyler@mail.com", password: "password"})
  User.create!({first_name: "Ginny", last_name: "Fahs", email: "ginny@mail.com", password: "password"})
  User.create!({first_name: "Kevin", last_name: "Cai", email: "kevin@mail.com", password: "password"})


  Item.create!({name: "Coloring Book", price: 40, user_id: User.all.sample.id, star: true })
  Item.create!({name: "Bike", price: 500, user_id: User.all.sample.id, star: true })
  Item.create!({name: "iPhone", price: 800, user_id: User.all.sample.id, star: false })
  Item.create!({name: "MacBook", price: 1500, user_id: User.all.sample.id, star: false })
  Item.create!({name: "Guitar", price: 1000, user_id: User.all.sample.id, star: false })
  Item.create!({name: "RV", price: 50000, user_id: User.all.sample.id, star: false })
  Item.create!({name: "Smart TV", price: 2000, user_id: User.all.sample.id, star: true })
  Item.create!({name: "Shirt", price: 200, user_id: User.all.sample.id, star: false })
  Item.create!({name: "Speakers", price: 400, user_id: User.all.sample.id, star: true })
  Item.create!({name: "Tent", price: 350, user_id: User.all.sample.id, star: false })
  Item.create!({name: "Sony A9 Camera", price: 4000, user_id: User.all.sample.id, star: true })
  Item.create!({name: "Suitcase", price: 100, user_id: User.all.sample.id, star: false })
  Item.create!({name: "Netflix/year", price: 95.88, user_id: User.all.sample.id, star: false })
  Item.create!({name: "Treadmill", price: 5000, user_id: User.all.sample.id, star: false })
  Item.create!({name: "Cake Mixer", price: 250, user_id: User.all.sample.id, star: false })
  Item.create!({name: "Fitbit", price: 150, user_id: User.all.sample.id, star: true })
  Item.create!({name: "Messenger Bag", price: 500, user_id: User.all.sample.id, star: false })
  Item.create!({name: "Deep Fryer", price: 500, user_id: User.all.sample.id, star: false })
  Item.create!({name: "XBox", price: 300, user_id: User.all.sample.id, star: false })
  Item.create!({name: "Health Insurance", price: 6000, user_id: User.all.sample.id, star: false })




  250.times do
    Use.create!({
      item_id: Item.all.sample.id
      })
  end
