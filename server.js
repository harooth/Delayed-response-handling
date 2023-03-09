const express = require("express");
const app = express();

app.use(express.static("public"))

app.get("/", (req, res)=>{
	res.redirect("index.html")
})

app.get("/delayed-response", (req, res)=>{
	setTimeout(()=>{
		res.send({
			"data": [
				{
					id:1,
					name: 'Joe'
				},
				{
					id:2,
					name: 'Kate'
				},
			]
		})
	}, 5000)
	
})

app.listen(3001)