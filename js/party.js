document.querySelector('#partysubmit').addEventListener('click', function () {
    mtgt_values = {};
    mtgt_feilds = document.querySelectorAll('.party table input'
    );
    console.log(mtgt_feilds);
    mtgt_feilds.forEach(x => {
        mtgt_values[x.id] = x.value;
    });
    const month = document.querySelector('#month').value.toString();
    console.dir(month);
    console.log(mtgt_values);
    xhr = new XMLHttpRequest();
    xhr.open('POST', './serv/submonthtarget.php');
    xhr.onload = function (resp) {
        console.log(resp);
    }
    xhr.send(JSON.stringify({
        month: month,
        values: JSON.stringify(mtgt_values)
    }));
}
)

document.querySelector('#mfetch').addEventListener('click', function () {
    const month = document.querySelector('#month').value.toString();
    xhr = new XMLHttpRequest();
    xhr.open('POST', './serv/getmonthtarget.php');
    xhr.send(JSON.stringify({ month: month }));
    xhr.onload = function () {
        if (xhr.readyState == 4) {
            const rs = this.responseText;
            const a = rs.indexOf("#[");
            const b = rs.indexOf(']#');
            const res = rs.slice(a + 1, b + 1);
            const data = JSON.parse(JSON.parse(res)[0].tgtvalues);
            for (x of Object.keys(data)) {
                document.querySelector('#' + x).value = data[x];
            }
        }
    }
});
//////////////
document.querySelector('#ysubmit').addEventListener('click', function () {
    mtgt_values = {};
    mtgt_feilds = document.querySelectorAll('.ytgt table input'
    );
    console.log(mtgt_feilds);
    mtgt_feilds.forEach(x => {
        mtgt_values[x.id] = x.value;
    });
    const month = document.querySelector('#year').value.toString();
    console.dir(month);
    console.log(mtgt_values);
    xhr = new XMLHttpRequest();
    xhr.open('POST', './serv/subyeartarget.php');
    xhr.onload = function (resp) {
        console.log(resp);
    }
    xhr.send(JSON.stringify({
        month: month,
        values: JSON.stringify(mtgt_values)
    }));
}
)

document.querySelector('#yfetch').addEventListener('click', function () {
    const month = document.querySelector('#year').value.toString();
    xhr = new XMLHttpRequest();
    xhr.open('POST', './serv/getyeartarget.php');
    xhr.send(JSON.stringify({ month: month }));
    xhr.onload = function () {
        if (xhr.readyState == 4) {
            const rs = this.responseText;
            const a = rs.indexOf("#[");
            const b = rs.indexOf(']#');
            const res = rs.slice(a + 1, b + 1);
            const data = JSON.parse(JSON.parse(res)[0].tgtvalues);
            for (x of Object.keys(data)) {
                document.querySelector('#' + x).value = data[x];
            }
        }
    }
});