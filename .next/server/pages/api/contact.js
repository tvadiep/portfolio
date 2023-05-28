"use strict";
(() => {
var exports = {};
exports.id = 91;
exports.ids = [91];
exports.modules = {

/***/ 541:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ api_contact)
});

;// CONCATENATED MODULE: external "mongodb"
const external_mongodb_namespaceObject = require("mongodb");
;// CONCATENATED MODULE: ./pages/api/contact.ts

const contact = async (req, res)=>{
    if (req.method === 'POST') {
        const { name , email , subject , message , spamMessage  } = req.body;
        if (spamMessage === '') {
            try {
                const client = new external_mongodb_namespaceObject.MongoClient(process.env.MONGDO_DB_URI || '');
                await client.connect();
                const db = client.db();
                const contactCollection = db.collection('contact');
                const result = await contactCollection.insertOne({
                    name,
                    email,
                    subject,
                    message,
                    date: new Date().getTime()
                });
                client.close();
                if (result && result.insertedId) {
                    res.status(200).json({
                        message: 'Success'
                    });
                } else {
                    res.status(503).json({
                        message: 'Unable to handle the request right now!'
                    });
                }
            } catch (err) {
                res.status(500).json({
                    message: 'Something went wrong with the server! Please try again later.'
                });
            }
        } else {
            res.status(200).json({
                message: 'Success'
            });
        }
    } else res.status(400).json({
        message: `${req.method} is not allowed.`
    });
};
/* harmony default export */ const api_contact = (contact);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(541));
module.exports = __webpack_exports__;

})();