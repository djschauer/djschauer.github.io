* **Instructions:**

* Spend the next few minutes with your partner answering the following questions. You should be using the Sequelize Documentation (and whatever other references you find online).

  ```
  	- Answer: What is Sequelize?
	  A sql library that interacts with the databases. In javascript. ORM library.

  	- Answer: What advantages does it offer?
	Reusable code that can execute sql code from js. Automation.

  	- Answer: How do I install it? How do I incorporate it into my app?
	npm install, to install it. require Sequelize in your application.

  	- Answer: What the heck is a Sequelize model? What role will it play?
	Models are essentially tables in an sql database. Its a way of setting up tables.

  	- Answer: Let's say I have the below table in MySQL. 

  		| Country     | PhoneCode | Capital   | IndependenceYear |
  		|-------------|-----------|-----------|------------------|
  		| Afghanistan | 93        | Kabul     | 1919             |
  		| Belarus     | 375       | Misk      | 1991             |
  		| Netherlands | 31        | Amsterdam | 1648             |
  		| Oman        | 968       | Muscat    | 1970             |
  		| Zambia      | 260       | Lusaka    | 1964             |

  		- How would I model it in Sequelize? 
		  const countries = sequelize.define('countries', {
			  country: sequelize.string,
			  PhoneCode: sequelize.integer,
			  capital: sequelize.strong,
			  independenceyear: sequelize.integer
		  });

		  const countries = sequelize.define ('countries', {
			  country: {
				  type: sequelize.string,
				  allowNull: false
			  },
				phonecode: {
					type: sequelize.string
				}
		  })

  		- How would I query for all the records where the Independence Year was less than 50 years ago?

  		- How would I query the table, order it by descending Independence Years, and limit the results to just show 2 of the records. Skipping the first two? (i.e. Results: Zambia, Afghanistan)

  	- Bonus: How do I use Sequelize to make changes to an existing table with data in it? 
  ```
