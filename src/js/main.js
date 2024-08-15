import '../scss/main.scss';

// 法 1
import * as bootstrap from 'bootstrap';

// const modelCtrl = function () {
//   const modalEl = new bootstrap.Modal(document.querySelector("#exampleModal"), {});;
//   modalEl.show();
// };

// 法 2 - 只引入需要的功能: Modal
// import * as bootstrap from 'bootstrap'; // 看需求決定是否引入這行
// import { Modal } from 'bootstrap';

// const modelCtrl = function () {
//   const modalEl = new Modal(document.querySelector("#exampleModal"));
//   modalEl.show();
// };

// 法 3 - 與法 2 相同，差在引入的路徑較完整
// import * as bootstrap from 'bootstrap'; // 看需求決定是否引入這行
// import Modal from 'bootstrap/js/dist/modal';

// const modelCtrl = function () {
//   const modalEl = new Modal(document.querySelector("#exampleModal"));
//   modalEl.show();
// };

// modelCtrl();