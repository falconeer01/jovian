import * as THREE from 'three';
import { TextureLoader } from 'three';
import {OrbitControls} from '../node_modules/three/examples/jsm/controls/OrbitControls.js';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    90, 
    window.innerWidth / window.innerHeight, 
    1, 
    1000
);
camera.position.z=40;
camera.position.y=40;
camera.position.x=70;

const renderer = new THREE.WebGLRenderer(
    {
        antialias: true
    }
);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);



//ışık
const light = new THREE.PointLight(0xFFFFFF, 1, 10000);
light.position.set(8,30,30);
scene.add(light);
// const sphereSize = 1;
// const pointLightHelper = new THREE.PointLightHelper( light, sphereSize );
// scene.add( pointLightHelper );

//responsive canvas
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
})

//Jupiter
const jupGeo = new THREE.SphereGeometry(8);
const jupTexture = new THREE.TextureLoader().load('jupTexture.jpg');
const jupMat = new THREE.MeshStandardMaterial(
    {
        map: jupTexture
    }
);
const jupMesh = new THREE.Mesh(jupGeo, jupMat);
jupMesh.name = 'learnAbout';
const jovianSystem = new THREE.Group();jovianSystem.add(jupMesh);
scene.add(jovianSystem);

//Io
const ioGeo = new THREE.SphereGeometry(4);
const ioTexture = new THREE.TextureLoader().load('ioTexture.jpg')
const ioMat = new THREE.MeshStandardMaterial(
    {
        map: ioTexture
    }
);
const ioMesh = new THREE.Mesh(ioGeo, ioMat);
ioMesh.name = 'aboutMe';
const ioSystem = new THREE.Group();
ioMesh.position.set(16,0,0);
ioSystem.add(ioMesh);
jovianSystem.add(ioSystem);

//Europa
const europaGeo = new THREE.SphereGeometry(3);
const europaTexture = new THREE.TextureLoader().load('europaTexture.jpg')
const europaMat = new THREE.MeshStandardMaterial(
    {
        map: europaTexture
    }
);
const europaMesh = new THREE.Mesh(europaGeo, europaMat);
europaMesh.name = 'resume';
const europaSystem = new THREE.Group;
europaMesh.position.set(32,0,0);
europaSystem.add(europaMesh);
jovianSystem.add(europaSystem);

//Ganymede
const ganymedeGeo = new THREE.SphereGeometry(6);
const ganymedeTexture = new THREE.TextureLoader().load('ganymedeTexture.jpg')
const ganymedeMat = new THREE.MeshStandardMaterial(
    {
        map: ganymedeTexture
    }
);
const ganymedeMesh = new THREE.Mesh(ganymedeGeo, ganymedeMat);
ganymedeMesh.name = 'portfolio';
const ganymedeSystem = new THREE.Group();
ganymedeMesh.position.set(48,0,0);
ganymedeSystem.add(ganymedeMesh);
jovianSystem.add(ganymedeSystem);

//Callisto
const callistoGeo = new THREE.SphereGeometry(5);
const callistoTexture = new THREE.TextureLoader().load('callistoTexture.webp')
const callistoMat = new THREE.MeshStandardMaterial(
    {
        map: callistoTexture
    }
);
const callistoMesh = new THREE.Mesh(callistoGeo, callistoMat);
callistoMesh.name = 'contactMe';
const callistoSystem = new THREE.Group();
callistoMesh.position.set(64,0,0);
callistoSystem.add(callistoMesh);
jovianSystem.add(callistoSystem);

//loadingScreen?
// function loadModel() {

//     object.traverse( function ( child ) {

//         if ( child.isMesh ) child.material.map = first;
//         if ( child.isMesh ) child.material.map = second;
//         if ( child.isMesh ) child.material.map = third;
//         if ( child.isMesh ) child.material.map = fourth;
//         if ( child.isMesh ) child.material.map = fifth;

//     } );

//     scene.add( object );

// }
// const manager = new THREE.LoadingManager(loadModel);
// const loader = new THREE.TextureLoader( manager );
// const first = loader.load('callistoTexture.webp');
// const second = loader.load('europaTexture.jpg');
// const third = loader.load('ganymedeTexture.jpg');
// const fourth = loader.load('ioTexture.jpg');
// const fifth = loader.load('jupTexture.jpg');

// const pbc = document.getElementById("container");

