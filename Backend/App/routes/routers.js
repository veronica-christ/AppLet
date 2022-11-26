const express = require("express");
const router = express.Router();
const { register } = require("../controllers/register.controllers");
const access = require("../controllers/login.controllers");

const survQuest = require("../controllers/survQuestions");
const mail = require("../controllers/sendmail.controllers");
const SendmailTransport = require("nodemailer/lib/sendmail-transport");
const { sendMail } = require("../controllers/sendmail.controllers");

router.post("/signup/:usertype", register);
router.post("/signin", access.login);

router.post("/addSurvey", survQuest.addSurvey);
router.post("/addQna", survQuest.addQna);
router.post("/addResults", survQuest.addResults);


router.get("/surveylist", survQuest.getAllsurvey);
router.get("/takeSurvey/:survey_id", survQuest.getQuesions);
router.put("/updateStatus/:survey_id", survQuest.updateStatus);
router.delete("/deleteSurvey/:survey_id", survQuest.deleteSurvey);
router.delete("/deleteQna/:survey_id", survQuest.deleteQna);
router.get("/getdetails/:survey_id", survQuest.getASurvey);
router.post("/sendMail", sendMail);
router.get("/getResults/:user_id", survQuest.getResults);



module.exports = router;
