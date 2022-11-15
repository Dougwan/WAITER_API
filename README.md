# WAITER_API

## COLLECTIONS

--- PRODUCTS ---
\_id - ObjectID
name - String
description - String
imagePath - String
price - Number
ingredients - [{icon: String, name: String}]
category - ObjectID

--- CATEGORY ---
\_id - ObjectID
name - String
icon - String

--- ORDER ---
\_id - ObjectID
table - String
status - enum('WAITING', 'IN_PRODUCTION', 'DONE')
createdAt - Date
prodcts - [{product: ObjectId, quantity: Number}]
