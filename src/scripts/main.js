const dataEvento = new Date("Nov 16, 2023 19:00:00");
const timeStampEvento = dataEvento.getTime();

const contaHoras = setInterval(function () {
  const agora = new Date();
  const timeStampAtual = agora.getTime();

  const intervaloAteEvento = timeStampEvento - timeStampAtual;

  const diaEmMs = 1000 * 60 * 60 * 24;
  const horaEmMs = 1000 * 60 * 60;
  const minutoEmMs = 1000 * 60;

  const diasAteEvento = Math.floor(intervaloAteEvento / diaEmMs);
  const horasAteEvento = Math.floor((intervaloAteEvento % diaEmMs) / horaEmMs);
  const minutosAteEvento = Math.floor(
    (intervaloAteEvento % horaEmMs) / minutoEmMs
  );
  const segundoAteEvento = Math.floor((intervaloAteEvento % minutoEmMs) / 1000);

  document.getElementById(
    "contador"
  ).innerHTML = `${diasAteEvento}d ${horasAteEvento}h ${minutosAteEvento}m ${segundoAteEvento}s`;

  if (intervaloAteEvento < 0) {
    clearInterval(contaHoras);

    document.getElementById("contador").innerHTML = `Já acabou!`;
  }
}, 1000);
