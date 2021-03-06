"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
const upload_1 = __importDefault(require("./config/upload"));
const OrphanagesController_1 = __importDefault(require("./controllers/OrphanagesController"));
const routes = (0, express_1.Router)();
const upload = (0, multer_1.default)(upload_1.default);
routes.get("/orphanages", OrphanagesController_1.default.index);
routes.get("/orphanages/:id", OrphanagesController_1.default.show);
routes.post("/orphanages", upload.array("images"), OrphanagesController_1.default.create);
exports.default = routes;
