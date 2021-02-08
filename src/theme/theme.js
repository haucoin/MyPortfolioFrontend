import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    "palette": {
        "type": "light",
        "background": {
            "white": "#ffffff",
            "paper": "#fafafa"
        },
        "divider": "rgba(0, 0, 0, 0.12)",
        "text": {
            "black": "#000000",
            "grey": "#808080",
            "disabled": "rgba(0, 0, 0, 0.38)"
        },
        "action": {
            "active": "rgba(0, 0, 0, 0.54)",
            "hover": "rgba(0, 0, 0, 0.04)",
            "selected": "rgba(0, 0, 0, 0.08)",
            "disabled": "rgba(0, 0, 0, 0.26)",
            "disabledBackground": "rgba(0, 0, 0, 0.12)"
        },
        "primary": {
            "main": "#0694C7",
            "dark": "#1E4BC0",
            "light": "#50E0EA"
        },
        "secondary": {
            "main": "#A058D1",
            "dark": "#7955CF",
            "light": "#C186E1"
        },
        "pink": {
            "main": "#E984E6",
            "dark": "#CF35BE",
            "light": "#F4C1F5"
        },
        "warning": {
            "main": "#1543FF",
            "light": "#5BC7E4",
            "dark": "#000660",
            "contrastText": "rgba(255, 255, 255, 0.87)"
        },
    },
    "typography": {
        "button": {
            "textTransform": "none"
        }
    },
    breakpoints: {
        values: {
            iPhone5: 320,
            iPhone678: 375,
            iPhone678Plus: 414,
            iPhone12: 390,
            otherPhone: 520,
            iPad: 768,
            iPadPro: 1024,
            iPadHorizontal: 1366,
            Desktop: 1920,
        }
    }
});

export default theme;

