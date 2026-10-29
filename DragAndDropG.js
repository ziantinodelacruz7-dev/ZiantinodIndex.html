const draggables = document.querySelectorAll('.box');
const droppables = document.querySelectorAll('.droppable');

let draggedItem = null;
let correctCount = 0;
const totalItems = draggables.length;


draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', (e) => {
        draggedItem = draggable;
        setTimeout(() => draggable.classList.add('dragging'), 0);
    });

    draggable.addEventListener('dragend', () => {
        if (draggedItem) {
            draggedItem.classList.remove('dragging');
        }
        draggedItem = null;
    });
});


droppables.forEach(droppable => {
    droppable.addEventListener('dragover', (e) => {
        e.preventDefault(); 
    });

    droppable.addEventListener('drop', (e) => {
        e.preventDefault();
        
        if (!draggedItem) return;

        const itemCategory = draggedItem.getAttribute('data-category');
        const dropCategory = droppable.getAttribute('data-category');

        
        if (itemCategory === dropCategory) {
           
            if (!droppable.contains(draggedItem)) {
                droppable.appendChild(draggedItem);
                correctCount++;

                
                if (correctCount === totalItems) {
                    setTimeout(() => {
                        alert("WOW PALOO!");
                    }, 100);
                }
            }
        } else {
            alert("LALA MALI!");
        }
    });
});