"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelloWorld = void 0;
function HelloWorld(request, response) {
    return response.json({ message: 'Hello World' });
}
exports.HelloWorld = HelloWorld;
