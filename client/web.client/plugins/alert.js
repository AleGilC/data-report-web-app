/* eslint-disable prettier/prettier */
import Swal from 'sweetalert2'

export default ({ app }, inject) => {
  const AlertMixin = Swal.mixin({
    cancelButtonColor: '#ffffff',
    cancelButtonText: 'No',
    confirmButtonColor: '#29a19a',
    confirmButtonText: 'Si',
  })

  const Alert = (options) => {
    const { body } = options
    const replace = (txt) => '<p>{txt}</p>\n'.replace('{txt}', txt)
    let content = ''

    if (body && body.content) {
      content = body.content
        .split('\n')
        .filter((txt) => !!txt.trim())
        .map((txt) => replace(txt))
        // .map((txt) => txt.replace(/\*([A-Za-z0-9])\*/g, `<strong>{txt}</strong>`))
        .join('')
    }
    delete options.body

    return AlertMixin({
      ...options,
      html: `
      ${body && body.text ? `<p class="primary--text">${body.text}</p>` : ''}
      ${content}
    `,
    })
  }

  const localMessage = app.i18n.messages[app.i18n.locale]
  const alert = {
    users: {
      success: {
        successful() {
          Alert({
            body: {
              content: localMessage.alerts.users.successful.content,
            },
            title: localMessage.alerts.users.successful.title,
            type: 'success',
            confirmButtonText: 'Ok',
          })
        }
      }
    }
  }

  inject('alert', alert)
}
