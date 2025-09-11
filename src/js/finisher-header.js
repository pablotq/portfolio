function iniciarFinisherHeader() {
    const root = document.documentElement;
    const corFundo = getComputedStyle(root).getPropertyValue('--cor-fundo-medio').trim();
    const cor1 = getComputedStyle(root).getPropertyValue('--cor-branca').trim();
    const cor2 = getComputedStyle(root).getPropertyValue('--cor-primaria').trim();
    const cor3 = getComputedStyle(root).getPropertyValue('--cor-secundaria').trim();

    new FinisherHeader({
        "count": 90,
        "size": {
            "min": 1,
            "max": 20,
            "pulse": 0
        },
        "speed": {
            "x": {
                "min": 0,
                "max": 0.4
            },
            "y": {
                "min": 0,
                "max": 0.1
            }
        },
        "colors": {
            "background": "#191621",
            "particles": [
                cor1,
                "#acaaff",
                cor3,
                cor2
            ]
        },
        "blending": "screen",
        "opacity": {
            "center": 0,
            "edge": 0.4
        },
        "skew": -2,
        "shapes": [
            "c",
            "s",
            "t"
        ]
    });
}

iniciarFinisherHeader();