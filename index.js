const express = require("express")
const { QRPay } = require("vietnam-qr-pay")
const app = express()
const port = 3000

app.get("/", (req, res) => {
    res.send("TOOL READ DATA ON QRCODE PAYMENT!")
})

app.get("/qrcode/read/:qrcode", (req, res) => {
    let params = req.params,
        qrContent = params.qrcode || ""
    console.log("🚀 ~ file: index.js:11 ~ app.get ~ query:", params)

    const qrPay = new QRPay(qrContent)
    res.send(`<pre>${JSON.stringify(qrPay, null, 4)}</pre>`)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
