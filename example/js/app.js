const tabsContent = document.querySelectorAll('.tabcontent')
const tabs = document.querySelectorAll('.tabheader__item')  //foto
const tabsWrapper = document.querySelector('.tabheader__items')

const hideTabContent = () => {
    tabsContent.forEach((item) => {
            
            item.style.display = 'none'
    })
    tabs.forEach((item) => { 
               item.classList.remove('tabheader__item_active')
    })
}
hideTabContent()

const showTabContent = (i = 0) => {
   tabsContent[i].style.display = 'block'
   
   tabs[i].classList.add('tabheader__item_active')
   
} 
   
let i = 0
showTabContent(i)
setInterval(() => { 
    hideTabContent()
   showTabContent(i)
 i++
 if(i >= tabs.length) i = 0;
}, 2000)



