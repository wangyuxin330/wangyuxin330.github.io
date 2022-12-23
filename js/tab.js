//王钰鑫 2022-11-14
let t=document.querySelectorAll(".tab");
for(var i=0;i<t.length;i++){
    tabs(t[i]);
}

function tabs(tab) {
    var tt = tab.getElementsByClassName("tt")[0];
    var span = tt.querySelectorAll("span");
    var tc = tab.getElementsByClassName("tc");
    console.log(tab, tt, span, tc);

    for (let i = 0; i < span.length; i++) {
        span[i].index = i;
        span[i].onmouseover = function () {
            for (let j = 0; j < span.length; j++) {
                span[j].classList.remove("cur");
                tc[j].style.display = "none";
            }
            this.classList.add("cur");
            /* this表示正在操作的span. */
            // 另一种写法，let变量：span[i].classList.add("cur")
            //tc[i].style.display="block";
            tc[this.index].style.display = "block";
        }
    }
}
let d=document.querySelectorAll(".dtab");
for(var w=0;w<d.length;w++){
    dtabs(d[w]);
}
function dtabs(dtab){
    var dtt = dtab.getElementsByClassName("dtt")[0];
    var span = dtt.querySelectorAll("span");
    var dtc = dtab.getElementsByClassName("dtc");
    console.log(dtab, dtt, span, dtc);
    for (let w = 0; w < span.length; w++) {
        span[w].index = w;
        span[w].onmouseover = function () {
            for (let y = 0; y < span.length; y++) {
                span[y].classList.remove("cur");
                dtc[y].style.display = "none";
            }
            this.classList.add("cur");
            /* this表示正在操作的span. */
            // 另一种写法，let变量：span[i].classList.add("cur")
            //tc[i].style.display="block";
            dtc[this.index].style.display = "block";
        }
    }
}