"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const edgeql_js_1 = __importDefault(require("../dbschema/edgeql-js"));
const query = edgeql_js_1.default.select(edgeql_js_1.default.Exchange, () => ({
    ...edgeql_js_1.default.Exchange['*']
}));
