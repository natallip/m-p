import {tabs} from './tabs.js';
if($(".tabs").length) { 
  tabs.init(); 
};

import fileUpload from './upload';
import prepareSend from './prepareSend';

const formUpload = document.querySelector('#upload');
if (formUpload) {
  formUpload.addEventListener('submit', prepareSendFile);
  //console.log(1);
};
//formUpload.addEventListener('submit', prepareSendFile);

function prepareSendFile(e) {
  e.preventDefault();
  let resultContainer = formUpload.querySelector('.status');
  let formData = new FormData();
  let file = document
    .querySelector('#file-select')
    .files[0];
  let name = document
    .querySelector('#file-desc')
    .value;
  let tech = document
    .querySelector('#file-tech')
    .value;
  //console.log(tech);

  formData.append('photo', file, file.name);
  console.log(file);
  formData.append('name', name);
  //console.log(name);
  formData.append('tech', tech);
  //console.log(tech);
  
  resultContainer.innerHTML = 'Uploading...';
  fileUpload('/admin/upload', formData, function (data) {
    resultContainer.innerHTML = data;
    //console.log(formData);
    formUpload.reset();
  });
  //console.log(11111);
};
const formBlog = document.querySelector('#blog');
formBlog.addEventListener('submit', prepareSendPost);

function prepareSendPost(e) {
  e.preventDefault();
  let data = {
    title: formBlog.title.value,
    date: formBlog.date.value,
    text: formBlog.text.value
  };
  prepareSend('/admin/addpost', formBlog, data);
};

const formSkills = document.querySelector('#skills');
formSkills.addEventListener('submit', prepareSendSkills);

function prepareSendSkills(e) {
  e.preventDefault();
  let data = {
    html: formSkills.html.value,
    css: formSkills.css.value,
    js: formSkills.js.value,
    php: formSkills.php.value,
    mySQL: formSkills.mySQL.value,
    node: formSkills.node.value,
    mongo: formSkills.mongo.value,
    git: formSkills.git.value,
    gulp: formSkills.gulp.value,
    bower: formSkills.bower.value
  };
  //console.log(data);
  prepareSend('/admin/addskill', formSkills, data);
};
