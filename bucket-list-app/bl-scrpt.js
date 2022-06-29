    // Databases (Firebase)
    // NoSQL Databases have collections, documents and properties instead of tables, rows and columns
    // They have a database instance which stores many different collections
    // Each collection is a bunch of different documents
    // Each document represents a different record of data

    const cd = document.querySelector('ul');
    const frm = document.querySelector('form');
    
    const addGoal = (goal, id) => {
        let dtt = goal.created_at.toDate();
        let dte = dtt.getDate()+"/"+(dtt.getMonth()+1)+"/"+dtt.getFullYear();
        cd.innerHTML += `<li data-id="${id}">
                            <div class="card shadow-lg rounded p-3 my-3" style="max-width: 300px">
                            <div class="fw-bold p-2"> ${goal.todo} </div>
                            <div class="p-2"> By ${goal.author} on ${dte} </div>
                            <div class="text-center"> <button class="btn btn-success btn-sm my-2" style="max-width: 70px">done</button></div>
                            </div>
                        </li>`;
        }
    
    const deleteGoal = (id) => {
        const rcps = document.querySelectorAll('li')
        rcps.forEach(r => {
            if (r.getAttribute('data-id')===id) {
                r.remove();
            }
        })
    };
    
        // get documents
    // db.collection(t--dos').get().then(data=> {
    //     data.docs.forEach(d => {
    //         addGoal(d.data(), d.id);
    //     })}).catch(err => console.log(err));
    
    
    db.collection('to-dos').onSnapshot(snp => {
        snp.docChanges().forEach(change=>{
            const doc = change.doc;
            if (change.type === 'added') {
                addGoal(doc.data(), doc.id);
            }
            else if (change.type === 'removed') {
                deleteGoal(doc.id);
            }
        })
    });
    
        // add documents
    frm.addEventListener('submit', e => {
        e.preventDefault();
    
        const dt = new Date();
        const rcp = {
            todo : frm.goal.value,
            created_at : firebase.firestore.Timestamp.fromDate(dt)
        };
    
        db.collection('to-dos').add(rcp)
        .then(console.log('goal added'))
        .catch(err=>console.log(err));
        
        frm.reset();
    })
    
        // delete documents
    
    cd.addEventListener('click', e=>{
        e.preventDefault();
        if (e.target.tagName === 'BUTTON') {
            const lid = e.target.parentNode.parentNode.getAttribute('data-id');
            db.collection('to-dos').doc(lid).delete()
            .then(console.log('goal deleted'))
            .catch(err=>console.log(err));
        }
    });

    