const color = document.getElementById("color")
const hex = document.getElementById("hex")
const rgb = document.getElementsByName("rgb")
const hsl = document.getElementsByName("hsl")
const hsv = document.getElementsByName("hsv")
const cmyk = document.getElementsByName("cmyk")

function main() {
    converterHEX()
    converterRGB()
    converterHSL()
    converterHSV()
    converterCMYK()
}

function converterHEX() {
    hex.addEventListener('input', ()=>{
        if (hex.value.length == 6) {
            const hex1 = hex.value.substring(0, 2)
            const hex2 = hex.value.substring(2, 4)
            const hex3 = hex.value.substring(4, 6)
            const rgb_ = hex_to_rgb(hex1, hex2, hex3);
            const hsl_ = hex_to_hsl(hex1, hex2, hex3);
            const hsv_ = hex_to_hsv(hex1, hex2, hex3);
            const cmyk_ = hex_to_cmyk(hex1, hex2, hex3);
            rgb[0].value = rgb_.red;
            rgb[1].value = rgb_.green;
            rgb[2].value = rgb_.blue;
            hsl[0].value = hsl_.hue;
            hsl[1].value = hsl_.saturation;
            hsl[2].value = hsl_.lightness;
            hsv[0].value = hsv_.hue;
            hsv[1].value = hsv_.saturation;
            hsv[2].value = hsv_.value;
            cmyk[0].value = cmyk_.cyan;
            cmyk[1].value = cmyk_.magenta;
            cmyk[2].value = cmyk_.yellow;
            cmyk[3].value = cmyk_.black;
            color.style.backgroundColor = `#${hex1 + hex2 + hex3}`;
        }
    })
}

function converterRGB() {
    let r, g, b; r = g = b = 0;
    rgb[0].addEventListener('input', ()=>{
        if (rgb[0].value >= 0 && rgb[0].value <= 255) {
            r = rgb[0].value;
            fillValues()
        }
    })
    rgb[1].addEventListener('input', ()=>{
        if (rgb[1].value >= 0 && rgb[1].value <= 255) {
            g = rgb[1].value
            fillValues()
        }
    })
    rgb[2].addEventListener('input', ()=>{
        if (rgb[2].value >= 0 && rgb[2].value <= 255) {
            b = rgb[2].value
            fillValues()
        }
    })
    const fillValues = () => {
        if (r && g && b) {
            const hex_ = rgb_to_hex(r, g, b)
            const hsl_ = rgb_to_hsl(r, g, b)
            const hsv_ = rgb_to_hsv(r, g, b)
            const cmyk_ = rgb_to_cmyk(r, g, b)
            hex.value = hex_.hex;
            hsl[0].value = hsl_.hue;
            hsl[1].value = hsl_.saturation;
            hsl[2].value = hsl_.lightness;
            hsv[0].value = hsv_.hue;
            hsv[1].value = hsv_.saturation;
            hsv[2].value = hsv_.value;
            cmyk[0].value = cmyk_.cyan;
            cmyk[1].value = cmyk_.magenta;
            cmyk[2].value = cmyk_.yellow;
            cmyk[3].value = cmyk_.black;
            color.style.backgroundColor = `#${hex_.hex}`;
        }
    }
}

function converterHSL() {
    let h, s, l; h = s = l = 0;
    hsl[0].addEventListener('input', ()=>{
        if (hsl[0].value >= 0 && hsl[0].value <= 360) {
            h = hsl[0].value;
            fillValues()
        }
    })
    hsl[1].addEventListener('input', ()=>{
        if (hsl[1].value >= 0 && hsl[1].value <= 100) {
            s = hsl[1].value
            fillValues()
        }
    })
    hsl[2].addEventListener('input', ()=>{
        if (hsl[2].value >= 0 && hsl[2].value <= 100) {
            l = hsl[2].value
            fillValues()
        }
    })
    const fillValues = () => {
        if (h && s && l) {
            const hex_ = hsl_to_hex(h, s, l)
            const rgb_ = hsl_to_rgb(h, s, l)
            const hsv_ = hsl_to_hsv(h, s, l)
            const cmyk_ = hsl_to_cmyk(h, s, l)
            hex.value = hex_.hex;
            rgb[0].value = rgb_.red;
            rgb[1].value = rgb_.green;
            rgb[2].value = rgb_.blue;
            hsv[0].value = hsv_.hue;
            hsv[1].value = hsv_.saturation;
            hsv[2].value = hsv_.value;
            cmyk[0].value = cmyk_.cyan;
            cmyk[1].value = cmyk_.magenta;
            cmyk[2].value = cmyk_.yellow;
            cmyk[3].value = cmyk_.black;
            color.style.backgroundColor = `#${hex_.hex}`;
        }
    }
}

