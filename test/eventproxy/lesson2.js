
//理论
var ep = new eventproxy();
ep.all('data1_event', 'data2_event', 'data3_event', function (data1, data2, data3) {
    var html = fuck(data1, data2, data3);
    render(html);
});

$.get('http://data1_source', function (data) {
    ep.emit('data1_event', data);
});

$.get('http://data2_source', function (data) {
    ep.emit('data2_event', data);
});

$.get('http://data3_source', function (data) {
    ep.emit('data3_event', data);
});