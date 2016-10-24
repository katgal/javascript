document.addEventListener("DOMContentLoaded", function() {

    var addTaskButton = document.querySelector("#addTaskButton");
    var removeTaskButton = document.querySelector("#removeFinishedTasksButton");
    var taskInput = document.querySelector("#taskInput");
    var taskList = document.querySelector("#taskList");
    var counter = document.querySelector("#counter");
    var taskNumber = 0;

    addTaskButton.addEventListener("click", function(e) {

        if (taskInput.value.length < 5 || taskInput.value.length > 100) {   // sprawdza długość zadania
            alert("Źle sformułowane zadanie");   // jeżeli warunek nie jest spełniony zatrzymuje działanie i prosie o poprawę inputu
            taskInput.value = "";
            return false;
        } else {
            var newLi = document.createElement("li");     //tworzy nowy elemnt gdy warunek jest spełniony
            newLi.innerHTML = "<h1>" + taskInput.value + "</h1><button class ='remove'>Delete</button><button class='complete'>Complete</button>";
            taskList.appendChild(newLi);          // dodaje nowy element do DOM
            taskNumber++;                         // liczy ilość dodanych działań
            counter.innerText = taskNumber;
        }

        var buttonDelete = newLi.querySelector(".remove");         //guzik do usuwania zadań
        buttonDelete.addEventListener("click", function(e) {
            if(newLi.classList.contains("done")){                  //usuwa gdy zadanie zakończone
                newLi.parentNode.removeChild(newLi);
            } else {
                taskNumber--;       //usuwa zadanie z głównego licznika i zmniejsza ilość zadań w liczniku
                counter.innerText = taskNumber;
                newLi.parentNode.removeChild(newLi);
            }
        });

        var buttonComplete = newLi.querySelector(".complete");
        buttonComplete.addEventListener("click", function(e) {
            if (newLi.classList.contains("done")) {  //zmienia "kolor zadania" kiedy jednak nie zostało skończone
                newLi.classList.remove("done");
                taskNumber++;                        //dodaje zadanie do licznika zadań do zrealizowania
                counter.innerText = taskNumber;
            } else {
                newLi.classList.add("done");         //zmienia color zadania na czerowny jeżeli skończone
                taskNumber--;                        //zmniejsza ilość zadań do zrobienia w liczniku
                counter.innerText = taskNumber;
            }
        });
        taskInput.value = "";  //ustawia wartość inputu na 0
    });

    removeTaskButton.addEventListener("click", function(e) {
        var toDelete = taskList.children;
        for(var i=0; i<toDelete.length; i++){
            if(toDelete[i].classList.contains("done")){
                toDelete[i].parentNode.removeChild(toDelete[i]);
            }
        }
    });
});

/*
document.addEventListener('DOMContentLoaded', function() {
    var addTask = document.querySelector('#addTaskButton');
    var input = document.querySelector('#taskInput');
    var remove = document.querySelector('#removeFinishedTasksButton');

    addTask.addEventListener('click', function() {

  if((input.value.length > 5)&&(input.value.length < 100)){
        var listHolder = document.querySelector('ul#taskList');

        var newListItem = document.createElement('li');
        var taskName = document.createElement('h1');
        // wpisujemy zawartosc wprowadzona w inpucie do nowo utworzonego elementu taskName
        taskName.innerText = input.value;
        var delBtn = document.createElement('button')
        delBtn.innerText = 'Delete';

        var complete = document.createElement('button')
        complete.innerText = 'Complete';
// dodajemy nowo utworzone elementy do DOM
        listHolder.appendChild(newListItem);
        newListItem.appendChild(complete);
        newListItem.insertBefore(delBtn, complete);
        newListItem.insertBefore(taskName, delBtn)


        complete.addEventListener('click', function() {
            this.previousElementSibling.previousElementSibling.classList.add('done');
// do buttona complete dodajemy klase 'done' - w wyniku tego kazde wykonana zadanie zmieni kolor na czerwony
        });

        complete.addEventListener('dblclick', function() {
            this.previousElementSibling.previousElementSibling.classList.remove('done');
// podwojne klikniecie usuwa klase 'done' napis  znow jest czerwony
        });



        delBtn.addEventListener('click', function() {
            var condition = this.previousElementSibling.getAttribute('class');
// usuwamy element zawierajacy task wraz z buttonami tylko wtedy gdy znajdujący się w nim h1 zawiera klase 'done'
            if (condition === 'done') {

                this.parentNode.parentNode.removeChild(newListItem);
                console.log('fuck');
            }
        });

        remove.addEventListener('click', function() {
          //odszukujemy wszystkie nagłowki h1 i jezeli mają klasę 'done' usuwamu rodzica w zmiennej nemListItem
            if (taskName.parentNode.firstChild.getAttribute('class') === 'done') {
                this.previousElementSibling.removeChild(newListItem);
            }

        }); } else {
          console.log('treść poinna zawierać nei więcej niz 100 znako i nie mneij niz 5');
        }

        input.value = '';

    });
});
*/