function converterHSV() {
    let h, s, v; h = s = v = 0;
    hsv[0].addEventListener('input', ()=>{
        if (hsv[0].value >= 0 && hsv[0].value <= 360) {
            h = hsv[0].value;
            fillValues()
        }
    })
    hsv[1].addEventListener('input', ()=>{
        if (hsv[1].value >= 0 && hsv[1].value <= 100) {
            s = hsv[1].value
            fillValues()
        }
    })
    hsv[2].addEventListener('input', ()=>{
        if (hsv[2].value >= 0 && hsv[2].value <= 100) {
            v = hsv[2].value
            fillValues()
        }
    })
    const fillValues = () => {
        if (h && s && v) {
            const hex_ = hsv_to_hex(h, s, v)
            const rgb_ = hsv_to_rgb(h, s, v)
            const hsl_ = hsv_to_hsl(h, s, v)
            const cmyk_ = hsv_to_cmyk(h, s, v)
            hex.value = hex_.hex;
            rgb[0].value = rgb_.red;
            rgb[1].value = rgb_.green;
            rgb[2].value = rgb_.blue;
            hsl[0].value = hsl_.hue;
            hsl[1].value = hsl_.saturation;
            hsl[2].value = hsl_.lightness;
            cmyk[0].value = cmyk_.cyan;
            cmyk[1].value = cmyk_.magenta;
            cmyk[2].value = cmyk_.yellow;
            cmyk[3].value = cmyk_.black;
            color.style.backgroundColor = `#${hex_.hex}`;
        }
    }
}

function converterCMYK() {
    let c, m, y, k; c = m = y = k = 0;
    cmyk[0].addEventListener('input', ()=>{
        if (cmyk[0].value >= 0 && cmyk[0].value <= 100) {
            c = cmyk[0].value;
            fillValues()
        }
    })
    cmyk[1].addEventListener('input', ()=>{
        if (cmyk[1].value >= 0 && cmyk[1].value <= 100) {
            m = cmyk[1].value
            fillValues()
        }
    })
    cmyk[2].addEventListener('input', ()=>{
        if (cmyk[2].value >= 0 && cmyk[2].value <= 100) {
            y = cmyk[2].value
            fillValues()
        }
    })
    cmyk[3].addEventListener('input', ()=>{
        if (cmyk[3].value >= 0 && cmyk[3].value <= 100) {
            k = cmyk[3].value
            fillValues()
        }
    })
    const fillValues = () => {
        if (c && m && y && k) {
            const hex_ = cmyk_to_hex(c, m, y, k)
            const rgb_ = cmyk_to_rgb(c, m, y, k)
            const hsl_ = cmyk_to_hsl(c, m, y, k)
            const hsv_ = cmyk_to_hsv(c, m, y, k)
            hex.value = hex_.hex;
            rgb[0].value = rgb_.red;
            rgb[1].value = rgb_.green;
            rgb[2].value = rgb_.blue;
            hsl[0].value = hsl_.hue;
            hsl[1].value = hsl_.saturation;
            hsl[2].value = hsl_.lightness;
            hsv[0].value = hsv_.hue;
            hsv[1].value = hsv_.saturation;
            hsv[2].value = hsv_.value;
            color.style.backgroundColor = `#${hex_.hex}`;
        }
    }
}

function hex_to_rgb(hex1, hex2, hex3) {
    const rgb_ = {
        red: parseInt(hex1, 16),
        green: parseInt(hex2, 16),
        blue: parseInt(hex3, 16)
    }
    return rgb_
}

function hex_to_hsl(hex1, hex2, hex3) {
    const rgb_ = hex_to_rgb(hex1, hex2, hex3)
    const hsl_ = rgb_to_hsl(rgb_.red, rgb_.green, rgb_.blue)
    return hsl_
}

function hex_to_hsv(hex1, hex2, hex3) {
    const rgb_ = hex_to_rgb(hex1, hex2, hex3)
    const hsv_ = rgb_to_hsv(rgb_.red, rgb_.green, rgb_.blue)
    return hsv_
}

function hex_to_cmyk(hex1, hex2, hex3) {
    const rgb_ = hex_to_rgb(hex1, hex2, hex3)
    const cmyk_ = rgb_to_cmyk(rgb_.red, rgb_.green, rgb_.blue)
    return cmyk_
}

