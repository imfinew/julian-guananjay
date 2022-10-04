let producto = prompt("Indique el producto que va a comprar");
let precioProducto = parseInt(prompt("Indique el precio del producto"));
let cantidadDeProductos = parseInt(prompt("Indique la cantidad de " + producto + " que va a comprar"));
let cuotaProducto = parseInt(prompt("Indique las cuotas en las que desea comprar el producto, 3/6/9/12"))


function precioTotal(precioProducto, cantidadDeProductos){
    let precio = precioProducto * cantidadDeProductos;
    return precio
}

function precioEnCuotas() {
    

    if(cuotaProducto == 3){
        let porcentajeEn3Cuotas = ((precioTotal(precioProducto, cantidadDeProductos) * 15) / 100)
        let precioFinal = precioTotal(precioProducto, cantidadDeProductos) + porcentajeEn3Cuotas;
        return ("El precio final del " + producto + " Es de $" , precioFinal + " Muchas gracias por su compra");
        }

        else if(cuotaProducto == 6){
            let porcentajeEn6Cuotas = ((precioTotal(precioProducto, cantidadDeProductos) * 30) / 100)
            let precioFinal = precioTotal(precioProducto, cantidadDeProductos) + porcentajeEn6Cuotas;
            return ("El precio final del " + producto + " Es de $" , precioFinal + " Muchas gracias por su compra");
            }

            else if(cuotaProducto == 9){
                let porcentajeEn9Cuotas = ((precioTotal(precioProducto, cantidadDeProductos) * 70) / 100)
                let precioFinal = precioTotal(precioProducto, cantidadDeProductos) + porcentajeEn9Cuotas;
                return ("El precio final del " + producto + " Es de $" , precioFinal + " Muchas gracias por su compra");
                }

                else if(cuotaProducto == 12){
                    let porcentajeEn12Cuotas = ((precioTotal(precioProducto, cantidadDeProductos) * 110) / 100)
                    let precioFinal = precioTotal(precioProducto, cantidadDeProductos) + porcentajeEn12Cuotas;
                    return ("El precio final del " + producto + " Es de $" , precioFinal + " Muchas gracias por su compra");
                    }

                    else{
                        console.log("Numero de cuotas invalido")
                    }

                    
}

console.log(precioEnCuotas())

