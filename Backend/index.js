const express = require('express')
const nodemailer = require("nodemailer")
const cors = require('cors')
const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('public'))


// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000/');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'Origin,Accept,X-Requested-With, Content-Type,authorisation');
//     res.setHeader('Access-Control-Allow-Credentials', true);
//     next();
// })

var corsOptions = {
    origin: 'https://ankur-wyd6.onrender.com',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept'],
    Credentials: true,
  }
app.use(cors(corsOptions));

app.post('/', (req, res) => {
    const data = req.body
    console.log(data)

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'raosahab280901@gmail.com',
            pass: 'rkrt uffv wyph znah'
        }
    });

    var mailOptions = {
        from: 'raosahab280901@gmail.com',
        to: "ankuryadav8802@gmail.com",
        subject: 'New message from client',
        text: `${data.name} with email ${data.email} and mobile ${data.mobile} sent you a message \n${data.message}`
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (info) {
            res.json({ success: true })
            // console.log(info)
        } else {
            res.json({ success: false, message: "Something went wrong" })
            // console.log(error);
        }
    });

})

app.listen(8000, () => {
    console.log("listening on port")
})
