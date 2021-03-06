import User from "../models/User";

const checkDuplicateUsernameOrEmail = async (req, res, next) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        if (user)
            return res.status(400).json({ message: "The user already exists" });
        const email = await User.findOne({ email: req.body.email });
        if (email)
            return res.status(400).json({ message: "The email already exists" });
        next();
    } catch (error) {
        res.status(500).json({ message: error });
    }
};

const checkRolesExisted = (req, res, next) => {
    if (req.body.role) {
        const ROLES = ["user", "admin"];
        const foundRoles = ROLES.find(element => element === req.body.role);
        if (!foundRoles) {
                return res.status(400).json({
                message: `Role ${req.body.role} does not exist`,
            });
        }

    }


next();
};

export { checkDuplicateUsernameOrEmail, checkRolesExisted };
