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
//Basic GET request
fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => console.log(data));
//POST with JSON
fetch('https://api.example.com/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: 'Alice' })
});
//Error handling
function fetchWithErrorHandling() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('https://api.example.com/data');
        if (!response.ok)
            throw new Error('Network response was not ok');
        return yield response.json();
    });
}
//Upload file
const fileInput = document.querySelector('input[type="file"]');
const formData = new FormData();
formData.append('file', fileInput.files[0]);
fetch('/upload', { method: 'POST', body: formData });
//AbortController (cancel fetch)
const controller = new AbortController();
setTimeout(() => controller.abort(), 5000); // Timeout after 5s
fetch('https://api.example.com/data', { signal: controller.signal })
    .catch(error => {
    if (error.name === 'AbortError') {
        console.log('Request aborted');
    }
});
