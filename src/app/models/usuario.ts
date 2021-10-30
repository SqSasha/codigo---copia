export class Usuario {
  public nombreUsuario = '';
  public password = '';

  public validarNombreUsuario(): string {
    if (this.nombreUsuario.trim() === '') {
      return 'ingrese usuario.';
    }
    if (this.nombreUsuario.length < 3 || this.nombreUsuario.length > 8) {
      return 'usuario debe tener entre 3 y 8 caracteres.';
    }
    return '';
  }

  public validarPassword(): string {
    if (this.password.trim() === '') {
      return 'ingresar la contraseña.';
    }
    for(let i = 0; i < this.password.length; i++) {
      if ('0123456789'.indexOf(this.password.charAt(i)) === -1) {
        return 'La contraseña debe ser numérica.';
      }
    }
    if (this.password.length > 6) {
      return 'La contraseña debe debe tener 6 digitos.';
    }
    return '';
  }

  public validarUsuario(): string {
    return this.validarNombreUsuario()
      || this.validarPassword();
  }
}
