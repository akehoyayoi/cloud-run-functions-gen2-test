/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import {onRequest} from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";

// Start writing functions
// https://firebase.google.com/docs/functions/typescript
const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms));

export const helloWorld = onRequest(
    {
        concurrency: 100,
        region: "asia-northeast1",
    },
    async (_, response) => {
        await sleep(500);
        logger.info("Hello log!", {structuredData: true});
        response.send("Hello from Firebase!");
    }
);
