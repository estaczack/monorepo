const Message = require('../../../../../common/messages/Message')
const HeaderOpen = require('../../../../../common/entities/header/HeaderOpen')

HeaderOpen.show();

localStorage.clear()

Message(
  'success',
  "Successfully logged out. You'll be redirected to Hypatia's main page."
)

setTimeout(() => {
  window.location.href = '/'
}, 3000)
