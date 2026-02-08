# Modified Whatsapp-API
<p align='center'>
  <img src="https://files.catbox.moe/i9qbq1.jpg" width="500">
</p>

--- 

## Usage
```json
"depencies": {
  "raraabail": "github:Raraaimupp/baileysx2026"
}
```
## Import
```javascript
const {
  default:makeWASocket,
  // Other Options 
} = require('raraabail');
```

---
# How To Connect To Whatsapp
## With QR Code
```javascript
const {
  default: makeWASocket
} = require('raraabail');

const client = makeWASocket({
  browser: ['Ubuntu', 'Chrome', '20.00.1'],
  printQRInTerminal: true
})
```

Baileys by Raraaimupp
