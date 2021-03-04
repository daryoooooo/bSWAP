$('.Flexible-2 .owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


$('.Flexible-3 .owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})



function hamburgMenu(){
    
    
    
    var hamburgBtn = document.querySelector('.hamburgmenu')
    
    
    var list = document.querySelector('nav .navbar .listlinks ul')
    
    var span1 = document.querySelector('nav .navbar .hamburgmenu span:nth-child(1)')
    
    var span2 = document.querySelector('nav .navbar .hamburgmenu span:nth-child(2)')
    
    var span3 = document.querySelector('nav .navbar .hamburgmenu span:nth-child(3)')
    
    
    
    var show = false
    
    hamburgBtn.onclick = function(){
        
        
        if(!show){
            
            list.classList.add('slide')
            hamburgBtn.classList.add('rotate')
            span1.classList.add('rotate1')
            span2.classList.add('hide')
            span3.classList.add('rotate3')
            show = true
        }else {
            
            list.classList.remove('slide')
            hamburgBtn.classList.remove('rotate')
            span1.classList.remove('rotate1')
            span2.classList.remove('hide')
            span3.classList.remove('rotate3')
            show = false
        }
    }
}

hamburgMenu()





function sticky(){
    
    
    var navBar = document.querySelector('.mainnav')
    
    
    
    window.onscroll = function(){
        
        
        if(pageYOffset > 100 ){
            
            navBar.classList.add('sticky')
        }else {
            
            navBar.classList.remove('sticky')
        }
    }
    
}

sticky()








$('#jntr-select').ddslick({
    onSelected: function(selectedData){
        //callback function: do something with selectedData;
    }   
});



$('#demo-htmlselect').ddslick({
    onSelected: function(selectedData){
        //callback function: do something with selectedData;
    }   
});




//reset tag link 



function resetTagLink (){
    
    document.querySelectorAll('a').forEach((item)=>{
        
        item.onclick = function(event){
            
            if(item.getAttribute('href') === "#"){
                
                event.preventDefault()
            }
        }
    })
    
}

resetTagLink ()



function showpopup(){
    
    
    var stakeBtn = document.querySelectorAll('.btnstake')
    
    var popup = document.querySelector('.mainpopup')
    
    var closeBtn = document.querySelectorAll('.mainpopup .closebtn span')
    
    stakeBtn.forEach((item)=>{
        
        
        
        if(typeof(item) != 'undefined' && item != null){
                    item.onclick = function(e){
            e.preventDefault()
            
            popup.classList.add('show')
            
        }
            
        }
        
        
        
        

    })
    
    
     closeBtn.forEach((item)=>{
        
        item.onclick = function(e){
            e.preventDefault()
            
            popup.classList.remove('show')
            
        }
    })
    
   popup.onclick = function(e){
       
       
       if(e.target.classList.contains('mainpopup')){
           
           
           popup.classList.remove('show')
       }
   }
    
    
}



  showpopup()










