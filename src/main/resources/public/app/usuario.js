new Vue({
    el: "#usuarioVUE",
    data: {
        usuario: {},
        nombre: 'orlando camavilca '
    },
    methods: {
        registro() {
            const $vue = this;
            console.log("==================================")
            console.log("==================================")
            console.log($vue.usuario);
            axios.post("/registro", $vue.usuario).then(response => {
                if (response.data.success) {
                    var datos = response.data.data;
                    var ruta = datos[0];
                    console.log(response.data.data);
                    console.log(ruta);
                    window.location.replace(`/${ruta}`);
                    notify2(response.data.message, "success");
                } else {
                    notify2(response.data.message, "error");
                }
            }).catch((err) => {
                notify2(MESSAGES.errorComunicacion, "error");
            });
        },
        iniciar() {
            const $vue = this;
            axios.post("/iniciar", $vue.usuario).then(response => {
                if (response.data.success) {
                    var datos = response.data.data;
                    var ruta = datos[0];
                    console.log(response.data.data);
                    console.log(ruta);
                    window.location.replace(`/${ruta}`);
                    notify2(response.data.message, "success");
                } else {
                    notify2(response.data.message, "error");
                }
            }).catch((err) => {
                notify2(MESSAGES.errorComunicacion, "error");
            });
        }
    }
});