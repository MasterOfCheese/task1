// // Thay đổi giá trị của thuộc tính display khi cuộn chuột xuống 10em
// document.addEventListener("scroll", () => {
//   const scrollY = window.scrollY;
//   if (scrollY > 10) {
//     document.querySelector(".backTop").style.display = "block";
//   } else {
//     document.querySelector(".backTop").style.display = "none";
//   }
// });
window.addEventListener("load", function () {
    var slide = document.querySelector(".slide");
    var slideMain = document.querySelector(".slide-main");
    var slideItems = document.querySelectorAll(".slide-item");
    var nextBtn = document.querySelector(".arrow-right");
    var prevBtn = document.querySelector(".arrow-left");
    var slideItemWidth = slideItems[0].offsetWidth;
    var slidesLeng = slideItems.length;
    var currentSlide = 0;

    function showCurrentSlide() {
      for (let i = 0; i < slidesLeng; i++) {
        if (i === currentSlide) {
          slideItems[i].classList.add("active");
        } else {
          slideItems[i].classList.remove("active");
        }
      }
    }

    function slideLeft() {
      currentSlide = (currentSlide - 1 + slidesLeng) % slidesLeng;
      showCurrentSlide();
      updateSlideTransform();
      resetInterval();
    }

    function slideRight() {
      currentSlide = (currentSlide + 1) % slidesLeng;
      showCurrentSlide();
      updateSlideTransform();
      resetInterval();
    }

    function updateSlideTransform() {
      slideMain.style.transform = `translateX(-${currentSlide * slideItemWidth}px)`;
    }

    function resetInterval() {
      clearInterval(intervalId);
      intervalId = setInterval(autoSlide, 5000);
    }

    function autoSlide() {
      slideRight();
    }

    nextBtn.addEventListener("click", slideRight);
    prevBtn.addEventListener("click", slideLeft);

    showCurrentSlide();
    updateSlideTransform();

    var intervalId = setInterval(autoSlide, 5000); // Gọi autoSlide mỗi 5 giây
    
    var closeButton = document.querySelector('.close-button');
    var shippingNotice = document.querySelector('.shopping-notice');
    var contentBelow = document.querySelector('.content-below');

    closeButton.addEventListener('click', function () {
        shippingNotice.style.display = 'none';
        contentBelow.classList.add('hidden');
    });

    const newImages = [
      "https://i.pinimg.com/564x/7a/49/11/7a4911bbe3a4f3187bb897ca69893464.jpg",
      "https://i.pinimg.com/564x/f2/f2/f6/f2f2f608896f69d97adb2b8b95435c00.jpg",
      "https://i.pinimg.com/564x/95/c6/03/95c603b5adf0887d2114af3d86709363.jpg",
      "https://i.pinimg.com/564x/48/d8/0b/48d80b293cd2cf4d360c290b0cfb0752.jpg",
      "https://i.pinimg.com/564x/ac/97/f0/ac97f0d12aca7617f32baacb3fd474b1.jpg",
      "https://i.pinimg.com/736x/4f/c5/bd/4fc5bd3cb5b05a8a3007f46694d539f1.jpg",
      "https://i.pinimg.com/564x/58/69/1a/58691a41b16fdf698028311356b87f7b.jpg",
      "https://i.pinimg.com/564x/57/fa/58/57fa58756e7b8563c60bb73d18284395.jpg",
      "https://i.pinimg.com/564x/47/49/cb/4749cb4f7c43a816f5cd755743740b80.jpg",
      "https://i.pinimg.com/564x/1e/e7/b7/1ee7b71b77796fd15c3350a9ad9c86ca.jpg",
      "https://i.pinimg.com/564x/5e/a8/cc/5ea8ccddd0b054dc8803ae7e1d0367cb.jpg",
      "https://i.pinimg.com/564x/63/08/35/63083575abe4824dd41c0fd64e69d485.jpg",
      "https://i.pinimg.com/564x/1e/6b/95/1e6b95ee407f085d3108edaff51185bd.jpg",
      "https://i.pinimg.com/564x/c6/29/37/c62937f94f34b0d4e107a5b05aafef4d.jpg",
      "https://i.pinimg.com/564x/3e/9f/e9/3e9fe94351ba99e2fd2c7ad26677212b.jpg",
      "https://i.pinimg.com/564x/73/e4/40/73e44017096750d01aaa7030aa119a2c.jpg"
    ];
    let currentIndex = -1;
    let isUsed = new Array(newImages.length).fill(false);
    
    function getRandomImageIndex() {
      let newIndex;
      do {
        // chọn một chỉ số ngẫu nhiên từ mảng img
        newIndex = Math.floor(Math.random() * newImages.length);
        // check chỉ số mới có khác với chỉ số hiện tại và không bị trùng với img đã sử dụng
      } while (newIndex === currentIndex || isUsed[newIndex]);
      isUsed[newIndex] = true;
    
      // check đã chạy hết tất cả các ảnh chưa
      if (isUsed.every((used) => used)) {
        // if đã sử dụng hết:đặt lại mảng isUsed thành mảng toàn false
        isUsed.fill(false);
      }
    
      currentIndex = newIndex;
      return currentIndex;
    }
    
    // dùng hàm setInterval() để tạo một vòng lặp lặp lại 5s/lần
    setInterval(() => {
      // lấy ra tất cả các phần tử <div> có class 'img'
      const imgs = document.querySelectorAll('.img');
    
      // thay nội dung của các phần tử <div>
      for (const img of imgs) {
        const randomIndex = getRandomImageIndex();
        img.innerHTML = `<img src="${newImages[randomIndex]}" alt="Image 1" />`;
      }
    }, 5000);
    
    var names = [
      "Kate Dan",
      "Miles Lufare",
      "Tobey Lee",
      "Mikey Jordan",
      "Harley Coban",
      "Murphy Christ"
  ];
  
  var locations = [
      "BangKok, Thai",
      "Tokyo, Japan",
      "Vien, Hungary",
      "Paris, French",
      "Wakanda, Pant",
      "Berlin, Germany"
  ];
  
  var imgSrc = [
      "https://i.pinimg.com/564x/1c/b5/f6/1cb5f6283328645b34862259f880bd10.jpg",
      "https://i.pinimg.com/564x/0b/fa/48/0bfa4820ad7640b6d17ef07d7008827f.jpg",
      "https://i.pinimg.com/564x/d5/2d/86/d52d865f79ba11d6663fbce276987b38.jpg",
      "https://i.pinimg.com/564x/a5/4a/2a/a54a2a4e19b041b6a7d4023322ad7fbe.jpg",
      "https://i.pinimg.com/564x/ee/ba/ad/eebaad114972ea98eb64713d379fc752.jpg",
      "https://i.pinimg.com/564x/f0/16/61/f01661d1b1308f2a3a3f20bf3b8a48b8.jpg"
  ];
  
  function getRandomIndex(arrayLength, currentIdx) {
      let newIndex;
      do {
          newIndex = Math.floor(Math.random() * arrayLength);
      } while (newIndex === currentIdx);
      return newIndex;
  }
  
  setInterval(() => {
      const comments = document.querySelectorAll('.cmt1');
  
      comments.forEach(comment => {
          let currentIndex = -1;
  
          const nameIndex = getRandomIndex(names.length, currentIndex);
          const locationIndex = getRandomIndex(locations.length, currentIndex);
          const imgIndex = getRandomIndex(imgSrc.length, currentIndex);
  
          // Update content
          const h1 = comment.querySelector('h1');
          const h2 = comment.querySelector('h2');
          const img = comment.querySelector('img');
  
          h1.textContent = names[nameIndex];
          h2.textContent = locations[locationIndex];
          img.src = imgSrc[imgIndex];
      });
  }, 5000);
  setInterval(() => {
    const comments = document.querySelectorAll('.cmt2');

    comments.forEach(comment => {
        let currentIndex = -1;

        const nameIndex = getRandomIndex(names.length, currentIndex);
        const locationIndex = getRandomIndex(locations.length, currentIndex);
        const imgIndex = getRandomIndex(imgSrc.length, currentIndex);

        // Update content
        const h1 = comment.querySelector('h1');
        const h2 = comment.querySelector('h2');
        const img = comment.querySelector('img');

        h1.textContent = names[nameIndex];
        h2.textContent = locations[locationIndex];
        img.src = imgSrc[imgIndex];
    });
}, 5000);
setInterval(() => {
  const comments = document.querySelectorAll('.cmt3');

  comments.forEach(comment => {
      let currentIndex = -1;

      const nameIndex = getRandomIndex(names.length, currentIndex);
      const locationIndex = getRandomIndex(locations.length, currentIndex);
      const imgIndex = getRandomIndex(imgSrc.length, currentIndex);

      // Update content
      const h1 = comment.querySelector('h1');
      const h2 = comment.querySelector('h2');
      const img = comment.querySelector('img');

      h1.textContent = names[nameIndex];
      h2.textContent = locations[locationIndex];
      img.src = imgSrc[imgIndex];
  });
}, 5000);

function checkDuplicate(newInfo, usedInfo) {
  // Kiểm tra xem thông tin mới có trùng với thông tin đã sử dụng hay không
  return usedInfo.some((used) => JSON.stringify(used) === JSON.stringify(newInfo));
}

setInterval(() => {
  const comments = document.querySelectorAll('.cmt1');
  let usedInfoCmt1 = [];

  comments.forEach(comment => {
    let currentIndex = -1;

    do {
      const nameIndex = getRandomIndex(names.length, currentIndex);
      const locationIndex = getRandomIndex(locations.length, currentIndex);
      const imgIndex = getRandomIndex(imgSrc.length, currentIndex);

      // Lấy thông tin mới
      const newInfo = {
        h1: names[nameIndex],
        h2: locations[locationIndex],
        imgSrc: imgSrc[imgIndex],
      };

      // Kiểm tra trùng lặp
      if (!checkDuplicate(newInfo, usedInfoCmt1)) {
        const h1 = comment.querySelector('h1');
        const h2 = comment.querySelector('h2');
        const img = comment.querySelector('img');

        h1.textContent = newInfo.h1;
        h2.textContent = newInfo.h2;
        img.src = newInfo.imgSrc;

        // Lưu trữ thông tin mới vào mảng usedInfo
        usedInfoCmt1.push(newInfo);
        currentIndex = nameIndex;
      }
    } while (currentIndex === -1);
  });
}, 5000);

setInterval(() => {
  const comments = document.querySelectorAll('.cmt2');
  let usedInfoCmt1 = [];

  comments.forEach(comment => {
    let currentIndex = -1;

    do {
      const nameIndex = getRandomIndex(names.length, currentIndex);
      const locationIndex = getRandomIndex(locations.length, currentIndex);
      const imgIndex = getRandomIndex(imgSrc.length, currentIndex);

      // Lấy thông tin mới
      const newInfo = {
        h1: names[nameIndex],
        h2: locations[locationIndex],
        imgSrc: imgSrc[imgIndex],
      };

      // Kiểm tra trùng lặp
      if (!checkDuplicate(newInfo, usedInfoCmt1)) {
        const h1 = comment.querySelector('h1');
        const h2 = comment.querySelector('h2');
        const img = comment.querySelector('img');

        h1.textContent = newInfo.h1;
        h2.textContent = newInfo.h2;
        img.src = newInfo.imgSrc;

        // Lưu trữ thông tin mới vào mảng usedInfo
        usedInfoCmt1.push(newInfo);
        currentIndex = nameIndex;
      }
    } while (currentIndex === -1);
  });
}, 5000);

// Tương tự cho cmt2 và cmt3

    
  });