// manager.onProgress = function (url, itemsLoaded, itemsTotal) {
// 	var bar = new ProgressBar.Circle(pbc, {
//     color: '#aaa',
//     // This has to be the same size as the maximum width to
//     // prevent clipping
//     strokeWidth: 6,
//     trailWidth: 3,
//     easing: 'easeInOut',
//     duration: (itemsLoaded/itemsTotal)*100,
//     text: {
//         autoStyleContainer: false
//     },
//     from: { color: '#ff00ff', width: 1 },
//     to: { color: '#0000ff', width: 4 },
//     // Set default step function for all animate calls
//     step: function(state, circle) {
//         circle.path.setAttribute('stroke', state.color);
//         circle.path.setAttribute('stroke-width', state.width);
          
//         var value = Math.round(circle.value() * 100);
//         if (value === 100) {
//         circle.setText('Loaded');
//         } else {
//         circle.setText(value);
//         }
          
//     }
//     });
//     bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
//     bar.text.style.fontSize = '2rem';
          
//     bar.animate(1.0);  // Number from 0.0 to 1.0
// };

// manager.onLoad = function ( url, itemsLoaded, itemsTotal ) {
// 	console.log(`Started loading file: ${url} \nloaded ${itemsLoaded} of ${itemsTotal}`);
// };

// manager.onError = function ( url ) {
// 	document.write(`${url} loading failed.`);
// };

//Yıldız ekleme fonksiyonu
function addStar(){
    const geometry = new THREE.SphereGeometry(0.1);
    const material = new THREE.MeshBasicMaterial(
      {
        color: 0xffffff
      }
    )
    const star = new THREE.Mesh(geometry, material);
    const[x,y,z] = Array(3).fill().map(()=>THREE.MathUtils.randFloatSpread(400));
  
    star.position.set(x,y,z);
    scene.add(star)
  }
  
  Array(1000).fill().forEach(addStar)

  //Onclick fonksiyonlar

  //LearnAbout-Jupiter
  let acikmij = false;
  const mmij = new MouseMeshInteraction(scene, camera);
  mmij.addHandler('learnAbout', 'click', function(loopoglu){
    if(acikmij){
        acikmij=false;
        document.getElementById("offcanvasAboutMe").className = "offcanvas offcanvas-start show";
        document.getElementById("offcanvasAboutMe").className = "offcanvas offcanvas-start show hiding";
    }
    else if(!acikmij){
        acikmij=true;
        document.getElementById("offcanvasAboutMe").className = "offcanvas offcanvas-start";
        document.getElementById("offcanvasAboutMe").className = "offcanvas offcanvas-start showing";
        document.getElementById("offcanvasAboutMe").className = "offcanvas offcanvas-start show";

        document.getElementById("offcanvasPortfolio").className = "offcanvas offcanvas-start hiding";
        document.getElementById("offcanvasResume").className = "offcanvas offcanvas-start hiding";
        document.getElementById("offcanvasContact").className = "offcanvas offcanvas-bottom hiding";

    }
  });

  //Aboutme-Io
  let acikmi = false;
  const mmi = new MouseMeshInteraction(scene, camera);
  mmi.addHandler('aboutMe', 'click', function(loopoglu){
    new WOW().init();
    if(acikmi){
        acikmi=false;
        document.getElementById("offcanvasAboutMe").className = "offcanvas offcanvas-start show";
        document.getElementById("offcanvasAboutMe").className = "offcanvas offcanvas-start show hiding";
    }
    else if(!acikmi){
        acikmi=true;
        document.getElementById("offcanvasAboutMe").className = "offcanvas offcanvas-start";
        document.getElementById("offcanvasAboutMe").className = "offcanvas offcanvas-start showing";
        document.getElementById("offcanvasAboutMe").className = "offcanvas offcanvas-start show";

        document.getElementById("offcanvasPortfolio").className = "offcanvas offcanvas-start hiding";
        document.getElementById("offcanvasResume").className = "offcanvas offcanvas-start hiding";
        document.getElementById("offcanvasContact").className = "offcanvas offcanvas-bottom hiding";

    }
  });

  //Resume-Europa
  let acikmi2 =  false;
    const mmi2 = new MouseMeshInteraction(scene, camera);
    mmi2.addHandler('resume', 'click', function(loopoglu){
    if(acikmi2){
        acikmi2=false;
        document.getElementById("offcanvasResume").className = "offcanvas offcanvas-start show";
        document.getElementById("offcanvasResume").className = "offcanvas offcanvas-start show hiding";
    }
    else if(!acikmi2){
        acikmi2=true;
        document.getElementById("offcanvasResume").className = "offcanvas offcanvas-start";
        document.getElementById("offcanvasResume").className = "offcanvas offcanvas-start showing";
        document.getElementById("offcanvasResume").className = "offcanvas offcanvas-start show";

        document.getElementById("offcanvasPortfolio").className = "offcanvas offcanvas-start hiding";
        document.getElementById("offcanvasAboutMe").className = "offcanvas offcanvas-start hiding";
        document.getElementById("offcanvasContact").className = "offcanvas offcanvas-bottom hiding";

    }
    });

    //Portfolio-Ganymede
    let acikmi3 =  false;
    const mmi3 = new MouseMeshInteraction(scene, camera);
    mmi3.addHandler('portfolio', 'click', function(loopoglu){
    if(acikmi3){
        acikmi3=false;
        document.getElementById("offcanvasPortfolio").className = "offcanvas offcanvas-start show";
        document.getElementById("offcanvasPortfolio").className = "offcanvas offcanvas-start show hiding";
    }
    else if(!acikmi3){
        acikmi3=true;
        document.getElementById("offcanvasPortfolio").className = "offcanvas offcanvas-start";
        document.getElementById("offcanvasPortfolio").className = "offcanvas offcanvas-start showing";
        document.getElementById("offcanvasPortfolio").className = "offcanvas offcanvas-start show";

        document.getElementById("offcanvasResume").className = "offcanvas offcanvas-start hiding";
        document.getElementById("offcanvasAboutMe").className = "offcanvas offcanvas-start hiding";
        document.getElementById("offcanvasContact").className = "offcanvas offcanvas-bottom hiding";
    }
    });

    //Contactme-Callisto
    let acikmi4 = false;
    const mmi4 = new MouseMeshInteraction(scene, camera);
    mmi.addHandler('contactMe', 'click', function(loopoglu){
    if(acikmi4){
        acikmi4=false;
        document.getElementById("offcanvasContact").className = "offcanvas offcanvas-bottom show";
        document.getElementById("offcanvasContact").className = "offcanvas offcanvas-bottom show hiding";
    }
    else if(!acikmi4){
        acikmi4=true;
        document.getElementById("offcanvasContact").className = "offcanvas offcanvas-bottom";
        document.getElementById("offcanvasContact").className = "offcanvas offcanvas-bottom showing";
        document.getElementById("offcanvasContact").className = "offcanvas offcanvas-bottom show";

        document.getElementById("offcanvasPortfolio").className = "offcanvas offcanvas-start hiding";
        document.getElementById("offcanvasResume").className = "offcanvas offcanvas-start hiding";
        document.getElementById("offcanvasAboutMe").className = "offcanvas offcanvas-start hiding";
    }
    });

