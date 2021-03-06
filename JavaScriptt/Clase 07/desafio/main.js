
// usando libreria de Sweet Alert

Swal.fire({
    title: 'Ingresa tu nombre',
    input: 'text',
    inputAttributes: {
      autocapitalize: 'off'
    },
    showCancelButton: true,
    confirmButtonText: 'Ingresar',
    showLoaderOnConfirm: true,
    preConfirm: (login) => {
      return fetch(`//api.github.com/users/${login}`)
        .then(response => {
          if (!response.ok) {
            throw new Error(response.statusText)
          }
          return response.json()
        })
        .catch(error => {
          Swal.showValidationMessage(
            `Nombre incorrecto: ${error}`
          )
        })
    },
    allowOutsideClick: () => !Swal.isLoading()
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: `Bienvenido ${result.value.login}`
      })
    }
  })



//   title: `${result.value.login}'s avatar`,
//         imageUrl: result.value.avatar_url