// Văn bản mặc định của khung hiển thị
const DEFAULT_TEXT = "Di chuột qua một hình ảnh bên dưới để hiển thị ở đây.";

// Chạy khi chuột (hoặc phím Tab) vào một hình ảnh
function upDate(previewPic) {
  console.log("Sự kiện upDate đã kích hoạt");
  console.log("alt:", previewPic.alt);
  console.log("src:", previewPic.src);

  const imageDiv = document.getElementById("image");
  imageDiv.innerHTML = previewPic.alt;
  imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

// Chạy khi chuột (hoặc focus) rời khỏi hình ảnh
function unDo() {
  console.log("Sự kiện unDo đã kích hoạt");

  const imageDiv = document.getElementById("image");
  imageDiv.style.backgroundImage = "url('')";
  imageDiv.innerHTML = DEFAULT_TEXT;
}

// Phần nâng cao: hỗ trợ bàn phím (Tab) cho mỗi ảnh
function addTabFocus() {
  const images = document.querySelectorAll(".preview");
  images.forEach(function (img, index) {
    img.setAttribute("tabindex", index + 1);
    img.addEventListener("focus", function () { upDate(img); });
    img.addEventListener("blur", unDo);
  });
}
