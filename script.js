// Văn bản mặc định của khung hiển thị
const DEFAULT_TEXT = "Di chuột qua một hình ảnh bên dưới để hiển thị ở đây.";

// Chạy khi chuột vào ảnh (onmouseover) hoặc ảnh nhận focus (onfocus)
function upDate(previewPic) {
  console.log("upDate đã kích hoạt");
  console.log("alt:", previewPic.alt);
  console.log("src:", previewPic.src);

  const imageDiv = document.getElementById("image");
  imageDiv.innerHTML = previewPic.alt;
  imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

// Chạy khi chuột rời ảnh (onmouseleave) hoặc ảnh mất focus (onblur)
function unDo() {
  console.log("unDo đã kích hoạt");

  const imageDiv = document.getElementById("image");
  imageDiv.style.backgroundImage = "url('')";
  imageDiv.innerHTML = DEFAULT_TEXT;
}

// Chạy khi trang tải xong (onload): thêm tabindex cho từng ảnh
function addTabFocus() {
  console.log("onload đã kích hoạt: addTabFocus");

  const images = document.getElementsByClassName("preview");
  for (let i = 0; i < images.length; i++) {
    images[i].setAttribute("tabindex", "0");
    console.log("Đã thêm tabindex cho ảnh " + (i + 1));
  }
}
