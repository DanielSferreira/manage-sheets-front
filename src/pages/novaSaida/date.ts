const d = new Date();

function addZero(i: any):string {
  if (parseInt(i) < 10) {
    i = "0" + i;
  }
  return i;
}

function hora() {
  let h = addZero(d.getHours());
  let m = addZero(d.getMinutes());
  return h + ":" + m;
}

function data() {
  return d.toLocaleDateString('en-GB')
}

export const dt = {
  data:data(),
  hora:hora()
}
