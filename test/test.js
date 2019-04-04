"use strict";
const fs = require("fs");
const path = require("path");
const QUnit = require("qunit");

const serverFile = path.join("../server/sever.js");
const mainjsFile = path.join("../static/js/main.js");
QUnit.module("Function Checking");

QUnit.test("Has everything compiled correctly",
    function(assert){
        assert.ok(
            //check functions inside main.js
            typeof mainjsFile.createDeals === "function",
            "check if createDeals is a working function."
        );
        assert.ok(
            typeof mainjsFile.init === "function",
            "check if init is a working function."
        );
        assert.ok(
            typeof mainjsFile.shareURL === "function",
            "check if shareURL is a working function."
        );
        assert.ok(
            typeof mainjsFile.serach === "function",
            "check if search is a working function."
        );
    }
);
QUnit.test(
    'Does the `server.js` file exists',
    (assert) => {
        try{
            fs.accessSync(serverFile, fs.F_OK);
            assert.pushResult({result: true, message: "`server.js` found"});
        } catch (e) {
            assert.pushResult({result: failed, message: "`server.js` not found."});
        }
    }
);
QUnit.test(
    "Start server.",
    async (assert) => {
        const done = assert.async();

        try{
            const serverBASICCHECK = await fetch("/", {
                method: 'GET',
            });
            assert.deepEqual(
                serverBASICCHECK.status,
                200,
                'The server has successfully been created'
            );
            assert.async();
        } catch (e){
            console.log("Did not recieve message from server: " + e);
        }
    }
);
QUnit.test(
    "Check for index page.",
    async (assert) => {
        const done = assert.async();

        try {
            const serverBASICCHECK = await fetch("/index.html", {
                method: 'GET',
            });
            assert.deepEqual(
                serverBASICCHECK.status,
                200,
                '`index.html` has been found'
            );
            assert.async();
        } catch (e) {
            console.log("Did not recieve message from server: " + e);
        }
    }
);
QUnit.test(
    "Check for home page.",
    async (assert) => {
        const done = assert.async();

        try {
            const serverBASICCHECK = await fetch("/index.html", {
                method: 'GET',
            });
            assert.deepEqual(
                serverBASICCHECK.status,
                200,
                '`home.html` has been found.'
            );
            assert.async();
        } catch (e) {
            console.log("Did not recieve message from server: " + e);
        }
    }
);