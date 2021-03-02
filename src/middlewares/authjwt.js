import jwt from "jsonwebtoken";
import config from "../config";
import User from "../models/User";

export const verifyToken = async (req, res, next) => {
    let token = req.headers["authorization"];

    if (!token) return res.status(403).json({ message: "No token provided" });

    try {
        token = token.replace('Bearer ', '')
        const decoded = jwt.verify(token, config.SECRET);
        req.userId = decoded.id;

        const user = await User.findById(req.userId, { password: 0 });
        if (!user) return res.status(404).json({ message: "No user found" });

        next();
    } catch (error) {
        return res.status(401).json({ message: "Unauthorized!" });
    }
};

export const isUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.userId);

        if (user.role === "user" || user.role === "admin" ) {
            next();
            return;
        }


        return res.status(403).json({ message: "Unauthorized" });
    } catch (error) {
        console.log(error)
        return res.status(500).send({ message: error });
    }
};

export const isAdmin = async (req, res, next) => {
    try {
        const user = await User.findById(req.userId);
        if (user.role === "admin") {
            next();
            return;
        }

        return res.status(403).json({ message: "Unauthorized" });
    } catch (error) {
        console.log(error)
        return res.status(500).send({ message: error });
    }
};