//shooting star olur gibi
function randomShootingStar(){
    const shootingStarGeo = new THREE.SphereGeometry(10);
    const shootingStarMat = new THREE.MeshBasicMaterial(
        {
            color: 0xfff000
        }
    );
    const shootingStar = new THREE.Mesh(shootingStarGeo, shootingStarMat);
    shootingStar.position.x = 1;
    // shootingStar.position.set(x,y,z);
    scene.add(shootingStar);
    console.log("arfaef")
}

function shootingStarTimer(){
    let d = new Date();
    let seconds = d.getSeconds();

    if(seconds % 3 == 0){
        randomShootingStar();
        console.log("asdfdf");
    }
}
shootingStarTimer();







const EART_YEAR = 2*Math.PI*(1/60)*(1/60);
const animate = () => {
    jupMesh.rotation.y += 0.001;
    ioMesh.rotation.y += 0.01;
    europaMesh.rotation.y += 0.01;
    ganymedeMesh.rotation.y += 0.01;
    callistoMesh.rotation.y += 0.01;

    ioSystem.rotation.y += EART_YEAR * 4;
    europaSystem.rotation.y += EART_YEAR * 2;
    ganymedeSystem.rotation.y += EART_YEAR;
    callistoSystem.rotation.y += EART_YEAR * 0.5;

    mmi.update();
    mmi2.update();
    mmi3.update();
    mmi4.update();

    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();