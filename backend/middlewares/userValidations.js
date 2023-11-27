const { body } = require("express-validator");

const userCreateValidation = () => {
  return [
    body("name")
      .isString()
      .withMessage("O nome é obrigatório!")
      .isLength({ min: 3 })
      .withMessage("O nome precisa de no mínimo 3 caracteres!"),
    body("email")
      .isString()
      .withMessage("O e-mail é obrigatório!")
      .isEmail()
      .withMessage("Precisa ser um email valido!"),
    body("password")
      .isString()
      .withMessage("A senha é obrigatória!")
      .isLength({ min: 6 })
      .withMessage("A senha precisa de no mínimo 6 caracteres!"),
    body("confirmPassword")
      .isString()
      .withMessage("Confirmação de senha necessária!")
      .custom((value, { req }) => {
        if (value !== req.body.password) {
          throw new Error("As senhas não são iguais!");
        }
        return true;
      }),
  ];
};
const userValidation = () => {
  return [
    body("email")
      .isString()
      .withMessage("O e-mail é obrigatório!")
      .isEmail()
      .withMessage("Precisa ser um email valido!"),
    body("password").isString().withMessage("A senha é obrigatória!"),
  ];
};

const userUpdateValidation = () => {
  return [
    body("name")
      .optional()
      .isLength({ min: 3 })
      .withMessage("O nome precisa de no mínimo 3 caracteres!"),
    body("password")
      .optional()
      .isLength({ min: 6 })
      .withMessage("A senha precisa de no mínimo 6 caracteres!"),
  ];
};

module.exports = { userCreateValidation, userValidation, userUpdateValidation };
