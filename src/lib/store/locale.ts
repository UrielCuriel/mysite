import type { Locale } from "contentful";
import { writable } from "svelte/store";

export const locale = writable<Locale>({
    code: "es-MX",
    name: "Spanish (Mexico)",
    default: true,
    fallbackCode: null,
    sys: {
        id: "7xZHmsAyOBmDHt81gh5u6D",
        type: "Locale",
        version: 2,
    },
})