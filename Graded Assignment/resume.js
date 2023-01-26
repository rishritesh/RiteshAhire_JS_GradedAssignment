import template from './template.json' assert {type: 'json'};

//to conver json into javaScript onject we need to convert into string first then parse.
let dataobj = JSON.stringify(template)
let data = JSON.parse(dataobj)
//to print every object
//console.log(data.resume[0])

//it is global variable for indexing 
var index = 0;

let company = document.getElementById("company");
let postion = document.getElementById('position');
let start = document.getElementById('start');
let end = document.getElementById('end')
let name = document.getElementById('name');
let applied = document.getElementById('soft')
let summary = document.getElementById('summary')

let pro = document.getElementById('project')
let prodes = document.getElementById('projectdes')

let edu = document.getElementById('education')
let edu1 = document.getElementById('education1')
let edu2 = document.getElementById('education2')

//let intern = document.getElementById('intern');

let achievement = document.getElementById('achievement')

//this is for internship
let company1 = document.getElementById("company1");
let postion1 = document.getElementById('position1');
let start1 = document.getElementById('start1');
let end1 = document.getElementById('end1')
let summary1 = document.getElementById('summary1')

//this is for side bar
let personalInfo = document.getElementById('persInfo');
let techSkill = document.getElementById('techSkill');
let hobbies = document.getElementById('hobbies');

let sidebar = document.getElementById('sidebar')
let phone = document.getElementById('phone');
let email = document.getElementById('email');
let link = document.getElementById('linkedin');

//button 
let left = document.getElementById('left');
let right = document.getElementById('right');


//project name bold
pro.style.fontWeight = 'bold';

//get search element
let search = document.getElementById('search');

//make global object for access
var object = data.resume;

//this is for display all data
function display() {

  //this is for indexing 
  let res = object[index];



  if (index === object.length - 1) {
    right.style.display = 'none';
    console.log('right side')
  } else {
    right.style.display = 'block';
  }


  if (index === 0) {
    left.style.display = 'none';

  } else {
    left.style.display = 'block';
  }

  console.log(data.resume.length, "this is len")

  company.innerText = res.work['Company Name'];
  postion.innerText = res.work.Position;
  start.innerText = res.work['Start Date'];
  end.innerText = res.work['End Date']
  name.innerText = res.basics.name;
  applied.innerText = `Applied For : ${res.basics.AppliedFor}`;
  summary.innerText = res.work.Summary;
  pro.innerText = res.projects.name;
  prodes.innerText = res.projects.description;
  edu.innerText = `${res.education['High School'].institute} ${res.education['High School'].cgpa} `;
  edu1.innerText = `${res.education['Senior Secondary'].institute} ${res.education['Senior Secondary'].cgpa} `;
  edu2.innerText = `${res.education['UG'].institute} ${res.education['UG'].course} `;

  //this is for internship data from json attached to html
  company1.innerText = res.Internship['Company Name'];
  postion1.innerText = res.Internship.Position;
  start1.innerText = res.Internship['Start Date'];
  end1.innerText = res.Internship['End Date']
  summary1.innerText = res.Internship.Summary;



  //this is for achievement because it is array 
  let len = res.achievements.Summary.length;
  //console.log(len)

  for (let i = 0; i < len; i++) {

    let li = document.createElement('li')
    li.innerText = `${res.achievements.Summary[i]}`
    achievement.appendChild(li);
  }

  //side bar 
  phone.innerText = res.basics.phone;
  email.innerText = res.basics.email;
  link.innerText = res.basics.profiles.network;

  let skilllen = res.skills.keywords.length;
  //console.log(skilllen)
  for (let i = 0; i < skilllen; i++) {
    let line = document.createElement('span');
    line.innerHTML = `${res.skills.keywords[i]}<br> `;
    skill.appendChild(line)
  }


  let arr = res.interests.hobbies.length;
  console.log(arr)

  for (let i = 0; i < arr; i++) {
    let li = document.createElement('span')
    li.innerHTML = ` ${res.interests.hobbies[i]} <br>`;
    hobbies.appendChild(li)

  }


}


//left button 
left.addEventListener('click', (e) => {
  e.preventDefault();
  //remove all created child
  removeChild();

  index--;
  display()
})



//right button
right.addEventListener('click', (e) => {
  e.preventDefault();
  //remove all created child 
  removeChild();
  index++;
  display()
})


//for search 
search.addEventListener('keypress', filter);

function filter(e) {
  if (e.keyCode === 13) {
    console.log(search.value);
    let result = data.resume.filter(i => i.basics.AppliedFor.toLowerCase() === (search.value.toLowerCase()))
    console.log(result.length)
    if (result.length > 0) {
      //this to assign new object value
      index=0;
      object = result;
      removeChild();
      display();

    }
    else {

      let outer = document.getElementById('resume');
      outer.style.display = 'none'

      //no match found 
      let temp = document.getElementById('out')
      temp.style.display = 'block'

      left.style.display = 'none'
      right.style.display = 'none'

    }


  }

}

let temp = document.getElementById('out')
temp.style.display = 'none'


//this function is for to delete child we create in display()
function removeChild(){
  //this is for to delete create element hobbies
  while (hobbies.lastChild) {
    hobbies.removeChild(hobbies.lastChild);
  }

  //this if for delete create element for technical skill
  while (skill.hasChildNodes()) {
    skill.removeChild(skill.lastChild);
  }

  //this is for delete interests
  while (achievement.lastChild) {
    achievement.removeChild(achievement.lastChild)
  }
}


display()




