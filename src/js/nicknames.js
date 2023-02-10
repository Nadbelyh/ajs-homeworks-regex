export default class Validator {
  constructor(nickname) {
    this.nickname = nickname;
  }

  validateUsername() {
    return (
      // eslint-disable-next-line operator-linebreak
      /^[^\d-_][\w-]+[^\d-_]$/.test(this.nickname) &&
      !/\d{4,}/.test(this.nickname)
    );
  }
}
