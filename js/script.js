const $video = document.querySelector('#video');
const $play = document.querySelector('#play');
const $pause = document.querySelector('#pause');
const $backward = document.querySelector('#backward');
const $forward = document.querySelector('#forward');
const $progress = document.querySelector('#progress');

$play.addEventListener('click', handlePlay);
$pause.addEventListener('click', handlePause);
$backward.addEventListener('click', handlebackward);
$forward.addEventListener('click', handleforward);
$video.addEventListener('loadedmetadata', handleLoaded);
$video.addEventListener('timeupdate', handleTimeUpdate);
$progress.addEventListener('input', handleInput);

function handlePlay() {
    $video.play();
    $play.hidden = true;
    $pause.hidden = false;
    console.log('Reproduciendo');
}

function handlePause() {
    $video.pause();
    $play.hidden = false;
    $pause.hidden = true;
    console.log('Detenido');
}

function handlebackward() {
    $video.currentTime = $video.currentTime - 10;
    console.log('atras 10 sg')
}

function handleforward() {
    //$video.currentTime = $video.currentTime + 10;
    $video.currentTime += 10;
    console.log('adelante 10 sg')
}

function handleLoaded() {
    $progress.max = $video.duration;1
    console.log('cargando')
}

function handleTimeUpdate(){
    $progress.value = $video.currentTime;
    // console.log('Tiempo actual', $video.currentTime);
}

function handleInput(){
    $video.currentTime = $progress.value;
    console.log($progress.value)
}

