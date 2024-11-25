const QRCODE = require('qrcode');

const websiteLink ='https://sreerajsr.github.io/QR_code-generator/'
QRCODE.toFile('qr_code.png', websiteLink, {
    color: {
        dark: '#000000',
        light: '#ffffff',
    }
}, (err) => {
    if (err) {
        console.log("Error generating qrcode:",err)
    } else {
        console.log('QR code generated and saved as "qr_code.png"')
    }
})

