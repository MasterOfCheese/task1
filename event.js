
  function toggleHidden() {
    var hiddenDiv = document.getElementById("hiddenDiv");
    hiddenDiv.style.display =
      hiddenDiv.style.display === "none" || hiddenDiv.style.display === ""
        ? "block"
        : "none";


//     var hidden = document.getElementsByClassName("hidden");
// // Kiểm tra xem có phần tử nào có lớp "hidden" không
// if (hidden.length > 0) {
//   // Lấy phần tử đầu tiên có lớp "hidden"
//   var firstHiddenElement = hidden[0];
//   // Kiểm tra trạng thái hiển thị và thay đổi nó
//   firstHiddenElement.style.display =
//     firstHiddenElement.style.display === "none" || firstHiddenElement.style.display === ""
//       ? "block"
//       : "none";
// }


// var hiddenDiv = document.querySelector(".hidden");
// if (hiddenDiv !== null) {
//   hiddenDiv.style.display = hiddenDiv.style.display === "none" ? "block" : "none";
// }


  }

