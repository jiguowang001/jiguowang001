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
                strHtml += `<div class="kw">
                    <img src="${Isrc}" alt="" width="200">
                    <p class="ziti"><a href="#">${nItem.text}</a></p>
                    <p class="jiaqian"><span>${nItem.price}</span></p>
                    <p class="xin"><img src="../img/xin.png" alt="" width="10">${nItem.like}
                    <img src="../img/reply.png" alt="" width="10">${nItem.words}</p>
                </div>`
            })
            $('.zuixin').html(strHtml)
        }
    })
})
window.onload = function() {
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