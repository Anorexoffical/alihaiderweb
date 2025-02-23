const express = require("express");
const router = express.Router();
const crypto = require("crypto");
const axios = require('axios');


const passPhrase = ""; 
const testingMode = true;
const pfHost = testingMode ? "sandbox.payfast.co.za" : "www.payfast.co.za";


const pfValidSignature = (pfData, pfParamString, pfPassphrase = null) => {
    let tempParamString = pfParamString;
    if (pfPassphrase) {
        tempParamString += `&passphrase=${encodeURIComponent(pfPassphrase.trim()).replace(/%20/g, "+")}`;
    }
    const signature = crypto.createHash('md5').update(tempParamString).digest('hex');
    console.log("Generated Signature:", signature);
    console.log("PayFast Sent Signature:", pfData["signature"]);
    return pfData['signature'] === signature;
};

const pfValidServerConfirmation = async (pfHost, pfParamString) => {
    try {
        const response = await axios.post(`https://${pfHost}/eng/query/validate`, pfParamString, {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        });
        console.log("server response:", response.data);
        return response.data === 'VALID';
    } catch (error) {
        console.error('Error confirming with server:', error);
        return false;
    }
};


router.post("/payfast/notifyurl", async (req, res) => {
    // const pfData = req.body;
    const pfData = JSON.parse(JSON.stringify(req.body));
    console.log(pfData);


    let pfParamString = "";
    for (const key in pfData) {
        if (key !== 'signature') {
            pfParamString += `${key}=${encodeURIComponent(pfData[key].trim()).replace(/%20/g, "+")}&`;
        }
    }
    pfParamString = pfParamString.slice(0, -1);


    const check1 = pfValidSignature(pfData, pfParamString, passPhrase);
    const check4 = await pfValidServerConfirmation(pfHost, pfParamString);

    if (check1 && check4) {
        console.log("Payment verified and successful");
        res.status(200).send("OK");
    } else {
        console.log("Payment verification failed");
        res.status(400).send("Verification Failed");
    }
});

// Handle payment success
router.get("/payfast/success", (req, res) => {
    console.log("Payment was successful");
    res.send("Payment Successful! Thank you for your order.");
});

// Handle payment cancellation
router.get("/payfast/cancel", (req, res) => {
    console.log("Payment was cancelled by the user");
    res.send("Payment Cancelled. Please try again if needed.");
});

module.exports = router;
