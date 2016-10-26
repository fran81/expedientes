class CuentaCargarController{
  constructor ($stateParams, $state, API) {
    'ngInject'

    this.$state = $state
    this.formSubmitted = false
    this.alerts = []
    this.userRolesSelected = []

    this.cuentacargardata = API.all('cuentas')
    console.info(this)
/*    this.numero = ''
    this.nombre = ''
    this.activo = ''*/

    if ($stateParams.alerts) {
      this.alerts.push($stateParams.alerts)
    }

/*    let userId = $stateParams.userId

    let Roles = API.service('roles', API.all('users'))
    Roles.getList()
      .then((response) => {
        let systemRoles = []
        let roleResponse = response.plain()

        angular.forEach(roleResponse, function (value) {
          systemRoles.push({id: value.id, name: value.name})
        })

        this.systemRoles = systemRoles
      })

    let UserData = API.service('show', API.all('users'))
    UserData.one(userId).get()
      .then((response) => {
        let userRole = []
        let userResponse = response.plain()

        angular.forEach(userResponse.data.role, function (value) {
          userRole.push(value.id)
        })

        response.data.role = userRole
        this.usereditdata = API.copy(response)
      })*/
  }


  save (isValid) {
    if (isValid) {
/*      var user = {
        numero: this.numero,
        nombre: this.nombre,
        activo: this.activo
      }*/
//    if (isValid) {
      let $state = this.$state
      console.info(this)
      console.info(this.activa)
      var cuenta = {
        numero: this.numero,
        nombre: this.nombre,
        descripcion: this.descripcion,
        activo: this.activa,
      }
      console.info(cuenta)
      if (cuenta.activo !== 'undefined') {
        console.info(cuenta)
      }
      this.cuentacargardata.post(cuenta)
        
    }

    
  }  
  $onInit () {}
}

export const CuentaCargarComponent = {
    templateUrl: './views/app/components/cuenta-cargar/cuenta-cargar.component.html',
    controller: CuentaCargarController,
    controllerAs: 'vm',
    bindings: {}
}