function rgb_to_hex(red, green, blue) {
    const hex_ = {
        redHex: parseInt(red).toString(16).toUpperCase(),
        greenHex: parseInt(green).toString(16).toUpperCase(),
        blueHex: parseInt(blue).toString(16).toUpperCase()
    }
    hex_.hex = hex_.redHex + hex_.greenHex + hex_.blueHex
    return hex_
}

function rgb_to_hsl(red, green, blue) {
    const red_ = red/255
    const green_ = green/255
    const blue_ = blue/255
    const cmax = Math.max(red_, green_, blue_)
    const cmin = Math.min(red_, green_, blue_)
    const delta = cmax - cmin
    let hsl_ = {hue: 0, saturation: 0, lightness: (cmax + cmin) / 2}
    if (delta != 0) {
        hsl_.saturation = delta / (1 - Math.abs(2*hsl_.lightness - 1))
        if (cmax == red_) {
            hsl_.hue = 60 * (((green_ - blue_) / delta) % 6);
        } else if (cmax == green_) {
            hsl_.hue = 60 * (((blue_ - red_) / delta) + 2)
        } else {
            hsl_.hue = 60 * (((red_ - green_) / delta) + 4)
        }
    }
    hsl_ = formatHSL(hsl_)
    return hsl_
}

function rgb_to_hsv(red, green, blue) {
    const red_ = red/255
    const green_ = green/255
    const blue_ = blue/255
    const cmax = Math.max(red_, green_, blue_)
    const cmin = Math.min(red_, green_, blue_)
    const delta = cmax - cmin
    let hsv_ = {hue: 0, saturation: 0, value: cmax}
    if (delta != 0) {
        hsv_.saturation = delta / cmax
        if (cmax == red_) {
            hsv_.hue = 60 * (((green_ - blue_) / delta) % 6);
        } else if (cmax == green_) {
            hsv_.hue = 60 * (((blue_ - red_) / delta) + 2)
        } else {
            hsv_.hue = 60 * (((red_ - green_) / delta) + 4)
        }
    }
    hsv_ = formatHSV(hsv_)
    return hsv_
}

function rgb_to_cmyk(red, green, blue) {
    const red_ = red/255
    const green_ = green/255
    const blue_ = blue/255
    const k = 1 - Math.max(red_, green_, blue_)
    let cmyk_ = {
        cyan: (1 - red_ - k) / (1 - k),
        magenta: (1 - green_ - k) / (1 - k),
        yellow: (1 - blue_ - k) / (1 - k),
        black: k
    }
    cmyk_ = formatCMYK(cmyk_)
    return cmyk_
}

function hsl_to_rgb(hue, saturation, lightness) {
    const saturation_ = saturation / 100
    const lightness_ = lightness / 100
    const c = (1 - Math.abs(2*lightness_ - 1)) * saturation_
    const x = c * (1 - Math.abs(((hue / 60) % 2) - 1))
    const m = lightness_ - (c/2)
    let rgb_ = {r_: 0, g_: 0, b_: 0}
    if (0 <= hue && hue < 60) {
        rgb_.r_ = c;
        rgb_.g_ = x;
    } else if (60 <= hue && hue < 120) {
        rgb_.r_ = x;
        rgb_.g_ = c;
    } else if (120 <= hue && hue < 180) {
        rgb_.g_ = c;
        rgb_.b_ = x;
    } else if (180 <= hue && hue < 240) {
        rgb_.g_ = x;
        rgb_.b_ = c;
    } else if (240 <= hue && hue < 300) {
        rgb_.r_ = x;
        rgb_.b_ = c;
    } else {
        rgb_.r_ = c;
        rgb_.b_ = x;
    }
    let rgb = {
        red: (rgb_.r_ + m) * 255,
        green: (rgb_.g_ + m) * 255,
        blue: (rgb_.b_ + m) * 255
    }
    rgb = formatRGB(rgb)
    return rgb
}

function hsl_to_hex(hue, saturation, lightness) {
    const rgb_ = hsl_to_rgb(hue, saturation, lightness)
    const hex_ = rgb_to_hex(rgb_.red, rgb_.green, rgb_.blue)
    return hex_
}

function hsl_to_hsv(hue, saturation, lightness) {
    const rgb_ = hsl_to_rgb(hue, saturation, lightness)
    const hsv_ = rgb_to_hsv(rgb_.red, rgb_.green, rgb_.blue)
    return hsv_
}

function hsl_to_cmyk(hue, saturation, lightness) {
    const rgb_ = hsl_to_rgb(hue, saturation, lightness)
    const cmyk_ = rgb_to_cmyk(rgb_.red, rgb_.green, rgb_.blue)
    return cmyk_
}

