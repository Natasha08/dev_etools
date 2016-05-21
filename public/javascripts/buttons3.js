//To show the workout input form

function showWorkoutTable() {
var workoutData = document.getElementById('workoutData');
var workSearch = document.getElementById('workSearch');

 if (workoutData.hasAttribute('hidden')) {
 workoutData.removeAttribute('hidden');
  workSearch.removeAttribute('hidden');
  workProfile.setAttribute('hidden', 'true');
 } 
 else {
 	console.log('err');
}
};	

var btnShowWork = document.getElementById('btnworkget');
btnShowWork.addEventListener('click', showWorkoutTable, false);

function exerciseForm() {
var workProfile = document.getElementById('workProfile');

 if (workProfile.hasAttribute('hidden')) {
 workProfile.removeAttribute('hidden');
 workoutData.setAttribute('hidden', 'true');
 workSearch.setAttribute('hidden', 'true');
 } 
 else {
 	console.log('err');
}
};	

var showWorkout = document.getElementById('btnworkpos');
showWorkout.addEventListener('click', exerciseForm, false);


module.exports = showWorkoutTable;
module.exports = exerciseForm;
module.exports = showWorkout;