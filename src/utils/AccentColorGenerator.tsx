import { AccentColor } from "../types/ThemeStyleType";

function hexToRgb(hex: string): { r: number, g: number, b: number } {
    const result = /^#([0-9a-f]{6}|[0-9a-f]{3})$/i.exec(hex);
    
    // Default color if the hex code is invalid
    if (!result) {
        return { r: 0, g: 0, b: 0 };  // fallback to black if the input is invalid
    }

    let r: number, g: number, b: number;
    if (result[1].length === 3) {
        // Shortened hex format, e.g. #abc
        r = parseInt(result[1][0] + result[1][0], 16);
        g = parseInt(result[1][1] + result[1][1], 16);
        b = parseInt(result[1][2] + result[1][2], 16);
    } else {
        // Standard hex format, e.g. #aabbcc
        r = parseInt(result[1].substring(0, 2), 16);
        g = parseInt(result[1].substring(2, 4), 16);
        b = parseInt(result[1].substring(4, 6), 16);
    }

    return { r, g, b };
}

function rgbToHex(color: { r: number, g: number, b: number }): string {
    return `#${(1 << 24 | color.r << 16 | color.g << 8 | color.b).toString(16).slice(1).toUpperCase()}`;
}

function adjustColor(color: { r: number, g: number, b: number }, amount: number): { r: number, g: number, b: number } {
    return {
        r: Math.min(255, Math.max(0, color.r + amount)),
        g: Math.min(255, Math.max(0, color.g + amount)),
        b: Math.min(255, Math.max(0, color.b + amount)),
    };
}

export default function generateAccentColors(baseColorHex: string): AccentColor {
    const baseColor = hexToRgb(baseColorHex);
    
    const LightOne = rgbToHex(adjustColor(baseColor, 40));   // Lighter shade 1
    const LightTwo = rgbToHex(adjustColor(baseColor, 80));   // Lighter shade 2
    const LightThree = rgbToHex(adjustColor(baseColor, 120)); // Lighter shade 3
    
    const DarkOne = rgbToHex(adjustColor(baseColor, -40));    // Darker shade 1
    const DarkTwo = rgbToHex(adjustColor(baseColor, -80));    // Darker shade 2
    const DarkThree = rgbToHex(adjustColor(baseColor, -120)); // Darker shade 3
    
    return {
        LightOne,
        LightTwo,
        LightThree,
        DarkOne,
        DarkTwo,
        DarkThree,
    };
}

// Example Usage
const accentColors = generateAccentColors("#3498db");
console.log(accentColors);
