import '../scss/styles.scss'

// 法 1
import * as bootstrap from 'bootstrap';

const modelCtrl = function () {
  const modalEl = new bootstrap.Modal(document.querySelector("#exampleModal"), {});
  modalEl.show();
};

// 法 2 - 只引入需要的功能: Modal
// import { Modal } from 'bootstrap';

// const modelCtrl = function () {
//   const modalEl = new Modal(document.querySelector("#exampleModal"));
//   modalEl.show();
// };

// 法 3 - 極不建議使用。若官方換檔名/結構就全滅
// import Modal from 'bootstrap/js/dist/modal';

// const modelCtrl = function () {
//   const modalEl = new Modal(document.querySelector("#exampleModal"));
//   modalEl.show();
// };

modelCtrl();