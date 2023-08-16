//@ts-nocheck
import { placemarkService } from "./placemark-service.js";

export async function saveImageToDatabase(eventId, imageUrl) {
    try {
        await placemarkService.addImageToEvent(eventId, imageUrl);
        console.log("Picture upload success.");
    } catch (error) {
        console.error("Picture upload error:", error);
    }
}
