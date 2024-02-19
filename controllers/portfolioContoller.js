const nodemailer = require("nodemailer");

//transport
const transporter = nodemailer.createTransport({
  service:'gmail',
  auth: {
    user: "rkpandey5001@gmail.com",
    pass: "jiprqqsepmtkrypv",
  },
});

const sendEmailController = (req, res) => {
  try {
    const { name, email, mobile, msg } = req.body;

    //validation
    if (!name || !mobile || !email || !msg) {
      return res.status(500).send({
        success: false,
        message: "Please Provide All Fields",
      });
    }
    //email matter
    transporter.sendMail({
      from: 'rkpandey5001@gmail.com',
      to: "rkpandey463@gmail.com",
      subject: "Regarding Mern Portfolio App",
      html: `
        <h5>Detail Information</h5>
        <ul>
          <li><p>Name : ${name}</p></li>
          <li><p>Mobile : ${mobile}</p></li>
          <li><p>Email : ${email}</p></li>
          <li><p>Message : ${msg}</p></li>
        </ul>
      `,
    });

    return res.status(200).send({
      success: true,
      message: "Your Message Send Successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Send Email API Error",
      error,
    });
  }
};

module.exports = { sendEmailController };
