# PROYECTO TRAFFIC LIGHT DE 4GEEKS ACADEMY

## <strong> 📝 Instrucciones: </strong>

<strong> Simularemos un semáforo. </strong>

La luz tiene que brillar cuando se hace clic.

1. Todo el propósito del componente es mostrar un semáforo con luces de lectura, amarillas y verdes.
2. Cuando se hace clic (se selecciona) alguna luz, ésta debe brillar, pero las otras luces deben dejar de brillar.
3. El componente debe tener un estado que almacene el color actual que debe brillar, por eso debes usar el hook useState de la siguiente manera:
   
``` javascript
  const [ color, setColor] = useState("red");
```

4. Utiliza ReactDOM.render para procesar el componente en el DOM de esta manera:

``` javascript   
  ReactDOM.render(<TrafficLight />, document.querySelector('#app'));
```

## <strong> 🔥 Bonus: </strong>

1. Crea un botón que, al hacer clic en él, alterna el color seleccionado del semáforo entre rojo, verde y amarillo.
2. Tener un botón que al hacer clic en él anuncie un color extra "púrpura" al semáforo.

<hr />

#### <span style="font-weight:bold;"> Desarrollador Ronald Peña </span>

  <img src = "./src/img/Logo.png" width = "250px" />
