const form = document.querySelector('#form')

form.addEventListener('submit', (event) => {
  event.preventDefault()
  const formData = new FormData(form)
  const nombre = formData.get('nombre')
  const email = formData.get('email')
  const telefono = formData.get('telefono')

  if (
    !validateEMail(email) ||
    !validateNumero(telefono) ||
    !validateName(nombre)
  ) {
    form.classList.add('error')
    return
  }

  form.classList.remove('error')
  simularAsync(formData)
    .then((data) => data)
    .catch((err) => console.error(err))
})

const simularAsync = (form) => {
  return fetch('/some-url', {
    method: 'POST',
    body: JSON.stringify(form)
  })
    .then((res) => res.json())
    .catch((err) => console.warn(err))
}

const validateEMail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  return emailRegex.test(email)
}

const validateName = (nombre) => {
  return nombre.trim().length > 5
}

const validateNumero = (numero) => {
  const phoneRegex = /^569\d{8}$/

  return phoneRegex.test(numero)
}
