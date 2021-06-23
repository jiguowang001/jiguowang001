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