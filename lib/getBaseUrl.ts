// lib/getBaseUrl.ts
export function getBaseUrl() {
    // Browser uses relative URLs
    if (typeof window !== "undefined") {
        return "";
    }

    // Production or preview deployment
    if (process.env.NEXT_PUBLIC_BASE_URL) {
        return process.env.NEXT_PUBLIC_BASE_URL;
    }

    if (process.env.VERCEL_URL) {
        return `https://${process.env.VERCEL_URL}`;
    }

    // Local development fallback
    return "http://localhost:3000";
}
