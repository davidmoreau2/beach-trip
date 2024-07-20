const toggle = document.getElementById('btn-show')
const resShow = document.getElementById('res-show')
const trip = document.querySelectorAll('#trip')
const res = document.querySelectorAll('#res')


toggle.addEventListener('click', () => {
    showItems()
})

resShow.addEventListener('click', () => {
    showRes()
})

function showItems () {
    trip.forEach(trip => trip.classList.toggle('show'))
}
function showRes () {
    res.forEach(res => res.classList.toggle('show'))
}

