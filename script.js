(() => {
    "use strict"

    const loader = document.getElementById("siteLoader")

    let loaderFinished = false

    function finishLoading() {
        if (loaderFinished) {
            return
        }

        loaderFinished = true

        document.body.classList.remove("loading")
        document.body.classList.add("page-ready")

        if (!loader) {
            return
        }

        loader.classList.add("loader-hidden")

        window.setTimeout(() => {
            if (loader.parentNode) {
                loader.remove()
            }
        }, 500)
    }

    function startLoaderExit() {
        window.setTimeout(() => {
            finishLoading()
        }, 2500)
    }

    if (document.readyState === "complete") {
        startLoaderExit()
    } else {
        window.addEventListener(
            "load",
            startLoaderExit,
            { once: true }
        )
    }

    window.setTimeout(() => {
        finishLoading()
    }, 4000)
})()