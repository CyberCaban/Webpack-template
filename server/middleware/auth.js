const { prisma } = require("../../../prisma/prisma-client");
const tokenService = require("../services/tokenService");

const auth = async (req, res, next) => {
	try {
		const token = req.headers.authorization.split(" ")[1];

		if (!token) {
			return res.status(403).json({ message: "Не авторизован" });
		}

		const userData = tokenService.verifyAccessToken(token);
		// console.log(token);

		const user = await prisma.user.findUnique({
			where: { email: userData.payload },
		});

		req.user = user;

		next();
	} catch (e) {
		console.log(e);
		return res.status(403).json({ message: "Не авторизован" });
	}
};

module.exports = { auth };
