let a=document.getElementById("screen")
function working(){
    let x = Math.random()
      a.innerText=x
    if(x>=0.1&&x<=0.2) {
       
         a.innerText='"Create your first invoice free with our Online Invoice Generator"'
    }  
    else if(x>=0.2&&x<=0.3) {
        a.innerText='"What is a price quote"'

        
    }
    else if(x>=0.3&&x<=0.4) {
        a.innerText='"What’s the difference between an invoice and a quote template?"'
        
    }
    else if(x>=0.4&&x<=0.5) {
        a.innerText='"How do I send a price quote?"'
        
    }
    else if(x>=0.5&&x<=0.6) {
        a.innerText='"When should I send a price quote to a customer?"'
        
    }
    else if(x>=0.6&&x<=0.7) {
        a.innerText='"Can I use the Invoice Simple mobile app to make and send quote templates?"'
        
    }
    else if(x>=0.7&&x<=0.8) {
        a.innerText='"Are there other file formats for quote templates?"'
        
    }
    else if(x>=0.8&&x<=0.9) {
        a.innerText='"I believe work "'
        
    }
    else {
        a.innerText='"I believe work should be fun"'
        
    }
    

    
} 