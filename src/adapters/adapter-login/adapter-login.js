class AdapterLogin {
  constructor(data) {
    this.id = data[`id`];
    this.email = data[`email`];
    this.name = data[`name`];
    this.avatarUrl = data[`avatar_url`];
  }

  static parseLogin(data) {
    return new AdapterLogin(data);
  }

  static parseLogins(data) {
    return AdapterLogin.parseLogin(data);
  }
}

export default AdapterLogin;
