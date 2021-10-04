let autos = require('./autos.js');
let comprador = {
    nombre: 'Juan',
    capacidadDePagoEnCuotas: 8000,
    capacidadDePagoTotal: 150000
    };


const concesionaria = {
   autos: autos,

    buscarAuto: function(dato){
        let resultado = autos.find( array => {
            return dato == array.patente});
        if (resultado == undefined){
            resultado = null
        };
        return resultado;
    },

    venderAuto: function(dato){
        if(this.buscarAuto(dato) != null ){
            this.buscarAuto(dato).vendido = true;
        }
       console.log('auto '+dato+' vendido');
    },

    autosParaLaVenta(){
        let autosAlaVenta = autos.filter(function(autos){
            return autos.vendido == false
        });
        return autosAlaVenta;
    },

    autosNuevos: function(){
        let enVenta = this.autosParaLaVenta();
        let ceroKm = enVenta.filter(function(enVenta){
            return enVenta.km < 100;
        });
        return ceroKm;
    },

    listaDeVentas: function(){
        let vendidos = autos.filter(function(autos){
            return autos.vendido == true
        });
        let ventas =[];
        vendidos.forEach(function(vendidos){
            ventas.push(vendidos.precio);
        });
        return ventas;        
    },

    totalDeVentas: function(){
        let arrayVentas = this.listaDeVentas();
            total = arrayVentas.reduce(function(acum,dato){
                return acum+dato;
            },0);
        return total;
        
    },

    puedeComprar: function(auto,persona){
        if (auto.precio < persona.capacidadDePagoTotal &&
            (auto.precio/auto.cuotas) < persona.capacidadDePagoEnCuotas){
            return true;
        }else{
           return false;
        };
    },

    autosQuePuedeComprar: function(persona){
        let enVenta = this.autosParaLaVenta();
        let autosPosibles = enVenta.filter(function(enVenta){
            return (enVenta.precio < persona.capacidadDePagoTotal &&
                (enVenta.precio/enVenta.cuotas) < persona.capacidadDePagoEnCuotas);
        });
        return autosPosibles;
    }

};



//console.log(autos);
console.log(concesionaria.buscarAuto('BGH567'));
//concesionaria.venderAuto('BGH567');
//concesionaria.venderAuto('APL123');
//console.log(concesionaria.autosParaLaVenta());
//console.log(concesionaria.autosNuevos());
//console.log(concesionaria.listaDeVentas());
//console.log(concesionaria.totalDeVentas());
//console.log(autos);

//let auto1 = concesionaria.buscarAuto('JJK116');
//console.log(concesionaria.puedeComprar(auto1,comprador));

//console.log(concesionaria.autosQuePuedeComprar(comprador));
//console.log(comprador);
