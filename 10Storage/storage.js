/**
 * la sigue¿iente clase nos ayudara a hacer tareas para agrupar y realizar operaciones comunes
 */

const Storage= ()=>{

    class StorageTodoAppHelper{

        constructor(storageName, initialValue){
        /**
         * La storag de esta api viene de mozilla
         * provee acceso l almacenamieno local
         * usaremos la que tiene mayor persistencia de el LocalStorage
         * Storage usa conjuntos de claves, valor, getItem, nos da el valor al proporcionar la clave
         * devuelve nulo si no existe
         */

            let currentStorage= localStorage.getItem(storageName);

            if(!currentStorage){

                //si no existe, la inicializamos

                localStorage.setItem(storageName, JSON.stringify(initialValue));

                currentStorage= initialValue;
            }else{

                /**
                 * en caso contrario lo convertimos en un objeto json, solo almacena texto
                 */

                currentStorage=JSON.parse(currentStorage);
            }

            /**
             * guardamos tanto los valores actuales como el nombre de la sección de almacenamiento que utilizaremos
             * los valores ya leidos se guardan para evitar la lectura y conversion constante de storage, demora conforme el objeto crezca
             */
            this._storageName= storageName;
            this._currentValues= currentStorage;


        }

        addItem(newItem){

            /**cuando
             * se agrega un valor le agregamos valores ya cargados haciendo un respaldo de storage
             */

            this._currentValues.push(newItem);

            localStorage.setItem(this._storageName, JSON.stringify(this._currentValues));
        }

        getItem(findFunction){

            /**
             * cuando se quiere consultar un valor en especifico no es necesario buscarlo en storage, basta con consultarlo en los valores
             * ya cargados
             */

            return this._currentValues.find(findFunction);
        }

        updateItem(findFunction, newItem){

            /**
             * cuando se actualiza un valor lo actualizamos a valores ya cargados haciendo un respaldo en storage
             * 
             */
            const itemIndex= this._currentValues.findIndex(findFunction);

            this._currentValues[itemIndex]= {... this._currentValues[itemIndex], ...newItem};

            localStorage.setItem(this._storageName, JSON.stringify(this._currentValues));

        }

        getItem(){
            /**
             * cuando se quiere consultar los items, no es necesario
             * buscarlo, basta de nuevo consultarlo directo
             */
            return this._currentValues;
        }

        deleteItem(findFunction){
            /**
             * cuando se elimina un valor, lo actualizaremos a los valores ya cargados
             */
            this._currentValues.splice(this._currentValues.findIndex(findFunction), 1);
            localStorage.getItem(this._storageName, JSON.stringify(this._currentValues));
        }
    }

    /**
     * se carga el template usando para crear elementos d ela lista de tareas
     */
    const loadListItemTemplate = () =>{
        const templateDomItem = document.getElementById("listItemTemplate");
        const template = templateDomItem.innerHTML.trim();
        //una vez leida la plantilla se elimina
        templateDomItem.remove();
        return template;
    }

    //cagamos los elementos del dom
    const DOMElements = {
        taskName : document.getElementById("txtTaskName"),
        addButton : document.getElementById("btnAddTask"),
        taskList : document.getElementById("taskList"),
        changeWallpaperButton : document.getElementById("btnChangeWallpaper"),
        editUser : document.getElementById("editUser")
    };
    //Inicializamos la plantilla y la sexion de storage
    const listItemTemplate = loadListItemTemplate();
    const storage = new StorageTodoAppHelper("Storage", []);

    //esta funcion se usa para marcar una tarea como completada

    const toggleTask = (domItem) => {
        if(domItem){
            storage.updateItem((item) => item.id === +domItem.id, {completed : !domItem.classList.contains("completed")});

        }
        if(!domItem.classList.contains("completed")){
            domItem.classList.add("completed");
        } else {
            domItem.classList.remove("completed");
        }
    }
    /**
     * esta fuincion se usa para elminar uuna taeande la lista 
     */

    const deleteTask = (domItem) => {
        if(domItem){
            storage.deleteItem((item) => item.id === + domItem.id)
        }
        domItem.parentElement.remove();
    };

    //crear un elemneto a la lista de la tarea
    const createDOMTaskElement = (task) => {
        //creamos un elemento del DOM y llenamos los datos de la plantilla
        const template = document.createElement('li');
        template.innerHTML = listItemTemplate.replace("{id}", task.id).replace("{template}", task.value).replace("{completed}", task.completed ? "completed" : "");
        /**
         * Accedemos a los nodos hijos creados de la plantilla, los cuales son los botones, y les asignamos los eventos a cada boton respectivo
         */

        const ourContent = template.firstChild;

        ourContent.childNodes.forEach(child => {
            if(child.classList?.contains("complete")){
                child.onclick = () => toggleTask(ourContent)
            }
            if(child.classList?.contains("delete")){
                child.onlick = () => deleteTask(ourContent);
            }
        });

        //agregamos el elmeento rcien creado a la lista de tareas
        DOMElements.taskList.append(template);
    }

    //esta funcion es para renderizado
    const renderTask = () => {
        //si no tiene tareas la lista, lo indicamos 
        DOMElements.taskList.innerHTML = storage.getItem() ? "" : 
        "<li>No hay tareas aun</li>";

        storage.getItem().forEach(task => createDOMTaskElement(task));
    };

    //esta duncione de agregar una tatrea a la lista 
    const addTask = () => {
        if(DOMElements.taskName.value){
            const newTask = {
                id : Date.now,
                value : DOMElements.taskName.value,
                completed : false
            }
            //guardamos ele elemento en storage y limpiamos el campo 

            storage.addItem(newTask);
            DOMElements.taskName.value= "";
            createDOMTaskElement(newTask);
        }
    };

    /**
     * solicita que el usuario se registre es de esta forma que se crean las sesiones en una aplicacion de frontend 
     * solo que se suelen usar token en lugar del nombre yy en lugar de solicitarlo por dialogom se hace uso de fetch para 
     * pedoir un servidor el token usualmente proporciona el nombre del usuario y contraseña 
     */

    const requestUser = async () => {
        const {value : userName} = await Swal.fire({
            input : 'text',
            inputLabel : 'Introduce tu nombre',
            allowOutsideClick : false,
            allowEscapeKey : false,
            inputValidador : (value) => {
                if(!value?.trim()){
                    return 'Introduce tu nombre!'
                }
            },
            inputPlaceHolder : 'Introduce tu nombre'
        });
        if(userName){
            //como pude ver funciona de forma igual como se guardan las terareas del ejercicio
            localStorage.setItem("userName", userName);
            document.getElementById("title").innerHTML = 
            `Bienvenido ${userName}!`;
        }
    };

    //Esta funcion cambia el wallpaper de la funcion
    const btnChangeWallpaper = async () => {
        const {value : url} = await Swal.fire({
            input : 'url',
            inputLabel : 'Introduce la URL del wallpaper',
            inputPlaceHolder : 'Introduce la URL del wallpaper',
            validationMessage : "La URL no es valida",
        });

        if(url){
            localStorage.setItem("wallpaper", url),
            document.querySelector("body").style.background =
            `url(${url}) no-repeat center`;
        }
    }
}
