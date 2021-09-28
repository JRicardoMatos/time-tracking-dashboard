/*style={{
    backgroundImage: `url('/images/icon-${ item.title.toLowerCase() === 'self care' ? 'self-care' : item.title.toLowerCase()}.svg')`, 
    backgroundColor: `${item.backgroundColor}`
  }} */
const backgrounds = document.querySelector('.backgroundStats')
let statsCard = document.querySelector('.statsCard')
let statsBoard = document.querySelector('.statsBoard')
const controls = document.querySelectorAll('.timeOptions')
const dailyBtn = controls[0]
const weeklyBtn = controls[1]
const monthlyBtn = controls[2]


const fetchData = ()=>{
  fetch('./data.json')
    .then(res => res.json())
    .then(data => {
      data.map(item => {
        console.log(item.title.toLowerCase() === 'self care' ? 'self-care' : item.title.toLowerCase())
        statsCard.innerHTML +=
                      `
                      <div class='statsBoard'>

                          <div class='backgroundStats' style='background-color:${item.backgroundColor}; background-image:url('/images/icon-${ item.title.toLowerCase() === 'self care' ? 'self-care' : item.title.toLowerCase()}.svg');>

                          </div>
                          <div class='containerStats'>
                              <p>${item.title}</p>
                              <h1 class='current'>${item.timeframes.daily.current}hrs</h1>
                              <h5 class='previous'>Last day ${item.timeframes.daily.previous}hrs</h5>
                          </div>
                        
                      </div>
                      `
                      controls.forEach((controlEl) => {
                        controlEl.addEventListener('click', (e) => {
                          controls.forEach((el) => el.classList.remove('active'))
                          e.target.classList.add('active')
                  
                          const dataType = e.target.dataset.type
                          let type = ''
                          switch(dataType) {
                            case 'daily':
                              type = 'Day'
                              break
                            case 'weekly':
                              type = 'Week'
                              break
                            case 'monthly':
                              type = 'Month'
                          }

                          const current = document.querySelectorAll('.current')
                          const previous = document.querySelectorAll('.previous')
                          
                          for(let i = 0; i < current.length; i++) {
                            current[i].textContent = data[i].timeframes[dataType].current + 'hrs'
                            previous[i].textContent = `Last ${type} - ` + data[i].timeframes[dataType].previous + 'hrs'
                          }
                        })     

       
        


      })
    })
    }
  )}

  fetchData()
