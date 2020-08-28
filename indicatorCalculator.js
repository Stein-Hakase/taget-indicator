      // Get Form from the dom and store it in variable
        let  form = document.getElementById('form')
        // Adding event listener submit for form
        form.addEventListener("submit", (e)=> {
            e.preventDefault();
            // Get target Value
            let  target = document.getElementById('target').value

            // Reached Value
            let  reached = document.getElementById('reached').value

            

            
            // Target should be always superior or equal to reached value
            if (target>=reached){
                // Change The value of reach to the new one ffrom input
                document.getElementById('reached-field').innerHTML=`$${reached}`

                // Change The target value to the new one from input
                 document.getElementById('target-field').innerHTML=`$${target}`

                // get the arrow head indicator Dom and change the position 
                document.getElementById('indicator').style.width=`${(reached/target)*100}%`

                 // Change The difference  value 
                document.getElementById('difference-field').innerHTML=`$${target-reached}`
                target='0'
                targetField=''
                
              

            }else alert('Target should be  >= reached')
            target=''
            reached=''
        });