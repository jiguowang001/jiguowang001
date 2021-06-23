// $(function() {
//     $ajax({
//         url: 'http://localhost:3000/useing/public',
//         type: 'GET',
//         dataType: 'JSON',
//         success: function(data) {
//             console.log(data);
//             var skt = '';
//             $.each(data, function(index, jk) {
//                 console.log(data);
//                 console.log(index);
//                 var iStr = jsk.replace(/http:\/\/192.168.1.13/g, 'http://localhost')

//             })
//         }
//     })
// })
$(function() {
    $.ajax({
        url: 'http://localhost:3000/useing/master',
        type: 'GET',
        dataType: 'JSON',
        success: function(data) {
            console.log(data);
            var skt = '';
            $.each(data, function(index, jk) {
                console.log(data)
                console.log(index);
                console.log(jk);
                var jsk = data[index].img
                console.log(jsk);
                var iStr = jsk.replace(/http:\/\/192.168.1.13/g, 'http://localhost')
                skt += `
               <ul class="ul__1">
                    <li class="li__1">
                        <a class="a__1" href="#"> 
                            <img class="img__1" src="${iStr}" alt="">
                            <p class="p__1">${data[index].text}</p>
                            <span class="span__5">${data[index].totalnum}</span>
                            <span class="span__1">${data[index].num}台</span>
                            <span class="span__3">${data[index].info_ty}</span>
                            <span class="span__2">${data[index].apply}</span>
                            <span class="span__6">申请</span>
                            <p class="p__2">查看使用名单</p>
                        </a>
                    </li>
                </ul>
                `
            })
            $('.di_7').html(skt)
        }
    })
})