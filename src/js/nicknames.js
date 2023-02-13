/* eslint-disable operator-linebreak */
// export default class Validator {
//   constructor(nickname) {
//     this.nickname = nickname;
//   }

//   validateUsername() {
//     return (
//       // eslint-disable-next-line operator-linebreak
//       /^[^\d-_][\w-]+[^\d-_]$/.test(this.nickname) &&
//       !/\d{4,}/.test(this.nickname)
//     );
//   }
// }

export default class Validator {
  constructor(nickname) {
    this.nickname = nickname;
  }

  validateUsername() {
    const onlyLettersAndNumbersAndSymbols = /^[\w-]*$/.test(this.nickname); // Допустимы только латинские буквы , символы тире -, подчёркивания _ и цифры (0-9);
    const exeptThreeNumbersInRow = !/(\d{4,})+/g.test(this.nickname); // Имя не должно содержать подряд более трёх цифр.
    const edgeCheck = /^[^\d-_].*[^\d-_]$/.test(this.nickname); // На краях не должно быть цифр, подчеркивания и тире
    const result =
      onlyLettersAndNumbersAndSymbols && exeptThreeNumbersInRow && edgeCheck;

    return result;
  }
}
