// only loads video background on desktop
const source = '<source src="https://player.vimeo.com/external/178812339.hd.mp4?s=bf1db383854643d8d92aac96a5bca01802122d46&profile_id=174" type="video/mp4">';
if (window.innerWidth > 650) {
  document.querySelector('.video-background').innerHTML = source
}