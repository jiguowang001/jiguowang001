window.onload = function() {

    // 动画
    function k(l) {
        if (l < 10) {
            return '0' + l;
        } else {
            return '' + l;
        }
    }

    function fn() {
        var before = new Date(), //当前时间
            assign = new Date('7,1,2021,00:00:00'), //指定时间
            sum = assign - before, //时间差
            tian = Math.floor(sum / 1000 / 60 / 60 / 24), //天
            xiaoshi = Math.floor(sum / 1000 / 60 / 60 % 24), //时
            fen = Math.floor(sum / 1000 / 60 % 60), //分
            miao = Math.floor(sum / 1000 % 60); //秒
        document.getElementById('daojishi').innerHTML = '申请时间剩余' + k(tian) + '天' + k(xiaoshi) + '时' + k(fen) + '分' + k(miao) + '秒';
    }
    setInterval(fn, );
    // 加载更多
    q.onclick = function() {
        q.style.display = 'none';
        w.style.display = 'block';
    }
    console.log(w);
    w.onclick = function() {
            w.style.display = 'none';
            q.style.display = 'block';
        }
        // 轮播图
    var imgsBox = document.querySelector('.xuanran');
    var aRight = document.querySelector('.you');
    var aLeft = document.querySelector('.zuo');
    var currI = 0;
    var newImg = imgsBox.children[0].cloneNode(true);
    imgsBox.appendChild(newImg)
    aRight.onclick = function() {
        // 到边界最后一张的处理
        if (currI >= 7) {
            currBtn(0)
            currI += 1;
            imgsBox.style.transition = 'margin-left .5s'
            imgsBox.style.marginLeft = -255 * currI + 'px'
                // 从试图上的最后一张走到最后一张的下一张结束，瞬间回到0
            setTimeout(function() {
                imgsBox.style.transition = 'none'
                imgsBox.style.marginLeft = 0
                currI = 0
            }, 500);
        } else {
            currI += 1;
            imgsBox.style.transition = 'margin-left .5s'
            imgsBox.style.marginLeft = -255 * currI + 'px'
            currBtn(currI)
        }
        // 阻止默认行为
        return false;
    }


    aLeft.onclick = function() {
            // 到边界0 的处理
            if (currI <= 0) {
                currBtn(8)
                    // 一刹那就滚动到最后一张
                currI = 7
                imgsBox.style.transition = 'none'
                imgsBox.style.marginLeft = -255 * 4 + 'px'
                    // 慢慢滚动到倒数第二张
                setTimeout(function() {
                    currI = currI - 1;
                    imgsBox.style.transition = 'margin-left .5s'
                    imgsBox.style.marginLeft = -255 * currI + 'px'
                }, 0)
            } else {
                currI = currI - 1;
                imgsBox.style.transition = 'margin-left .5s'
                imgsBox.style.marginLeft = -255 * currI + 'px'
                    //从0 向下标为4的图片滚动
                currBtn(currI)
            }
        }
        // 自动轮播
    setInterval(() => {
        aRight.click()
    }, 3000);
    // 初始状态
    currBtn(0)

    function currBtn(index) {
        for (var j = 0; j < dots.length; j++) {
            dots[j].style.opacity = '.3'
        }
        dots[index].style.opacity = '.6'
    }


}

$(function() {

    $.ajax({
            url: 'http://localhost:3000/play/hot',
            type: 'GET',
            dataType: 'JSON',
            success: function(data) {
                var ind = 0;
                var strHtml = "";
                data[ind].map(function(nItem) {
                    console.log(nItem.text);
                    var Isrc = nItem.img.replace(/http:\/\/192.168.1.64/g, 'http://localhost')
                    strHtml += `<div class="lb">
                    <img src="${Isrc}" alt="" width="200">
                    <p>${nItem.description}</p>
                    <span class="fangkuang">2032</span>
                    <span class="fangkuang_">20台</span>
                    <p><span>1392</span>申请</p>
                    <p class="shengyu">剩余时间2天</p>
                </div>`
                })
                $('.xuanran').html(strHtml)
            }
        })
        //酷玩
    $.ajax({
        url: 'http://localhost:3000/play/new',
        type: 'GET',
        dataType: 'JSON',
        success: function(data) {
            var ind = 0;
            var strHtml = "";
            data[ind].map(function(nItem) {
                console.log(nItem.text);
                var Isrc = nItem.img.replace(/http:\/\/192.168.1.64/g, 'http://localhost')
                strHtml += `<div class="kw">
                    <img src="${Isrc}" alt="" width="200">
                    <p class="ziti"><a href="#">${nItem.text}</a></p>
                    <p class="jiaqian"><span>${nItem.price}</span></p>
                    <p class="xin"><img src="./img/xin.png" alt="" width="10">${nItem.like}
                    <img src="./img/reply.png" alt="" width="10">${nItem.words}</p>
                </div>`
            })
            $('.kwxr').html(strHtml)
        }
    })
})