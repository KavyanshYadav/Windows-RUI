import React, { createContext, useState, useContext } from 'react';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var sampleTheme = {
    typography: {
        fontFamily: 'Roboto, sans-serif', // A commonly used font in Material UI
        fontSize: '14px',
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700,
        lineHeight: '1.6',
        letterSpacing: '0.015em',
    },
    colors: {
        primary: '#6200ea', // Purple
        secondary: '#b00020', // Teal
        error: '#b00020', // Red
        background: '#f5f5f5', // Light Gray for background
        textPrimary: '#000000', // Black text
        textSecondary: '#888888', // Gray text for secondary elements
        border: '#e0e0e0', // Light Gray border color
        surface: '#ffffff', // White surface color for cards and containers
    },
    spacing: {
        small: '8px',
        medium: '16px',
        large: '24px',
        xLarge: '32px',
    },
    shadows: {
        small: '0 2px 4px rgba(0, 0, 0, 0.1)', // Small shadow
        medium: '0 4px 8px rgba(0, 0, 0, 0.2)', // Medium shadow
        large: '0 6px 12px rgba(0, 0, 0, 0.3)', // Large shadow
    },
    breakpoints: {
        xs: '0',
        sm: '600px',
        md: '960px',
        lg: '1280px',
        xl: '1920px',
    },
    button: {
        primary: {
            backgroundColor: '#6200ea',
            color: '#ffffff',
            borderRadius: '4px',
            padding: '12px 24px',
        },
        secondary: {
            backgroundColor: '#03dac6',
            color: '#ffffff',
            borderRadius: '4px',
            padding: '12px 24px',
        },
    },
};

var ThemeContext = createContext(undefined);
var ThemeProvider = function (_a) {
    var children = _a.children;
    var _b = useState('light'), theme = _b[0], setTheme = _b[1];
    var _c = useState(sampleTheme), themeStyles = _c[0], setthemestyle = _c[1];
    var toggleTheme = function () {
        setTheme(function (prevTheme) { return (prevTheme === 'light' ? 'dark' : 'light'); });
    };
    var setThemeStyle = function (newStyle) {
        setthemestyle(function (e) { return (__assign(__assign({}, e), newStyle)); });
    };
    return (React.createElement(ThemeContext.Provider, { value: { theme: theme, toggleTheme: toggleTheme, themeStyles: themeStyles, setThemeStyle: setThemeStyle } }, children));
};
var useTheme = function () {
    var context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

var Input = function (_a) {
    var value = _a.value, onChange = _a.onChange, placeholder = _a.placeholder, _b = _a.disabled, disabled = _b === void 0 ? false : _b, props = __rest(_a, ["value", "onChange", "placeholder", "disabled"]);
    var theme = useTheme();
    ({
        '--inputback-color': theme.themeStyles.colors.secondary,
        backgroundColor: 'var(--inputback-color)',
    });
    return (React.createElement("div", __assign({ className: 'input-wrapper' }, props),
        React.createElement("div", { className: 'inputback', style: {
                '--inputback-color': theme.themeStyles.colors.secondary,
            } }),
        React.createElement("input", __assign({ className: "input", type: "text", value: value, onChange: onChange, placeholder: placeholder, disabled: disabled }, props))));
};

var CardRoot = function (_a) {
    var children = _a.children, _b = _a.width, width = _b === void 0 ? '100%' : _b;
    var theme = useTheme();
    return (React.createElement("div", { className: "card-root", style: { width: width, color: theme.themeStyles.colors.primary } }, children));
};
var CardBody = function (_a) {
    var children = _a.children, _b = _a.gap, gap = _b === void 0 ? '1rem' : _b;
    return (React.createElement("div", { className: "card-body", style: { gap: gap } }, children));
};
var CardFooter = function (_a) {
    var children = _a.children, _b = _a.justifyContent, justifyContent = _b === void 0 ? 'space-between' : _b;
    return (React.createElement("div", { className: "card-footer", style: { justifyContent: justifyContent } }, children));
};
var CardTitle = function (_a) {
    var children = _a.children, _b = _a.mt, mt = _b === void 0 ? '0' : _b;
    return (React.createElement("h2", { className: "card-title", style: { marginTop: mt } }, children));
};
var CardDescription = function (_a) {
    var children = _a.children;
    return React.createElement("p", { className: "card-description" }, children);
};
// Combine subcomponents
var Card = {
    Root: CardRoot,
    Body: CardBody,
    Footer: CardFooter,
    Title: CardTitle,
    Description: CardDescription,
};

export { Card, Input, ThemeProvider, useTheme };
