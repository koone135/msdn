

$(document).ready(function(){
    // 绑定标题点击事件
    $('.name').click(function(){
        // 切换箭头状态
        $(this).toggleClass('active');
        // 获取对应的内容区域
        const $content = $(this).siblings('.details-content');
        // 切换展开状态
        $content.slideToggle(200);
    });
    
    // 默认折叠所有内容
    $('.details-content').hide();
});


// 修复后的分类切换功能
$(document).ready(function(){
    // 分类导航点击事件
    $('.category-item').click(function(){
        // 移除所有激活状态
        $('.category-item').removeClass('active');
        // 添加当前激活状态
        $(this).addClass('active');
        
        // 获取目标容器ID
        const targetId = $(this).data('target');
        
        // 隐藏所有容器
        $('.software-container').removeClass('active');
        
        // 显示目标容器
        $('#' + targetId).addClass('active');
    });

    // 修复下载功能（事件委托）
    $(document).on('click', '.download-btn', function() {
        const url = $(this).data('url');
        if (url) {
            window.open(url, '_blank');
            
            // 添加点击反馈动画
            $(this).css('transform', 'scale(0.95)');
            setTimeout(() => {
                $(this).css('transform', 'scale(1)');
            }, 200);
        }
    });
});