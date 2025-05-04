// 获取所有 "View" 按钮
const viewButtons = document.querySelectorAll('.view-button');

// 为每个 "View" 按钮添加点击事件监听器
viewButtons.forEach(button => {
    button.addEventListener('click', function() {
        // 获取对应的原图 URL（来自 data-full-image 属性）
        const fullImageUrl = button.getAttribute('data-full-image');
        
        // 通过浏览器跳转到大图链接
        window.location.href = fullImageUrl;  // 跳转到大图页面
    });
});
