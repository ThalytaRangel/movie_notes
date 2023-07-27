const { Router } = require("express");

const UsersController = require("../controllers/UsersContoller");

const usersRoutes = Router();

const usersController = new UsersController();

usersRoutes.post('/', usersController.create);

module.exports = usersRoutes;