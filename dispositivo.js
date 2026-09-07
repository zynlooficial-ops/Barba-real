(function () {
    "use strict";

    function detectarDispositivo() {
        const largura = window.innerWidth;
        const altura = window.innerHeight;

        const temTouch =
            "ontouchstart" in window ||
            navigator.maxTouchPoints > 0;

        const temMouse =
            window.matchMedia("(pointer: fine)").matches;

        let tipo = "desktop";

        if (largura <= 600) {
            tipo = "celular";
        } else if (largura <= 1024) {
            tipo = "tablet";
        } else if (largura <= 1440) {
            tipo = "notebook";
        }

        const orientacao =
            largura >= altura
                ? "horizontal"
                : "vertical";

        document.documentElement.dataset.dispositivo = tipo;
        document.documentElement.dataset.orientacao = orientacao;
        document.documentElement.dataset.touch =
            temTouch ? "sim" : "nao";

        document.documentElement.dataset.mouse =
            temMouse ? "sim" : "nao";

        window.barbaRealDevice = {
            tipo: tipo,
            largura: largura,
            altura: altura,
            touch: temTouch,
            mouse: temMouse,
            orientacao: orientacao
        };

        console.log(
            "Barba Real | Dispositivo:",
            window.barbaRealDevice
        );
    }

    detectarDispositivo();

    window.addEventListener(
        "resize",
        detectarDispositivo
    );

    window.addEventListener(
        "orientationchange",
        detectarDispositivo
    );

})();