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

  formData.append('photo', file, file.name);
  formData.append('name', name);

  resultContainer.innerHTML = 'Uploading...';
  fileUpload('/admin/upload', formData, function (data) {
    resultContainer.innerHTML = data;
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
//export {prepareSendFile};
