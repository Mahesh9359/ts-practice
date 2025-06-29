"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//Basic async/await
function fetchUser() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('/api/user');
        return yield response.json();
    });
}
//Error handling with try/catch
function loadData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = yield fetch('/api/data');
            return yield data.json();
        }
        catch (error) {
            console.error('Failed to load:', error);
        }
    });
}
//Multiple parallel requests
function fetchAll() {
    return __awaiter(this, void 0, void 0, function* () {
        const [users, posts] = yield Promise.all([
            fetch('/api/users'),
            fetch('/api/posts')
        ]);
        return {
            users: yield users.json(),
            posts: yield posts.json()
        };
    });
}
//Await in loops
function processItems(items) {
    return __awaiter(this, void 0, void 0, function* () {
        for (const item of items) {
            yield processItem(item);
        }
    });
}
//Top-level await (ES2022)
const config = await fetch('/config.json').then(r => r.json());