function hsv_to_rgb(hue, saturation, value) {
    const saturation_ = saturation / 100
    const value_ = value / 100
    const c = value_ * saturation_
    const x = c * (1 - Math.abs(((hue / 60) % 2) - 1))
    const m = value_ - c
    let rgb_ = {r_: 0, g_: 0, b_: 0}
    if (0 <= hue && hue < 60) {
        rgb_.r_ = c;
        rgb_.g_ = x;
    } else if (60 <= hue && hue < 120) {
        rgb_.r_ = x;
        rgb_.g_ = c;
    } else if (120 <= hue && hue < 180) {
        rgb_.g_ = c;
        rgb_.b_ = x;
    } else if (180 <= hue && hue < 240) {
        rgb_.g_ = x;
        rgb_.b_ = c;
    } else if (240 <= hue && hue < 300) {
        rgb_.r_ = x;
        rgb_.b_ = c;
    } else {
        rgb_.r_ = c;
        rgb_.b_ = x;
    }
    let rgb = {
        red: (rgb_.r_ + m) * 255,
        green: (rgb_.g_ + m) * 255,
        blue: (rgb_.b_ + m) * 255
    }
    rgb = formatRGB(rgb)
    return rgb
}

function hsv_to_hex(hue, saturation, value) {
    const rgb_ = hsv_to_rgb(hue, saturation, value)
    const hex_ = rgb_to_hex(rgb_.red, rgb_.green, rgb_.blue)
    return hex_
}

function hsv_to_hsl(hue, saturation, value) {
    const rgb_ = hsv_to_rgb(hue, saturation, value)
    const hsl_ = rgb_to_hsl(rgb_.red, rgb_.green, rgb_.blue)
    return hsl_
}

function hsv_to_cmyk(hue, saturation, value) {
    const rgb_ = hsv_to_rgb(hue, saturation, value)
    const cmyk_ = rgb_to_cmyk(rgb_.red, rgb_.green, rgb_.blue)
    return cmyk_
}

function cmyk_to_rgb(cyan, mangenta, yellow, black) {
    cyan /= 100;
    mangenta /= 100;
    yellow /= 100;
    black /= 100;
    const rgb_ = {
        red: Math.round(255 * (1 - cyan) * (1 - black)),
        green: Math.round(255 * (1 - mangenta) * (1 - black)),
        blue: Math.round(255 * (1 - yellow) * (1 - black))
    }
    return rgb_
}

function cmyk_to_hex(cyan, mangenta, yellow, black) {
    const rgb_ = cmyk_to_rgb(cyan, mangenta, yellow, black)
    const hex_ = rgb_to_hex(rgb_.red, rgb_.green, rgb_.blue)
    return hex_
}

function cmyk_to_hsl(cyan, mangenta, yellow, black) {
    const rgb_ = cmyk_to_rgb(cyan, mangenta, yellow, black)
    const hsl_ = rgb_to_hsl(rgb_.red, rgb_.green, rgb_.blue)
    return hsl_
}

function cmyk_to_hsv(cyan, mangenta, yellow, black) {
    const rgb_ = cmyk_to_rgb(cyan, mangenta, yellow, black)
    const hsv_ = rgb_to_hsv(rgb_.red, rgb_.green, rgb_.blue)
    return hsv_
}

function formatRGB(rgb) {
    rgb.red = Math.round(rgb.red)
    rgb.green = Math.round(rgb.green)
    rgb.blue = Math.round(rgb.blue)
    return rgb
}

function formatHSL(hsl) {
    hsl.hue = parseFloat(hsl.hue.toFixed(1))
    hsl.saturation *= 100;
    hsl.saturation = parseFloat(hsl.saturation.toFixed(1))
    hsl.lightness *= 100;
    hsl.lightness = parseFloat(hsl.lightness.toFixed(1))
    return hsl
}

function formatHSV(hsv) {
    hsv.hue = parseFloat(hsv.hue.toFixed(1))
    hsv.saturation *= 100;
    hsv.saturation = parseFloat(hsv.saturation.toFixed(1))
    hsv.value *= 100;
    hsv.value = parseFloat(hsv.value.toFixed(1))
    return hsv
}

function formatCMYK(cmyk) {
    cmyk.cyan = cmyk.cyan
    cmyk.cyan *= 100
    cmyk.cyan = Math.round(cmyk.cyan)
    cmyk.magenta *= 100
    cmyk.magenta = Math.round(cmyk.magenta)
    cmyk.yellow *= 100
    cmyk.yellow = Math.round(cmyk.yellow)
    cmyk.black *= 100
    cmyk.black = Math.round(cmyk.black)
    return cmyk;
}

main()